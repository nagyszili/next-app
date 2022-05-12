import Image, { ImageProps } from "next/image";
import React from "react";

interface Props extends ImageProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ ...props }) => {
  return <Image {...props} height={500} width={500} />;
};

export default Avatar;
