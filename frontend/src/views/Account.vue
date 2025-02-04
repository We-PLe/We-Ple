<script setup>
import { onMounted } from 'vue';
import kakaoLoginImg from '@/assets/login/kakaoLogin.png';
import naverLoginImg from '@/assets/login/naverLogin.png';

const snsLogin = (type) => {
    alert(type + " 로그인");
};

const googleCallback = (response) => {
}

onMounted(() => {
    // window 객체에 google이 정의되어 있는지 확인
    const google = window.google;
    if (!google) {
        return;
    }

    // 구글 계정 초기화
    google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_LOGIN_API_KEY,
        callback: googleCallback,
    });

    // 구글 로그인 버튼 렌더링
    google.accounts.id.renderButton(
        document.getElementById('G_OAuth_btn'),
        {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            width: 220,
            locale: 'ko',
        }
    );
});
</script>

<template>
    <div class="btn_container">
        <a class="cp" @click="snsLogin('kakao')">
            <img
                :src="kakaoLoginImg"
                width="222"
                alt="카카오 로그인 버튼"/>
        </a>
        <a class="cp" @click="snsLogin('naver')">
            <img
                :src="naverLoginImg"
                width="222"
                alt="네이버 로그인 버튼"/>
        </a>
        <div id='G_OAuth_btn'></div>
    </div>
</template>

<style scoped>
.btn_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
}
</style>