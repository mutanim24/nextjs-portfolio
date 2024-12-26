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
            <div>
                <div className="flex justify-between items-center h-full gap-10">
                    <div className="flex flex-col gap-5 w-6/12">
                        <h4 className="font-bold">Software Developer</h4>
                        <h2 className="text-3xl">Hello, I am <br /><span className="text-5xl font-bold text-orange-600">Muhim Uddin Tanim</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam corrupti minus quis. Nulla culpa provident consectetur inventore perferendis dolorem eaque praesentium molestias ipsa. Quos iure molestiae quidem ratione, placeat illum. Vitae quasi consequatur praesentium consequuntur, aut soluta enim similique modi veritatis autem eaque nam voluptatibus animi, libero perspiciatis quis. Dicta?</p>
                        <div className="flex gap-3">
                            <Button className="bg-orange-600 text-white">
                                <span>Download CV</span>
                                <FaDownload />
                            </Button>
                            <Social />
                        </div>

                    </div>
                    <div className="w-6/12 text-center p-28">
                        <img className="rounded-full mix-blend-lighten" src="/img/profile.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectio;