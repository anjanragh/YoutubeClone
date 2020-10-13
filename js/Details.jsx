// @flow

import React from "react";

const Details = (props) => (
  <div className="details">
    <pre><code>{JSON.stringify(props, 1,4)}</code></pre>
  </div>
);

export default Details;
