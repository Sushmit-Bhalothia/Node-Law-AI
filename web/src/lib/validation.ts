/* Simple form validation helpers. */

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export type Errors = Record<string, string>;

/** Waits briefly to simulate sending a form (remove when a real backend is connected). */
export const fakeSubmit = () => new Promise((resolve) => setTimeout(resolve, 900));
