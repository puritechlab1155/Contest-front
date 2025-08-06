<template>
    <!-- 컨텐츠 섹션 -->
    <main class="sub">
      <!-- 타이틀 배경 -->
      <div class="subTitle-box">        
        <h1 class="subTitle">공모전 소개</h1>
      </div>
  
      <div class="sub-radius">
  
        <!-- 네비게이션 -->
        <div class="subNav inner">
          <span>홈</span>
          <img src="/images/common/navarrow.svg" alt="화살표">
          <span>소개</span>
          <img src="/images/common/navarrow.svg" alt="화살표">
          <span class="pointColor01">공모전 소개</span>
        </div>
  
        <!-- 컨텐츠  -->
        <section class="awards subContent inner">  
          <div class="contents-container">
            <div class="flex-container">
              <div class="bgBox left">
                <h3 class="bgBox-title">학생의 잠재력을 깨우는 시작</h3>
                <p class="f-18 mt-20">
                    미래를 열어가는 학생들의 여정에, 뉴스피릿이 함께합니다
                </p>
                <h3 class="bgBox-title mt-50">자기 발견과 미래 설계</h3>
                <p class="f-18 mt-20">
                    학생 개개인의 자기 발견과 미래 설계를 응원합니다.<br/>
                    생각을 표현하고, 미래를 설계하는 힘을 길러줍니다.
                </p>
                <h3 class="bgBox-title mt-50">함께 여는 미래</h3>
                <p class="f-18 mt-20">
                    함께 그리는 더 나은 내일,<br/>
                    미래를 열어가는 창의 인재 육성에 앞장섭니다.
                </p>
              </div>
              <div class="bgBox right">
                <h3 class="bgBox-title">창의 인재 육성</h3>
                <p class="f-18 mt-20">
                    학생들의 창조적인 세계관을 발굴하고, 상상력을 현실로 이끄는 파트너가 되겠습니다.
                </p>
                <h3 class="bgBox-title mt-50">함께하는 미래 가치</h3>
                <p class="f-18 mt-20">
                    공생적 상상력을 통한 창조적 가치 실현<br/>
                    다른 사람과 함께 살아가는 세상을 상상하고, 그 속에서 더 나은 
                    공동체적 가치를 실현합니다
                </p>                
              </div>
            </div>

          </div>      
        </section>
  
      </div>
  
  
    </main>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
    .mt-50 {
        margin-top: 50px;
    }
    @media (max-width: 768px) {
    .f-18 {
      font-size: 16px;
    }
    .f-18.mt-20 {
      margin-top: 10px;
    }
    .mt-50 {
        margin-top: 40px;
    }
  }
  
  </style> 