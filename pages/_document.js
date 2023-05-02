import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Deep Shetye</title>
        <meta
          name="description"
          content="Deep Shetye's Person Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
