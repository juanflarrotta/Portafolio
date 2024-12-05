"use client";
import GithubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import LinkedinIcon from "@/icons/linkedin";
import { useState } from "react";

export default function Contact() {
  const [active, setActive] = useState(false);

  const handlerClic = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-center p-4 row-start-3 h-16 self-end relative">
      <button
        type="button"
        className={`py-1 px-2 rounded-lg font-medium z-10 hover:cursor-pointer ${
          active ? "bg-white text-gold" : "bg-gold text-white"
        }`}
        onClick={handlerClic}
      >
        Contact Me
      </button>
      <div className={`w-52 h-16 absolute flex bottom-16 gap-`}>
        <div
          className={`flex absolute transition-all rounded-full w-16 h-16 bg-white items-center justify-center ${
            active ? "top-0 left-0" : "top-16 left-c72 opacity-0 invisible"
          }`}
        >
          <a
            href="mailto:juanlarrotta@gmail.com"
            className="text-white capitalize text-base font-light"
          >
            <GmailIcon />
          </a>
        </div>
        <div
          className={`flex absolute transition-all rounded-full w-16 h-16 bg-white items-center justify-center ${
            active ? "top-0 left-c72" : "top-16 left-c72 opacity-0 invisible"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/juan-fernando-larrotta-bernal-123b12125/"
            className="text-white capitalize text-base font-light"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div
          className={`flex absolute transition-all rounded-full w-16 h-16 bg-white items-center justify-center ${
            active ? "top-0 left-36" : "top-16 left-c72 opacity-0 invisible"
          }`}
        >
          <a
            href="https://github.com/juanflarrotta"
            className="text-white capitalize text-base font-light"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
