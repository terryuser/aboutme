import { FC } from "react";
import { SkillsContent } from "@constant/skills";

export const Desc = () => {
  const { title, content, remark } = SkillsContent;

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="text-md text-white">{content}</p>
      <p
        className="text-sm text-white"
        dangerouslySetInnerHTML={{ __html: remark }}
      />
    </>
  );
};
