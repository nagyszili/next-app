import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>

      <h2>
        <Link href="/">
          <a>Home!</a>
        </Link>
      </h2>
    </div>
  );
}
