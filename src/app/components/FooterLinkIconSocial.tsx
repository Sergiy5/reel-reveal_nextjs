import Link from "next/link";

export interface FooterLinkIconSocialProps {
  link: string;
  id: string;
}

export const FooterLinkIconSocial: React.FC<FooterLinkIconSocialProps> = ({
  link,
  id,
}): React.JSX.Element => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link`}
    >
      <svg
        className={`w-[34px] h-[34px] fill-textColor transition hover:fill-accentColor`}
      >
        <use xlinkHref={`/icons/sprite.svg#${id}`} />
      </svg>
    </Link>
  );
};
