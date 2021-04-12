import React, { useState, useEffect } from "react";
import getTotal from "./helpers/getTotal";
import Parts from "./Parts";
import Total from "./Total";
const Content = ({ parts }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = getTotal(parts);
    setTotal(newTotal);
  }, [parts]);
  return (
    <div>
      <Parts parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default Content;
