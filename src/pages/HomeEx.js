import { Link } from "react-router-dom";

const HomeEx = () => {

    return(
        <>
            <h1>여기는 홈 입니다.</h1>
            <p>가장 먼저 보이는 페이지 입니다.</p>
            <Link to ="/About">소개</Link>
            {/* /about의 url경로는 대소문자 구분 하지 않음 */}
        </>
    );
}
export default HomeEx;