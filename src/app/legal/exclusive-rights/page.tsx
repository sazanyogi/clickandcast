import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Exclusive Rights Buyout Clause — Click & Cast Inc" };

export default function ExclusiveRightsPage() {
  return (
    <LegalPage
      title="Exclusive Rights Buyout Clause"
      badge="Legal — Corporate Clients Only"
      subtitle="This clause applies only when expressly selected and paid for by the Client. Absent written confirmation and payment, no exclusivity or ownership transfer is granted."
      sections={[
        {
          heading: "1. Default Ownership",
          body: "All footage, recordings, images, audio, live streams, edits, and project files created by Click & Cast Inc. remain the exclusive property of Click & Cast Inc. The Client receives a limited, non-exclusive license for internal and promotional use only.",
        },
        {
          heading: "2. Optional Exclusive Rights Buyout",
          body: "Upon written request and full payment of the Exclusive Rights Buyout Fee, Click & Cast Inc. agrees to grant the Client exclusive usage rights to the final delivered Content, subject to the terms below. Raw footage is not included unless explicitly stated.",
        },
        {
          heading: "3. Scope of Exclusivity",
          body: "Exclusivity applies only to:",
          list: ["Final delivered content", "Specific project(s) listed in the invoice", "Defined usage scope (internal, promotional, broadcast, etc.)"],
        },
        {
          heading: "4. Buyout Fee Structure",
          body: "The Exclusive Rights Buyout Fee shall be calculated as 150%–300% of the base project cost, depending on:",
          list: ["Event scale", "Distribution scope", "Duration of exclusivity", "Platform usage", "Geographic reach"],
        },
        {
          heading: "5. Rights Transfer",
          body: "Upon receipt of full Buyout Fee, Click & Cast Inc. grants the Client exclusive usage rights and waives its right to publicly monetize or distribute the Content. Copyright ownership remains with Click & Cast Inc. unless explicitly transferred in writing. Full copyright transfer requires a separate agreement.",
        },
        {
          heading: "6. Company Retained Rights",
          body: "Even with exclusivity, Click & Cast Inc. retains the right to:",
          list: [
            "Use the Content internally",
            "Archive the Content",
            "Display still frames or brief excerpts for portfolio (unless prohibited in writing)",
          ],
        },
        {
          heading: "7. No Implied Rights",
          body: "No rights are granted by implication. Failure to select or pay for the Exclusive Rights Buyout means Click & Cast Inc. retains full monetization rights and the Client has no exclusivity.",
        },
        {
          heading: "8. Third-Party Restrictions",
          body: "Click & Cast Inc. is not responsible for:",
          list: [
            "Platform takedowns",
            "Performer copyright claims",
            "Music licensing violations by the Client",
            "Third-party usage beyond agreed scope",
          ],
        },
        {
          heading: "9. Termination & Breach",
          body: "If the Client breaches this clause, exclusivity is immediately revoked, Click & Cast Inc. may pursue legal remedies, and no refund will be issued.",
        },
        {
          heading: "10. Governing Law",
          body: "This clause is governed by the laws of the Province of Ontario and Canada.",
        },
        {
          heading: "11. Acceptance",
          body: "This clause is binding only when selected in writing, included on the invoice, and paid in full.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
