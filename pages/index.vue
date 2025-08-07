<template>
  <main class="index">
    <section class="sec01">
      <div class="wrap01">
        <div class="container">
          <div class="contest-info">
            <div>
              <h1 class="main-title">제1회 뉴스피릿 미술 공모전</h1>
              <div class="title-point">미래의 스타, <br/>꿈꾸는 지구 </div>
              <p class="date">2025.09.15 ~ 10.15</p>
            </div>
            <button class="btn01 recruit" @click="goToGuide">
              <span>모집요강 더보기</span>
            </button>
          </div>
          <div class="image-wrapper">
            <div class="left-wrap">
              <div class="masked-image left"></div>
            </div>
            <div class="right-wrap">
              <div class="masked-image right"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap02">
        <div class="info-wrapper" >
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">접수 기간</p>
              <p class="info-date">09월 15일 ~ 10월 15일</p>
              <button class="btn01 red mobile" @click="goToGuide">
                <span>바로가기</span>
              </button>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#9B9B9B"/>
            </svg>
          </div>
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">심사 기간</p>
              <p class="info-date">10월 16일 ~ 10월 31일</p>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#9B9B9B"/>
            </svg>
          </div>
          <div class="info-item tablet">
            <div class="tablet-btn">
              <button class="btn01 red tablet" @click="goToGuide">
                  <span>바로가기</span>
              </button>
            </div>
          </div>
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">결과 발표</p>
              <p class="info-date">11월 03일</p>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#9B9B9B"/>
            </svg>
          </div>
  
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">전시 일정</p>
              <p class="info-date">11월 26일 ~ 12월 04일</p>
            </div>
            <svg class="arrow-icon mobile" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="none"/>
            </svg>
          </div>
        </div>
        <div class="grid-wrapper">
          <div class="grid01" >
            <button class="btn01 red pc" @click="goToGuide">
              <span>바로가기</span>
            </button>
          </div>
          <div class="caution">
              <ul>
                <li>
                  대상 수상자 기사화 및 언론 브랜딩 지원
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="sec02 inner mt-20">
      <h3 class="section-title">갤러리</h3>
      <div class="gall_box_area">
          <div class="left_box">
              <div class="tit_box">
                </div>
                <div class="img_box">
                  <p class="txt mobile">공모전을 통해 엄정한 심사를 거쳐 선정된 출품작들이 본 온라인 갤러리를 통해 전시될 예정입니다. 
                  </p>
                  <p class="txt mobile">NewSprit은 앞으로도 재능있는 미래의 예술가들이 자신만의 예술세계를 표현하고 공유할 수 있는 장을 지속적으로 마련해 나갈 것입니다.</p>
                  <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000"><a href="#"><img src="/images/main/sec02-work01.png" alt="gall01" /></a></div>
                  <div data-aos="fade-up" data-aos-duration="2000"><a href="#"><img src="/images/main/sec02-work03.png" alt="gall03" /></a></div>
                </div>
            </div>
            <div class="right_box">
              <div class="txt_box">
                  <p class="txt pc">공모전을 통해 엄정한 심사를 거쳐 선정된 출품작들이 <br/>
                    본 온라인 갤러리를 통해 전시될 예정입니다. 
                  </p>
                  <p class="txt pc">NewSprit은 앞으로도 재능있는 미래의 예술가들이 자신만의 예술세계를 표현하고 공유할 수 있는 장을 지속적으로 마련해 나갈 것입니다.</p>
              </div>
              <div class="img_box">
                  <div data-aos="fade-up" data-aos-duration="2000"><a href="#"><img src="/images/main/sec02-work02.png" alt="gall02" /></a></div>
                    <div data-aos="fade-up" data-aos-duration="2000"><a href="#"><img src="/images/main/sec02-work04.png" alt="gall04" /></a></div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec03 inner mt-20">
      <iframe class="iframe"
          style="width: 100%; height: 670px"
          src="https://www.youtube.com/embed/loIBLzAX-pU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
      ></iframe>
    </section>
    <section class="sec04 inner mt-20">
      <div class="section-title" style="font-weight: 400;">
        수상자 혜택
      </div>
      <div class="wrap01">
        <div class="left">
          <div class="text one">기사화 노출</div>
          <div class="text two">언론 브랜딩</div>
        </div>
        <div class="right">
          <div class="section-sub-title">
            부문별 대상자 상금
          </div>
          <div class="prize-wrap">
            <div class="prize-box">
              <div class="prize-age">대학부 (1명)</div>
              <div class="prize-money">₩1,000,000</div>
            </div>
            <div class="prize-box">
              <div class="prize-age">고등부 (1명)</div>
              <div class="prize-money">₩500,000</div>
            </div>
            <div class="prize-box">
              <div class="prize-age">중등부 (1명)</div>
              <div class="prize-money">₩500,000</div>
            </div>
            <div class="prize-box">
              <div class="prize-age">초등부 (1명)</div>
              <div class="prize-money">문화상품권</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

