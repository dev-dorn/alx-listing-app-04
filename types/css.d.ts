// types/css.d.ts

declare module '*.css' {
  // Use a string literal type, which is safer than 'any' 
  // since CSS modules typically export an object mapping classes to strings.
  // For side-effect imports, this is sufficient to satisfy the type checker.
  const content: { [className: string]: string };
  export default content;
}