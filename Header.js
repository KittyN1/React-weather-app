import React from "react";

import Search from "./SearchEngine";

export default function Header() {
  return (
    <div className="Header">
      <div class="container">
        <div class="box shadow-sm">
          <Search />
        </div>
      </div>
    </div>
  );
}
