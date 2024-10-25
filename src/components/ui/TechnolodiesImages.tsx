import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const TechnolodiesImages = ({  image }: Props) => {
  return (
    <div className="flex flex-col text-center items-center justify-center ">
      <Image
        src={image}
        alt="Stack"
        width={150}
        height={150}
        objectFit="cantain"
        className="mx-auto mb-[2rem]"
      />
    </div>
  );
};

export default TechnolodiesImages;
