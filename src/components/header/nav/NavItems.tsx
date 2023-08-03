import { FC } from "react";
import { NavItemProps } from "@components/header/nav/type";

import { motion } from "framer-motion";

interface NavItemsPropsType extends NavItemProps {
  isCurrent: boolean;
  onClick: (props: NavItemProps) => void;
}

const NavItems: FC<NavItemsPropsType> = (props) => {
  const { isCurrent, label, path, pageTitle, onClick } = props;

  console.log("isCurrent", label, isCurrent);

  const navTitleClass = isCurrent ? "text-black" : "text-white";

  return (
    <li className="mr-6">
      {/* <AhrefWrapper
                    href={path}
                    className={`text-blue-500 hover:text-blue-800`}>
                    {label}
                </AhrefWrapper> */}

      <div className="relative" onClick={() => onClick(props)}>
        <div className={`relative z-1 px-3 ${navTitleClass}`}>{pageTitle}</div>
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
    </li>
  );
};

export default NavItems;
