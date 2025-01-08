'use client'

// import { ColorRing } from "react-loader-spinner";

export const Loader: React.FC = () => {
  
  return (
    <div className={` flex items-center justify-center opacity-0.50`}>
      <div className="flex justify-center items-center">
        <div
          className={`size-36 border-[16px] border-t-[16px] border-gray-200 border-solid rounded-full animate-spin
           border-t-[#A5FCDF] border-r-[#77F8D8] border-b-[#20E8DA] border-l-[#17C3C7]`}
        ></div>
      </div>
      {/* <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#A5FCDF", "#77F8D8", "#55F1D8", "#20E8DA", "#17C3C7"]}
      /> */}
    </div>
  );
};
