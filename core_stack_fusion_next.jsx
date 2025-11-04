"use client";

import { useEffect } from "react";

export default function Page() {
  // Auto-inject HubSpot form (replace with your real IDs)
  const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID"; // e.g., "1234567"
  const HUBSPOT_FORM_ID = "YOUR_FORM_ID"; // e.g., "abcd-efgh-ijkl-mnop"

  useEffect(() => {
    const scriptId = "hs-forms-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://js.hsforms.net/forms/embed/v2.js";
      s.async = true;
      s.onload = () => {
        // @ts-ignore
        if (window.hbspt) {
          // @ts-ignore
          window.hbspt.forms.create({
            region: "na1",
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_FORM_ID,
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(s);
    } else {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: "#hubspot-form",
        });
      }
    }
  }, []);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="antialiased text-slate-800">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="CoreStack Fusion home"
          >
            {/* Replace with your SVG */}
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <span className="text-lg font-semibold tracking-tight">
              CoreStack Fusion
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">
              Services
            </a>
            <a
              href="#industries"
              className="hover:text-slate-900 text-slate-600"
            >
              Industries
            </a>
            <a href="#why" className="hover:text-slate-900 text-slate-600">
              Why Us
            </a>
          </nav>
          <a
            href="#contact"
            onClick={scrollToForm}
            className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Schedule a Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Build a Stronger Core. Power Every Layer of Your Business.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              CoreStack Fusion helps businesses design, source, and support the
              IT infrastructure that keeps operations secure, scalable, and
              always on.
            </p>
            <p className="mt-4 text-slate-700">
              Modern businesses depend on resilient, high-performance
              infrastructure — but managing the complexity of hardware,
              networks, and hybrid environments takes more than procurement. We
              bridge the gap between{" "}
              <span className="font-semibold">strategic architecture</span> and{" "}
              <span className="font-semibold">hands-on implementation</span>,
              partnering with you across the entire IT lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={scrollToForm}
                className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Start the Conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-white"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
              alt="Modern data center representing secure, scalable infrastructure"
              className="w-full rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Section 1: Image Left / Text Right */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-1">
            <img
              src="https://images.unsplash.com/photo-1581093588401-16f8b08f2f72?q=80&w=1600&auto=format&fit=crop"
              alt="Engineer working on network rack and servers"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Comprehensive Infrastructure Support
            </h2>
            <p className="mt-4 text-slate-700">
              We help you strengthen your technology foundation through:
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>
                <span className="font-semibold">
                  Hardware Procurement & Lifecycle Management
                </span>{" "}
                – Servers, storage, and networking solutions from trusted
                enterprise vendors.
              </li>
              <li>
                <span className="font-semibold">
                  Cloud & Hybrid Integration
                </span>{" "}
                – Seamlessly connect on-prem systems with cloud infrastructure
                for performance and flexibility.
              </li>
              <li>
                <span className="font-semibold">
                  Security & Compliance Architecture
                </span>{" "}
                – Protect sensitive data and maintain regulatory confidence with
                resilient systems.
              </li>
              <li>
                <span className="font-semibold">
                  24/7 Infrastructure Support
                </span>{" "}
                – Remote monitoring, proactive maintenance, and fast issue
                resolution to minimize downtime.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Text Left / Image Right */}
      <section
        id="why"
        className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Why Businesses Choose CoreStack Fusion
            </h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>
                <span className="font-semibold">Vendor-Neutral Expertise</span>{" "}
                – We design the right mix for your environment across major OEMs
                and cloud platforms.
              </li>
              <li>
                <span className="font-semibold">
                  Performance-Driven Approach
                </span>{" "}
                – Every solution is measured by uptime, scalability, and total
                cost of ownership.
              </li>
              <li>
                <span className="font-semibold">End-to-End Partnership</span> –
                From assessment and design to deployment and renewal, we’re with
                you every step of the way.
              </li>
              <li>
                <span className="font-semibold">Proven Reliability</span> – Our
                team brings decades of enterprise IT experience across storage,
                networking, and security domains.
              </li>
            </ul>
          </div>
          <div className="md:order-2">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Abstract fusion of systems and data flows representing integration"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Image Left / Text Right */}
      <section id="industries" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-1">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
              alt="Collage of healthcare, finance, manufacturing, education settings"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Industries We Support
            </h2>
            <p className="mt-4 text-slate-700">
              We serve{" "}
              <span className="font-semibold">
                mid-market to enterprise organizations
              </span>{" "}
              across:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
              <ul className="space-y-2 list-disc list-inside">
                <li>Financial Services</li>
                <li>Healthcare & Life Sciences</li>
                <li>Manufacturing & Supply Chain</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>Technology & SaaS</li>
                <li>Government & Education</li>
                <li>Professional Services</li>
              </ul>
            </div>
            <p className="mt-6 text-slate-700">
              Our domain expertise ensures your infrastructure aligns with
              compliance, performance, and long-term scalability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Text Left / Image Right */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Let’s Strengthen Your Core
            </h2>
            <p className="mt-4 text-slate-700">
              Your infrastructure shouldn’t hold your business back — it should
              drive it forward. Whether you’re modernizing legacy systems,
              optimizing spend, or building for growth, CoreStack Fusion can
              help.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={scrollToForm}
                className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div className="md:order-2">
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop"
              alt="Radiating core within a secure data center hub"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section
        id="contact"
        className="py-16 md:py-24 border-t border-slate-200"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Talk to an Infrastructure Specialist
          </h2>
          <p className="mt-4 text-slate-700">
            Tell us about your environment, timelines, and goals. We’ll respond
            with a practical plan and options for assessment, design, or
            fast-track procurement.
          </p>

          {/* HubSpot form target */}
          <div
            id="hubspot-form"
            className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow"
          />

          {/* Fallback CTA if script blocked */}
          <noscript>
            <p className="mt-4 text-slate-600">
              JavaScript is disabled. Email us at{" "}
              <a className="underline" href="mailto:hello@corestackfusion.com">
                hello@corestackfusion.com
              </a>
              .
            </p>
          </noscript>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-slate-900" />
              <span className="font-semibold">CoreStack Fusion</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Designing, sourcing, and supporting the IT backbone for secure,
              scalable, always-on operations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-slate-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-slate-900">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-slate-900">
                  Industries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-900">
              Get in Touch
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Email:{" "}
              <a href="mailto:hello@corestackfusion.com" className="underline">
                hello@corestackfusion.com
              </a>
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Phone:{" "}
              <a href="tel:+1-555-123-4567" className="underline">
                +1 (555) 123‑4567
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CoreStack Fusion. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
