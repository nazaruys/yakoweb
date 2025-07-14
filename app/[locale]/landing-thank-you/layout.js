export async function generateMetadata({ params: { locale } }) {
  return {
    robots: 'noindex, nofollow',
  };
}

export default function Layout({ children }) {
  return children;
} 