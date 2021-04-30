import Navbar from "./shared/navbar/Navbar";
// import Styles from "./layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
