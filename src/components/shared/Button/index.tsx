
interface textType{
    text:string
}


export default function Button ({text}:textType) {
  return (
    <button className = "m-2 py-2 px-6 font-bold bg-teal-500 rounded-full hover:bg-teal-600 duration-300">{text}</button>
  )
}
