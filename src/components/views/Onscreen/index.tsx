
"use client"


import Button from "@/components/shared/Button"
import BookImage from "@/components/assets/images/book2.png";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image"
import {useState} from "react"


const OnScreen = ({id, available}:{id: number, available:boolean}) =>{
  const[Onscreen, setOnscreen] =  useState(false);


  return (
    <div>
          <div>

            <Button text = "Place Order"/>
          </div>
      
      
      </div>
  )
}



export default  OnScreen ;