import Image from "next/image";
import BookImage from "@/components/assets/images/book2.png";




export default function Cards({ bookdata }: any) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 text-black font-semibold">
      {bookdata.map((item: any, index: number) => (
        <a key={index} href={item.id}>
          <div className="relative py-10 px-6 shadow-xl border-1 rounded-lg bg-blue-100">
            <h2> Book Title : {item.name}</h2>
            <h4>Type : (Book)</h4>
            <p className="text-center text-sm text-red-600 mt-4">
              {item.available ? "available in stock" : "Not available in stock"}
            </p>
            <Image
              src={BookImage}
              width={100}
              height={100}
              alt="book Image"
              className="absolute top-8 right-6"
            />
          
          </div>
        
        </a>
      ))}
    </div>
  );
}
