import { titleType } from "@/types/title.types";

export default function Title({ texts }: { texts: titleType }) {
  return (
    <div className="p-4 row-start-2 h-32 self-center">
      <span className="text-white font-normal text-sm">{texts.text1}</span>
      <h1 className="text-white font-bold text-4xl py-1">{texts.title}</h1>
      <h2 className="text-white font-medium text-sm">{texts.subtitle}</h2>
    </div>
  );
}
