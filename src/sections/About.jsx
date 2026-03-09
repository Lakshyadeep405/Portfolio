import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I am Lakshyadeep a web developer and founder with a passion for building things that actually matter.
I specialize in crafting visually compelling, interactive web experiences with smooth animations and intuitive UI/UX. Beyond just writing code, I'm an entrepreneur actively running Code Udaan — an initiative training 50 beginner students to become full-stack AI developers — which means I don't just build for clients, I build to teach, scale, and create impact.
My frontend stack revolves around React.js and Next.js, and I'm constantly leveling up from mastering modern animation techniques with GSAP and Framer Motion to optimizing performance for real world production apps. I bring the same energy to every project: whether it's a local business's first website or a platform designed to grow.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-5 pb-16 text-xl font-light tracking-wide lg:flex-row md:px-10 md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/me.jpeg"
          alt="Lakshyadeep"
          className="max-w-md w-full rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
