import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Terms & Conditions — Click & Cast Inc" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      badge="Legal"
      effectiveDate="November 11, 2025"
      subtitle="These Terms & Conditions govern all services provided by Click & Cast Inc. By booking services, paying any amount, or engaging Click & Cast Inc., the Client agrees to the following terms."
      sections={[
        {
          heading: "1. Services & Scope",
          body: "Click & Cast Inc. provides professional media services including photography, videography, podcast production, live streaming, and post-production editing. Services are limited strictly to what is outlined in the written quote, invoice, or agreement. Any additional services requested outside the agreed scope may incur additional charges.",
        },
        {
          heading: "2. Bookings & Payments",
          body: "",
          list: [
            "A booking is confirmed only after receipt of the required deposit.",
            "Deposits are non-refundable.",
            "Full payment must be completed as per invoice terms, typically before or on the service date.",
            "Final deliverables may be withheld until payment is completed in full.",
          ],
        },
        {
          heading: "3. Cancellation & Rescheduling",
          body: "",
          list: [
            "Client cancellations must be provided in writing.",
            "Deposits are forfeited upon cancellation.",
            "Rescheduling requests are subject to availability and may result in additional fees.",
            "Click & Cast Inc. may reschedule or cancel services due to illness, equipment failure, unsafe conditions, or events beyond reasonable control.",
          ],
        },
        {
          heading: "4. Delivery & Revisions",
          body: "",
          list: [
            "Delivery timelines vary depending on project type and complexity.",
            "Editing style is at the sole discretion of Click & Cast Inc.",
            "Revisions, if included, are limited to minor adjustments.",
            "Additional revisions or re-edits will be billed separately.",
          ],
        },
        {
          heading: "5. Ownership & Usage Rights",
          body: "",
          list: [
            "Click & Cast Inc. retains ownership of all raw footage and source files.",
            "The Client receives a license to use final delivered content for agreed purposes.",
            "Click & Cast Inc. may use completed work for portfolio and promotional purposes unless the Client requests otherwise in writing before service.",
          ],
        },
        {
          heading: "6. Client Responsibilities",
          body: "The Client is responsible for:",
          list: [
            "Obtaining location permissions",
            "Ensuring cooperation of participants",
            "Providing accurate schedules and instructions",
            "Preventing interference from guests or third parties",
          ],
        },
        {
          heading: "7. Limitation of Liability",
          body: "Click & Cast Inc. shall not be liable for:",
          list: [
            "Weather-related issues",
            "Venue restrictions",
            "Technical failures beyond reasonable control",
            "Actions of third parties",
          ],
        },
        {
          heading: "8. Force Majeure",
          body: "No party shall be liable for failure to perform due to circumstances beyond reasonable control, including acts of God, illness, accidents, or government restrictions.",
        },
        {
          heading: "9. Termination",
          body: "Click & Cast Inc. may terminate services without refund if the Client breaches these Terms or behaves in a manner that is unsafe, abusive, or unlawful.",
        },
        {
          heading: "10. Governing Law",
          body: "These Terms are governed by the laws of the Province of Ontario, Canada.",
        },
        {
          heading: "11. Acceptance",
          body: "Payment of any amount, written confirmation, or proceeding with services constitutes acceptance of these Terms.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
