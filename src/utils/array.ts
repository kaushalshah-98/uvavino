export const range = (from: number, to: number, step = 1) => {
  const rangee = [];
  for (let i = from; i <= to; i += step) {
    rangee.push(i);
  }
  return rangee;
};
