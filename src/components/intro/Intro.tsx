import { FC, useRef } from "react";

import { useGlobalContext } from "@src/context/GlobalContext";

import { useIsMobile, useIsTablet } from "@hook/useWindowSize";

import { HomeIcon, Desc } from ".";

const HomeIntro: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const { headerHeight } = useGlobalContext();

  const iconWrapperRef = useRef<HTMLDivElement>(null);

  const chopWidth = isMobile || isTablet ? 0 : 50;

  const iconSize = {
    width: isMobile ? 400 : isTablet ? 600 : 1098.55,
    height: isMobile ? 280 : isTablet ? 420 : 771.15,
  };

  return (
    <section
      className="custom-section"
      style={{
        marginTop: isMobile || isTablet ? headerHeight : headerHeight + 50,
      }}
    >
      <div className="container">
        <div className="block lg:grid grid-cols-2 gap-2 p-5">
          <div
            className="px-5"
            style={{
              marginRight: chopWidth * -0.8,
              marginTop: isMobile || isTablet ? 10 : "25%",
            }}
          >
            <Desc />
          </div>
          <div
            className="overflow-hidden flex justify-center items-end"
            style={{ marginLeft: chopWidth * -1 }}
          >
            <div
              ref={iconWrapperRef}
              style={{
                marginRight: chopWidth * -1,
                left: chopWidth,
              }}
            >
              <HomeIcon size={iconSize} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
