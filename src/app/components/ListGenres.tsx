// import { nanoid } from "nanoid";

// interface IGnre {

//   id: number;
//   name: string;
// }

// interface ListGenresProps {
//   listGenres: IGnre[];
// }

// export const ListGenres: React.FC<ListGenresProps> = ({ listGenres }) => {
//   return (
//     <ul className={`flex justify-start flex-wrap w-full`}>
//       {listGenres?.map((item: IGnre) => {
//         return (
//           <li key={nanoid()} className={`rounded-2xl bg-bgColor m-2 px-2`}>
//             {item.name}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
