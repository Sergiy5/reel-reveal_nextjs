import { useRouter } from "next/router";

export const useOpenUrl = () => {
  const router = useRouter();

  const openUrl = (
    url: string,
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.ctrlKey || e.metaKey) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  return openUrl;
};
