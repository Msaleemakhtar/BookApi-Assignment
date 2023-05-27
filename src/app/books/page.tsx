


import BookCardsDisplay from '@/components/views/BookCardsDisplay'

async function getBookData (){
  const response = await fetch('https://simple-books-api.glitch.me/books');
  return response.json ();
}


export default async function Home() {
  let bookData = await getBookData ()
  return (
   <div className='mt-10'>

 <BookCardsDisplay data= {bookData}/>
   
   </div>
  )
}
