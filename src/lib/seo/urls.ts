export const ORIGIN = "https://mahalaxmi.beauty";

export const OLD_ORIGIN = "https://mahalaxmi-beauty-parlour.vercel.app";

export function siteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${ORIGIN}${normalized}`;
}

export function absolutePath(path: string, origin = ORIGIN): string {
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
