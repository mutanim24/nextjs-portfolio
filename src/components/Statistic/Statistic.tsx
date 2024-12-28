"use client";
import CountUp from 'react-countup';

const Statistic = () => {
    const datas = [
        {
            number: 8,
            text: "Years of Experience",
        },
        {
            number: 211,
            text: "Happy Clients",
        },
        {
            number: 386,
            text: "Projects Completed",
        },
        {
            number: 111,
            text: "Awards Won",
        },
    ];

    return (
        <div className="container mx-auto  mt-10 md:mt-0">
            <div className="grid md:grid-cols-4 md:gap-4">
                {datas.map((data, index) => (
                    <div
                        key={index}
                        className="my-4 flex gap-3 items-center justify-center px-16"
                    >
                        <div className="text-5xl md:text-[60px] font-bold text-orange-600">
                            <CountUp end={data.number} duration={5} />
                        </div>
                        <p className='text-sm md:text-base'>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistic;
