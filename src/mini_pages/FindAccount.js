import React from "react";
import { Link } from "react-router-dom";
const FindAccount = () => {

    return(
        <>
            <h1>계정찾기 페이지</h1>
            <p>계정찾기 페이지 입니다. </p>
            <Link to ="/Login">로그인</Link> <br />

        </>
    );
}
export default FindAccount;