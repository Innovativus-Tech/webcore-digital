import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm, ContactInfo } from "@/components/sections/ContactForm";
import { ChatbotFAB } from "@/components/chatbot/ChatbotFAB";
import { contactPage } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={contactPage.hero.eyebrow}
          title={contactPage.hero.title}
          subtitle={contactPage.hero.subtitle}
        />

        <section className="container-x py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold mb-8">Discover how we can help your business grow</h2>
              <ContactForm services={contactPage.services} />
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatbotFAB />
    </>
  );
}
