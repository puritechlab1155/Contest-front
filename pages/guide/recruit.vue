<template>
  <!-- todo: 도메인 견결위해 임시 팝업배치. 최종적으로 지우기 -->
 
  <!-- 컨텐츠 섹션 -->
  <main class="sub">


    <Popup />

    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">모집요강</h1>
    </div>

    <div class="sub-radius">

      <!-- 네비게이션 -->
      <div class="subNav inner">
        <span>홈</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span>공모 요강</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">모집요강</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <!-- 상단 영역 -->
        <div class="top flex-container" v-if="data">
          <!-- 왼쪽 영역: 포스터 -->
          <div class="poster-box">
            <img :src="data.posterImg" alt="포스터 이미지" />
          </div>

          <!-- 오른쪽 영역: 텍스트 -->
          <div class="txt-box">
            <div class="top">
              <div class="title-earea">
                <img class="halfCircle" src="/images/common/halfCircle.png" alt="반원" />
                <h2 class="recruit-title">{{ data.title }}</h2>
              </div>

              <div class="btn-earea mt-20">
                <button class="f-18 btn01 white"
                  v-for="(btn, idx) in data.buttons"
                  :key="idx"
                  @click="downloadFile(btn.url)"
                >
                  <span class="flex">
                    {{ btn.label }}
                    <img src="/images/common/download.svg" alt="다운로드 아이콘" />
                  </span>
                </button>
              </div>
            </div>

            <div class="bottom desc mt-70">
              <h3 class="pointColor02">대회 주제</h3>
              <div class="gradient mt-20">
                <span class="recruit-topic">{{ data.topic }}</span>
              </div>
            </div>           

          </div>
        </div>

        <!-- 하단 회색박스 영역 -->
        <div class="contents-container mt-16">
          <div class="flex-container">
            
            <div class="bgBox left box01">
              <h3 class="bgBox-title">부문별 세부 주제</h3>
              <p class="f-18 mt-20">
                <span class="bold width">초 · 중등부</span>
                <span>:</span>
                <span>{{ data.elementaryTopic }}</span>
              </p> 
              <p class="f-18 mt-20">
                <span class="bold width">고등부</span>
                <span>:</span>
                <span>{{ data.middleTopic }}</span>
              </p> 
              <p class="f-18 mt-20">
                <span class="bold width">대학부<br/>(대학원생 포함)</span>
                <span>:</span>
                <span>{{ data.hightTopic }}</span>
              </p> 
              <h3 class="bgBox-title mt-50">참가 대상</h3>
              <p class="f-18 mt-20">
                <span class="bold">초등 / 중등 / 고등 / 대학부(대학원생 포함)</span>
              </p>
              <h3 class="bgBox-title mt-50">참가 부문</h3>
              <p class="f-18 mt-20">
                <span class="bold">자유 창작 부문(주제 해석 및 표현 형식 자유)</span>
              </p>
              <p class="arrow f-18">→ 주제를 창의적으로 해석하여, 자신만의 세계를 표현</p>       
            </div>
            
            <div class="bgBox right box02">
              <h3 class="bgBox-title">주요 일정</h3>
              <p class="f-18 mt-20">
                <span class="bold width">접수 기간</span>
                <span>:</span>
                <span class="w-70">{{ data.register }}</span>
              </p>  
              <p class="f-18 mt-20">
                <span class="bold width">심사 기간</span>
                <span>:</span>
                <span class="w-70">{{ data.audit }}</span>
              </p>  
              <p class="f-18 mt-20">
                <span class="bold width">결과 발표</span>
                <span>:</span>
                <span class="w-70">{{ data.announce }}</span>
              </p>  
              <div class="caution mt-10">
                <ul>
                  <li>대상 수상자 기사화 및 언론 브랜딩 지원</li>
                </ul>
              </div>
              <p class="f-18 mt-20">
                <span class="bold width">전시 일정</span>
                <span>:</span>
                <span class="w-70">{{ data.exhibitDate }}</span>
              </p>  
              <p class="f-18 mt-20">
                <span class="bold width">전시 장소</span>
                <span>:</span>
                <span class="w-70">{{ data.exhibitPlace }}</span>
              </p>  


              <p class="f-18 mt-20">
                <span class="bold width">주최</span>
                <span>:</span>
                <span class="w-70">㈜뉴스피릿</span>
              </p>  
              <p class="f-18 mt-20">
                <span class="bold width">주관</span>
                <span>:</span>
                <span class="w-70">뉴스피릿 미술 공모전 운영 위원회</span>
              </p>  
              <p class="f-18 mt-20">
                <span class="bold width">후원</span>
                <span>:</span>
                <span class="w-70">한국환경공단, 한국환경산업기술원, <br class="web"/>
                  (사)한국예술문화단체총연합회,<br class="web"/> (사)한국전업미술가협회, (사)한국예술작가협회</span>
              </p>  
                                  
            </div>
          </div>
        </div> 
        <div class="contents-container mt-16">
          <div class="flex-container">
            
            <div class="bgBox left box03">
              <h3 class="bgBox-title">출품 규격</h3>
              <p class="f-18 mt-20">
                <span class="bold width">초등부 (저학년)</span>
                <span>:</span>
                <span>8절지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold width">초등부 (고학년)</span>
                <span>:</span>
                <span>4절지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold width">중 · 고등부</span>
                <span>:</span>
                <span>4절 도화지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold width">대학부<br class="sMob"/>(대학원생 포함)</span>
                <span>:</span>
                <span>10호 미만</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold width">디지털 드로잉</span>
                <span>:</span>
                <span>A3 크기(5절지) 기준,<br class="web"/>
                  해상도 300 DPI 기준</span>
              </p>
              <div class="caution mt-10">
                <ul>
                  <li>규격 준수 필수 (규격 초과 시 심사에서 제외 될 수 있습니다)</li>
                </ul>
              </div>
            </div>

            <div class="bgBox right box04">
              <h3 class="bgBox-title">출품 형식</h3>
              <p class="f-18 mt-20">
                <span>작품 재료는 자유, 모든 재료를 활용한 회화, 기타 <span class="bold">평면 작품</span><br class="sweb"/>
                (유화, 크레용, 파스텔, 수채화, 볼펜, 아크릴, 디지털 드로잉 등)</span>
              </p>
              <div class="caution mt-10">
                <ul>
                  <li>순수예술, 단 조각과 입체 작품 제외</li>
                </ul>
              </div>
              <h3 class="bgBox-title mt-50">참가비</h3>
              <p class="f-18 mt-20">
                <span class="bold width">초등부</span>
                <span>:</span>
                <span>무료</span>
              </p>         
              <p class="f-18 mt-20">
                <span class="bold width">중 · 고등부</span>
                <span>:</span>
                <span>20,000원</span>
              </p> 
              <p class="f-18 mt-20">
                <span class="bold width">대학부<br class="sMob"/> (대학원생 포함)</span>
                <span>:</span>
                <span>30,000원</span>
              </p>      
              <div class="caution mt-10">
                <ul>
                  <li>참가비 입금 계좌는 ‘출품 방법’을 확인해 주세요.</li>
                </ul>
              </div>            
            </div>

          </div>
        </div> 

        <div class="contents-container mt-70">
        </div>   
        
        <!-- 버튼 -->
        <div class="btn-wrap">
          <BtnBlack>
            <span>다음</span>
          </BtnBlack>
        </div>

      </section>

    </div>


  </main>
