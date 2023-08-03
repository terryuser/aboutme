import { FC, useRef, useEffect } from "react";
import { NavMenu } from "@components/header";
import { Logo } from "@images/svgx";

import { useGlobalContext } from "@src/context/GlobalContext";

const Header: FC = () => {
  const { location, setHeaderHeight } = useGlobalContext();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document || !headerRef) return;

    setHeaderHeight(headerRef.current?.offsetHeight ?? 0);

    const handlerResize = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      setHeaderHeight(height);
    };

    document.addEventListener("resize", handlerResize);

    return () => document.removeEventListener("resize", handlerResize);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 w-full">
      <div className="flex items-baseline justify-between">
        <Logo width={50} height={50} fill={"white"} />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
