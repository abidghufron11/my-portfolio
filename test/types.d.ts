/* Lightweight ambient declarations to allow local typechecking of tests
   without installing devDependencies (vitest, @testing-library/react).

   This file declares minimal shapes for the modules/globals referenced
   by the test files so TypeScript won't error while you decide how to
   install or pin test dependencies.
*/

declare module 'vitest/config' {
  // minimal shape used by vitest config import
  export function defineConfig(config: any): any
}

declare module '@testing-library/react' {
  export function render(...args: any[]): any
  export const screen: any
  export const fireEvent: any
  const _default: any
  export default _default
}

// Basic test globals used by common test runners (describe/it/expect)
declare const describe: any
declare const it: any
declare const test: any
declare const beforeEach: any
declare const afterEach: any
declare const expect: any

export {}
