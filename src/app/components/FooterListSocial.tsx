import { FooterLinkIconSocial } from './ui/FooterLinkIconSocial';

export const FooterListSocial: React.FC = () => {
  return (
    <ul className={`flex justify-between flex-col h-40`}>
      <li>
        <FooterLinkIconSocial link={"https://www.facebook.com"} id={"icon-facebook"} />
      </li>
      <li>
        <FooterLinkIconSocial link={"https://www.instagram.com"} id={"icon-instagram"} />
      </li>
      <li>
        <FooterLinkIconSocial link={"https://www.gmail.com"} id={"icon-mail"} />
      </li>
    </ul>
  );
};
