
function Hero() {
    return(
      <>
      <section className="relative h-screen w-full overflow-hidden bg-black">

         <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hi, I'm Amal Biju
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-200">
          AI & DS Student | Software Developer
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
          Contact Me!
        </button>

      </div>
        </section>
       </>
    )  
}
export default Hero;