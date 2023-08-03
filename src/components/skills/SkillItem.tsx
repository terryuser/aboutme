import { FC, useRef } from "react";

import { SkillItems } from "./type";

const SkillItem: FC<SkillItems> = (props) => {
  const { icon: IconSVG, name } = props;

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="block p-2 text-center">
      <div className="flex justify-center" ref={divRef}>
        <IconSVG width={45} height={45} />
      </div>
      <div className="text-white">{name}</div>
    </div>
  );
};

export default SkillItem;
