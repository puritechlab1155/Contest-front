<template>
  <!-- 컨텐츠 섹션 -->
  <main class="sub">
    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">모집요강</h1>
    </div>

    <div class="sub-radius">

      <!-- 네비게이션 -->
      <div class="subNav inner">
        <span>홈</span>
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span>공모 요강</span>
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">모집요강</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <!-- 상단 영역 -->
        <div class="flex-container" v-if="data">
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
                <button class="f-18 flex btn01 white"
                  v-for="(btn, idx) in data.buttons"
                  :key="idx"
                  @click="downloadFile(btn.url)"
                >
                  {{ btn.label }}
                  <img src="/images/common/download.svg" alt="다운로드 아이콘" />
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
                  000
              </p>
              <h3 class="bgBox-title mt-50">참가 대상</h3>
              <p class="f-18 mt-20">
                초등 / 중등 / 고등 / 대학부(대학원생 포함)
              </p>
              <h3 class="bgBox-title mt-50">참가 부문</h3>
              <p class="f-18 mt-20">
                자유 창작 부문(주제 해석 및 표현 형식 자유)
              </p>
              <p class="arrow">→ 주제를 창의적으로 해석하여, 자신만의 세계를 표현</p>       
            </div>
            
            <div class="bgBox right box02">
              <h3 class="bgBox-title">주요 일정</h3>
              <p class="f-18 mt-20">
                111
              </p>
                                  
            </div>
          </div>
        </div> 
        <div class="contents-container mt-16">
          <div class="flex-container">
            
            <div class="bgBox left box03">
              <h3 class="bgBox-title">출품 규격</h3>
              <p class="f-18 mt-20">
                <span class="bold">초등부 (저학년)</span>
                <span>:</span>
                <span>8절지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold">초등부 (고학년)</span>
                <span>:</span>
                <span>4절지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold">중 · 고등부</span>
                <span>:</span>
                <span>4절 도화지</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold">대학부(대학원생 포함)</span>
                <span>:</span>
                <span>10호 미만</span>
              </p>
              <p class="f-18 mt-20">
                <span class="bold">디지털 드로잉</span>
                <span>:</span>
                <span>A3 크기(5절지) 기준,<br/>
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
                작품 재료는 자유, 모든 재료를 활용한 회화, 기타 <b>평면 작품</b>
                (유화, 크레용, 파스텔, 수채화, 볼펜, 아크릴, 디지털 드로잉 등)
              </p>
              <div class="caution mt-10">
                <ul>
                  <li>순수예술, 단 조각과 입체 작품 제외</li>
                </ul>
              </div>
              <h3 class="bgBox-title mt-50">참가비</h3>
              <p class="f-18 mt-20">
                <span class="bold">초등부</span>
                <span>:</span>
                <span>무료</span>
              </p>         
              <p class="f-18 mt-20">
                <span class="bold">중 · 고등부</span>
                <span>:</span>
                <span>20,000원</span>
              </p> 
              <p class="f-18 mt-20">
                <span class="bold">대학부(대학원생 포함)</span>
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
      </section>

    </div>


  </main>
</template>

<script setup>
// 더미데이터
const data = ref({
  title: '제1회 뉴스피릿 미술 공모전',
  posterImg: '/images/guide/poster.jpg', 
  buttons: [
    {
      label: '모집요강 포스터',
      url: '/files/guide/poster.zip' 
    },
    {
      label: '모집요강(PDF)',
      url: '/files/guide/recruit.pdf'
    }
  ],
  topic: '“미래의 스타, 꿈꾸는 지구"'
})

function downloadFile(url) {
  window.open(url, '_blank')
}




</script>

<style scoped>
.flex-container {
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


@media (max-width: 768px) {

}

</style> 