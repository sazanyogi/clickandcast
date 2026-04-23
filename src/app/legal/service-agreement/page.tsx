import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Service Agreement — Click & Cast Inc" };

export default function ServiceAgreementPage() {
  return (
    <LegalPage
      title="Service Agreement"
      badge="Legal"
      subtitle="This Service Agreement is entered into between Click & Cast Inc. and the client identified in the booking or invoice. By booking services, paying a deposit, or signing electronically, the Client agrees to the terms below."
      sections={[
        {
          heading: "1. Services Provided",
          body: "Click & Cast Inc. provides professional media services, including but not limited to:",
          list: [
            "Podcast production",
            "Wedding photography",
            "Wedding videography",
            "Music videos",
            "Short films",
            "Event videography",
            "Live streaming (events and sports)",
            "Editing-only services",
          ],
        },
        {
          heading: "2. Booking & Payment Terms",
          body: "",
          list: [
            "A booking is confirmed only after receipt of a deposit (amount stated in invoice).",
            "Remaining balance must be paid on or before the service date, unless otherwise agreed in writing.",
            "Payments may be accepted via e-transfer, online payment platforms, or other approved methods.",
            "Late payments may result in delayed delivery of content.",
          ],
        },
        {
          heading: "3. Cancellation & Rescheduling",
          body: "",
          list: [
            "Deposits are non-refundable.",
            "Rescheduling is subject to availability and must be requested in writing.",
            "Client cancels less than 7 days before the event: 100% of the fee may be charged.",
            "Client cancels more than 7 days before: deposit is forfeited.",
            "Click & Cast Inc. reserves the right to reschedule due to unforeseen circumstances (illness, equipment failure, force majeure).",
          ],
        },
        {
          heading: "4. Deliverables & Timelines",
          body: "",
          list: [
            "Delivery timelines will be communicated per project.",
            "Editing timelines may vary depending on project scope.",
            "Revisions (if included) are limited to minor edits only (color, trimming, audio levels).",
            "Major changes or additional edits may incur extra charges.",
          ],
        },
        {
          heading: "5. Intellectual Property & Usage Rights",
          body: "",
          subSections: [
            {
              heading: "Ownership",
              list: [
                "Click & Cast Inc. retains ownership of all raw footage and project files, unless otherwise agreed in writing.",
                "The Client receives a non-exclusive, non-transferable license to use the final delivered content for personal or agreed commercial use.",
                "By participating in our shoots, you consent to the use of photos/videos for portfolio and promotional purposes unless otherwise requested in writing.",
              ],
            },
            {
              heading: "Company Usage",
              body: "Click & Cast Inc. retains the right to use completed work for portfolio, website, social media, and marketing and promotional purposes (unless the Client explicitly requests written exclusion).",
            },
          ],
        },
        {
          heading: "6. Client Responsibilities",
          body: "The Client agrees to:",
          list: [
            "Provide accurate information and schedules",
            "Obtain any necessary permissions or venue approvals",
            "Ensure access to locations, power, and internet (for live streaming)",
            "Communicate expectations clearly prior to service delivery",
          ],
        },
        {
          heading: "7. Limitation of Liability",
          body: "Click & Cast Inc. shall not be liable for weather conditions, venue restrictions, technical issues beyond reasonable control, or acts of third parties. Maximum liability, if any, shall not exceed the amount paid by the Client.",
        },
        {
          heading: "8. Force Majeure",
          body: "Click & Cast Inc. shall not be held liable for failure or delay caused by events beyond reasonable control, including but not limited to acts of God, government restrictions, illness, or equipment failure.",
        },
        {
          heading: "9. Termination",
          body: "This Agreement may be terminated by Click & Cast Inc. if payment terms are violated, client behavior is unsafe, abusive, or unlawful, or client requests actions that violate law or venue rules.",
        },
        {
          heading: "10. Governing Law",
          body: "This Agreement shall be governed by the laws of the Province of Ontario and the laws of Canada applicable therein.",
        },
        {
          heading: "11. Acceptance",
          body: "By signing, paying a deposit, or proceeding with services, the Client acknowledges and agrees to this Agreement.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
