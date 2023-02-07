import PropTypes from 'prop-types'
import React, { memo, useRef } from "react";
import { Rating } from '@mui/material'
import { Carousel } from "antd";
import { ItemWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props
  const slideWrapper = useRef()
  // 处理点击切换图片
  function controlBtnClickHandle(isRight = true, event) {
    event.stopPropagation();
    isRight ? slideWrapper.current.next() : slideWrapper.current.prev()
  }

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      {/* 单图展示以及轮播图展示 */}
      <div className="inner">
        {!itemData.picture_urls ? (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        ) : (
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
            <Carousel
              ref={slideWrapper}
              dots={false}
              autoplay={false}
              effect="fade"
            >
              {itemData?.picture_urls?.map((item) => (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        )}
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
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem