import React from "react";
import { Navigate } from "react-router-dom";

const MyPage2 = () => {
    const isLogin = false;

    if(!isLogin) {
        return <Navigate to="/Login" replace={true} />;
    }
    return(
        <>
            마이페이지2
        </>
    );
}
export default MyPage2;