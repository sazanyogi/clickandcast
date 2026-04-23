import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Client Intake Form — Click & Cast Inc" };

export default function ClientIntakePage() {
  return (
    <LegalPage
      title="Client Intake Form"
      badge="Legal"
      subtitle="This document outlines the information collected when booking Click & Cast Inc. services and the legal acknowledgements clients must agree to."
      sections={[
        {
          heading: "Information Collected",
          body: "When booking services, Click & Cast Inc. collects the following:",
          list: [
            "Client / Company Name",
            "Primary Contact Name",
            "Email Address",
            "Phone Number",
            "Event Type (Wedding, Corporate Event, Public Event, Sports / Live Stream, Music Video, Other)",
            "Event Date(s) and Location(s)",
            "Services Requested (Photography, Videography, Live Streaming, Editing Only, Multi-day Coverage)",
            "Expected Audience Size (Private / Public / Ticketed)",
          ],
        },
        {
          heading: "Legal Acknowledgement",
          body: "By proceeding with a booking, the Client confirms:",
          list: [
            "They have the authority to book Click & Cast Inc.",
            "Click & Cast Inc. retains ownership of all captured content unless otherwise agreed in writing.",
            "Live streaming may be affected by internet, venue, or platform limitations.",
            "They agree to Click & Cast Inc.'s Terms & Conditions, Privacy Policy, and applicable Service Addendums.",
          ],
        },
        {
          heading: "How This Information Is Used",
          body: "The information collected is used exclusively to coordinate and deliver your booked services, communicate regarding your booking, and fulfill legal and accounting obligations. It will not be sold to third parties. See our Privacy Policy for full details.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
