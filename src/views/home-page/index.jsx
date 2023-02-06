import React, { memo } from "react";

import { HomeWrapper } from "./styled";
import HomeBanner from "./cpns/home-banner";
import { useEffect } from "react";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeSectionV1 from "./cpns/home-section-v1";
import HomeSectionV2 from "./cpns/home-section-v2";
import HomeSectionV3 from "./cpns/home-section-v3";
import HomeLongfor from "./cpns/home-longfor";
import { isEmptyO } from "@/utils";

const HomePage = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  console.log(goodPriceInfo, "goodPriceInfo");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default HomePage;
