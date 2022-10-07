import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
