import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    return(
        <>
            <h1>로그인 페이지</h1>
            <p>로그인 페이지 입니다. </p>
            <Link to ="/Login/FindAccount">계정찾기</Link> <br />
        </>
    );
}
export default Login;