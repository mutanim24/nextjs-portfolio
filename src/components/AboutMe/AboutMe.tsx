
const AboutMe = () => {
    return (
        <div className="space-y-4 md:px-10">
            <h2 className="text-3xl font-semibold text-orange-600">About Me</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto facilis quisquam neque expedita quae, esse quod voluptatum consequatur voluptate et fugit, ipsum dolorem, ab laudantium omnis deleniti eos inventore. Recusandae, ex. At tempora perferendis ut nulla magnam ipsa, qui earum cum unde voluptas sequi, quidem sapiente non iure reiciendis?</p>      
            <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2">
                    <h2>Name: Muhim Uddin</h2>
                    <h2>Age: 25</h2>
                    <h2>Location: New York, USA</h2>
                    <h2>Profession: Software Developer</h2>
                </div>
                <div className="space-y-2">
                    <h2>Name: Muhim Uddin</h2>
                    <h2>Age: 25</h2>
                    <h2>Location: New York, USA</h2>
                    <h2>Profession: Software Developer</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;