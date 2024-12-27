import { DiJavascript, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
    const items = [
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiJavascript className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <SiTypescript className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiReact className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiReact className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiReact className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <RiNextjsFill className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiMongodb className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiNodejs className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiNodejs className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit.'  ,
            icon: <DiNodejs className="text-[70px] group-hover:text-orange-600 duration-500 transition-all"/> 
        },
    ]
    return (
        <div className="space-y-4 md:px-10">
            <h2 className="text-3xl font-semibold text-orange-600">My Skills</h2>
            <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magnam praesentium aut debitis optio deleniti a labore! Vel pariatur sapiente fugiat consectetur minima deleniti dolorum fuga vitae, qui repellat sint quia quo dignissimos nam cumque inventore explicabo commodi distinctio dolore eius illum? Possimus consectetur deleniti reprehenderit sapiente dolore quasi esse.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {
                    items.map((item, index) => (
                    <div  className="group rounded bg-gray-900 h-[150px] w-[150px] flex justify-center  items-center" key={index}>
                            {item.icon}
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;