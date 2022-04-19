import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Basic App | Error Page</title>
      </Head>
      <div className="not-found">
        <h1>Oppsss...</h1>
        <h2>The page cannot be found</h2>
        <p>
          Being redirected to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
          in a few seconds.
        </p>
      </div>
    </>
  );
};

export default NotFound;
