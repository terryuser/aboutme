import { FC } from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavItemProps } from "@components/header/nav/type";

interface MobileNavItemPropsType extends NavItemProps {
  isCurrent: boolean;
  onClick: () => void;
}

export const MobileNavItem: FC<MobileNavItemPropsType> = ({
  isCurrent,
  pageTitle,
  sectionID,
  onClick,
}) => {
  return (
    <NavHashLink smooth to={`#${sectionID}`} onClick={onClick}>
      <div
        className={`${isCurrent ? "text-black bg-yellow-400" : "text-white"}`}
      >
        {pageTitle}
      </div>
    </NavHashLink>
  );
};
