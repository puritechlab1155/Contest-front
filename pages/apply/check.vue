<template>
  <!-- 컨텐츠 섹션 -->
  <main class="sub">
    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">조회</h1>
    </div>

    <div class="sub-radius">

      <!-- 네비게이션 -->
      <div class="subNav inner">
        <span>홈</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span>접수 및 조회</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">접수</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <div class="contents-container mt-70">
          <div class="box">
            <h3 class="bgBox-title">접수 신청시 입력하신 정보로 조회 가능합니다.</h3>
            <form class="apply-form" @submit.prevent="submitForm">
              <!-- 참가자 성명 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">참가자 성명</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" v-model="formData.name" placeholder="이름을 입력하세요" />
              </div>

              <!-- 본인 연락처 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">본인 연락처</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="info-wrap">
                  <input type="text" v-model="formData.phone" placeholder="01012345678" />
                  <div class="caution">
                    <ul>
                      <li>만14세 미만 접수자는 보호자 연락처 기재가 가능합니다</li>
                    </ul>
                  </div>
                </div>
              </div>


              <!-- 이메일 인증 -->
              <div>
                <div class="form-group mb-0">
                  <div class="form-label-wrap">
                    <label class="label required">이메일 인증</label>
                    <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div class="email-auth">
                    <input type="email" v-model="formData.email" placeholder="이메일 주소" />
                    <button type="button" class="btn01 white certi" @click="sendCode">인증코드 전송</button>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label-wrap one">
                    <label class="label"></label>
                    <span class="bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div class="info-wrap">
                    <input class="mx-700" type="text" v-model="formData.authCode" placeholder="인증 코드 입력" />
                    <div class="caution">
                      <ul>
                        <li>접수 당시 입력하신 이메일 주소를 입력해 주세요.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>      
        <div class="btn-wrap">
          <button class="btn01 black custom">조회하기</button>
        </div>
      </section>

    </div>


  </main>
</template>

<script setup>

const formData = ref({
  name: '',
  phone: '',
  email: '',
  authCode: '',
})

</script>

<style scoped>


.box {
  background-color: #FAFAFA;
  border-radius: 14px;
  border: 1px solid #EFEFEF;
  padding: 50px;
}

.apply-form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 40px;
}
.form-group {
  display: flex;
  align-items: flex-start;
  justify-content: start;
  margin-bottom: 20px;
}

.form-group .label {
  flex-shrink: 0;
  width: 120px; 
  font-size: 18px;
  font-weight: 600;
}

.form-group label.required::after {
  content: ' *';
  color: #F4313F;
}

.form-label-wrap {
  display: flex;
  align-items: center;
  height: 50px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #D9D9D9;
  font-size: 18px;
}
.form-group input{
  max-width: 360px;
}

.form-group .info-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #d1446a;  
  outline: none;          /* 기본 파란색 외곽선 제거 */
  box-shadow: 0 0 5px rgba(199, 147, 161, 0.5); /* 약간 그림자 효과 */
}

.form-group input::placeholder,
.form-group textarea::placeholder,
.form-group select::placeholder {
  color: #ACACAC;
  font-size: 18px;
}

.form-group input,
.form-group textarea,
.form-group .radio-group,
.form-group .email-auth {
  flex: 1;
}

.email-auth {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.mb-0 {
  margin-bottom: 0;
}

.certi {
  /* border: 1px solid #D9D9D9; */
  padding: 10px 30px;
  font-weight: 400;
}

.btn-wrap {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  position: sticky;
  bottom: 0 !important;
}

.custom {
  margin: 0 auto;
  padding: 10px 80px;
  margin-top: 50px;
}
.custom:disabled {
  background: #aaa;
  cursor: not-allowed;
  border: 1px solid #aaa;
}



@media (max-width: 768px) {
  .box {
    padding: 20px;
  }
  .apply-form {
    margin-top: 20px;
    gap: 20px;
  }
  .form-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .form-group .label {
    font-size: 16px;
    width: 100px;
  }
  .certi {
    padding: 12px 15px;
  }
  .email-auth {
    width: 100%;
  }
  .custom {
    width: 100vw;
    margin-left: -20px;
    margin-right: -20px;
    padding: 15px 0px;
  }
  .form-group input::placeholder,
  .form-group textarea::placeholder,
  .form-group select::placeholder {
    font-size: 16px;
  }
  .form-label-wrap.one{
    display: none;
  }
  .btn-wrap{
    padding-bottom: 0;
  }
  .form-label-wrap {
    height: 25px;
  }
}

</style> 