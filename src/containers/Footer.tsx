import Link from "next/link";
import Image from "next/image";

import styled from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styled.footer_container}>
      <div className={styled.main_container}>
        <div className={styled.logo_container}>
          <Link href={"/"}>
            <Image
              className={styled.logo_image}
              src="/mergermarket-logo.png"
              width={300}
              height={70}
              alt="logo"
            />
          </Link>
          <div className={styled.logo_text}>
            <p>A React Framework</p>
          </div>
        </div>
        <ul className={styled.quicklinks_container}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/product"}>Products</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/privacy policy"}>Privacy policy</Link>
          </li>
        </ul>
        <p className={styled.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aliquid,
          natus dolorem pariatur exercitationem reiciendis animi perferendis.
          Autem magnam dolorem dolor debitis saepe accusamus doloremque, cumque
          omnis illum veritatis eaque distinctio? Culpa deserunt blanditiis
          debitis animi molestias impedit tempore accusamus doloribus. Quis
          voluptatibus voluptas sed fugiat facere, sit ullam placeat!
        </p>
      </div>
      <p className={styled.copyright}>
        Copyright © 2024 Demo, Inc. All rights reserved.
      </p>
    </footer>
  );
}
