import Head from "next/head";

export default function GlobalLayout({ children, title, description }) {
  const defaultTitle = "ERP KARAZ";
  const defaultDescription = "ERP KARAZ";

  title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  description = description ? description : defaultDescription;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>{children}</div>
    </>
  );
}
