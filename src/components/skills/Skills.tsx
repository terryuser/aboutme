import { FC } from "react";
import { Desc } from "./Desc";
import SkillCard from "./SkillCard";

import { SkillSet } from "@constant/skills";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <section className="custom-section">
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
    </section>
  );
};

export { Skills };
