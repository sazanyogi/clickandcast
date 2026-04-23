import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Notice of Recording & Live Streaming — Click & Cast Inc" };

export default function NoticeRecordingPage() {
  return (
    <LegalPage
      title="Notice of Recording & Live Streaming"
      badge="Public Notice"
      subtitle="This notice applies to all events where Click & Cast Inc. is engaged for photography, filming, or live streaming services."
      sections={[
        {
          heading: "Public Notice",
          body: "This event is being photographed, filmed, and/or live streamed by Click & Cast Inc.",
        },
        {
          heading: "By Entering This Area, You Acknowledge and Consent to:",
          body: "",
          list: [
            "Being recorded (video, audio, photography)",
            "Possible inclusion in live streams or recordings",
            "Use of your likeness for promotional and commercial purposes",
          ],
        },
        {
          heading: "Opt-Out",
          body: "If you do not wish to be recorded, please avoid camera areas or notify event staff.",
        },
      ]}
      contact={{ company: "Click & Cast Inc.", address: "Brampton, Ontario, Canada", email: "clickandcast25@gmail.com" }}
    />
  );
}
