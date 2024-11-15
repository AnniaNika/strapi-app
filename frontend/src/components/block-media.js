import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlockMedia = ({ data }) => {
  return (
    <div className="py-8">
      <GatsbyImage
        image={getImage(data.file?.localFile)}
        alt={data.file?.alternativeText}
      />
    </div>
  );
};

export default BlockMedia;
