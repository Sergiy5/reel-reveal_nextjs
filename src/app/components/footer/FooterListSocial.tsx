import { FooterLinkIconSocial } from "./FooterLinkIconSocial";

export const FooterListSocial: React.FC = () => {
  return (
    <ul className={`flex justify-between flex-col h-40`}>
      <li>
        <FooterLinkIconSocial
          link={"https://www.facebook.com/reelreveal"}
          id={"icon-facebook"}
        />
      </li>
      <li>
        <FooterLinkIconSocial
          link={"https://www.instagram.com/reel_reveal"}
          id={"icon-instagram"}
        />
      </li>
      <li>
        <FooterLinkIconSocial
          link="mailto:info.reelreveal@gmail.com"
          id={"icon-mail"}
        />
      </li>
    </ul>
  );
};
