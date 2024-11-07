import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
   return (
     <>
       <section className="hero bg-gradient-to-r from-blue-900 to-yellow-500 h-screen flex items-center justify-center">
         <div className="text-center text-white">
           <h1 className="text-5xl font-bold mb-4">Sykooo</h1>
           <p className="text-2xl mb-8">
             Your one-stop shop for traditional Indian wear.
           </p>
           <button className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-900 hover:text-white">
             Subscribe for Updates
           </button>
         </div>
       </section>
     </>
   )
}

export default Hero
