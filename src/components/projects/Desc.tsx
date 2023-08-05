import { FC } from "react";
import { ProjectsContent } from "@constant/projects";

export const Desc: FC = () => {
  const { title, content } = ProjectsContent;

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="text-md text-white">{content}</p>
    </>
  );
};
