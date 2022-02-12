import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [navState, setNavState] = useState<any>([]);
  useEffect(() => {
    if (router.pathname === "/") {
      setNavState([false, "", true, true, true]);
    }
    if (router.pathname === "/gift") {
      setNavState([true, "선물 보내기", false, true, true]);
    }
    if (router.pathname === "/cart") {
      setNavState([true, "관심 리스트", true, false, true]);
    }
    if (router.pathname === "/account") {
      setNavState([true, "마이 페이지", true, true, false]);
    }
  }, [router]);
  return (
    <div>
      <NavBar
        backBtn={navState[0]}
        header={navState[1]}
        giftBtn={navState[2]}
        cartBtn={navState[3]}
        accountBtn={navState[4]}
      ></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
