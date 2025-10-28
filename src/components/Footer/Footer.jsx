import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import { FaLinkedin, FaSquareBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col py-12 text-center md:py-14 gap-7 md:gap-11 md:text-xl">
      <div className="flex justify-center gap-4 socials">
        {/* <Link href={'/'}><Image src={'/linkedin_icon.svg'} width={40} height={40}/></Link>
        <Link href={'/'}><Image src={'/behance_icon.svg'} width={40} height={40}/></Link> */}
        <Link
          href={"https://www.linkedin.com/in/deepali-babuta-33165920a/"}
          target="_blank"
        >
          <FaLinkedin className="text-3xl social-icons md:text-4xl" />
        </Link>
        <Link href={"https://www.behance.net/deepalibabuta"} target="_blank">
          <FaSquareBehance className="text-3xl social-icons md:text-4xl" />
        </Link>
      </div>
      <div className="flex flex-col gap-1 details md:gap-3">
        <div>
          Phone: <Link href={"tel:201-993-6070"}>+1 201-993-6070</Link>
        </div>
        <div>
          Email:{" "}
          <Link href={"mailto:deepalibabuta@gmail.com"}>
            deepalibabuta@gmail.com
          </Link>
        </div>
      </div>
      <div className="opacity-50 rights">
        &#169; Copyright 2024 Deepali. Made with{" "}
        <Image
          className="inline-block"
          src={"/heart.png"}
          width={16}
          height={16}
        />
      </div>
    </footer>
  );
};

export default Footer;
