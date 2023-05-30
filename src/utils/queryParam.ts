export const convertToQuery = <T = Record<string, unknown>>(obj: T) =>
  new URLSearchParams(obj as unknown as URLSearchParams).toString();
