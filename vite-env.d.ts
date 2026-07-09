/// <reference types="vite/client" />

import type { RevealValue } from "@/directives/reveal";

declare module "vue" {
  interface GlobalDirectives {
    vReveal: import("vue").Directive<HTMLElement, RevealValue>;
  }
}
