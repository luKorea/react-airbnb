import FDRequest from "@/services";
import React, { memo } from "react";
import { useEffect } from "react";


import {HomeWrap} from "./style";

const HomePage = memo(() => {
  useEffect(() => {
    async function getData() {
      const data = await FDRequest.get({
        url: "/home/highscore",
      });
      console.log(data);
    }
    getData()
  }, []);

  return <HomeWrap>HomePage</HomeWrap>;
});

export default HomePage;
