import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "DoraPilot — DORA compliance for ICT vendors and small EU banks",
  description:
    "Reply to your bank's DORA assessment in 2 hours, not 60. Generate Register of Information files in xBRL-CSV. Built for SaaS vendors and SME financial entities in the EU.",
  alternates: { canonical: "/" },
  keywords: [
    "DORA",
    "DORA compliance",
    "EU 2022/2554",
    "Digital Operational Resilience Act",
    "Article 30",
    "Register of Information",
    "xBRL-CSV",
    "vendor questionnaire",
    "ICT third-party risk",
    "EU financial entities",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
