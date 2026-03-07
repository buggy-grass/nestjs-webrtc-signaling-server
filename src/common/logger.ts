export const logger = (...args: any[]) => {
  if (process.env.NODE_ENV == 'development') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    console.log(...args);
  }
};
