import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        링크(/) :<Link href="/">홈</Link>
      </p>
      <ul>
        <li>
          <Link href="sub">서브</Link>
        </li>
        <li>
          <Link href="sub/about">어바웃</Link>
        </li>
        <li>
          <Link href="sub/1">어바웃1</Link>
        </li>
        <li>
          <Link href="sub/2">어바웃2</Link>
        </li>
      </ul>
    </>
  );
}
