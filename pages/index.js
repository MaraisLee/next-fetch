import Head from "next/head";
import Image from "next/image";
import HeaderInfo from "../components/HeaderInfo";
import styles from "../styles/Home.module.css";

export default function Home({ cats }) {
  return (
    <>
      <h1>Cats World</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.name}>{cat.name}</li>
        ))}
      </ul>
    </>
  );
}

// CSR : Client-Side-Rendering
// SSR : Server-Side-Rendering ( 요청시 HTML 생성 후 브라우저 출력)
// SSG : Static-Site-Generation ( 서버에서 미리 HTML 생성, 변경불가)
// 1. SSR 적용
// 데이터 호출 후 Response 된 결과를 Props로 전달한다. (자동으로)
// 서버에서 데이터 바꾸고 다시 돌리면 client도 변경됨.
export const getServerSideProps = async () => {
  // const res = await fetch(
  //   "https://api.thecatapi.com/v1/breeds?api_key=live_Z9dx0VtiK2f0qbMsh1fhE7Z3Sw21vaP79MAhtKChl3XFPpWKvoBDSa6OSqZHYNSJ&limit=10"
  // );
  const res = await fetch("http://localhost:8080/api/cats");
  const cats = await res.json();
  return {
    props: {
      cats,
    },
  };
};
