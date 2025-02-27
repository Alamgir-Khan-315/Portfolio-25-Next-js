import React from "react";
import Image from "next/image";
import Boy from "/public/Boy/Boy.jpg";

const home = () => {
  return (
    <div>
      <div className="container mx-auto md:flex md:h-[100vh] p-4 items-center gap-5 justify-between">
        <div className="text font-bold md:w-[60%]">
          <div className="name md:-mt-[10%] sm:text-center md:text-start">
            <h1 className="mt-[.5rem] text-2xl lg:lg_title outer_box relative">
              <div className="absolute -top-1 -left-1 bg-blue-500 size-3"></div>
              <div className="absolute -top-1 -right-1 bg-blue-500 size-3"></div>
              Hello !<div className="absolute -left-1 bg-blue-500 size-3"></div>
              <div className="absolute -right-1 bg-blue-500 size-3"></div>
            </h1>
            <h1 className="mt-[1rem] text-3xl lg:lg_title">
              I`m <span className="text-blue-500">Alamgir Khan ,</span>
            </h1>
            <h1 className="mt-[1rem] text-3xl lg:lg_title">Web Developer</h1>
          </div>

          <div className="mt-5 p font-normal text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            facere eligendi minus autem corporis! Corrupti, optio quam officia
            sint ab magni deleniti minima esse nobis, vitae neque dolore vel
            numquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Unde facere eligendi minus autem corporis! Corrupti, optio quam
            officia sint ab magni deleniti minima esse nobis, vitae neque dolore
            vel numquam!
          </div>

          <div className="btn my-5 flex gap-3">
            <div className="btn_blue">Hire Me</div>
            <div className="btn_gray">Whatsapp</div>
          </div>
        </div>

        <div className="img relative">
          <Image
            src={Boy}
            alt="Description of the image"
            className="z-10"
            width={500}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
          />
          <div className="absolute p-2 px-3 rounded-full top-2 md:top-20 md:left-3 -z-1 text-white -rotate-6 bg-blue-500">
            Frontend Developer
          </div>
          <div className="absolute p-2 px-3 rounded-full right-10 -mt-20 text-white rotate-6 bg-blue-500">
            UI/UX Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
