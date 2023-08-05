import { FC, useRef, useEffect } from "react";
import _ from "lodash";
import { HomeSVGIcon } from "@images/svgx";

interface HomeIconPropsType {
  size?: {
    width: number;
    height: number;
  };
}

const HomeIcon: FC<HomeIconPropsType> = ({ size }) => {
  useEffect(() => {
    // const interval = randomBlink(bgEl);

    return () => {
      // clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <HomeSVGIcon width={size?.width} height={size?.height} />
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
