import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaSquareGithub } from "react-icons/fa6";

const Social = () => {
    return (
        <div className="flex gap-3">

            <div className="border-2 border-orange-600 rounded-full p-2">
                <CiLinkedin className="text-orange-600 text-2xl" />
            </div>
            <div className="border-2 border-orange-600 rounded-full p-2">
                <FaSquareGithub className="text-orange-600 text-2xl" />
            </div>
            <div className="border-2 border-orange-600 rounded-full p-2">
                <FaFacebook className="text-orange-600 text-2xl" />
            </div>


        </div>
    );
};

export default Social;