import Link from "next/link";
import { Icon } from "./Icon";

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
      aria-label={`Link to ${link}`}
      className={`link`}
    >
      <Icon
        id={id}
        width={34}
        height={34}
        styles=" fill-textColor transition duration-300 ease-in-out hover:fill-accentColor "
      />
    </Link>
  );
};
