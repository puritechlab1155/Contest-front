<template>
    <!-- 컨텐츠 섹션 -->
    <main class="sub">
      <!-- 타이틀 배경 -->
      <div class="subTitle-box">        
        <h1 class="subTitle">조직도</h1>
      </div>
  
      <div class="sub-radius">
  
        <!-- 네비게이션 -->
        <div class="subNav inner">
          <span>홈</span>
          <img src="/images/common/navarrow.svg" alt="화살표">
          <span>소개</span>
          <img src="/images/common/navarrow.svg" alt="화살표">
          <span class="pointColor01">조직도</span>
        </div>
  
        <!-- 컨텐츠  -->
        <section class="awards subContent inner">  
          <div class="contents-container">
            <div>
              <picture>
                <source srcset="/images/intro/organizationChart-mob.png" media="(max-width: 768px)" />
                <img src="/images/intro/organizationChart.png" alt="조직도">
              </picture>
            </div>
          </div>      
        </section>
  
      </div>
  
  
    </main>
</template>

<style scoped>
.contents-container div {
  display: flex;
  justify-content: center;
}
</style>