import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();

    return(
        <>
            <h1>개발러스 메인페이지</h1>
            <p>여기는 메인페이지 == 홈 입니다! </p>
            <Link to ="/Login">로그인</Link> <br />
            <Link to ="/Join">회원가입</Link> <br />
            {/* <Link to ="/Login/FindAccount">계정찾기</Link> <br /> */}
            <Link to ="/MyPage">마이페이지</Link> <br />
            <p style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={()=>nav("/MyPage")}>마이페이지로 이동합니다.</p>
                {/* 이벤트가 들어오면 navigate */}
            {/* <Link to ="/MyPage/MyPost">내 게시글 관리</Link> <br /> */}
            {/* <Link to ="/MyPage/MyReply">내 댓글 관리</Link> <br /> */}
            <ul>
                <li>
                    <Link to="/Profiles/frontend">Frontend 프로필</Link>
                    {/* 호출해줘야 할 값을 /Profiles/여기 에 넣기 */}
                </li>
                <li>
                    <Link to="/Profiles/backend">Backend 프로필</Link>
                </li>
            </ul>
            <button onClick={()=>nav(+1)}>앞으로가기</button>
            <Link to ="/MyPage2">마이페이지2</Link> <br />

        </>
    );
}
export default Home;

