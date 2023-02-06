import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./styled";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  // 获取页数
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const dispatch = useDispatch();
  function handlePageChange(e, pageCount) {
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(pageCount - 1));
  }
  return (
    !!roomList.length && (
      <PaginationWrapper>
        <Pagination
          count={totalPage}
          color="primary"
          onChange={handlePageChange}
        />
        <div className="info">
          第 {startCount} – {endCount} 个房源，共超过 {totalCount} 个
        </div>
      </PaginationWrapper>
    )
  );
});

export default EntirePagination;
