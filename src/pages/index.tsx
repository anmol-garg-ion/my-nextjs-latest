// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <h1>Hello World</h1>
//       <Link href="/users">Users</Link>{" "}
//       {/* client side navigation by only calling the link and not downloading resources every single time like anchor tag */}
//     </main>
//   );
// }

import { useState } from "react";
import styled from "../styles/Home.module.css";
import NewsGrid from "./news-grid";

export default function HomePage() {
  const [verifyOTP, setVerifyOTP] = useState(false);

  function handleVerifyOTPClick() {
    setVerifyOTP(!verifyOTP);
  }
  return (
    <>
      <div className={styled.main_container}>
        {/* <iframe src="news-grid" width="100%" height="800px"></iframe> */}
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <NewsGrid></NewsGrid>
        </div>
      </div>
    </>
  );
}
