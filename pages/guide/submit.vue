<template>
  <!-- 컨텐츠 섹션 -->
  <main class="sub">
    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">출품방법</h1>
    </div>

    <div class="sub-radius">

      <!-- 네비게이션 -->
      <div class="subNav inner">
        <span>홈</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span>공모 요강</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">출품방법</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <div class="desc">
          <p class="f-18 mt-2 tc">
            모든 지원자는 <span class="f-24">온라인 접수, 오프라인 접수 두 가지 모두</span> 접수하셔야 합니다.
          </p>
        </div>

        <!-- 참가비 입금 -->
        <div class="desc">
          <h2 class="pointColor02">참가비 입금 </h2>
        </div>
        <div class="bgBox box01">
             
        </div>


        <div class="contents-container mt-70">
          <div class="flex-container">

            <div class="left">
              <div class="desc">
                <h2 class="pointColor02">온라인 접수 </h2>
              </div>
              <div class="bgBox">
              
              </div>
            </div>

            <div class="right">
              <div class="desc">
                <h2 class="pointColor02">실물 작품 접수</h2>
              </div>
              <div class="bgBox">
                
              </div>
            </div>
          </div>
          <!-- <div class="caution mt-30">
            <ul>
              <li>수상자는 결과 발표 당일 공지사항에서 확인 가능합니다.</li>
            </ul>
          </div> -->
        </div>  

        <!-- <div class="contents-container mt-70">
        </div>       -->
      </section>

    </div>


  </main>
</template>

<script setup>
</script>

<style scoped>
.tc {
  text-align: center;
}
.f-24 {
  font-size: 24px;
}
.flex-container .left, .flex-container .right {
  flex:1;
}
.flex-container .left .bgBox {
  background-color: #FFF5F5;
  border: none;
}
.flex-container .right .bgBox {
  background-color: #FFF9EB;
  border: none;
}


@media (max-width: 768px) {
  .f-24 {
    font-size: 20px;
  }
}
</style> 