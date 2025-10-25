import RootLayout from "../layout";

export const metadata = {
  title: "Case SA Meubels: Website + Google optimalisatie | YakoWeb",
  description: "Van leeg domein naar online succes in 1 week. Ontdek hoe SA Meubels uit Harderwijk nu vindbaar is met een moderne website en geoptimaliseerd Google profiel.",
};

export default function SAMeubelsLayout({ children }) {
  return <RootLayout pageMetadata={metadata}>{children}</RootLayout>;
}
