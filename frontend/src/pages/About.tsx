import BlurFade from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(480px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex justify-center">
        <div className="flex flex-col self-center md:items-center md:w-3/5">
          <BlurFade
            delay={0.25}
            yOffset={-6}
            duration={0.6}
            inView
            className="flex flex-col md:flex-row md:min-w-[450px]"
          >
            <h1 className="pb-5 pr-3 leading-none text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text pointer-events-none select-none">
              We Are
            </h1>
            <WordRotate
              className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text pointer-events-none select-none"
              words={[
                "Efficient",
                "Intuitive",
                "Modern",
                "Reliable",
                "Dynamic",
                "Innovative",
                "Seamless",
                "Versatile",
              ]}
            />
          </BlurFade>
          <BlurFade delay={0.25 * 3} yOffset={-3} duration={0.6} inView>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              error itaque, nemo nesciunt ipsam voluptates aliquid aut
              architecto vel id, ea iusto officia cumque dolor non iure, libero
              ipsa! Aperiam.
            </p>
          </BlurFade>
        </div>
      </div>
    </>
  );
};

export default About;
