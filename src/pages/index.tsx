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

export default function HomePage() {
  const [verifyOTP, setVerifyOTP] = useState(false);

  function handleVerifyOTPClick() {
    setVerifyOTP(!verifyOTP);
  }
  return (
    <>
      <div className={styled.main_container}>
        <iframe
          src="https://en.wikipedia.org/wiki/Capital_market"
          width="100%"
          height="800px"
        ></iframe>
      </div>
      {/* {verifyOTP == false ? (
        <div className={styled.main_container}>
          <form className={styled.form_container} action="">
            <div className={styled.input_content}>
              <label htmlFor="phone_number">Phone</label>
              <input
                className={styled.input_class}
                type="text"
                name="phone_number"
                id="phoneNumber"
              />
            </div>
            <button
              onClick={() => {
                handleVerifyOTPClick();
              }}
              className={styled.submit_button}
              type="submit"
            >
              Send OTP
            </button>
          </form>
        </div>
      ) : (
        <div className={styled.main_container}>
          <form className={styled.form_container} action="">
            <div className={styled.input_content}>
              <label htmlFor="opt_number">Enter OTP</label>
              <input
                className={styled.input_class}
                type="text"
                name="otp_number"
                id="otpNumber"
              />
            </div>
            <button className={styled.submit_button} type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )} */}
    </>
  );
}
