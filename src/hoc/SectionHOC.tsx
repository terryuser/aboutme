import { FC, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useGlobalContext } from "@src/context/GlobalContext";
import { useInView } from "react-intersection-observer";
import { useIsMobile, useIsTablet } from "@hook/useWindowSize";
import { useIsScrolling } from "@hook/useScrolling";

interface SectionHOCPropsType {
  sectionID: string;
  isFirst?: boolean;
  children: any;
}

const SectionHOC: FC<SectionHOCPropsType> = ({
  sectionID,
  isFirst = false,
  children,
}) => {
  const location = useLocation();

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { headerHeight } = useGlobalContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    console.log("section in view", sectionID);
    // window.location.hash = `#${sectionID}`;
  }, [inView]);

  const styleScript = isFirst
    ? {
        marginTop: isMobile || isTablet ? headerHeight : headerHeight + 50,
      }
    : {
        paddingTop: isMobile || isTablet ? headerHeight : 0,
      };

  return (
    <section
      ref={ref}
      className="custom-section"
      style={styleScript}
      id={sectionID}
    >
      {children}
    </section>
  );
};

export default SectionHOC;
