import { CheckCircle2 } from "lucide-react";

type Props = {
  label: string;
  value: string;
};

export default function RequirementCard({ label, value }: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-100">
          <CheckCircle2 className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-base font-bold tracking-tight text-slate-950">
            {label}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
        </div>
      </div>
    </div>
  );
}