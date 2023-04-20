import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <h1>마이페이지 페이지</h1>
            <p>마이페이지 입니다. </p>
            <Link to ="/MyPage/MyPost">내 게시글 관리</Link> <br />
            <Link to ="/MyPage/MyReply">내 댓글 관리</Link> <br />
            <button onClick={()=>navigate(-1)}>뒤로가기</button>


        </>
    );
}
export default MyPage;

// http://localhost:3000/MyPage/MyPost