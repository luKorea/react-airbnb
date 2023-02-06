import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./styled";
import EntireFilter from "./cpns/entire-filter";
import EntireRooms from "./cpns/entire-rooms";
import EntirePagination from "./cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const EntirePage = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default EntirePage;
