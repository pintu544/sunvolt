"use client";

import { setValue, setErrors, submitSuccess } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Reveal } from "./ui";

const COUNTRIES = ["India", "United States", "Germany", "Australia", "Brazil", "Other"];
const INDUSTRIES = ["Residential", "Commercial & Industrial", "Utility", "Installer / EPC", "Distributor", "Other"];

export default function ContactForm({ id, heading }: { id: string; heading: string }) {
  const dispatch = useAppDispatch();
  const { values, errors, status } = useAppSelector((s) => s.form);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.firstName?.trim()) errs.firstName = "First Name is required";
    if (!values.lastName?.trim()) errs.lastName = "Last Name is required";
    if (!values.email?.trim()) errs.email = "Email is required";
    if (!values.phone?.trim()) errs.phone = "Phone is required";
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
    `w-full border-b bg-transparent px-0 py-3 text-body text-ink outline-none transition-colors placeholder:text-gray-2/50 ${
      errors[name] ? "border-red-500" : "border-divider focus:border-primary"
    }`;

  const labelCls = "mb-1 block text-body text-ink";
  void heading;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-[3%] py-[clamp(4rem,6vw,7rem)] lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <h2
            className="font-light uppercase leading-[1.15] tracking-[0.06em] text-gray-1"
            style={{ fontSize: "clamp(48px, 4.2vw, 80px)" }}
          >
            Contact
            <br />
            Us
          </h2>
        </Reveal>

        <div>
          {status === "success" ? (
            <Reveal className="rounded-[8px] bg-[#fafafa] p-12 text-center">
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
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-8">
                  <label htmlFor={`${id}-industry`} className={labelCls}>
                    Which best describes you?
                  </label>
                  <select
                    id={`${id}-industry`}
                    value={values.industry ?? ""}
                    onChange={(e) => dispatch(setValue({ field: "industry", value: e.target.value }))}
                    className={inputCls("industry")}
                  >
                    <option value="">Select your Role</option>
                    {INDUSTRIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {errors.industry && <p className="mt-1.5 text-small text-red-500">{errors.industry}</p>}
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor={`${id}-firstName`} className={labelCls}>
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id={`${id}-firstName`}
                      type="text"
                      value={values.firstName ?? ""}
                      onChange={(e) => dispatch(setValue({ field: "firstName", value: e.target.value }))}
                      className={inputCls("firstName")}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="mt-1.5 text-small text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${id}-lastName`} className={labelCls}>
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id={`${id}-lastName`}
                      type="text"
                      value={values.lastName ?? ""}
                      onChange={(e) => dispatch(setValue({ field: "lastName", value: e.target.value }))}
                      className={inputCls("lastName")}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="mt-1.5 text-small text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor={`${id}-email`} className={labelCls}>
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id={`${id}-email`}
                      type="email"
                      value={values.email ?? ""}
                      onChange={(e) => dispatch(setValue({ field: "email", value: e.target.value }))}
                      className={inputCls("email")}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1.5 text-small text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${id}-phone`} className={labelCls}>
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      id={`${id}-phone`}
                      type="tel"
                      value={values.phone ?? ""}
                      onChange={(e) => dispatch(setValue({ field: "phone", value: e.target.value }))}
                      className={inputCls("phone")}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="mt-1.5 text-small text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mt-8">
                  <label htmlFor={`${id}-country`} className={labelCls}>
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
                <div className="mt-8">
                  <label htmlFor={`${id}-company`} className={labelCls}>
                    Company Name
                  </label>
                  <input
                    id={`${id}-company`}
                    type="text"
                    value={values.company ?? ""}
                    onChange={(e) => dispatch(setValue({ field: "company", value: e.target.value }))}
                    className={inputCls("company")}
                    placeholder="Company Name"
                  />
                </div>
                <div className="mt-8">
                  <label htmlFor={`${id}-message`} className={labelCls}>
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id={`${id}-message`}
                    rows={4}
                    value={values.message ?? ""}
                    onChange={(e) => dispatch(setValue({ field: "message", value: e.target.value }))}
                    className={inputCls("message")}
                    placeholder="Tell us about your project requirements"
                  />
                  {errors.message && <p className="mt-1.5 text-small text-red-500">{errors.message}</p>}
                </div>
                <label className="mt-8 flex items-start gap-3 text-small text-gray-2">
                  <input
                    type="checkbox"
                    checked={values.subscribe === "yes"}
                    onChange={(e) => dispatch(setValue({ field: "subscribe", value: e.target.checked ? "yes" : "" }))}
                    className="mt-1 h-4 w-4 accent-[#ff7900]"
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
      </div>
    </section>
  );
}
