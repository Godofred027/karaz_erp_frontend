import Head from "next/head";

export default function GlobalLayout({ children,title,description }) {
    const titleDefault = "ERP KARAZ";
    title = title ? "ERP KARAZ - "+title : titleDefault;
    return (
    <>
      <Head>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
      </>
  );
}
