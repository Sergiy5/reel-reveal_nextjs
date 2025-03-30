import { Icon } from "../ui/Icon";

interface ShowQuizCountProps {
  count: number
} 

export const ShowQuizCount: React.FC<ShowQuizCountProps> = ({count}) => {

  return (
    <span className="flex items-center gap-[3px]">
      {count > 0 && <span className="font-semibold text-base">{count}</span>}
      <Icon id={count == 0  ? "icon-crown" : "icon-ai"} width={20} height={18} className="text-bgColor" />
    </span>
  );
};