import { useRouter, useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const goToGuide = () => {
  router.push('/guide/recruit')
}

onMounted(() => {
  AOS.init()
})

</script>

<style scoped>

.section-title {
  font-size: 46px;
  font-weight: 600;
  line-height: 120%;
}
.section-sub-title {
  font-size: 30px;
  line-height: 120%;
  font-weight: 600;
}

.title-point {
  text-align: center;
  font-family: 'NotoSerifKR';
  font-size: 65px; 
  font-weight: 400; 
  margin-top: 30px; 
  margin-bottom: 10px; 
  line-height: 130%;
  white-space: nowrap;
  padding: 0 40px;
  background-image: url(/images/main/quotes.png);
  background-position: top center; 
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.recruit {
  margin-top: 60px;
}
.btn01.red {
  margin-top: 20px;
}
.btn01.mobile {
  display: none;
}
.sec01 {

}
.sec01 .wrap01 {
  background-color: #b3b01c;
  /* padding-right: 20px; */
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 20px;
}

.sec01 .wrap01 .container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1300px;
  margin-left: auto; 
}
.sec01 .contest-info {
  text-align: center;
  /* background-color: #FF5972; */
  margin-bottom: 20px;
}

.sec01 .main-title {
  font-size: 35px;
  white-space: nowrap;
  text-align: center;
}

.sec01 .date {
  font-size: 35px;
  color: #B31C45;
  margin-top: 20px;
  text-align: center;
}


.sec01 .image-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  padding: 0 20px;
  /* background: #f0f0f0; */
  overflow: hidden;
}

.sec01 .masked-image {
  background-size: cover;
  background-position: center;
  transition: clip-path 1s ease-in-out;
}


.sec01 .masked-image.left {
  width: 450px;
  height: 480px;
  background-image: url('/images/main/top01.png');
  background-position: top center; 

  clip-path: inset(0 0 0 0);
  opacity: 0;
  transform: scale(1.1); /* 살짝 크게 시작 */
  animation: fadeInZoom 2s ease-out forwards;
}

/* 오른쪽 이미지 */
.sec01 .masked-image.right {
  width: 210px;
  height: 300px;
  background-image: url('/images/main/top02.png');
  clip-path: inset(0 0 0 0);

  opacity: 0;
  transform: scale(1.1); /* 살짝 크게 시작 */
  animation: fadeInZoom 2s ease-out forwards;
}

.sec01 .image-wrapper .left-wrap {
  position: relative;
  width: 450px;
  height: 480px;
  overflow: hidden;
  animation: leftRoundIn 5s ease-in-out forwards;
}

.sec01 .image-wrapper .right-wrap {
  position: relative;
  width: 210px;
  height: 300px;
  overflow: hidden;
  animation: rightRoundIn 5s ease-in-out forwards;
}

@keyframes leftRoundIn {
  0% { border-bottom-left-radius: 200px; }
  40% { border-bottom-left-radius: 400px; }
  55% { border-bottom-left-radius: 300px; }
  70% { border-bottom-left-radius: 350px; }
  90% { border-bottom-left-radius: 250px; }
  100% { border-bottom-left-radius: 250px; }
}

@keyframes rightRoundIn {
  0%   { border-bottom-right-radius: 0; }
  50%  { border-bottom-right-radius: 200px; } 
  65%  { border-bottom-right-radius: 150px; } 
  80%  { border-bottom-right-radius: 200px; }
  100% { border-bottom-right-radius: 100px; }
}

