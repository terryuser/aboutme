import { FC } from "react";
import { IntroContent } from "@constant/intro";
import { Button } from "../utils";

export const Desc: FC = () => {
  const { title, subTitle, content } = IntroContent;

  const handleClick = () => {
    const target = document.getElementById("section-skills");
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <h3 className="section-title">{subTitle}</h3>
      <p
        className="text-md text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button className="mt-3" content="About me" onClick={handleClick} />
    </div>
  );
};
