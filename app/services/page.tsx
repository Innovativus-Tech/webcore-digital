import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";
import { servicesPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
