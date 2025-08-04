<template>
  <footer class="footer inner" >
    <div class="wrap01">
      <div class="group-a">
        <span class="label">주최 및 주관</span>
        <span class="divider">|</span> <span class="mob-br"></span>
        <img src="../assets/img/common/footer-logo.png" alt="로고" class="logo" />
        <span class="text">뉴스피릿 미술 공모전 운영위원회</span>
      </div>
      <div class="group-b">
        <span class="label">후원</span>
        <div class="box-a">
          <span class="divider">|</span> 
          <span class="text">한국환경공단</span> 
          <span class="text">한국환경산업기술원</span>
        </div>
        <div class="box-b">
          <span class="text mt-5">(사)한국예술문화단체총연합회</span>
          <span class="text">(사)한국전업미술가협회</span>
          <span class="text">(사)한국예술작가협회</span>        
        </div>
      </div>
    </div>
    <div class="wrap02">
      <div class="group-a">
        <span class="text-a">전화문의 &nbsp;:&nbsp; (주)뉴스피릿 미술 공모전 사무국</span>
        <span class="text-a bold">02-3775-3336 / 010-8924-0942</span>
      </div>
      <div class="group-b">
        <span class="text-a">이메일 문의 &nbsp;:&nbsp; 공모전 사무국 e-mail</span> 
        <span class="text-a bold">abcd1234@naver.com</span>
      </div>
    </div>
    <div class="wrap03">
      <nuxt-link to="/terms" class="text-link">이용약관</nuxt-link> 
      <span class="divider text-a">|</span>
      <nuxt-link to="/privacy" class="text-link">개인정보처리방침</nuxt-link>
    </div>
    <div class="wrap04">
      <span class="text-a">주소 &nbsp;:&nbsp; 서울특별시 종로구 새문안로5가길 28, 광화문 플래티넘 3층 뉴스피릿</span>
      <span class="text-a">Copyright by 뉴스피릿 미술공모전 All rights reserved.</span>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  /* background-color: teal; */
  padding: 50px;
  display: flex;
  flex-direction: column;
}
.footer .wrap01 {
  border: 1px solid #d9d9d9;
  border-top-left-radius: clamp(10px, 5vw, 1000px);
  border-top-right-radius: clamp(10px, 5vw, 1000px);
  border-bottom-left-radius: clamp(10px, 5vw, 1000px);
  border-bottom-right-radius: clamp(10px, 5vw, 1000px);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  /* align-items: center; */
  overflow: hidden;
}

.footer .wrap01 .group-a,
.footer .wrap01 .group-b {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: #5D5D5D;
}
.footer .wrap01 .group-b .box-a,
.footer .wrap01 .group-b .box-b{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.footer .wrap01 .group-a .label,
.footer .wrap01 .group-b .label {
  font-size: 16px;
  color: #5D5D5D;
  font-weight: 600;
  white-space: nowrap;
}
.footer .wrap02 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  color: #5D5D5D;
  margin-top: 50px;
}

.footer .wrap03 {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  margin-top: 30px;
}

.footer .wrap04 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #5D5D5D;
  margin-top: 15px;
}

.footer .wrap02 .group-a,
.footer .wrap02 .group-b {
  display: flex;
  gap: 20px;
}

.footer .divider {
  margin: 0 0px;
}

.footer .logo {
  width: 110px;
  height: auto;
  margin-bottom: 10px;
  vertical-align: middle;
}

.footer .mob-br {
  display: none;
}
.footer .mob-br2 {
  display: none;
}
.footer .text {
  font-size: 14px;
  color: #5D5D5D;
  font-weight: 700;
}
.footer .text-a {
  color: #5D5D5D;
  font-size: 12px;
}

.footer .text-link {
  height: auto;
  width: auto;
  font-weight: 700;
  color: #5D5D5D;
  font-size: 12px;
}
@media (max-width: 1110px) {
  .footer .wrap02 {
    gap: 30px;
  }
}

@media (max-width: 820px) {
  .footer .wrap01 .box-b {
    margin-left: 45px;
  }
}

/* 모바일 대응 */
@media (max-width: 768px) {
  .footer {
    padding: 30px 20px;
  }
  .footer-box {
    flex-direction: column;
    border-left: 0;
    border-right: 0;
    border-radius: 10px;
    align-items: flex-start;
  }
  .footer .wrap01 .group-a,
  .footer .wrap01 .group-b {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
  }
  .footer .wrap01 {
    border-radius: 10px;
    gap: 20px;
    padding: 35px 20px;
  }
  .footer .wrap02 {
    justify-content: flex-start;
    margin-top: 30px;
    gap: 10px;
    flex-direction: column;
  }
  .footer .wrap02 .group-a,
  .footer .wrap02 .group-b {
    flex-direction: column;
    gap: 10px;
  }
  .footer .wrap03 {
    justify-content: flex-start;
    margin-top: 20px;
  }

  .footer .wrap04 {
    justify-content: flex-start;
    margin-top: 10px;
    align-items: flex-start;
  }

  .footer .mob-br {
    display: block !important;
    width: 100%;
    height: 0; 
  }
  .footer .mt-5{
    margin-top: 5px;
  }
}

/* 모바일 대응 */
@media (max-width: 400px) {
  .footer .mt-5{
    margin-top: 0;
  }
  .footer .mob-br2 {
    display: block;
    width: 100%;
    height: 0; 
  }
  .footer .wrap01 {
    gap: 30px;
  }
  .footer .wrap01 .group-b {
    gap: 10px;
  }
}
</style>