import App from "next/app";
import Head from "next/head";
import { createContext, useEffect } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import "../assets/css/style.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
        <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/profil-jurusan", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;