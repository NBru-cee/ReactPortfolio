import React from "react";

const Project = () => {
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>

            <br />
            <div className="flex max-w-6xl px-5 mx-auto items-center relative">
                <div className="w-full lg:w-2/3"></div>
            </div>
        </section>
    );
};

export default Project;
