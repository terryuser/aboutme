import { FC, useEffect, useRef, useState } from "react";

import { ProjectDtlItem } from "@components/projects/type";

// import { useGsapContext } from "@rootDir/src/context/GsapContext";

import "@styles/scss/comp/projects.scss";

interface PrjectCardPropType extends ProjectDtlItem {
  className?: string;
  index: number;
}

const ProjectCard: FC<PrjectCardPropType> = (props) => {
  const { name, desc, tags, className, thumbnailUrl, href, index } = props;

  //   const { smoother } = useGsapContext();

  const [initDone, setInitDone] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  const onCardClick = () => {
    window.open(href, "_blank", "noreferrer");
  };

  //   useEffect(() => {
  //     if (!smoother || initDone) return;

  //     smoother.effects(cardRef.current, {
  //       lag: 0.25 + index * 0.5,
  //     });

  //     setInitDone(true);
  //   }, [smoother, initDone]);

  return (
    <div
      className={`${className} projects-card custom-cards cursor-pointer duration-200 ease-in-out hover:!scale-105`}
      onClick={onCardClick}
      ref={cardRef}
    >
      <div
        className="relative aspect-video overflow-hidden w-full projects-thumbnail"
        ref={imgWrapperRef}
      >
        <img src={thumbnailUrl} alt={name} />
      </div>
      <div className={`p-5 projects-card-content`}>
        <p className="text-yellow-400 ">
          <strong>{name}</strong>
        </p>
        <p className="line-clamp-3 font-light text-white">{desc}</p>
        <div
          className={`mb-1 mt-2 flex flex-wrap`}
          style={{
            marginLeft: -10,
            marginRight: -10,
          }}
        >
          {tags.map((tag) => (
            <div style={{ padding: 5 }}>
              <div className="rounded bg-zinc-700 px-2 py-1 text-sm leading-none text-white">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
