import Navbar from "../../components/navbar";
import Head from "next/head";
import styles from "../../styles/Extras.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      samurai: data,
    },
  };
};

const index = ({ samurai }) => {
  return (
    <>
      <Head>
        <title>Basic App | Extras</title>
      </Head>
      <div>
        <h1>Main page for our Samurai</h1>
        {samurai.map((samu) => (
          <Link key={samu.id} href={"/extras/" + samu.id}>
            <a className={styles.single}>
              <h3>{samu.name}</h3>
              <h5></h5>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;
