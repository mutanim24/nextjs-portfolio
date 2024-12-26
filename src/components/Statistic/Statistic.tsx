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
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {datas.map((data, index) => (
                    <div
                        key={index}
                        className="my-4 flex gap-3 items-center justify-center px-16"
                    >
                        <div className="text-[60px] font-bold text-orange-600">
                            <CountUp end={data.number} duration={5} />
                        </div>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistic;