</template>

<script setup>
import Popup from '~/components/Popup.vue'
// 더미데이터
const data = ref({
  title: '제1회 뉴스피릿 미술 공모전',
  posterImg: '/images/mockup/poster.jpg', 
  buttons: [
    {
      label: '모집요강 포스터',
      url: '/images/mockup/poster.zip' 
    },
    {
      label: '모집요강(PDF)',
      url: '/images/mockup/recruit.pdf'
    }
  ],
  topic: '“미래의 스타, 꿈꾸는 지구"',
  elementaryTopic: '꿈꾸는 고래 (블루오션)',
  middleTopic: '발상의 전환과 도전',
  hightTopic: '차이와 공감의 세계(글로벌 휴머니티)',
  register: '2025. 9. 15 (월) ~ 10. 15 (수)',
  audit: '2025. 10. 16 (목) ~ 10. 31 (금)',
  announce: '2025. 11. 03 (월) ',
  exhibitDate: '2025. 11. 26.(수) ~ 12. 04(목) ',
  exhibitPlace: '서울시 종로구 인사동길30-13, 갤러리 모자리자 산촌'
})

function downloadFile(url) {
  window.open(url, '_blank')
}




</script>

<style scoped>
.mt-50 {
  margin-top: 50px;
}

.top.flex-container {
  display: flex;
  justify-content: space-between;
  gap: 10%;
}
.poster-box {
  width: 30%;
}
.txt-box {
  width: 65%;
}
.btn-earea {
  display: flex;
  justify-content: start;
  gap: 10px;
}
.btn-earea .flex {
  display: flex;
  gap: 10px;
}
.gradient {
  border-radius: 20px;
  padding: 28px 10px;
  text-align: center;
}
.recruit-topic {
  color: #FEFEFE;
  font-size: 44px;
}
p.f-18.mt-20 {
  display: flex;
  align-items: stretch;
  gap: 4px;
}
.box01 span.width {
  min-width: 110px;
  display: block;
}
.box02 span.width {
  min-width: 65px;
  display: block;
}
.box03 span.width, .box04 span.width {
  min-width: 155px;
  display: block;
}
p.arrow {
  color: #5D5D5D;
}
/* .w-70 {} */

@media (max-width: 768px) {
  .poster-box, .txt-box {
    width: 100%;
  }
  .sub .recruit-title {
    font-size: 24px;
  }
  .f-18 {
    font-size: 16px;
  }
  .sub .halfCircle {
    left: 35%;
    top: 30px;
    max-width: 50px;
  }
  .desc h3.pointColor02, .recruit-topic {
    font-size: 24px;
  }
  .gradient {
    border-radius: 10px;
    padding: 16px 10px;
    text-align: center;
  }
  .mt-50 {
    margin-top: 40px;
  }
  br.web {
    display: none;
  }

}
@media (max-width: 480px) {
  br.sweb {
    display: none;
  }
  .box03 span.width, .box04 span.width {
  min-width: 100px;
}
}
</style> 