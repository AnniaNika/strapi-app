/**
 * Browser or Node.js
 * Check whether the code is running in the browser or node.js runtime.
 *
 * @see {@link https://github.com/flexdinesh/browser-or-node}
 */

/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
export const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const isWebWorker =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */
export const isJsDom =
  (typeof window !== "undefined" && window.name === "nodejs") ||
  (typeof navigator !== "undefined" &&
    (navigator.userAgent.includes("Node.js") ||
      navigator.userAgent.includes("jsdom")));

export const isDeno =
  typeof Deno !== "undefined" && typeof Deno.core !== "undefined";