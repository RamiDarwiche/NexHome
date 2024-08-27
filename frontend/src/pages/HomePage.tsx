import { MainAnimatedList } from "@/components/AnimatedList";
import BlurFade from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import Particles from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Particles
        className="absolute inset-0 -z-1 pointer-events-none"
        color={"#52B4DF"}
        quantity={600}
        size={0.6}
        staticity={45}
      />
      <div className="title container flex flex-col justify-center items-center">
        <BlurFade delay={0.25} yOffset={-6} duration={0.6} inView>
          <h2 className="text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text pointer-events-none select-none">
            NexHome
          </h2>
        </BlurFade>
        <BlurFade
          delay={0.25 * 3}
          yOffset={-3}
          duration={0.6}
          inView
          className="flex"
        >
          <h3 className="text-xl pt-3 pb-6 tracking-tighter pointer-events-none select-none">
            The smarter way to communicate
          </h3>
        </BlurFade>
        {/* replace dot pattern with particles? */}
        {/* <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        /> */}
        {/* fix bug with particle background on resize */}
      </div>
      <div className="flex flex-col md:flex-row max-w-3/5 z-1">
        <BlurFade delay={0.25 * 5} yOffset={-3} duration={0.6}>
          <MainAnimatedList />
        </BlurFade>
        <BlurFade delay={0.25 * 5} yOffset={-3} duration={0.6}>
          <div className="container max-w-[350px] md:pr-0">
            <h1 className="pt-6 pb-2 text-3xl md:text-3xl md:pt-0 font-medium tracking-tighter text-primary-sdlight1 pointer-events-none select-none">
              Remove the stress from your transactions
            </h1>
            <p className="pointer-events-none select-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              quibusdam, sit possimus voluptate dolore nulla atque soluta
              consequatur. Accusantium nisi fuga repellendus dignissimos dolorem
              ipsam commodi fugit debitis nemo voluptatum!
            </p>
            <div className="flex justify-center gap-x-5 py-16">
              <Button className="bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
                Learn More
              </Button>
              <Button className="bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
                Subscribe
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default HomePage;
