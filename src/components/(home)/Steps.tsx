import { User, FileText, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { title: "Register", icon: User },
  { title: "Upload Docs", icon: FileText },
  { title: "Pay Fee", icon: CreditCard },
  { title: "Get E-Visa", icon: CheckCircle },
];

export default function Steps() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-md px-3 py-4 sm:px-4 sm:py-5 text-center"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Icon className="w-5 h-5 text-brand-sky" />
            </div>
            <p className="text-[11px] sm:text-sm font-bold text-white/85">
              {step.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}