import React from "react";
import Arrow from "../../assets/img/Stroke 2.png";

import "./styles.scss";

function ArrowPrev({ onClick }: any) {
  return (
    <button
      style={{ border: "none", padding: "15px" }}
      onClick={onClick}
      className="arrowPrev"
    >
      <img src={Arrow} alt="prev" />
    </button>
  );
}

export default ArrowPrev;
