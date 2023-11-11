import "./style.css";
import { useState, useEffect } from "react";

const imageSources = [
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_110_Diwali_Women?resMode=sharp2&wid=1600&hei=642",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_110_Diwali_Men?resMode=sharp2&wid=1600&hei=642",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_HB_D_107_Winterwear?resMode=sharp2&wid=1600&hei=642",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_111_Diwali_Kids?resMode=sharp2&wid=1600&hei=642",
];

const SlideBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index === imageSources.length - 1 ? 0 : index + 1);
    }, 4000);
  });

  // const handlePrevious = () => {
  //   setIndex(index === 0 ? imageSources.length - 1 : index - 1);
  // };

  // const handleNext = () => {
  //   setIndex(index === imageSources.length - 1 ? 0 : index + 1);
  // };

  const imageElement = imageSources[index];

  return (
    <div className="flex h-[90vh] justify-center overflow-hidden align-middle">
      {/* <button
        className="absolute left-5 top-[60%] h-10 w-10 rotate-45 border-b-2 border-l-2 border-white text-black"
        onClick={handlePrevious}
      ></button> */}
      <div className="flex h-[100%] w-[100%] overflow-hidden">
        <img className="" src={imageElement} alt="Image" />
      </div>
      {/* <button
        className="absolute right-5 top-[60%] h-10 w-10 rotate-45 border-r-2 border-t-2 border-white"
        onClick={handleNext}
      ></button> */}
    </div>
  );
};

export default SlideBar;
