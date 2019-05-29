import React from "react";
import "./Header.css";

import { ImageThumbnail } from "./ImageThumbnail";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderContent } from "./HeaderContent";

export const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="title-content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};
