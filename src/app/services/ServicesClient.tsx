"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  FileText,
  Globe2,
  ShieldCheck,
  Users,
  Clock3,
  Plane,
  Building2,
  HeartHandshake,
  BadgeCheck,
  Sparkles,
  MapPinned,
  Laptop,
  Building,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const visitVisaServices = [
  {
    title: "Tourist Visa Assistance",
    description:
      "Get clearer support for tourist visa applications with destination-based guidance, document preparation help, and a smoother process from Qatar.",
    icon: Plane,
  },
  {
    title: "Family Visit Visa Support",
    description:
      "Prepare family visit visa applications with better clarity on required documents, travel purpose, and the right next steps before submission.",
    icon: HeartHandshake,
  },
  {
    title: "Business Visit Visa Guidance",
    description:
      "Professional support for business travel visas with structured requirement guidance, document planning, and a more organized application journey.",
    icon: Building2,
  },
  {
    title: "Schengen Visa Support",
    description:
      "Premium support for Schengen visa applications from Qatar with stronger preparation, document guidance, and a clearer service flow.",
    icon: MapPinned,
  },
];

const workVisaServices = [
  {
    title: "Work Visa Application Support",
    description:
      "Understand the work visa process with clearer requirement guidance, document planning, and a more confident preparation path.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Employment Visa Documentation",
    description:
      "Get support for employment-related documents, submission readiness, and the preparation steps needed for a stronger visa application.",
    icon: FileText,
  },
  {
    title: "Country-Specific Work Visa Guidance",
    description:
      "Explore work visa requirements by destination with more clarity on what to prepare before moving forward.",
    icon: Globe2,
  },
  {
    title: "Work Permit Process Support",
    description:
      "Make the work permit process easier to understand with structured support around essential documents and preparation.",
    icon: BadgeCheck,
  },
];

const serviceOptions = [
  {
    title: "Fully online",
    description: "Apply from home and pay online",
    icon: Laptop,
  },
  {
    title: "Visit our office",
    description: "Get in-person support from our team",
    icon: Building,
  },
  {
    title: "Doorstep service",
    description: "Get service at your location",
    icon: Home,
  },
];

const processSteps = [
  {
    title: "Choose your visa service",
    description:
      "Select the visa route that matches your travel or work purpose more clearly.",
    icon: Globe2,
  },
  {
    title: "Check required documents",
    description:
      "Review likely requirements and understand what needs to be prepared.",
    icon: FileCheck2,
  },
  {
    title: "Prepare with confidence",
    description:
      "Organize your visa documents with a more structured and less confusing process.",
    icon: ShieldCheck,
  },
  {
    title: "Move to the next step",
    description:
      "Continue through the homepage or contact page for the support that fits your case.",
    icon: Users,
  },
];

const faqs = [
  {
    question: "What visa services does Visa Slide provide?",
    answer:
      "Visa Slide provides support for tourist visa, family visit visa, business visit visa, Schengen visa, work visa, and work permit preparation with a clearer and more organized process.",
  },
  {
    question: "Do you support visa applications from Qatar?",
    answer:
      "Yes. Visa Slide is designed for users in Qatar who want clearer support for visit visa and work visa preparation, including requirements, documents, and next-step guidance.",
  },
  {
    question: "Can I contact your team directly?",
    answer:
      "Yes. If you want to continue with support, you can move through the homepage or reach out through the contact page.",
  },
  {
    question: "Why choose Visa Slide?",
    answer:
      "Visa Slide focuses on clarity, premium presentation, and a smoother visa service experience so applicants can understand their path and prepare with more confidence.",
  },
];

