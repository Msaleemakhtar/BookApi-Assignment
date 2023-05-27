"use client";
import Image from "next/image";
import { FaArrowCircleDown} from "react-icons/fa";

import BookImage3 from "@/components/assets/images/book1.jpg";
import Button from "@/components/shared/Button";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link"

const HeroSection = ()=> {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current ? el.current : " ", {
      strings: [
        "There is no Friends as loyal as Books.",
        "A book is a Gift you can open again and again.",
        "Books let you travel without moving your feets.",
        "A room without books is like body without soul.",
        "Take a good book to bed with you - books dn't snore.",
        "Books are a uniquely portable magic.",
        "Fiction reveals truths that reality obscures.",
        "Books are the traning weight of mind.",
        "A reader lives a thousand lives before he die.",
      ],
    
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="-z-50 fixed inset-0 h-[38rem] ">
        <Image
          className="h-full w-full  object-cover 2xl:object-center object-left-top"
          src={BookImage3}
          alt="Book Reading"
        />
      </div>
      <div className="w-full text-center sm:text-left h-full pl-0 sm:pl-20 py-[10.3rem] sm:px-3 px-0">
        <h1 className="h-28 max-w-2xl text-2xl sm:text-3xl md:text-5xl font-semibold">
          <span ref={el}> </span>
        </h1>
        <div >
          <Link href = "/books">
          <Button text="Browes All Books" /> </Link>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className=" cursor-pointer animate-bounce p-3 rounded-full border-2 border-pink-300 shadow-3xl">
          <a href="#latest">
            <FaArrowCircleDown />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;