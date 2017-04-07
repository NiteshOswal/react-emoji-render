import React, { PropTypes } from "react";
import Emoji from "./renderer";

let protocol = "http";

if (typeof location !== "undefined" && location.protocol === "https:") {
  protocol = "https";
}

export default Emoji;

export function Twemoji({ children, svg, options, ...rest }) {
  const size = svg ? "" : "72x72";
  const ext = svg ? "svg" : "png";

  options = {
    protocol,
    baseUrl: `//twemoji.maxcdn.com/2/${svg ? "svg/" : ""}`,
    size,
    ext,
    ...options
  };

  return <Emoji options={options} {...rest}>{children}</Emoji>;
}

Twemoji.propTypes = {
  children: PropTypes.string,
  options: PropTypes.object,
  svg: PropTypes.bool
};

export function Emojione({ children, svg, options, ...rest }) {
  const ext = svg ? "svg" : "png";

  options = {
    protocol,
    baseUrl: `//cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/${ext}/`,
    size: "",
    ext,
    ...options
  };

  return <Emoji options={options} {...rest}>{children}</Emoji>;
}

Emojione.propTypes = {
  children: PropTypes.string,
  options: PropTypes.object,
  svg: PropTypes.bool
};