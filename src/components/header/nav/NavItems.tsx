import { FC } from "react";
import { NavHashLink } from "react-router-hash-link";

import { NavItemProps } from "@components/header/nav/type";

import { motion } from "framer-motion";

interface NavItemsPropsType extends NavItemProps {
  isCurrent: boolean;
}

const NavItems: FC<NavItemsPropsType> = (props) => {
  const { isCurrent, pageTitle, sectionID } = props;

  const navTitleClass = isCurrent ? "text-black" : "text-white";

  return (
    <li className="mr-6">
      <NavHashLink smooth to={`#${sectionID}`}>
        <div className="relative">
          <div className={`relative z-1 px-3 ${navTitleClass}`}>
            {pageTitle}
          </div>
          {isCurrent && (
            <motion.div
              layoutId="underline"
              initial={false}
              className={"absolute top-0 z-0 rounded-t-lg"}
              animate={{
                width: "100%",
                height: "100%",
                background: "#fff",
              }}
            />
          )}
        </div>
      </NavHashLink>
    </li>
  );
};

export default NavItems;
