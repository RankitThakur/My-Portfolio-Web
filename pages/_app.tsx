import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import "../styles/quill.css";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import React from "react";

function App({ Component, pageProps }: AppProps) {


  return (
    <div className="w-full min-h-screen font-inter bg-background">


      <NextNProgress
        color="#39ff14"
        startPosition={0.4}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
      <Head>
        <title>Rankit Thakur | forntend developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rankit Thakur | forntend developer" />
        <meta
          property="og:description"
        />
        <meta
          property="og:site_name"
          content="Rankit Thakur | forntend developer"
        />
        <meta
          name="twitter:title"
          content="Rankit Thakur | forntend developer"
        />
        <meta
          name="twitter:description"
        />
        <meta name="theme-color" content="#E879F9" />
      </Head>
      <FpjsProvider
        loadOptions={{
          apiKey: "cdDmZKapvuQWlYydHrDq",
          region: "eu",
        }}
      >
        <Component {...pageProps} />
      </FpjsProvider>
    </div>
  );
}

export default App;
