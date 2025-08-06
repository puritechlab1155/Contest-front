<template>
  <main class="index">
    <section class="sec01">
      <div class="wrap01">
        <div class="contest-info">
          <div>
            <h1 class="main-title" style="white-space: nowrap;">제1회 뉴스피릿 미술 공모전</h1>
            <div class="title-point" style="font-size: 65px; font-weight: 400; margin-top: 20px; margin-bottom: 10px; line-height: 130%;"> 미래의 스타, <br/>&nbsp;꿈꾸는 지구 </div>
            <!-- <p class="date">2025.09.15(월) ~ 10.15(수)</p> -->
          </div>
          <p class="date" style="font-size: 30px; white-space: nowrap;">2025.09.15<span style="font-size: 20px;" class="date">(월)</span> ~ 10.15<span style="font-size: 20px;" class="date">(수)</span></p>
          <!-- <div class="info-grid">
            <div class="info-item">
              <h2 class="info-title">주제</h2>
              <p class="info-text">“미래의 스타, 꿈꾸는 지구"</p>
            </div>
            <div class="info-item"> 
              <h2 class="info-title">참가대상</h2>
              <p class="info-text">초등부 / 중등부 / 고등부 / 대학부(대학원생 포함)</p>
            </div>
            <div class="info-item large">
              <h2 class="info-title">참가 부문</h2>
              <p class="info-text">자유 창작 부문(주제 해석 및 표현 형식 자유)</p>
              <p class="sub">→ 주제를 창의적으로 해석하여, 자신만의 세계를 표현</p>
            </div>
          </div> -->
          <button class="btn01 white" @click="goToGuide">
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
      <div class="wrap02">
        <div class="info-wrapper">

          <div class="info-item">
            <div class="info-text">
              <p class="info-title">접수 기간</p>
              <p class="info-date">2025. 09. 15(월)<br/>~ 10. 15(수)</p>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#B31C45"/>
            </svg>
          </div>
  
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">심사 기간</p>
              <p class="info-date">2025. 10. 16(목)<br/>~ 10. 31(금)</p>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#B31C45"/>
            </svg>
          </div>
  
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">결과 발표</p>
              <p class="info-date">2025. 11. 03(월)</p>
            </div>
            <svg class="arrow-icon" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.334 17.5L14.1681 3.33337L5.66732 3.33337L16.9973 14.6641L19.8332 17.5L16.9973 20.336L5.66732 31.6667L14.1681 31.6667L28.334 17.5Z" fill="#B31C45"/>
            </svg>
          </div>
  
          <div class="info-item">
            <div class="info-text">
              <p class="info-title">전시 일정</p>
              <p class="info-date">2025. 11. 26(수)<br/>~ 12. 04(목)</p>
            </div>
          </div>

        </div>
        <p class="info-pink">❖ 대상 수상자 기사화 및 언론 브랜딩 지원</p>
      </div>
    </section>
  </main>
</template>

<script setup>

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute()

const goToGuide = () => {
  router.push('/guide/recruit')
}

</script>

<style scoped>
.title-point{
  font-family: 'NotoSerifKR';
}

.index .sec01 {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
}
.index .sec01 .wrap01 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1248px; /* wrap01의 너비는 1248px로 유지 */
  margin-left: auto; /* 왼쪽 여백을 자동으로 채워 오른쪽으로 정렬 */
}
/* .index .sec01 .contest-info {
  max-width: 430px;
} */


.index .sec01 .main-title {
  font-size: 35px;
  font-weight: bold;
}

.index .sec01 .date {
  font-size: 24px;
  font-weight: 600;
  color: #B31C45;
  margin-top: 8px;
}

.index .sec01 .info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 24px;
  margin-top: 40px;
}

.index .sec01 .info-item {
  line-height: 150%;
}
.index .sec01 .info-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

.index .sec01 .info-text {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.index .sec01 .info-item.large {
  grid-column: 2 / 3;
  grid-row: 1 / 3; 
}

.index .sec01 .info-item.large .sub {
  font-size: 16px;
  color: #5D5D5D;
  margin-top: 15px;
}

.index .sec01 .btn01.white {
  margin-top: 60px;
}

.index .sec01 .image-wrapper {
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

.index .sec01 .masked-image {
  background-size: cover;
  background-position: center;
  transition: clip-path 1s ease-in-out;
}


.index .sec01 .masked-image.left {
  width: 450px;
  height: 480px;
  background-image: url('../assets/img/main-top01.png');
  clip-path: inset(0 0 0 0);

  opacity: 0;
  transform: scale(1.1); /* 살짝 크게 시작 */
  animation: fadeInZoom 2s ease-out forwards;
}

/* 오른쪽 이미지 */
.index .sec01 .masked-image.right {
  width: 210px;
  height: 300px;
  background-image: url('../assets/img/main-top02.png');
  clip-path: inset(0 0 0 0);

  opacity: 0;
  transform: scale(1.1); /* 살짝 크게 시작 */
  animation: fadeInZoom 2s ease-out forwards;
}

.index .sec01 .image-wrapper .left-wrap {
  position: relative;
  width: 450px;
  height: 480px;
  overflow: hidden;
  animation: leftRoundIn 5s ease-in-out forwards;
}

.index .sec01 .image-wrapper .right-wrap {
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

.index .sec01 {
  /* background-color: yellow; */
}

.index .sec01 .wrap02 {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0px 20px 40px;
  background-image: url('../assets/img/main-sec01-bg.png');
  background-repeat: no-repeat;   
  background-size: cover;           
  background-position: center center; 
  margin-top: 80px;
  text-align: center;
}

.index .sec01 .wrap02 .info-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 75px;
  justify-content: center;
}

.index .sec01 .wrap02 .info-item {
  display: flex;
  align-items: center;
  width: fit-content;
}

.index .sec01 .wrap02 .info-text {
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100px;
}

.index .sec01 .wrap02 .info-title {
  font-weight: bold;
  font-size: 24px;
  color: #B31C45;
}

.index .sec01 .wrap02 .info-date {
  font-size: 18px;
  color: #5D5D5D;
  font-weight: 400;
  line-height: 150%;
  margin-top: 10px;
}

.index .sec01 .wrap02 .info-pink {
  color: #FF5972;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 10px;
}

.index .sec01 .wrap02 .arrow-icon {
  margin-left: 10px;
  transition: transform 0.3s ease;
}



@media (max-width: 768px) {
  .index .sec01 .wrap02 .info-wrapper {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
  }

  .index .sec01 .wrap02 .info-item {
    flex-direction: column;
    align-items: center;
  }

  .index .sec01 .wrap02 .arrow-icon {
    transform: rotate(90deg);
    margin: 10px 0 0 0;
  }

  .index .sec01 .wrap02 .info-text {
    width: 100%;
    text-align: center;
  }

}


</style> 