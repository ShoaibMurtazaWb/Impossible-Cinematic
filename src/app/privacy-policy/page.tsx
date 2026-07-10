import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | IMPOSSIBLE",
  description: "Privacy Policy for the IMPOSSIBLE documentary platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        IMPOSSIBLE (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy
        explains how we collect, use, and protect information when you visit our website or engage with our
        documentary project.
      </p>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Information We Collect</h2>
        <p className="mt-3">
          We may collect information you voluntarily provide — such as your name, email address, company, and
          message — when you contact us about partnerships, press inquiries, or general communication.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">How We Use Information</h2>
        <p className="mt-3">
          We use submitted information to respond to inquiries, evaluate partnership opportunities, improve our
          platform experience, and communicate updates related to the IMPOSSIBLE documentary series.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Sharing of Information</h2>
        <p className="mt-3">
          We do not sell your personal information. We may share information only when required by law, to protect
          our rights, or with trusted service providers who assist in operating our website under confidentiality
          obligations.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Data Security</h2>
        <p className="mt-3">
          We take reasonable measures to protect information submitted through our site. However, no online
          transmission or storage method is completely secure.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase text-[#e5e2e1]">Contact</h2>
        <p className="mt-3">
          For privacy-related questions, contact us at{" "}
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
