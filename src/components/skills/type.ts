import { FC, SVGProps } from "react";

export type SkillItems = {
  icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
};

export type SkillCateData = {
  title: string;
  items: SkillItems[];
};
