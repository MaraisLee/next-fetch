import { useRouter } from "next/router";
import React from "react";

const Board = () => {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  return <div>{id} 페이지 입니다.</div>;
};

export default Board;
q