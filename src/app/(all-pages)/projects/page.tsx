"use client";
import { ArrowDownRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react";

// import Swiper JS
import{ Swiper, SwiperSlide} from 'swiper/react';
// import Swiper styles
import 'swiper/css';

// const swiper = new Swiper(...);


const page = () => {
    const projects = [
        {
            "num": "01",
            "category": "Full-stack",
            "title": "Project 1",
            "description": "A comprehensive web application to manage tasks efficiently.",
            "stack": [
                { "name": "React" },
                { "name": "Node.js" },
                { "name": "MongoDB" }
            ],
            "image": "/img/project1.jpg",
            "live": "https://project1.live",
            "github": "https://github.com/user/project1"
        },
        {
            "num": "02",
            "category": "Front-end",
            "title": "Project 2",
            "description": "Lorem ipsum dolor  elit. Cupiditate magnam modi.",
            "stack": [
                { "name": "Next.js" },
                { "name": "Tailwind.css" },
                { "name": "Node.js" }
            ],
            "image": "/img/project2.jpg",
            "live": "https://project2.live",
            "github": "https://github.com/user/project2"
        },
        {
            "num": "03",
            "category": "WordPress",
            "title": "Project 3",
            "description": "An e-commerce site with a user-friendly interface for online shopping.",
            "stack": [
                { "name": "Vue.js" },
                { "name": "Express.js" },
                { "name": "MySQL" }
            ],
            "image": "/img/project3.jpg",
            "live": "https://project3.live",
            "github": "https://github.com/user/project3"
        },
        {
            "num": "04",
            "category": "Front-end",
            "title": "Project 4",
            "description": "A blogging platform that allows users to share their stories and thoughts.",
            "stack": [
                { "name": "Angular" },
                { "name": "Firebase" },
                { "name": "Django" }
            ],
            "image": "/img/project4.jpg",
            "live": "https://project4.live",
            "github": "https://github.com/user/project4"
        },
        {
            "num": "05",
            "category": "Full-stack",
            "title": "Project 5",
            "description": "A social media app connecting people through shared interests.",
            "stack": [
                { "name": "Svelte" },
                { "name": "GraphQL" },
                { "name": "PostgreSQL" }
            ],
            "image": "/img/project5.jpg",
            "live": "https://project5.live",
            "github": "https://github.com/user/project5"
        }
    ]

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        console.log(swiper);
        setProject(projects[swiper.activeIndex]);
    }

    return (
        <div className="container mx-auto px-8 md:px-0">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="w-full md:w-6/12 order-1 md:order-2">
                    <Swiper
                    className="h-[250px] md:h-[400px] w-full"
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}>
                        {
                            projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <img src={project.image} alt={project.title} className="w-full h-[250px] md:h-[400px] object-cover" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="w-full md:w-6/12 order-2 md:order-1 h-[250px] md:h-[400px]">
                    {/* <h2 className="text-3xl font-bold text-center py-10">Projects</h2> */}
                    <div className="">
                        <div className="bg-gray-900 p-5 rounded-lg space-y-3 md:space-y-5 group h-[250px] md:h-[400px]">
                            <h1 className="text-5xl md:text-[60px] font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{project.num}</h1>
                            <h2 className="text-xl md:text-3xl font-semibold group-hover:text-orange-600 transition-all duration-500">{project.category}</h2>

                            <p className="text-gray-400 mt-2">{project.description}</p>
                            <div className="flex justify-between items-center">

                                <div className="flex gap-2">
                                    {project.stack.map((stack, index) => (
                                        <span key={index} className="bg-gray-300 text-gray-600 px-2 py-1 rounded-full">{stack.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[1px] bg-orange-600"></div>
                            <div className="flex gap-5">

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="bg-gray-800 hover:bg-orange-600 transition-all duration-500 h-10 w-10 flex justify-center items-center">
                                                <ArrowDownRight />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live link</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="bg-gray-800 hover:bg-orange-600 transition-all duration-500 h-10 w-10 flex justify-center items-center">
                                                <BsGithub />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github link</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;