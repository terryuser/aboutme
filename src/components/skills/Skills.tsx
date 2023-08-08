import { FC } from "react";
import { Desc } from "./Desc";
import SkillCard from "./SkillCard";

import { SkillSet } from "@constant/skills";

import SectionHOC from "@src/hoc/SectionHOC";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <SectionHOC sectionID="section-skills">
      <div className="container">
        <div className="mx-auto mb-2 w-2/3 text-center">
          <Desc />
        </div>
        <div className="flex mt-5">
          {SkillSet.map(({ title, items }) => (
            <SkillCard title={title} data={items} />
          ))}
        </div>
      </div>
    </SectionHOC>
  );
};

export { Skills };
