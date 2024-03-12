"use client";

import React from "react";
import { darkmode } from "~/utils/themes";

const Background = (props: { children: React.ReactNode }) => {
  const baseStyle = "h-full w-full";

  return (
    <div
      className={
        darkmode
          ? `dark bg-white dark:bg-black dark:text-white ${baseStyle}`
          : baseStyle
      }
    >
      {props.children}
    </div>
  );
};

export default Background;
