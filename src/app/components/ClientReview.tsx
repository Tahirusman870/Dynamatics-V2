import { Star } from 'lucide-react';
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
}

const ClientReview = ({ name, role, image }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center ">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="cantain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <Star className="w-[2rem] h-[2rem] text-blue-500" />
        <Star className="w-[2rem] h-[2rem] text-blue-500" />
        <Star className="w-[2rem] h-[2rem] text-blue-500" />
        <Star className="w-[2rem] h-[2rem] text-blue-500" />
        <Star className="w-[2rem] h-[2rem] text-blue-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]"> {name} </h1>
        <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
          {role}
        </p>
        <p className="text-[16px] text-white text-center opacity-50 w-[90%] md:w-[50%] mx-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolor, culpa totam officia nulla architecto consectetur laboriosam
          cupiditate, atque quia, voluptate ipsum repellendus aut modi.
        </p>
    </div>
  );
};

export default ClientReview;
