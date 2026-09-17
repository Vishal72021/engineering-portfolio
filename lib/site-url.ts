const PRODUCTION_SITE_URL = "https://vishaltripathy.dev";

export function getSiteUrl(): URL {
  if (process.env.NODE_ENV === "production") {
    return new URL(PRODUCTION_SITE_URL);
  }

  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
}

export function getSiteUrlString(): string {
  return getSiteUrl().toString().replace(/\/$/, "");
}

export function isProductionDeployment(): boolean {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  return process.env.NODE_ENV === "production";
}
