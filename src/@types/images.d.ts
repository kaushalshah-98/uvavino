declare module '*.png';

declare module '*.svg' {
  const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  export default content;
}
