import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Client Consent & Rights Authorization — Click & Cast Inc" };

export default function ConsentRightsPage() {
  return (
    <LegalPage
      title="Client Consent & Rights Authorization"
      badge="Legal"
      subtitle="By engaging Click & Cast Inc., the Client hereby authorizes the collection, use, and distribution of captured content as described below."
      sections={[
        {
          heading: "1. Record & Capture",
          body: "I authorize Click & Cast Inc. to capture:",
          list: ["Video", "Photography", "Audio", "Live streams", "Behind-the-scenes content"],
        },
        {
          heading: "2. Ownership & Rights",
          body: "I acknowledge and agree that:",
          list: [
            "All content captured remains the exclusive property of Click & Cast Inc.",
            "This includes raw footage, edited files, clips, and recordings.",
            "Click & Cast Inc. may use, reproduce, edit, publish, distribute, and monetize the content.",
          ],
        },
        {
          heading: "3. Commercial & Promotional Use",
          body: "I grant Click & Cast Inc. the irrevocable right to use the content for:",
          list: [
            "Marketing & promotion",
            "Portfolio & website",
            "Social media & advertising",
            "Monetized platforms (e.g., YouTube)",
            "Licensing and third-party distribution",
          ],
        },
        {
          heading: "4. Third-Party Consent",
          body: "I confirm that I am responsible for obtaining permission from:",
          list: [
            "Venue owners",
            "Performers / speakers",
            "Participants / attendees (where required)",
          ],
        },
        {
          heading: "Acknowledgement",
          body: "I release Click & Cast Inc. from claims related to consent or privacy disputes. No additional compensation is required unless agreed in writing.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
