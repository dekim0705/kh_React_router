import { useParams } from "react-router-dom";
// useParams는 리액트 라우터에서 URL파라미터 값을 가져오기 위한 훅(HOOK)입니다.

// 서버에서 가지고 오는 데이터라고 가정
const data = { // 가상의 데이터 생성
    frontend: {
        name: "프엔개발러",
        description: "리액트가 어려운 개발자"
    },
    backend: {
        name: "백엔개발러",
        description: "스프링부트가 어려운 개발자"
    },
};

const Profile = () => { 
    const params = useParams();
    // params는 useParams를 통해서~
    const profile = data[params.username];

    return(
        <>
            <h1>회원 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>없는회원쉬먀</p>
            )}
        </>
    );
}

export default Profile;