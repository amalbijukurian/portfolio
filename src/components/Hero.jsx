import Scene from "./Scene";

function Hero() {
    return(
        <section className="h-screen w-full flex">
            <div className="w-1/2 flex flex-col justify-center px-12 bg-gray-100 text-gray-800">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Amal Biju
        </h1>
        <p className="text-xl mb-2">I'm an AI & DS student</p>
        <p className="text-xl">Software Developer</p>
      </div>

      <div className="w-1/2 h-full">
        <Scene />
      </div>
        </section>

    )  
}
export default Hero;