import React from "react";

function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}

export default SocialLink;
