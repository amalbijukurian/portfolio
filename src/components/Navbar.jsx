function Navbar() {
    return(
        <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold mr-6">Amal Biju</h1>
            <ul className="flex space-x-6 ">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;