'use client'

import { ColorRing } from "react-loader-spinner";

export const Loader: React.FC = () => {
  
  return (
    <div
      className={` flex items-center justify-center opacity-0.50`}
    >
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#A5FCDF", "#77F8D8", "#55F1D8", "#20E8DA", "#17C3C7"]}
      />
    </div>
  );
};
