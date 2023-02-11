import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./styled";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { setDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const nav = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (data) => {
      console.log(data);
      dispatch(setDetailInfoAction(data));
      nav("/detail");
    },
    [nav, dispatch]
  );
  return (
    <RoomsWrapper>
      {roomList.map((item) => (
        <RoomItem
          itemData={item}
          itemWidth="20%"
          key={item._id}
          itemClick={itemClickHandle}
        />
      ))}
      {isLoading && <div className="mask-cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
