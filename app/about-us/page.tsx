import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";
import { aboutPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  return <AboutPageClient />;
}
