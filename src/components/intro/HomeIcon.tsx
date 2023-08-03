import { FC, useRef, useEffect } from "react";
import _ from "lodash";
import { Home_icon_bg } from "@images/svgx";

const bgID = "home-icon-bg";

const blinkID = "blink-icon-bg";

const HomeIcon: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Home Icon bg ref", wrapperRef.current);

    const wrapperComp = wrapperRef.current;

    if (!wrapperComp) return;

    const bgEl = wrapperComp.querySelector(`#${bgID}`);

    // const interval = randomBlink(bgEl);

    return () => {
      // clearInterval(interval);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <Home_icon_bg id={bgID} />
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
