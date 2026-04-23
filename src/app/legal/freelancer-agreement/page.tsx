import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Freelancer / Second Shooter Agreement — Click & Cast Inc" };

export default function FreelancerAgreementPage() {
  return (
    <LegalPage
      title="Freelancer / Second Shooter Agreement"
      badge="Legal"
      subtitle="This Agreement is entered into between Click & Cast Inc. and any individual or entity engaged as a freelancer or second shooter."
      sections={[
        {
          heading: "1. Independent Contractor Status",
          body: "The Contractor is engaged as an independent contractor, not an employee, partner, or agent of Click & Cast Inc. The Contractor is responsible for:",
          list: ["Their own taxes", "CPP / EI (if applicable)", "Insurance (if required)", "Equipment unless otherwise agreed"],
        },
        {
          heading: "2. Services",
          body: "The Contractor may be engaged to provide services including but not limited to:",
          list: [
            "Second shooting (photo/video)",
            "Camera operation",
            "Editing and post-production",
            "Audio or live streaming support",
            "Event or wedding coverage",
          ],
        },
        {
          heading: "3. Payment",
          body: "",
          list: [
            "Payment terms will be agreed per project.",
            "Payment is issued only after services are completed satisfactorily.",
            "The Contractor is responsible for issuing an invoice if required.",
            "No additional compensation, royalties, or residuals are owed.",
          ],
        },
        {
          heading: "4. Ownership & Work-For-Hire",
          body: "",
          subSections: [
            {
              heading: "4.1 Ownership",
              body: "All footage, recordings, images, audio, edits, project files, and content created by the Contractor while working for Click & Cast Inc. are deemed 'work made for hire.' Click & Cast Inc. retains full and exclusive ownership of all Work.",
            },
            {
              heading: "4.2 Assignment of Rights",
              body: "To the extent any Work is not considered work-for-hire, the Contractor irrevocably assigns all worldwide rights (including copyright) to Click & Cast Inc. The Contractor retains no ownership rights to the Work.",
            },
          ],
        },
        {
          heading: "5. Use Restrictions",
          body: "The Contractor may NOT:",
          list: [
            "Post the Work publicly",
            "Use footage for portfolio",
            "Share content on social media",
            "Submit work to third parties",
            "Monetize or license content",
          ],
        },
        {
          heading: "6. Confidentiality",
          body: "The Contractor agrees to keep confidential:",
          list: ["Client identities", "Event details", "Business operations", "Pricing", "Footage and deliverables"],
        },
        {
          heading: "7. Client Interaction & Conduct",
          body: "The Contractor agrees to:",
          list: [
            "Act professionally at all times",
            "Follow instructions from Click & Cast Inc.",
            "Not represent themselves as the business owner",
            "Not solicit clients for personal services during or after the engagement",
          ],
        },
        {
          heading: "8. Non-Solicitation",
          body: "The Contractor shall not directly solicit Click & Cast Inc. clients, undermine or redirect bookings, or use Company contacts for personal gain. This clause applies during the engagement and for 12 months after the last project.",
        },
        {
          heading: "9. Liability & Indemnification",
          body: "The Contractor is responsible for their own actions, damage to equipment they handle, and personal injury caused by negligence. The Contractor agrees to indemnify and hold harmless Click & Cast Inc. from claims arising from their actions.",
        },
        {
          heading: "10. Equipment",
          body: "Unless otherwise agreed, the Contractor uses their own equipment. Company equipment must be handled with care. The Contractor is liable for damage caused by negligence.",
        },
        {
          heading: "11. Termination",
          body: "Click & Cast Inc. may terminate this Agreement immediately if the Contractor breaches these terms, acts unprofessionally, endangers crew, clients, or guests, or violates confidentiality or ownership clauses. No further payment will be owed for incomplete work.",
        },
        {
          heading: "12. Governing Law",
          body: "This Agreement shall be governed by the laws of the Province of Ontario and the laws of Canada applicable therein.",
        },
        {
          heading: "13. Acceptance",
          body: "By accepting work from Click & Cast Inc., the Contractor agrees to all terms of this Agreement.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
