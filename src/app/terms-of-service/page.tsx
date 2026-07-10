import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service | IMPOSSIBLE",
  description: "Terms of Service for the IMPOSSIBLE documentary platform.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell title="Terms of Service">
      <p>
        By accessing or using the IMPOSSIBLE website, you agree to these Terms of Service. If you do not agree,
        please do not use this site.
      </p>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Use of Website</h2>
        <p className="mt-3">
          This website provides information about the IMPOSSIBLE documentary project, team, partners, and related
          media. You agree to use the site only for lawful purposes and in a way that does not infringe the
          rights of others.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Intellectual Property</h2>
        <p className="mt-3">
          All content on this site — including video, photography, logos, text, and design — is owned by or
          licensed to IMPOSSIBLE and protected by applicable copyright and trademark laws. You may not copy,
          reproduce, or distribute content without prior written permission.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Partnership Inquiries</h2>
        <p className="mt-3">
          Submitting a partnership inquiry does not create a binding agreement. Any sponsorship or collaboration
          terms will be defined separately in writing between the parties.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Disclaimer</h2>
        <p className="mt-3">
          This site and its content are provided &quot;as is&quot; without warranties of any kind. We do not
          guarantee uninterrupted access or that all information is complete or current at all times.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Contact</h2>
        <p className="mt-3">
          Questions about these terms can be sent to{" "}
          <a
            href="mailto:colin.dingelstad@gmail.com?subject=IMPOSSIBLE%20Contact"
            className="cursor-pointer text-[#ffb4a8] hover:text-white"
          >
            colin.dingelstad@gmail.com
          </a>
          .
        </p>
      </section>
      <p className="text-xs text-[#e5e2e1]/50">Last updated: 2026</p>
    </LegalPageShell>
  );
}
