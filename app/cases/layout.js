import RootLayout from "../layout";

export const metadata = {
  title: "Gerealiseerde websites | YakoWeb Cases",
  description: "Bekijk onze cases: websites, Google Bedrijfsprofielen en social media voor vakbedrijven. Ontdek hoe wij bedrijven helpen meer klanten te krijgen.",
};

export default function Caseslayout({ children }) {
  return <RootLayout pageMetadata={metadata}>{children}</RootLayout>;
}
