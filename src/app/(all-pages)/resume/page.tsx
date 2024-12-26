import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const page = () => {
    return (
        <section className='container mx-auto py-10'>
            <Tabs defaultValue="account" className="flex gap-5">
                <TabsList className="flex flex-col">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="axfd">Education</TabsTrigger>
                    <TabsTrigger value="acdfdfunt">Skills</TabsTrigger>
                    <TabsTrigger value="about-me">About Me</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <Experience />
                </TabsContent>
                <TabsContent value="about-me">
                    <AboutMe />
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default page;