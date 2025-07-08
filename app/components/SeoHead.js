import Head from 'next/head';

export default function SeoHead({
  title = "YakoWeb | Turn visitors into customers and website overwhelm into a distant memory.",
  description = "We design and develop fast, responsive websites that reflect your brand, engage visitors, and get your business sales. Whether you're starting from scratch or need a complete redesign.",
  image = "/images/hero.webp",
  url = "https://yakoweb.com",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
