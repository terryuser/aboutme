import { FC, useState } from "react";
import { Collapse } from "@mui/material";
import _ from "lodash";

import { SkillItems } from "./type";

import SkillItem from "./SkillItem";

import { ArrowUp, ArrowDown } from "@images/svgx";

import "@styles/scss/comp/skills.scss";

interface SkillCardProps {
  title: string;
  data: SkillItems[];
}

const SkillCard: FC<SkillCardProps> = (props) => {
  const { title, data } = props;
  const firstViewItemsAmount = 8;

  const previewItmes = data.slice(0, firstViewItemsAmount);
  const remainItems = data.slice(firstViewItemsAmount);

  const [isExpand, setExpand] = useState<boolean>(false);

  return (
    <div className="w-1/2 px-5">
      <div className={`relative border-x-2 py-2 px-4`}>
        <div className={"skills-card-border-left"} />
        <div className="grid grid-cols-4 gap-1">
          {previewItmes.map((item) => (
            <SkillItem {...item} />
          ))}
        </div>

        <Collapse in={isExpand} unmountOnExit>
          <div className="grid grid-cols-4 gap-1">
            {remainItems.map((item) => (
              <SkillItem {...item} />
            ))}
          </div>
        </Collapse>

        <div className="flex w-full justify-center">
          <div
            className={`animate-bounce text-yellow-500 cursor-pointer transition `}
            onClick={() => setExpand(!isExpand)}
          >
            {isExpand ? (
              <ArrowUp width={36} height={12} />
            ) : (
              <ArrowDown width={36} height={12} />
            )}
          </div>
        </div>

        <div className={"skills-card-border-right"} />
      </div>
    </div>
  );
};

export default SkillCard;
