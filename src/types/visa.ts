export type VisaRequirementItem = {
  label: string;
  value: string;
};

export type VisaSection = {
  title: string;
  processingTime?: string;
  validity?: string;
  stayDuration?: string;
  entries?: string;
  requirements: VisaRequirementItem[];
  notes?: string[];
};

export type NationalityVisaConfig = {
  eVisa?: VisaSection;
  visitVisa?: VisaSection;
};

export type CountryVisaData = {
  slug: string;
  countryName: string;
  heroTitle: string;
  heroDescription?: string;
  byNationality?: Record<string, NationalityVisaConfig>;
  fallback?: NationalityVisaConfig;
};

export type VisaDataMap = Record<string, CountryVisaData>;