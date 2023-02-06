import React, { memo } from "react";
import { RoomsWrapper } from "./styled";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  console.log(roomList, "roomList");
  return (
    <RoomsWrapper>
      {roomList.map((item) => (
        <RoomItem itemData={item} itemWidth="20%" key={item._id} />
      ))}
      {isLoading && <div className="mask-cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
