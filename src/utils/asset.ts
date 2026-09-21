// Vite rewrites `/public`-rooted asset paths inside index.html and CSS
// automatically to account for `base` in vite.config.ts, but it can't see
// inside plain JS string literals (e.g. <img src="/gallery/x.webp">) — those
// stay exactly as written. On a site hosted at the domain root that's fine,
// but this site is deployed under a subpath (a GitHub Pages project site),
// so every such path needs the base prepended manually. Use this helper
// anywhere an image path from `public/` is built as a JS string.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
