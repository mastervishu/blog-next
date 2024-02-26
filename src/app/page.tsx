import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  const words = `Full-stack software developer with one year of experience proficient in Python and JavaScript. Expertise in frameworks including Django, Flask, ReactJS, NodeJS, and ExpressJS. Proven ability to develop web applications and complete projects while adhering to client requirements. Strong problem-solving skills and meticulous attention to detail ensure high-quality results.
`;
  return (
    <div className="p-2 grid place-content-center min-h-full min-w-full">
      <div className="grid sm:grid-cols-6 gap-4 p-4 border  rounded-lg text-white">
        <div className="sm:col-span-2 flex items-center justify-center">
          <Image src={'/assets/picture.png'} width={1024} height={1024} alt="picture" className="z-20 h-auto w-24 sm:w-44" />
        </div>

        <div className="sm:col-span-4">
          <h4 className="text-center font-mono text-3xl">Summary</h4>
          <TextGenerateEffect words={words} />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
