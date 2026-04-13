import { notFound } from "next/navigation";
import { visaRequirements } from "@/data/visa-requirements";
import VisaRequirementsPage from "@/components/visa/VisaRequirementsPage";

type PageProps = {
  params: Promise<{
    country: string;
  }>;
  searchParams: Promise<{
    nationality?: string;
  }>;
};

export default async function Page({ params, searchParams }: PageProps) {
  const { country } = await params;
  const { nationality } = await searchParams;

  const data = visaRequirements[country];

  if (!data) {
    notFound();
  }

  return <VisaRequirementsPage data={data} nationality={nationality || ""} />;
}