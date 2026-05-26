import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
     
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/Runoma.svg"}
              height={30}
              width={30}
              alt="Runoma"
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Runoma /</span> Software Engineer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jan 2026 - Present, Nigeria
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          Currently, I Work as a frontend developer at Runoma, Runoma is focused on building digital infrastructure for the next generation of brands through high end branding, web, and mobile development.  As a React.js developer with quality years of
          experience, I have a strong foundation in creating dynamic and
          scalable web applications.
          <br />
          <br />
          My experience with React.js has allowed me to develop
          scalable web applications that run responsivelly.
          Additionally, my proficiency in Next.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React 
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
           Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
