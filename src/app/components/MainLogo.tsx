import Image from 'next/image';
import Link from 'next/link';
import { IsShowHalfLogo } from '@/types';
import LogoMain from '../../../public/icons/main-logo.svg'

export const MainLogo: React.FC<IsShowHalfLogo> = ({ isShowHalfLogo }) => {


  return (
    <Link href={"/"} className="flex items-center ">
      <LogoMain alt="logo" width={48} height={48} />
      {isShowHalfLogo && (
        <span className="font-medium text-2xl text-textColor ">ReelReveal</span>
      )}
    </Link>
  );
};
