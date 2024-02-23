import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://google.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "https://google.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://google.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      href: "httpd://google.com",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:ml-[-10px] rounded-md ml-[-100px]  duration-300 ${style}`}
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className=" flex justify-between  w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
