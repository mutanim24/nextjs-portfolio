
const Education = () => {
    const educationData = [
        {
            institution: "University of Example",
            degree: "Bachelor of Science in Computer Science",
            startDate: "September 2015",
            endDate: "June 2019",
            description: "Focused on software engineering, algorithms, and data structures."
        },
        {
            institution: "Example Institute of Technology",
            degree: "Master of Science in Information Technology",
            startDate: "September 2019",
            endDate: "June 2021",
            description: "Specialized in cybersecurity and network infrastructure."
        },
        {
            institution: "Example Institute of Technology",
            degree: "Master of Science in Information Technology",
            startDate: "September 2019",
            endDate: "June 2021",
            description: "Specialized in cybersecurity and network infrastructure."
        },
        {
            institution: "Example Institute of Technology",
            degree: "Master of Science in Information Technology",
            startDate: "September 2019",
            endDate: "June 2021",
            description: "Specialized in cybersecurity and network infrastructure."
        },
    ];
    return (
        <div className="space-y-3 md:space-y-4 md:px-10">
            <h2 className="text-3xl font-semibold text-orange-600">My Education</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit, ipsum dolorem, ab laudantium omnis deleniti eos inventore. Recusandae, ex. At tempora perferendis ut nulla magnam ipsa, qui earum cum unde voluptas sequi, quidem sapiente non iure reiciendis?</p>      
            <div className="grid md:grid-cols-2 gap-5">
                {
                    educationData.map((item, index) => (
                        <div key={index} className="space-y-2 p-6 shadow-lg bg-gray-900">
                            <h3 className="text-orange-600 font-bold">{item.startDate} - {item.endDate}</h3>
                            <h4 className="text-xl font-semibold">{item.degree}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Education;