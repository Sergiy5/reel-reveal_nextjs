import Link from 'next/link';
import FaceBookIcon from '../../../public/icons/facebook.svg'
import InstagramIcon from "../../../public/icons/instagram.svg";
import MailIcon from "../../../public/icons/mail.svg";

export const ListSocial: React.FC = () => {
  
  return (
    <ul className={`flex justify-between flex-col h-40`}>
      <li>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`link`}
        >
          <FaceBookIcon className={`w-[34px] h-[34px] fill-textColor transition hover:fill-accentColor`} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`link`}
        >
          <InstagramIcon className={`w-[34px] h-[34px] fill-textColor transition hover:fill-accentColor`} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={"link"}
        >
          <MailIcon className={`w-[34px] h-[34px] fill-textColor transition hover:fill-accentColor`} />
        </Link>
      </li>
    </ul>
  );
};
