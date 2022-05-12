import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ ...props }) => {
  return <Image {...props} height={500} width={500} />;
};

export default Avatar;
