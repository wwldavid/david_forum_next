"use client";  
import Image from "next/image";

export default function Logo() {
  return (
    <Image 
      src="/logo.png" 
      alt="my Logo" 
      width={90}
      height={30}
      priority
      style={{ width: "auto", height: "auto" }}
    />
  );
}