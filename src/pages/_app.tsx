import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  const noLayoutPages = ["/cv"];

  const isNoLayoutPage = noLayoutPages.includes(router.pathname);

  return (
    <div className="main-content">
      {!isNoLayoutPage && <Header />}
      <div className="content">
        <Component {...pageProps} />
      </div>
      {!isNoLayoutPage && <Footer />}
    </div>
  );
}

export default MyApp;
