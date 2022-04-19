import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic App | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}> Hello next Karanja</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className={styles.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <Link href="/extras">
          <a className={styles.btn}>See-extras</a>
        </Link>
      </div>
    </>
  );
}
