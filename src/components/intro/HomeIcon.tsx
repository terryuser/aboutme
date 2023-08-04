import { FC, useRef, useEffect } from "react";
import _ from "lodash";
import { HomeDesktop, HomeDeveloper, HomeFloor } from "@images/svgx";

const HomeIcon: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Home Icon bg ref", wrapperRef.current);

    const wrapperComp = wrapperRef.current;

    if (!wrapperComp) return;

    // const interval = randomBlink(bgEl);

    return () => {
      // clearInterval(interval);
    };
  }, []);

  const groupClass = "absolute w-full h-full top-0 left-0";

  const IconSize = 500;

  return (
    <div
      className="relative"
      style={{
        width: IconSize,
        height: IconSize,
      }}
      ref={wrapperRef}
    >
      <g
        className={groupClass}
        style={{
          zIndex: 1,
        }}
      >
        <HomeDeveloper />
      </g>
      <g
        className={groupClass}
        style={{
          zIndex: 1,
        }}
      >
        <HomeDesktop />
      </g>
      <g
        className={groupClass}
        style={{
          zIndex: 0,
        }}
      >
        <HomeFloor />
      </g>
    </div>
  );
};

export default HomeIcon;

// function randomBlink(bgComp: Element | null) {
//   if (!bgComp) return;

//   const blinkGroup = bgComp.querySelector(`#${blinkID}`);

//   const allBlinks = blinkGroup?.getElementsByTagName("g");

//   if (!allBlinks || allBlinks.length < 1) return;

//   _.forEach(allBlinks, (blinkComp) => {
//     blinkComp.setAttribute("style", `transition: all 0.${_.random(5)}s ease`);
//   });

//   return setInterval(() => {
//     _.forEach(allBlinks, (blinkComp) =>
//       blinkComp.setAttribute("style", "opcity: 0")
//     );

//     const blinkIndexs = _.map(_.times(5), () => _.random(allBlinks.length));

//     _.forEach(blinkIndexs, (idx) =>
//       allBlinks[idx].setAttribute("style", "opcity: 1")
//     );
//   }, 1000);
// }
