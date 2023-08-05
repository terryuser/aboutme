import { FC } from "react";
import _ from "lodash";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel, { Props } from "react-alice-carousel";

import { ProjectDtls } from "@constant/projects";

// import styles from "@styles/module/homepage/Projects.module.scss";

import ProjectCard from "./ProjectCard";

const ProjectsContainer: FC = () => {
  const settings: Props = {
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 4 },
    },
    autoPlay: true,
    autoPlayInterval: 2500,
  };

  return (
    <AliceCarousel
      {...settings}
      disableButtonsControls
      disableDotsControls
      disableSlideInfo
      infinite
      mouseTracking
      items={_.map(ProjectDtls, (dtl, index) => (
        <div className={`p-5`} key={"card" + index}>
          <ProjectCard index={index} {...dtl} />
        </div>
      ))}
    />
  );
};

export default ProjectsContainer;
