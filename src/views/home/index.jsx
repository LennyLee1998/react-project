import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import request from "@/services";

const Home = memo(() => {
  const { count, name } = useSelector(
    (state) => ({
      count: state.home.count,
      name: state.entire.name,
    }),
    shallowEqual
  );

  useEffect(() => {
    request.get({ url: "xxx" }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <span>{count}</span>
      <span>{name}</span>
    </div>
  );
});

export default Home;
