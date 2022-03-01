/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import Image from 'next/image'

type View360Props = {
  amount: number; //Number of images
  fileName: string;
  extension: Extension;
  initIndexImage?: number;
};

type Limits = {
  min: number;
  max: number;
};

type Extension = "jpeg" | "png" | "jpg";

export const View360 = (props: View360Props) => {
  const { amount, extension, fileName, initIndexImage = 1 } = props;

  const [indexImage, setIndexImage] = useState(initIndexImage);

  const limits: Limits = {
    min: 1, //Init count
    max: amount,
  };

  const handleChange = useCallback((event: any) => {
    setIndexImage(amount - event.target.value);
  }, [amount,setIndexImage]);



  return (
    <div  className="max-w-md p-1 bg-white rounded relative cursor-pointer">
      <InputRange
        min={limits.min}
        max={limits.max}
        value={indexImage}
        onChange={handleChange}
      />

      <img src={`/${fileName}-${indexImage}.${extension}`} alt={"Image of visualization 360°"} />
    </div>
  );
};

type InputRangeProps = {
  min: number;
  max: number;
  value: number;
  onChange(event: any): void;
};

const InputRange = (props: InputRangeProps) => {
  const { min, max, value, onChange } = props;

  return (
    <input
      style={{ opacity: 0,cursor: "move" }}
      className="absolute w-full h-full z-10"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      step="1"
    />
  );
};
