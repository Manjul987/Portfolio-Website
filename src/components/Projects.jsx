import React from "react";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import mongoDB from "../../public/mongoDB.png";
import python from "../../public/python.png";

function Projects() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: node,
            name: "Nodejs"
        },
        {
            id: 3,
            logo: python,
            name: "Python"
        },
        {
            id: 4,
            logo: reactjs,
            name: "Reactjs"
        },
    ];

    return (
        <div name="Projects"className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {cardItem.map(({ id, logo, name }) => (
                        <div key={id} className="border p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-110 duration-300">
                            <img src={logo} alt={name} className="w-20 h-20 mb-4" />
                            <div className="text-center">
                                <h2 className="text-xl font-semibold">{name}</h2>
                                <p className="text-red-600">Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
                            </div>
                            <div className="mt-4">
                            <a href="https://github.com/Manjul987" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Source code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
