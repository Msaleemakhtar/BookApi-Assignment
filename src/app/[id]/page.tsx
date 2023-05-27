import Image from "next/image";
import Book2Image from "@/components/assets/images/book2.png";
import Button from "@/components/shared/Button";
import { BsFillBookFill } from "react-icons/bs";
import OnScreen from "@/components/views/Onscreen"





interface  bookType {
  id: number,
  name: string,
  type: string,
  available: boolean
}

async function getBookData() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  return response.json();
}

export default async function BookReview({
  params,
}: {
  params: { id: string };
}) {
  const booksdata = await getBookData();

  const Books = booksdata.find((item: bookType) => item.id == Number(params.id));

  if (!Books) return <p> Loading...</p>;
  return (
    <div>
      <h1 className=" py-8 text-center font-semibold text-2xl md:text-4xl ">
        Book Detail
      </h1>
      <div className="flex flex-col-reverse  md:flex-row justify-around items-center  ">
        <div className="space-y-4 ">
          <h4 className="text-lg font-semibold"> {Books.name} </h4>
          <p> Type : {Books.type}</p>
          <p> Price: Not Available </p>
          <p className="flex gap-2 items-center ">
            <BsFillBookFill />
            {Books.available ? "Available" : "Not available"} in stock
          </p>

          <div className="mt-4 flex space-x-4">
         <OnScreen id = {Books.id} available = {Books.available}/>
            <Button text="Add to Cart" />
          </div>
        </div>

        <div>
          <Image src={Book2Image} width={300} height={300} alt="book image" />
        </div>
      </div>
    </div>
  );
}
