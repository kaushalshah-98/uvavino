export const JSONParse = <T>(text: string): T | null => {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
};
