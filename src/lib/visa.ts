import type { CountryVisaData, NationalityVisaConfig } from "@/types/visa";

export function normalizeVisaKey(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function resolveVisaConfig(
  data: CountryVisaData,
  nationality?: string
): NationalityVisaConfig | null {
  const normalizedNationality = nationality
    ? normalizeVisaKey(nationality)
    : "";

  if (normalizedNationality && data.byNationality?.[normalizedNationality]) {
    return data.byNationality[normalizedNationality];
  }

  return data.fallback ?? null;
}