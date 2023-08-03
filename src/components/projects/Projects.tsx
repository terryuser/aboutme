import { FC } from "react";

import { Desc } from "./Desc";
import ProjectsContainer from "./ProjectsContainer";

const Projects: FC = () => {
  return (
    <section className="custom-section">
      <div className="container">
        <div className="mx-auto mb-2 w-2/3 text-center">
          <Desc />
        </div>
        <div className="px-3 py-1">
          <ProjectsContainer />
        </div>
      </div>
    </section>
  );
};

export { Projects };
