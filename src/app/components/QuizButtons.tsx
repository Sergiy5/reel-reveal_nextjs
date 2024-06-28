import clsx from "clsx";
import { QuizBtnsProps } from "@/types";

export const QuizButtons: React.FC<QuizBtnsProps> = ({
  answers,
  collectQuiz,
  isActive,
}) => {

  return (
    <>
      {answers.map((item) => {
        // To prettify text in button to divide strings
        const [first, second] = item.split(/\s*(?=\()/);


//   width: auto;
//   height: calc(((100vw - 140px) / 2) / ${getAspectRatio(285, 200)});
//   color: inherit;
//   border-radius: 18px;
//   border: 1px solid ${colors.bgColor};

//   background-image: radial-gradient(
//     ellipse closest-side at center,
//     rgb(32, 43, 61),
//     ${colors.bgColor} 160%
//   );
//   transform: none;
//   transition-property: transform, border, color;
//   transition-duration: 350ms;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

//   @media (min-width: 1025px) {
//     width: calc((100% - 60px) / 4);
//     height: calc(((100vw - 300px) / 4) / ${getAspectRatio(285, 200)});
//   }

//   @media (min-width: 1440px) {
//     width: 285px;
//     height: 200px;
//   }

//   &:hover {
//     ${props =>
//       props.$isActive
//         ? null
//         : `
//     transform: scale(1.01);
//     border: 1px solid ${colors.accentColor};
//     color: ${colors.accentColor};
//     `}
//   }
//   &:focus {
//     outline: 2px solid ${colors.accentColor};
//     color: ${colors.accentClickedColor};
//   }
//   &:active {
//     transform: ${props => (props.$isActive ? 'scale(1)' : null)};
//   }



        return (
          <button
            key={item}
            onClick={() => collectQuiz(item)}
            disabled={isActive}
            type="button"
            className={clsx(
              "flex items-center justify-center w-auto aspect-[285/200] px-2 rounded-[18px] bg-quizBtnGradient border-[1px] border-transparent ",
              "transition duration-300 ease-in-out hover:border-solid hover:scale-[1.01] hover:border-accentColor hover:text-accentColor",
              "lg:w-[285px] lg:h-[200px]",
              {
                // "focus:outline-2 focus:outline-accentColor focus:text-accentClickedColor":
                //   true,
              }
            )}
          >
            <p className=" font-normal text-3xl  text-inherit">
              {first}
              <br />
              {second}
            </p>
          </button>
        );
      })}
    </>
  );
};
