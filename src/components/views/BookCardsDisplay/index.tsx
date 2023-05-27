import BookCard from "@/components/shared/Cards"



export default function index({data}:any) {
  if (!data) return <p>Loading...</p>
  return (
    <div className=" bg-white py-16 px-4">
      <a id="latest"></a>
      <h2 className="text-center text-2xl sm:text-4xl text-gray-800 font-semibold py-6">Latest Books</h2>
      <BookCard bookdata= {data}/>
    
    </div>
  )
}
