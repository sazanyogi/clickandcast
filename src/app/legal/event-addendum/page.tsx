import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Event & Live Streaming Addendum — Click & Cast Inc" };

export default function EventAddendumPage() {
  return (
    <LegalPage
      title="Event & Live Streaming Services Addendum"
      badge="Legal"
      subtitle="This Addendum forms part of the Service Agreement and Terms & Conditions of Click & Cast Inc. It applies to all event coverage, live streaming, sports coverage, corporate events, public events, and similar productions."
      sections={[
        {
          heading: "1. Scope of Services",
          body: "Click & Cast Inc. provides:",
          list: [
            "Event videography",
            "Event photography",
            "Live streaming (events, sports, corporate, public gatherings)",
            "Post-production editing",
            "Content repurposing (short clips, highlights, promotional edits)",
          ],
        },
        {
          heading: "2. Access, Permissions & Authority",
          body: "The Client confirms that they have the authority to hire Click & Cast Inc. and have obtained necessary permissions from:",
          list: ["Venues", "Organizers", "Performers", "Participants", "Attendees (where required)"],
        },
        {
          heading: "3. Ownership & Intellectual Property",
          body: "All footage, recordings, streams, images, audio, and project files captured or created by Click & Cast Inc. remain the exclusive property of Click & Cast Inc., unless otherwise agreed in writing. This includes:",
          list: ["Raw footage", "Live stream recordings", "Edited videos", "Clips, highlights, shorts", "Audio recordings", "Broadcast files"],
        },
        {
          heading: "4. Monetization & Commercial Rights",
          body: "The Client irrevocably grants Click & Cast Inc. full, perpetual, worldwide rights to:",
          list: [
            "Use the Content for commercial purposes",
            "Monetize the Content on platforms including YouTube, social media, streaming platforms, and broadcast channels",
            "Repurpose Content into promotional materials, short-form content, advertisements, highlight reels, and branded content",
            "License, sublicense, or distribute the Content to third parties",
            "Use the Content for portfolio, marketing, branding, and revenue generation",
          ],
        },
        {
          heading: "5. Client License (Limited Rights)",
          body: "The Client is granted a non-exclusive, non-transferable license to use delivered final content for promotional use, internal use, and event recap purposes. The Client may not sell, license, or monetize the Content without written permission from Click & Cast Inc.",
        },
        {
          heading: "6. Live Streaming Limitations",
          body: "The Client acknowledges that live streaming is subject to:",
          list: ["Internet stability", "Platform limitations", "Venue restrictions", "Power availability"],
        },
        {
          heading: "7. Editing & Deliverables",
          body: "",
          list: [
            "Final deliverables are determined by the agreed package.",
            "Editing style and creative decisions remain at the discretion of Click & Cast Inc.",
            "Requests outside the agreed scope may incur additional charges.",
          ],
        },
        {
          heading: "8. Attendee & Participant Consent",
          body: "For public or ticketed events, the Client agrees that attendee presence constitutes implied consent for recording. Click & Cast Inc. is not responsible for individual consent disputes. The Client agrees to indemnify Click & Cast Inc. against claims arising from attendee objections.",
        },
        {
          heading: "9. Limitation of Liability",
          body: "Click & Cast Inc. shall not be liable for:",
          list: [
            "Lost revenue",
            "Missed moments due to crowd interference",
            "Platform takedowns",
            "Copyright claims from performers or attendees",
            "Indirect or consequential damages",
          ],
        },
        {
          heading: "10. Termination & Safety",
          body: "Click & Cast Inc. reserves the right to:",
          list: [
            "Cease services if conditions are unsafe",
            "Terminate coverage if unlawful activity occurs",
            "Leave the event without refund if crew safety is compromised",
          ],
        },
        {
          heading: "11. Governing Law",
          body: "This Addendum shall be governed by the laws of the Province of Ontario and the laws of Canada applicable therein.",
        },
        {
          heading: "12. Acceptance",
          body: "Payment of any amount, written confirmation, or proceeding with event or live streaming services constitutes acceptance of this Addendum.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
