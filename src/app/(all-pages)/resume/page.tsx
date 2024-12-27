import AboutMe from "@/components/AboutMe/AboutMe";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const page = () => {
    return (
        <section className='container mx-auto px-8 md:px-0 py-6 md:py-10'>
            <Tabs defaultValue="account" className="md:flex gap-4 md:gap-5">
                <TabsList className="flex flex-col">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about-me">About Me</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <Experience />
                </TabsContent>
                <TabsContent value="education">
                    <Education/>
                </TabsContent>
                <TabsContent value="skills">
                    <Skills />
                </TabsContent>
                <TabsContent value="about-me">
                    <AboutMe />
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default page;