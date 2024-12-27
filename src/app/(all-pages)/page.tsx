import HeroSectio from "@/components/HeroSection/HeroSectio";
import Statistic from "@/components/Statistic/Statistic";
export default function Home() {
  return (
    <section className="container h-full mx-auto px-8 md:px-0">
     <HeroSectio/>
      <Statistic/>
    </section>
  );
}