@keyframes fadeInZoom {
  0% {
    opacity: 0;
    transform: scale(2);
  }
  50% {
    opacity: 0.7;
    transform: scale(1);
  }
  80% {
    opacity: 1.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.sec01 .wrap02 {
  padding: 40px 20px 20px;
  background-image: url('/images/main/sec01-bg.png');
  background-repeat: no-repeat;   
  background-size: cover;           
  background-position: center center; 
  margin-top: 60px;
  text-align: center;
}

.sec01 .wrap02 .info-wrapper {
  display: flex;
  align-items: flex-start;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}


.sec01 .wrap02 .info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  /* width: fit-content; */
}

.sec01 .wrap02 .info-item.tablet {
  display: none;
}
.btn01.tablet {
  display: none;
}

.sec01 .wrap02 .info-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 225px;
  /* background-color: aqua; */
}

.sec01 .wrap02 .info-title {
  /* font-weight: bold; */
  font-size: 24px;
  color: #5D5D5D;
}

.sec01 .wrap02 .info-date {
  font-size: 24px;
  color: #B31C45;
  font-weight: 400;
  line-height: 150%;
  margin-top: 10px;
}


.sec01 .wrap02 .arrow-icon {
  /* margin-left: 10px; */
  transition: transform 0.3s ease;
}
.sec01 .wrap02 .arrow-icon.mobile {
  display: none;
}

.sec01 .wrap02 .grid-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4등분 */
  gap: 16px; /* 요소 사이 간격 */
  align-items: center;
  /* align-items: flex-end; */
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

.sec01 .wrap02 .grid01 {
  grid-column: 1 / 2; 
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: bisque; */
  margin-right: 30px;
}

.sec01 .wrap02 .caution {
  grid-column: 2 / 4; /* 두 번째 + 세 번째 칸 */
  display: flex;
  align-items: center;
  justify-content: center;
}





.sec02 {
  /* background-color: yellow; */
  margin: 0 auto;
  padding: 60px 20px 20px;
}

.sec02 #gall_box_area,
.sec02 .gall_box_area {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0 auto;
  padding: 55px 0 20px;
}

.sec02 .left_box, .right_box {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* gap: 50px; */
}

.sec02 .tit_box, .txt_box {
  text-align: left;
}

