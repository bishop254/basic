import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Image src="/otaku.png" width={60} height={50} />
        </div>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
        <Link href="/extras">
          <a>Extra </a>
        </Link>
        <Link href="/extras/testPage">
          <a>Extra-test </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
