import Image from 'next/image';
import Link from 'next/link';
import { IsShowHalfLogo } from '@/types';

export const MainLogo: React.FC<IsShowHalfLogo> = ({ isShowHalfLogo }) => {


  return (
    <Link href={"/"} className="flex items-center ">
      <Image
        src={"icons/main-logo.svg"}
        alt="Main logo"
        width={48}
        height={48}
      />
      {isShowHalfLogo && (
        <span className="font-medium text-2xl text-textColor ">ReelReveal</span>
      )}
    </Link>
  );
};
