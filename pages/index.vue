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
      <div class="section-title">
        수상자 혜택
      </div>
      <div class="wrap01">
        <div class="left">
          <div class="text" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="500">기사화 노출</div>
          <img class="trophy" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" src="/images/main/sec04-trophy.png" alt="트로피 이미지">
        </div>
        <div class="right">
          <div class="section-sub-title">
            부문별 대상자 상금
          </div>
          <div class="prize-wrap">
            <div class="prize-box" v-for="(prize, index) in prizes" :key="index">
              <div class="prize-age">{{ prize.age }}</div>
              <div class="prize-money">
                <template v-if="typeof prize.money === 'number'">
                  ₩{{ counts[index].toLocaleString() }}
                </template>
                <template v-else>
                  <span>
                    {{ displayedText[index] }}
                  </span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="sec05 inner mt-20">
      <div class="notice-section">
        <div class="section-header">
          <h2 class="section-title">공지사항</h2>
          <NuxtLink to="/notice" class="more-link">
            more +
          </NuxtLink>
        </div>
        <ul class="notice-list">
          <li
            v-for="notice in noticeList"
            :key="notice.id"
            class="notice-item"
          >
            <div class="notice-info">
              <span
                class="label"
                :class="{
                  important: notice.label === 'important',
                  normal: notice.label === 'normal'
                }"
              >
              <span class="label-prefix">
                {{ notice.label === 'important' ? '중요' : '일반' }}
              </span>
              <span class="label-suffix">공지</span>
              </span>
              <NuxtLink :to="`/notice/${notice.id}`" class="notice-title">
                {{ notice.title }}
              </NuxtLink>
            </div>
            <span class="date">{{ notice.created_at }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="sec06 inner mt-20">
      <div class="section-title">
        후원
      </div>
      <Carousel/>
    </section>



  </main>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

const noticeList = ref([
  { id: 1, title: '중요공지 입니다. 공지 제목이 들어갈 예정입니다.', created_at: '2025. 07. 07', label: 'important' },
  { id: 2, title: '중요공지 입니다. 공지 제목이 들어갈 예정입니다.', created_at: '2025. 07. 07', label: 'important' },
  { id: 3, title: '일반공지 입니다. 공지 제목이 들어갈 예정입니다.', created_at: '2025. 07. 07', label: 'normal' },
  { id: 4, title: '일반공지 입니다. 공지 제목이 들어갈 예정입니다.', created_at: '2025. 07. 07', label: 'normal' }
])

const prizes = ref([
  { age: '대학부 (1명)', money: 1000000 },
  { age: '고등부 (1명)', money: 500000 },
  { age: '중등부 (1명)', money: 500000 },
  { 
    age: '초등부 (1명)', 
    money: '문화상품권',
    // 문자열이면 AOS 속성 제거해서 페이드업 안되게
    // aos: { name: 'fade-up', duration: '500' }  <-- 이 부분 제거
  },
])

const counts = ref(prizes.value.map(p => (typeof p.money === 'number' ? 0 : p.money)))
const typingTexts = ref(prizes.value.map(p => (typeof p.money === 'string' ? p.money.split('') : [])))
const displayedText = ref(prizes.value.map(() => ''))

function animateCount(target, idx) {
  const duration = 3000
  const frameRate = 30
  const totalFrames = Math.round(duration / (1000 / frameRate))
  let frame = 0

  const counter = setInterval(() => {
    frame++
    counts.value[idx] = Math.floor(target * (frame / totalFrames))
    if (frame >= totalFrames) {
      counts.value[idx] = target
      clearInterval(counter)
    }
  }, 1000 / frameRate)
}

function typeText(idx) {
  let i = 0
  const chars = typingTexts.value[idx]
  
  setTimeout(() => {  
    const interval = setInterval(() => {
      if (i < chars.length) {
        displayedText.value[idx] += chars[i]
        i++
      } else {
        clearInterval(interval)
      }
    }, 500)
  }, 1000)  
}

import { nextTick } from 'vue'

onMounted(async () => {
  AOS.init()

  await nextTick()
  AOS.refresh()

  const target = document.querySelector('.sec04')
  if (!target) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        prizes.value.forEach((prize, index) => {
          if (typeof prize.money === 'number') {
            counts.value[index] = 0      // 숫자 카운트 초기화
            animateCount(prize.money, index) // 숫자 카운트 다시 실행
          } else if (typeof prize.money === 'string') {
            displayedText.value[index] = '' // 타이핑 텍스트 초기화
            typeText(index)                  // 타이핑 재실행
          }
        })
        AOS.refresh()
      }
    })
  }, {
    threshold: 0.1,
  })

  observer.observe(target)
})
</script>

<style scoped>

