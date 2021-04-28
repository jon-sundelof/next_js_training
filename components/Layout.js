import Navbar from "./Navbar";
// import Styles from "./layout.module.css";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>JesperAndJon</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta charset="utf-8" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Layout;
