import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav
            className={`transition-all duration-300 fixed w-full left-0 top-0 z-[999] ${
                sticky ? "bg-white/80 text-gray-900" : "text-white"
            }`}
        >
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold">
                        B<span className="text-cyan-600">ru</span>ce
                    </h4>
                </div>
                <div
                    className={`text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full ${
                        sticky ? "md:bg-white/0 bg-white" : "bg-white"
                    }`}
                >
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className="px-6 hover:text-cyan-600">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={`z-[999] text-3xl md:hidden m-5 
                    ${open ? "text-gray-900" : "text-gray-100"}`}
                    onClick={() => setOpen(!open)}
                >
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div
                    className={`transition-all duration-300 md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0 ${
                        open ? "right-0" : "right-[-100%]"
                    }`}
                >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className={`px-6 hover:text-cyan-600`}>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
