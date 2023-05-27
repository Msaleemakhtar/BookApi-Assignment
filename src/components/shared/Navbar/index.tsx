import { NavbarData } from "@/components/navbarData";
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="mt-10 ml-0 sm:ml-20  shadow-lg 
rounded-full w-full sm:w-[30rem] px-2 sm:px-4 py-2 
flex justify-center items-center gap-4 sm:gap-7 font-serif text-base sm:text-lg bg-white"
    >
      {NavbarData.map((item, index) => (
        <Link
          key={index + 2}
          href={item.href ? item.href : "/"}
          className="hover:-mt-2 duration-200 text-black hover:text-[#ec42a5]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
