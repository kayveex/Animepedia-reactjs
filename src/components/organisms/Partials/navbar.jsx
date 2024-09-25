/* eslint-disable react/prop-types */


const Navbar = ({title}) => {
    return (
        <nav className="flex flex-col md:flex-row lg:flex-row py-4 px-6 w-full h-[75px] bg-secondaryDark">
            <div className="flex flex-row w-1/2 items-center">
                <h1 className="text-purple-300 my-2 font-bold text-xl">{title}</h1>
            </div>
            <div className="flex flex-row w-1/2 items-center">
                <ul className="hidden md:flex md:flex-row justify-end w-full items-center">
                    <li className="mx-4 text-white hover:text-purple-500"><a href="#">Anime</a></li>
                    <li className="mx-4 text-white hover:text-purple-500"><a href="#">Manga</a></li>
                    <li className="mx-4 text-white hover:text-purple-500"><a href="#">About</a></li>
                    <a className="ml-4 py-2 px-6 font-bold bg-purple-500 text-white rounded-md" href="#">
                    Login
                    </a>
                </ul>

            </div>
        </nav>
    );

}

export default Navbar