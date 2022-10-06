import React from "react";
import PropTypes from "prop-types";

import favicon from "./assets/images/favicon.png";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script
          async
          custom-element="amp-position-observer"
          src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-animation"
          src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"
        ></script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            overflow: "hidden",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <img src={favicon} alt="wiktorrudzki logo"></img>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
