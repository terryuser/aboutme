import { FC, useRef } from "react";
// import Image from "next/image"
import { content_en } from "@src/constant/intro";
// import { Button } from "@components/utils"
import { useGlobalContext } from "@src/context/GlobalContext";

import { HomeIcon } from ".";

const HomeIntro: FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { headerHeight } = useGlobalContext();

  const {
    HomeIntro: { title, content },
  } = content_en;

  return (
    <div
      className="flex overflow-hidden p-5"
      style={{
        marginTop: headerHeight,
      }}
    >
      <div>
        <div className="text-3xl font-bold text-white" ref={titleRef}>
          {title}
        </div>
        <div className="text-3md text-white">{content}</div>
        {/* <Button content="More" /> */}
      </div>
      <div>
        <HomeIcon />
        {/* <Image src="/pc.png" alt="pc" width={500} height={500} /> */}
      </div>
    </div>
  );
};

export default HomeIntro;