function SectionHeading({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </div>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  tone = "sky",
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  tone?: "sky" | "emerald";
}) {
  const styles =
    tone === "sky"
      ? {
          wrap: "border-sky-100 bg-white hover:border-sky-200",
          glow: "from-sky-100/80 via-blue-50/70 to-transparent",
          iconWrap: "border-sky-100 bg-sky-50 text-sky-700",
          chip: "border-sky-100 bg-sky-50 text-sky-700",
        }
      : {
          wrap: "border-emerald-100 bg-white hover:border-emerald-200",
          glow: "from-emerald-100/80 via-teal-50/70 to-transparent",
          iconWrap: "border-emerald-100 bg-emerald-50 text-emerald-700",
          chip: "border-emerald-100 bg-emerald-50 text-emerald-700",
        };

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_12px_35px_rgba(14,165,233,0.06)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(16,185,129,0.08)] md:p-7 ${styles.wrap}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`inline-flex rounded-2xl border p-3 shadow-sm ${styles.iconWrap}`}
          >
            <Icon className="h-5 w-5" />
          </div>

          <div
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${styles.chip}`}
          >
            Service
          </div>
        </div>

        <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900 md:text-2xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-[26px] border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(14,165,233,0.08)]"
    >
      <div className="inline-flex rounded-2xl border border-sky-100 bg-sky-50 p-3 text-sky-700">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

function ProcessCard({
  icon: Icon,
  index,
  title,
  description,
}: {
  icon: React.ElementType;
  index: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-[26px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(16,185,129,0.08)]"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-black text-emerald-200">0{index}</span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900 md:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-[26px] border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_14px_36px_rgba(14,165,233,0.08)]"
    >
      <h3 className="text-lg font-bold text-slate-900">{question}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
        {answer}
      </p>
    </motion.div>
  );
}

export default function ServicesClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Visa Slide Services",
    description:
      "Visa Slide provides visa-related services from Qatar including tourist visa, family visit visa, business visa, Schengen visa, and work visa support.",
    areaServed: {
      "@type": "Country",
      name: "Qatar",
    },
    provider: {
      "@type": "Organization",
      name: "Visa Slide",
    },
    serviceType: [
      "Tourist Visa Assistance",
      "Family Visit Visa Support",
      "Business Visit Visa Guidance",
      "Schengen Visa Support",
      "Work Visa Application Support",
      "Work Permit Process Support",
    ],
  };

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-emerald-50/30 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_36%),radial-gradient(circle_at_right,#d1fae5_0%,transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f024_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f024_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Visa Services from Qatar
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                Professional visa services for{" "}
                <span className="bg-linear-to-r from-sky-700 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
                  visit and work visa
                </span>{" "}
                applicants
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Explore Visa Slide services for tourist visa, family visit visa,
                business visa, Schengen visa, and work visa support. Get clearer
                guidance, stronger preparation, and a smoother visa journey from
                Qatar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
                >
                  Start your application
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-6 py-4 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Contact us
                </Link>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Choose the service style that works best for you
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                {serviceOptions.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-sky-100 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(14,165,233,0.08)]"
                  >
                    <div className="inline-flex rounded-2xl border border-sky-100 bg-sky-50 p-3 text-sky-700">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-slate-900 md:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="rounded-[32px] border border-sky-100 bg-white p-4 shadow-[0_24px_70px_rgba(14,165,233,0.08)]"
            >
              <div className="rounded-[26px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50/50 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-sky-100 bg-sky-100 p-3 text-sky-700">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Why choose Visa Slide?
                    </h3>
                    <p className="text-sm text-slate-500">
                      Clearer structure, softer design, better experience.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Clear service categories for visit visa and work visa support",
                    "Better document guidance for smoother preparation",
                    "Blue, white, and emerald visual identity",
                    "Simple next-step flow through homepage and contact page",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                    Main Services
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Tourist Visa",
                      "Family Visit Visa",
                      "Business Visa",
                      "Schengen Visa",
                      "Work Visa",
                      "Work Permit",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Visa Support"
            title="Professional visa support designed with clarity and confidence."
            description="Visa Slide helps applicants understand visa requirements more easily, prepare documents more clearly, and choose the right visa support with less confusion."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Clock3}
              title="Save time"
              description="Reduce confusion with clearer service summaries and a more direct visa support path."
            />
            <FeatureCard
              icon={FileCheck2}
              title="Prepare better"
              description="Understand important visa documents and preparation steps before moving forward."
            />
            <FeatureCard
              icon={Users}
              title="Move with confidence"
              description="Choose the visa service that matches your travel or work purpose with more clarity."
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Visit Visa Services"
            title="Visit visa services for tourism, family travel, and business travel."
            description="Explore visit visa services with better structure, clearer wording, and a more premium presentation. These services help users in Qatar understand the visa route that best matches their travel purpose."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visitVisaServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                tone="sky"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Work Visa Services"
            title="Work visa and employment support with a clearer service flow."
            description="Visa Slide helps work visa applicants understand their route more clearly, prepare documents with more confidence, and move through the process with a softer and more organized experience."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {workVisaServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                tone="emerald"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="How It Works"
            title="A simpler visa service journey from the first step."
            description="From choosing the right visa support to preparing the required documents, Visa Slide is designed to make the process easier to understand and easier to continue."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.title}
                icon={step.icon}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Why Visa Slide"
            title="A premium visa experience using your brand colors."
            description="The layout is now built around blue, white, and emerald so the page feels cleaner, softer, and more aligned with a premium visa platform."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(14,165,233,0.08)] md:p-8"
            >
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Designed for real visa users
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Instead of feeling like a generic corporate page, this layout is
                built around what visa applicants actually need: clearer
                categories, better descriptions, relevant icons, and a simpler
                path to continue.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(16,185,129,0.08)] md:p-8"
            >
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Better SEO with cleaner service wording
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                The content repeats important search terms naturally, including
                visa services from Qatar, tourist visa, family visit visa,
                business visa, Schengen visa, work visa, and work permit
                support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="FAQ"
            title="Frequently asked questions about our visa services."
            description="Quick answers about visit visa and work visa support from Qatar."
          />

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <FaqCard
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-8 shadow-[0_20px_60px_rgba(14,165,233,0.08)] md:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                Visa Slide Services
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                Choose the right visa service and move forward with more
                clarity.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                Whether you need tourist visa support, family visit visa
                guidance, business visa assistance, Schengen visa help, or work
                visa preparation, Visa Slide helps make the path clearer.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
                >
                  Start your application
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-6 py-4 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Contact our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}