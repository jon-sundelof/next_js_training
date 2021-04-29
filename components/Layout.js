import Navbar from "./shared/navbar/Navbar";
// import Styles from "./layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Jesper & Jon's Adventures</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta charset="utf-8" />
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
      {/* <about /> */}
    </div>
  );
};

export default Layout;
