declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export = classes;
  }

  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.svg"{
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG
  }

declare const __IS_DEV__:boolean;

// declare module '@jest/expect' {
//   export interface Matchers<R extends void | Promise<void>>
//     extends TestingLibraryMatchers<
//       ReturnType<typeof expect.stringContaining>,
//       R
//     > {}
// }