.section-title {
  font-size: 46px;
  /* font-weight: 600; */
}
.section-sub-title {
  font-size: 30px;
  /* font-weight: 600; */
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
  /* background-color: #b3b01c; */
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
  padding: 55px 0 0;
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
  color: #5D5D5D;
}

.sec03 {
  padding: 50px 20px;
}

.sec03 .iframe {
  margin-top: 50px;
}

.sec04 {
  padding: 50px 20px 0;
}
.sec04 .wrap01 {
  display: flex;
  gap: 20px;
  margin-top: 80px;
  /* background-color: aquamarine; */
}
.sec04 .left {
  flex: 5;
  background-image: url('/images/main/sec04-bg.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 110% 400px;
  position: relative;
  /* background-color: antiquewhite; */
}
.sec04 .left .text{
  position: absolute;
  font-size: clamp(26px, 5vw, 50px);
  /* font-weight: 600; */
  top: 5%;
  left: 50%;
  transform: translate(-50%, 5%);
  color: #FF5E00;
}
.sec04 .left .trophy {
  width: auto;
  height: 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
}

.sec04 .right {
  flex: 5;
  margin-bottom: 80px;
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
.prize-money span[data-aos] {
  will-change: transform, opacity;
  display: inline-block;
}


.sec05 {
  padding: 50px 20px;
}

.sec05 .notice-section {
  width: 100%;
}

.sec05 .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.sec05 .more-link {
  font-size: 18px;
  /* display: flex;
  align-items: center; */
  width: auto;
}
.sec05 .more-icon {
  width: 24px;
  margin-left: 10px;
}
.sec05 .more-link:hover {
  /* text-decoration: underline; */
  color: #F4313F;
}
.sec05 .notice-list {
  list-style: none;
  padding: 30px 50px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
}
.sec05 .notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.sec05 .notice-item:last-child {
  border-bottom: none;
}
.sec05 .notice-info {
  display: flex;
  align-items: center;
  width: 100%; 
  overflow: hidden; 
}
.sec05 .label.important {
  background-color: #F4313F;
  border: 1px solid #F4313F;
}
.sec05 .label.important .label-prefix, 
.sec05 .label.important .label-suffix {
  color: #EFEFEF;
}
.sec05 .label {
  display: inline-block;
  font-size: 18px;
  /* font-weight: bold; */
  padding: 5px 15px;
  margin-right: 20px;
  flex-shrink: 0;
  color: #222222;
  background-color: #FEFEFE;
  border: 1px solid #D9D9D9;
}
.sec05 .notice-title {
  font-weight: 500;
  white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
  flex-grow: 1; /* 제목이 가능한 공간을 모두 차지하도록 설정 */
  font-size: 18px;
}
.sec05 .notice-title:hover {
  text-decoration: underline;
}
.sec05 .date {
  color: #999;
  font-size: 18px;
  flex-shrink: 0;
  margin-left: 20px; 
}

.sec05 .label-suffix {
  display: inline;
}

.sec06 {
  padding: 50px 20px;
}
/* .sponsor-carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
}
.sponsor-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.sponsor-item {
  flex: 0 0 33.33%;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
}
.sponsor-item img {
  max-width: 80%;
  height: auto;
} */


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
  .sec01 .wrap01 {
    padding-left: 0;
  }
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
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
    padding: 0 20px;
    justify-items: center;
    align-items: flex-start;
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
  .mt-20 {
    margin-top: 0;
  }
  .section-title {
    font-size: 24px;
    /* font-weight: 600; */
  }
  .section-sub-title {
    font-size: 20px;
    /* font-weight: 600; */
  }
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
    padding: 0px;
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
    text-align: center;
  }
  .sec02 .txt.pc {
    display: none;
  }
  .sec03 {
    padding: 20px;
  }
  .sec03 .iframe {
    margin-top: 0;
    height: 365px;
  }
  .sec04 {
    padding: 20px;
  }
  .sec04 .wrap01 {
    flex-direction: column;
    height: 640px;
  }
  .sec04 .wrap01 .prize-wrap {
    gap: 20px;
  }
  .sec04 .right {
    margin-bottom: 0;
  }
  .sec04 .left .text{
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .sec04 .left .trophy {
    height: 60%;
  }
  .sec05 {
    padding: 20px;
  }
  .sec05 .label-suffix {
    display: none;
  }
  .sec05 .notice-list {
    padding: 20px;
  }
  .sec05 .label {
    margin-right: 10px;
    padding: 5px 10px;
  }
  .sec06 {
    padding: 20px;
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
  .sec04 .left {
    flex: 5;
    background-image: url('/images/main/sec04-bg-mob.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 90% auto;
    position: relative;
  }
}

@media (max-width: 400px) {

}
</style> 