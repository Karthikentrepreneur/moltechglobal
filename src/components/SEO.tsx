import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
}

const SEO = ({ title, description, keywords, url }: SEOProps) => {
  const metaTitle = title || "Moltech Global";
  return (
    <Helmet>
      <title>{metaTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={metaTitle} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};

export default SEO;
