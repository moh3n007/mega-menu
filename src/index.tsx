import React from "react";
import ReactDOM from "react-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  React.createElement(React.Suspense, {
    fallback: null,
    children: React.createElement(App),
  }),
  document.getElementById("root")
);