.sec02 .tit_box .s_tit {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.sec02 .img_box {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.sec02 .img_box img {
  width: 100%;
  max-height: 910px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.sec02 .txt_box .tit {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.sec02 .txt_box .txt {
  font-size: 18px;
  color: #5D5D5D;
  margin-bottom: 30px;
}

.sec02 .txt.mobile {
  display: none;
}

.sec03 {
  padding: 50px 20px;
}

.sec03 .iframe {
  margin-top: 50px;
}

.sec04 {
  padding: 50px 20px 0;
  height: 625px;
}
.sec04 .wrap01 {
  display: flex;
  gap: 20px;
  margin-top: 80px;
}
.sec04 .left {
  flex: 5;
  background-image: url('../img/main-sec04-mic.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 400px auto;
  position: relative;
}
.sec04 .left .text.one{
  background-image: url('../img/main-sec04-paint01.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 40px;
  width: 250px;
  text-align: center;
  margin: 0 auto;
}
.sec04 .left .text.two{
  background-image: url('../img/main-sec04-paint02.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 50px;
  width: 250px;
  text-align: center;
}
.sec04 .left .text{
  font-size: 30px;
  font-weight: 600;
}
.sec04 .right {
  flex: 5;
  margin-top: 50px;
  margin-bottom: 100px;
}
.sec04 .prize-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 30px 0;
}
.sec04 .prize-box {
  padding: 10px 20px;
  background-color: #FFF5F5;
}
.sec04 .prize-age {
  font-size: 18px;
}
.sec04 .prize-money {
  font-size: 24px;
  margin-top: 15px;
}




@media (max-width: 1240px) {
  /* .sec01 .wrap02 .info-text {
    min-width: 0;
  }
  .sec01 .wrap02 .grid01 {
    margin-right: 0px;
} */
  /* .sec01 .wrap01 .contest-info {
    width: 100%;
    padding: 0 20px;
  }
  .title-point {  
    width: 60%;
    margin: 20px auto 0;
  } */

  .sec01 .wrap01 .container {
    flex-direction: column-reverse;
    padding-left: 0;
    gap: 40px;
    align-items: center;
  }
  .sec01 .image-wrapper {
    justify-content: center;
  }
  .sec01 .contest-info {
    margin-bottom: 0;
  }
  .sec01 .wrap02 {
    padding: 20px;
  }
  .btn01.pc {
    display: none;
  }
  .btn01.tablet {
    display: block;
    margin-top: 0;
  }
  .btn01.recruit {
    margin-top: 40px;
  }
  .sec01 .wrap02 .tablet-btn {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 100px;
    margin-top: -20px;
  }
  .sec01 .wrap02 .info-item.tablet {
    display: block;
    /* background-color: aquamarine; */
    width: 100%;
    grid-column: span 2;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    height: 10px;
  }
  .sec01 .wrap02 .arrow-icon.mobile {
    display: block;
  }
  .sec01 .wrap02 .info-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2개씩 */
    gap: 20px;
    padding: 0 20px;
    justify-items: center;
    align-items: flex-start;
    /* background-color: aqua; */
  }
  .sec01 .wrap02 .info-item {
    height: 150px;
    gap: 50px;
  }
  .sec02 .gall_box_area {
    gap: 20px;
  }
  .sec02 .img_box {
    gap: 20px;
  }

}

@media (max-width: 768px) {
  .sec01 .wrap01 {
    gap: 20px;
  }
  .sec01 .wrap01 .contest-info {
    width: 100%;
    padding: 0 20px;
  }
  .sec01 .main-title {
    font-size: 25px;
  }
  .title-point {  
    width: 80%;
    margin: 20px auto 0;
  }
  .sec01 .date {
    font-size: 25px;
    margin-top: 10px;
  }
  .btn01.recruit {
    margin-top: 20px;
    width: 100%;
  }

  .sec01 .title-point {
    font-size: 40px;
    margin-top: 20px;
  }
  .sec01 .wrap02 .info-item.tablet {
    display: none;
  }
  .sec01 .wrap02 .arrow-icon.mobile {
    display: none;
  }
  .btn01.mobile {
    display: block;
  }
  .sec01 .wrap02 {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding: 40px 20px 20px;
    background-image: url('/images/main/sec01-wrap02-mobileBg.png');
    background-repeat: no-repeat;   
    background-size: cover;           
    background-position: center center; 
    margin-top: 50px;
    text-align: center;
  }
  .sec01 .wrap02 .info-wrapper {
    grid-template-columns: 1fr;
    /* flex-direction: column; */
    gap: 30px;
    align-items: flex-start;
  }

  .sec01 .wrap02 .info-item {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 10px;
  }

  .sec01 .wrap02 .arrow-icon {
    transform: rotate(90deg);
    margin: 10px 0 0 0;
  }

  .sec01 .wrap02 .info-text {
    width: 100%;
    text-align: center;
  }
  .sec01 .wrap02 .grid-wrapper {
    display: block;
  }

  .sec01 .wrap02 .grid01,
  .sec01 .wrap02 .caution {
    grid-column: auto;
    margin-right: 0;
    margin-bottom: 16px;
  }
  .sec02 {
    padding: 20px;
  }
  .sec02 #gall_box_area,
  .sec02 .gall_box_area {
    padding: 20px 0px !important;
    display: block;
  }
  .sec02 .left_box, .right_box {
    width: 100%;
    gap: 20px;
  }
  .sec02 .img_box img {
    width: 100%;
    height: 250px;
  }
  .sec02 .txt.mobile {
    display: block;
  }
  .sec02 .txt.pc {
    display: none;
  }
}
@media (max-width: 600px) {
  .sec01 .image-wrapper .left-wrap {
    width: 100% !important;
    /* margin-left: auto; */
  }
  .sec01 .image-wrapper .masked-image.left {
    width: 100% !important;
    /* margin-left: auto; */
  }
  .sec01 .right-wrap {
    display: none;
    /* height: 360px; */
  }
}
@media (max-width: 480px) {
  .title-point {  
    width: 100%;
  }
  .sec01 .image-wrapper {
    height: 360px;
  }
  .sec01 .image-wrapper .left-wrap {
    height: 360px;
  }
  .sec01 .image-wrapper .masked-image.left {
    height: 360px;
  }
}

@media (max-width: 400px) {

}
</style> 