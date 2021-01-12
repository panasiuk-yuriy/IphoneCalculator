export const numbers = [...Array(10).keys()].reverse().map(item => `${item}`);
numbers.splice(-1, 0, '.');

export const functions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};
