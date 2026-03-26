/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module "@11ty/eleventy-fetch";

declare namespace CSS {
    namespace paintWorklet {
        export function addModule(url: string): void;
    }
}
