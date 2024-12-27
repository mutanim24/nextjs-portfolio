import { FaDownload } from "react-icons/fa6";
import { Button } from "../ui/button";
import Social from "../Social/Social";
import { BackgroundLines } from "../ui/background-lines";
import { div } from "framer-motion/client";

const HeroSectio = () => {
    return (

        <div>
            {/* <BackgroundLines className="flex z-0 items-center justify-center w-full flex-col px-4">
            
            </BackgroundLines> */}

            <div className="md:flex flex-col md:flex-row justify-between items-center h-full gap-10">
                <div className="flex flex-col gap-5 md:w-6/12 order-2 md:order-1">
                    <h4 className="font-semibold md:font-bold">Software Developer</h4>
                    <h2 className="text-xl md:text-3xl">Hello, I am <br /><span className="text-3xl md:text-5xl font-bold text-orange-600">Muhim Uddin Tanim</span></h2>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam corrupti minus quis. Nulla culpa provident consectetur inventore perferendis dolorem eaque praesentium molestias ipsa. Quos iure molestiae quidem ratione, placeat illum. Vitae quasi consequatur praesentium consequuntur, aut soluta enim similique modi veritatis autem eaque nam voluptatibus animi, libero perspiciatis quis. Dicta?</p>
                    <div className="flex gap-3">
                        <Button className="bg-orange-600 text-white">
                            <span>Download CV</span>
                            <FaDownload />
                        </Button>
                        <Social />
                    </div>

                </div>
                <div className="md:w-6/12 order-1 md:order-2 text-center p-3 md:p-28">
                    <img className="rounded-full mix-blend-lighten" src="/img/profile.jpg" />
                </div>
            </div>
        </div>
    );
};

export default HeroSectio;