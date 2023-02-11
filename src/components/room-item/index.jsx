import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import Indicator from "@/base-ui/Indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const slideWrapper = useRef();
  // 处理点击切换图片
  function controlBtnClickHandle(isRight = true, event) {
    event.stopPropagation();
    isRight ? slideWrapper.current.next() : slideWrapper.current.prev();
    // 设置最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = props.itemData.picture_urls.length;
    if (newIndex > length - 1) newIndex = 0; // 如果是最后一个回到第一个
    if (newIndex < 0) newIndex = length - 1; // 如果是第一个回到最后一个
    setSelectIndex(newIndex);
  }
  function itemClickHandle() {
    itemClick && itemClick(itemData);
  }
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const slideELement = (
    <div className="slide">
      <div className="control">
        <div
          className="btn left"
          onClick={(e) => controlBtnClickHandle(false, e)}
        >
          <IconArrowLeft width={20} height={20} />
        </div>
        <div
          className="btn right"
          onClick={(e) => controlBtnClickHandle(true, e)}
        >
          <IconArrowRight width={20} height={20} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel ref={slideWrapper} dots={false} autoplay={false} effect="fade">
        {itemData?.picture_urls?.map((item) => (
          <div className="cover" key={item}>
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      {/* 单图展示以及轮播图展示 */}
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : slideELement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
