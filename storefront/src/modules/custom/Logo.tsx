// components/Logo.tsx
import Image from "next/image"
import l from "@modules/custom/logo.png"

export default function Logo() {
  return (
    <Image
      src={l} // Replace with your logo path
      alt="Sykooo Logo"
      width={100} // Default width
      height={30} // Default height
      priority
      quality={100}
    />
  )
}
