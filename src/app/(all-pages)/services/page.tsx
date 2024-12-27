import { section } from "framer-motion/client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const page = () => {
    const services = [
        {
            num: "01",
            href: "/web-development",
            title: "Web Development",
            description: "I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc. I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc."
        },
        {
            num: "02",
            href: "/web-development",
            title: "Web Development",
            description: "I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc. I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc."
        },
        {
            num: "03",
            href: "/web-development",
            title: "Web Development",
            description: "I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc. I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc."
        },
        {
            num: "04",
            href: "/web-development",
            title: "Web Development",
            description: "I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc. I can build a website from scratch using modern technologies like React, Next.js, Tailwind CSS, etc."
        },
    ]
    return (
        <section className="container mx-auto h-full py-10 md:py-20 px-8 md:px-0">
            <div className="grid md:grid-cols-2 gap-16 ">
                {
                    services.map((service, index) => (
                        <div key={index} className="items-center space-y-5 border-b border-b-orange-600 pb-3 group">
                            <div className="flex justify-between items-center text-white rounded-full">
                                <h1 className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500 transition-all"> {service.num}</h1>
                                <Link href={service.href} className="text-black bg-white group-hover:bg-orange-600 p-3 rounded-full hover:-rotate-45 duration-500 transition-all">
                                    <BsArrowDownRight className="text-base md:text-2xl" />
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-orange-600 duration-500 transition-all">{service.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default page;