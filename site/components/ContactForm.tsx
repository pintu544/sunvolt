"use client";

import { setValue, setErrors, submitSuccess } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Reveal, AccentBar } from "./ui";

const FIELDS = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "company", label: "Company Name", type: "text", required: false },
] as const;

const COUNTRIES = ["India", "United States", "Germany", "Australia", "Brazil", "Other"];
const INDUSTRIES = ["Residential", "Commercial & Industrial", "Utility", "Installer / EPC", "Distributor", "Other"];

export default function ContactForm({ id, heading }: { id: string; heading: string }) {
  const dispatch = useAppDispatch();
  const { values, errors, status } = useAppSelector((s) => s.form);

  const validate = () => {
    const errs: Record<string, string> = {};
    for (const f of FIELDS) {
      if (f.required && !values[f.name]?.trim()) errs[f.name] = `${f.label} is required`;
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Enter a valid email address";
    if (!values.country) errs.country = "Select a country";
    if (!values.industry) errs.industry = "Select an industry";
    if (!values.message?.trim()) errs.message = "Message is required";
    return errs;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      dispatch(setErrors(errs));
      return;
    }
    // Demo only — no backend. Wire to an API route before production use.
    dispatch(submitSuccess());
  };

  const inputCls = (name: string) =>
    `w-full rounded-[8px] border bg-white px-4 py-3.5 text-body text-ink outline-none transition-colors placeholder:text-gray-2/60 ${
      errors[name] ? "border-red-500" : "border-divider focus:border-primary"
    }`;

  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[900px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <AccentBar />
          <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">{heading}</h2>
        </Reveal>

        {status === "success" ? (
          <Reveal className="mt-10 rounded-[8px] bg-white p-12 text-center shadow-card">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-6 text-h3 font-medium text-ink">Thank you for reaching out</h3>
            <p className="mx-auto mt-3 max-w-[480px] text-body text-gray-2">
              Your enquiry has been received. Our team will get back to you within two business days.
            </p>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="mt-10 rounded-[8px] bg-white p-8 shadow-card md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.name}>
                    <label htmlFor={`${id}-${f.name}`} className="mb-2 block text-body font-medium text-ink">
                      {f.label} {f.required && <span className="text-primary">*</span>}
                    </label>
                    <input
                      id={`${id}-${f.name}`}
                      type={f.type}
                      value={values[f.name] ?? ""}
                      onChange={(e) => dispatch(setValue({ field: f.name, value: e.target.value }))}
                      className={inputCls(f.name)}
                      placeholder={f.label}
                    />
                    {errors[f.name] && <p className="mt-1.5 text-small text-red-500">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor={`${id}-country`} className="mb-2 block text-body font-medium text-ink">
                    Country <span className="text-primary">*</span>
                  </label>
                  <select
                    id={`${id}-country`}
                    value={values.country ?? ""}
                    onChange={(e) => dispatch(setValue({ field: "country", value: e.target.value }))}
                    className={inputCls("country")}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {errors.country && <p className="mt-1.5 text-small text-red-500">{errors.country}</p>}
                </div>
                <div>
                  <label htmlFor={`${id}-industry`} className="mb-2 block text-body font-medium text-ink">
                    Industry <span className="text-primary">*</span>
                  </label>
                  <select
                    id={`${id}-industry`}
                    value={values.industry ?? ""}
                    onChange={(e) => dispatch(setValue({ field: "industry", value: e.target.value }))}
                    className={inputCls("industry")}
                  >
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {errors.industry && <p className="mt-1.5 text-small text-red-500">{errors.industry}</p>}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor={`${id}-message`} className="mb-2 block text-body font-medium text-ink">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id={`${id}-message`}
                  rows={5}
                  value={values.message ?? ""}
                  onChange={(e) => dispatch(setValue({ field: "message", value: e.target.value }))}
                  className={inputCls("message")}
                  placeholder="Tell us about your project requirements"
                />
                {errors.message && <p className="mt-1.5 text-small text-red-500">{errors.message}</p>}
              </div>
              <label className="mt-6 flex items-start gap-3 text-small text-gray-2">
                <input
                  type="checkbox"
                  checked={values.subscribe === "yes"}
                  onChange={(e) =>
                    dispatch(setValue({ field: "subscribe", value: e.target.checked ? "yes" : "" }))
                  }
                  className="mt-1 h-4 w-4 accent-[#ff6a00]"
                />
                Keep me updated with product news and event invitations.
              </label>
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-pill bg-primary px-10 py-[18px] text-body-lg font-medium text-white transition-colors hover:bg-primary-dark md:w-auto md:min-w-[180px]"
                >
                  Submit Enquiry
                </button>
              </div>
              <p className="mt-4 text-small text-gray-2">
                By submitting, you agree to our Privacy Policy and consent to being contacted about your enquiry.
              </p>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
