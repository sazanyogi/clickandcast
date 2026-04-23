import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Privacy Policy — Click & Cast Inc" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      badge="Legal"
      effectiveDate="November 11, 2025"
      subtitle="Click & Cast Inc. is committed to protecting the privacy and personal information of our clients, website visitors, and social media users."
      sections={[
        {
          heading: "1. Information We Collect",
          body: "We may collect the following types of personal information:",
          list: [
            "Name",
            "Email address",
            "Phone number",
            "Business or event details",
            "Billing and payment information",
            "Communications sent via contact forms, email, or social media",
            "Website usage data (cookies, IP address, browser data)",
          ],
        },
        {
          heading: "2. How We Collect Information",
          body: "Personal information is collected through:",
          list: [
            "Our website (https://clickandcast.com)",
            "Contact and inquiry forms",
            "Email communication",
            "Social media platforms (Facebook, Instagram, TikTok)",
            "Online booking or payment systems",
            "Analytics and tracking tools (e.g., Google Analytics)",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          body: "We use personal information to:",
          list: [
            "Respond to inquiries and provide services",
            "Manage bookings, contracts, and payments",
            "Deliver photography, videography, podcast, and media services",
            "Improve our website and marketing efforts",
            "Communicate service updates or promotions",
            "Meet legal and accounting requirements",
          ],
        },
        {
          heading: "4. Cookies & Tracking Technologies",
          body: "Our website uses cookies and tracking technologies such as Google Analytics to understand user behavior and improve our services. These tools may collect anonymized data such as IP address, device type, and browsing activity. You may disable cookies through your browser settings.",
        },
        {
          heading: "5. Sharing of Information",
          body: "We do not sell personal information. We may share information only with:",
          list: [
            "Payment processors (e.g., Stripe, banks)",
            "Marketing and analytics platforms (Google, Meta, TikTok)",
            "Service providers assisting in operations",
            "Legal or regulatory authorities if required by law",
          ],
        },
        {
          heading: "6. Data Storage & Security",
          body: "We take reasonable technical and organizational measures to protect personal information from unauthorized access, loss, or misuse. Information is stored securely and accessed only by authorized personnel.",
        },
        {
          heading: "7. Retention of Information",
          body: "We retain personal information only as long as necessary to fulfill service obligations, legal, accounting, or regulatory requirements.",
        },
        {
          heading: "8. Your Rights",
          body: "You have the right to:",
          list: [
            "Request access to your personal information",
            "Request correction of inaccurate information",
            "Withdraw consent (subject to legal obligations)",
            "Request deletion of your personal data",
          ],
        },
        {
          heading: "9. Third-Party Links & Platforms",
          body: "Our website and social media pages may link to third-party platforms. We are not responsible for the privacy practices of external websites or services.",
        },
        {
          heading: "10. Updates to This Policy",
          body: "We may update this Privacy Policy from time to time. The latest version will always be available on our website.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
