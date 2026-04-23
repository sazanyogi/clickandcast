import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Wedding Services Addendum — Click & Cast Inc" };

export default function WeddingAddendumPage() {
  return (
    <LegalPage
      title="Wedding Services Addendum"
      badge="Legal"
      subtitle="This Addendum forms part of the Service Agreement and Terms & Conditions of Click & Cast Inc. In the event of any conflict, this Addendum shall prevail for wedding-related services only."
      sections={[
        {
          heading: "1. Event Details & Coverage",
          body: "",
          list: [
            "Coverage hours, locations, deliverables, and timelines are strictly limited to what is stated in the invoice or booking confirmation.",
            "Overtime coverage is not guaranteed and must be approved in writing. Additional charges may apply.",
          ],
        },
        {
          heading: "2. Deposits & Payments",
          body: "",
          list: [
            "Wedding bookings require a non-refundable deposit to secure the date.",
            "The remaining balance must be paid before or on the wedding day, unless otherwise agreed in writing.",
            "Failure to complete payment may result in delayed or withheld delivery.",
          ],
        },
        {
          heading: "3. Cancellation & Date Changes",
          body: "",
          list: [
            "Deposits are non-refundable under all circumstances.",
            "Date changes are treated as cancellations unless the Company is available on the new date.",
            "If Click & Cast Inc. is unavailable on the new date, the original booking is forfeited without refund.",
          ],
        },
        {
          heading: "4. Weather & Uncontrollable Conditions",
          body: "The Client acknowledges that weddings are subject to:",
          list: [
            "Weather conditions",
            "Lighting limitations",
            "Venue restrictions",
            "Guest or officiant interference",
          ],
        },
        {
          heading: "5. Timelines & Delays",
          body: "",
          list: [
            "The Client is responsible for ensuring the wedding day timeline is realistic.",
            "Delays caused by the Client, guests, vendors, or venues may result in missed coverage.",
            "Click & Cast Inc. is not liable for missed moments due to schedule overruns or restrictions.",
          ],
        },
        {
          heading: "6. Creative Style & Editing",
          body: "",
          list: [
            "Editing style is subjective and based on Click & Cast Inc.'s professional discretion.",
            "The Client has reviewed and agrees to the Company's portfolio style.",
            "Requests to replicate another creator's style are not guaranteed.",
          ],
        },
        {
          heading: "7. Revisions",
          body: "",
          list: [
            "Wedding deliverables include limited minor revisions only, if stated in the package.",
            "Requests for additional edits, re-cuts, or music changes may incur extra fees.",
          ],
        },
        {
          heading: "8. Raw Footage",
          body: "",
          list: [
            "Raw footage is not included unless explicitly stated in writing.",
            "Click & Cast Inc. retains ownership of all raw files and project assets.",
          ],
        },
        {
          heading: "9. Client Cooperation & Guest Interference",
          body: "The Client agrees to ensure cooperation from guests and wedding party members. Click & Cast Inc. is not responsible for:",
          list: [
            "Guests blocking cameras",
            "Phones obstructing shots",
            "Uncooperative participants",
          ],
        },
        {
          heading: "10. Meals & Breaks",
          body: "For full-day coverage, the Client agrees to provide reasonable breaks and meals for the crew. Coverage may pause during these breaks.",
        },
        {
          heading: "11. Safety & Conduct",
          body: "Click & Cast Inc. reserves the right to leave an event if conditions become unsafe or cease services if harassment, abuse, or illegal activity occurs. No refunds will be issued in such cases.",
        },
        {
          heading: "12. Limitation of Liability",
          body: "",
          list: [
            "Click & Cast Inc. shall not be liable for emotional distress or disappointment.",
            "Maximum liability, if any, is limited to the amount paid by the Client.",
          ],
        },
        {
          heading: "13. Acceptance",
          body: "By paying a deposit, signing electronically, or proceeding with wedding services, the Client confirms acceptance of this Wedding Services Addendum.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
