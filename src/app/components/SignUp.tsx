"use client"

import { ButtonOrLink } from "./ui/ButtonOrLink";


export const SignUp: React.FC = () => {

    return (
      <div className={`flex flex-col gap-6 w-[372px] z-10`}>
        <form action="" className={`flex flex-col gap-6 w-full`}>
          <input
            type="text"
            name="email"
            placeholder="email"
            className={`w-full bg-bgLightColor h-10 rounded-2xl px-4`}
          />
          <ButtonOrLink type="submit" onClick={() => null} className={`w-full`}>
            continue with email
          </ButtonOrLink>
        </form>
        <div className={`w-full flex items-center justify-center gap-2`}>
          <div className={`w-10 h-[1px] bg-gray-400 `}></div>
          <p>or use one of these services </p>
          <div className={`w-10 h-[1px] bg-gray-400 `}></div>
        </div>
        <ul className={`flex items-center justify-center gap-5 `}>
          <li>
            <button className={`size-44 rounded-2xl bg-bgLightColor`}>
              {/* <svg width={32} height={32}>
              <use xlinkHref={`${Sprite}#icon-google-sign_in`} />
            </svg> */}
            </button>
          </li>
          <li>
            <button className={`size-44 rounded-2xl bg-bgLightColor`}>
              {/* <svg width={32} height={32}>
              <use xlinkHref={`${Sprite}#icon-google-sign_in`} />
            </svg> */}
            </button>
          </li>
        </ul>
      </div>
    );
}