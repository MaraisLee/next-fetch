import "../styles/globals.css";
// 전체 화면 레이아웃 설정
// css 및 플러그인들을 설정
// 공통으로 적용될 컴포넌트(레이아웃) 설정

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
