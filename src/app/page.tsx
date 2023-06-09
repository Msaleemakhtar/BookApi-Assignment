

import HeroSection from '@/components/views/HeroSection'
import BookCardsDisplay from '@/components/views/BookCardsDisplay'

async function getBookData() {
  const response = await fetch('https://simple-books-api.glitch.me/books');
  const data = await response.json();
  return data;
}




export default async function Home() {
  let bookData = await getBookData ()
  return (
   <div>
<HeroSection/>
 <BookCardsDisplay data= {bookData}/> 
   
   </div>
  )
}
