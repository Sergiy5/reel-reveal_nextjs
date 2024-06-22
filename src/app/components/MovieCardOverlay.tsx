// import React from "react";
// import { MovieCardProps } from "@/types";

// export const MovieCardOverlay: React.FC<MovieCardProps> = ({ movie }) => {
//   const { vote_average, release_date, title } = movie;
//   const releaseYear = release_date?.split(" - ")[0].slice(0, 4);

//   return (
//     <div className="w-full h-auto rounded-[18px] bg-overlayBgColor p-4 flex flex-col justify-between">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center space-x-2">
//           <span className="text-white flex items-center">
//             <svg width="19" height="19" className="mr-1">
//               <use xlinkHref={`${sprite}#icon-star`} />
//             </svg>
//             {vote_average?.toFixed(1)}
//           </span>
//           <span className="text-white">{releaseYear}</span>
//         </div>
//         <ul className="flex space-x-2">
//           <li>
//             <button className="flex items-center bg-transparent text-white hover:text-accentColor">
//               <span className="mr-1">save it</span>
//               <svg className="w-5 h-5">
//                 <use xlinkHref={`${sprite}#icon-heart_btn`} />
//               </svg>
//             </button>
//           </li>
//           <li>
//             <button className="flex items-center bg-transparent text-white hover:text-accentColor">
//               <span className="mr-1">saw it</span>
//               <svg className="w-5 h-5">
//                 <use xlinkHref={`${sprite}#icon-checked`} />
//               </svg>
//             </button>
//           </li>
//           <li>
//             <button className="flex items-center bg-transparent text-white hover:text-accentColor">
//               <span className="mr-1">trailer</span>
//               <svg className="w-5 h-5">
//                 <use xlinkHref={`${sprite}#icon-play`} />
//               </svg>
//             </button>
//           </li>
//         </ul>
//       </div>
//       <span className="text-white">{title}</span>
//     </div>
//   );
// };
