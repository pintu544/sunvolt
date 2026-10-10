import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ---------- ui: mobile menu, chatbot ---------- */
const uiSlice = createSlice({
  name: "ui",
  initialState: { mobileMenuOpen: false, chatOpen: false },
  reducers: {
    toggleMobileMenu: (s) => {
      s.mobileMenuOpen = !s.mobileMenuOpen;
    },
    closeMobileMenu: (s) => {
      s.mobileMenuOpen = false;
    },
    toggleChat: (s) => {
      s.chatOpen = !s.chatOpen;
    },
  },
});

/* ---------- carousel: per-instance index ---------- */
const carouselSlice = createSlice({
  name: "carousel",
  initialState: {} as Record<string, number>,
  reducers: {
    goTo: (s, a: PayloadAction<{ id: string; index: number }>) => {
      s[a.payload.id] = a.payload.index;
    },
    next: (s, a: PayloadAction<{ id: string; count: number }>) => {
      const cur = s[a.payload.id] ?? 0;
      s[a.payload.id] = (cur + 1) % a.payload.count;
    },
    prev: (s, a: PayloadAction<{ id: string; count: number }>) => {
      const cur = s[a.payload.id] ?? 0;
      s[a.payload.id] = (cur - 1 + a.payload.count) % a.payload.count;
    },
  },
});

/* ---------- tabs: per-instance active tab ---------- */
const tabsSlice = createSlice({
  name: "tabs",
  initialState: {} as Record<string, number>,
  reducers: {
    selectTab: (s, a: PayloadAction<{ id: string; index: number }>) => {
      s[a.payload.id] = a.payload.index;
    },
  },
});

/* ---------- accordion: per-instance open index (null = none) ---------- */
const accordionSlice = createSlice({
  name: "accordion",
  initialState: {} as Record<string, number | null>,
  reducers: {
    toggleItem: (s, a: PayloadAction<{ id: string; index: number }>) => {
      const cur = s[a.payload.id] ?? 0;
      s[a.payload.id] = cur === a.payload.index ? null : a.payload.index;
    },
  },
});

/* ---------- form: contact form state ---------- */
interface FormState {
  values: Record<string, string>;
  errors: Record<string, string>;
  status: "idle" | "success";
}
const formSlice = createSlice({
  name: "form",
  initialState: { values: {}, errors: {}, status: "idle" } as FormState,
  reducers: {
    setValue: (s, a: PayloadAction<{ field: string; value: string }>) => {
      s.values[a.payload.field] = a.payload.value;
      delete s.errors[a.payload.field];
    },
    setErrors: (s, a: PayloadAction<Record<string, string>>) => {
      s.errors = a.payload;
    },
    submitSuccess: (s) => {
      s.status = "success";
    },
    resetForm: (s) => {
      s.values = {};
      s.errors = {};
      s.status = "idle";
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, toggleChat } = uiSlice.actions;
export const { goTo, next, prev } = carouselSlice.actions;
export const { selectTab } = tabsSlice.actions;
export const { toggleItem } = accordionSlice.actions;
export const { setValue, setErrors, submitSuccess, resetForm } = formSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    carousel: carouselSlice.reducer,
    tabs: tabsSlice.reducer,
    accordion: accordionSlice.reducer,
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
