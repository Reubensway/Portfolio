import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://villagesquare.io/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:w-1/2"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="VillageSquare Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">VillageSquare</p>
                <p className="text-gray-500 text-[10px]">
                  I developed a social media web Application using React.js.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="https://Runoma.com.ng"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:w-1/2"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="Runoma Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Runoma</p>
                <p className="text-gray-500 text-[10px]">
                  I Designed and developed Runoma&apos;s website
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://www.imcgungahlin.com.au/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:w-1/2"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="IMC Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  IMC
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed and Developed a clinic website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://naija-style.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:w-1/2"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="NaijaStyle Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">NaijaStyle</p>
                <p className="text-gray-500 text-[10px]">
                  Designed and developed a modern E-commerce website.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
