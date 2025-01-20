import { Icon } from "./ui/Icon";

interface HowItWorksItemProps {
  id: string;
  title: string;
  text: string;
}

export const HowItWorksItem: React.FC<HowItWorksItemProps> = ({
  id,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Icon id={id} width={42} height={42} className="fill-textColor" />
      <h3>{title}</h3>
      <p  >{text}</p>
    </div>
  );
};
