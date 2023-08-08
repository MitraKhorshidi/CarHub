import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constans";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-100 text-black-100 mt-5 px-6">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16  py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-gray-700">
            Cur Hub 2023
            <br />
            All Right Reserved &copy;
          </p>
        </div>
        </div>
        <div className="footer__links">
          {footerLinks.map((list) => (
            <div className="footer__link" key={list.title}>
              <h3 className="font-bold">{list.title}</h3>
              {list.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 CarHub. All Right Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">Privacy Policy</Link>
            <Link href="/" className="text-gray-500">Terms of use</Link>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
