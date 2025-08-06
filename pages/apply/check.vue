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
        <span class="pointColor01">조회</span>
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
                    <button
                      type="button"
                      class="btn01 white certi"
                      @click="handleAuthButtonClick"
                      :disabled="emailVerified"
                    >
                      <span>
                        {{ isCodeSent && !emailVerified ? '인증코드 확인' : '인증코드 전송' }}
                      </span>
                    </button>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label-wrap one">
                    <label class="label"></label>
                    <span class="bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div class="info-wrap">
                    <input style="max-width: 528px" type="text" v-model="formData.authCode" placeholder="인증 코드 입력" />
                    <div class="caution">
                      <ul>
                        <li v-if="isWaiting">
                          인증 코드는 <strong style="color: #FF5972;">{{ remainingTime }}초</strong> 동안 유효합니다. <br/>
                          코드를 입력하신 후 <strong style="color: #FF5972;">‘인증코드 확인’</strong>을 눌러 인증을 완료해 주세요.
                        </li>
                        <li v-else-if="emailVerified" class="bold">
                          이메일 인증이 완료되었습니다.
                        </li>
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
          <BtnBlack
            :disabled="!allChecked"
            @click="submitForm"
          >
            <span>조회하기</span>
          </BtnBlack>
        </div>
      </section>

    </div>


  </main>
</template>

<script setup>

import Swal from 'sweetalert2'
import { useRuntimeConfig, useCookie, useRouter } from '#imports'

const router = useRouter()

const isCodeSent = ref(false)        // 코드가 전송되었는지
const isWaiting = ref(false)         // 타이머 진행 중인지
const remainingTime = ref(0)         // 남은 시간
const emailVerified = ref(false)      // 인증 완료 여부
let timerInterval = null   


// 이메일 유효성 검사
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 실제 인증코드 확인 (테스트용)
async function verifyCode(email, code) {
  console.log('인증 확인 시도 →', email, code)
  return true  // 항상 통과 (테스트용)
}

// 타이머 시작
function startTimer() {
  isWaiting.value = true
  remainingTime.value = 60
  timerInterval = setInterval(() => {
    remainingTime.value--
    if (remainingTime.value <= 0) {
      stopTimer()
      isCodeSent.value = false
    }
  }, 1000)
}

// 타이머 중지
function stopTimer() {
  clearInterval(timerInterval)
  isWaiting.value = false
  remainingTime.value = 0
}

// 인증 코드 전송 함수
async function sendCode() {
  Swal.fire('인증 코드가 전송되었습니다.', '이메일을 확인해주세요.', 'success')
  isCodeSent.value = true
  startTimer()
}

// 인증 버튼 클릭 핸들러 (전송 또는 확인)
async function handleAuthButtonClick() {
  if (!isCodeSent.value) {
    // 1단계: 코드 전송
    if (!validateEmail(formData.value.email)) {
      Swal.fire('유효한 이메일을 입력해주세요.', '', 'warning')
      return
    }

    await sendCode()
  } else if (!emailVerified.value) {
    // 2단계: 인증코드 확인
    if (!formData.value.authCode) {
      Swal.fire('인증코드를 입력해주세요.', '', 'warning')
      return
    }

    const isValid = await verifyCode(formData.value.email, formData.value.authCode)

    if (isValid) {
      emailVerified.value = true
      stopTimer()
      Swal.fire('이메일 인증이 완료되었습니다.', '', 'success')
    } else {
      Swal.fire('인증 코드가 일치하지 않습니다.', '', 'error')
    }
  }
}

const formData = ref({
  name: '',
  phone: '',
  email: '',
  authCode: '',
})


// 제출 처리
const allChecked = computed(() => {
  const d = formData.value

  const isGuardianRelationValid =
    d.guardianRelation &&
    (d.guardianRelation !== 'other' || d.guardianRelationEtc.trim() !== '')

  return (
    d.name.trim() &&
    d.phone.trim() &&
    d.email.trim() &&
    emailVerified.value 
  )
})

async function submitForm() {
  const d = formData.value


  if (d.phone && !/^\d{10,11}$/.test(d.phone)) {
    return Swal.fire('본인 연락처는 숫자만 10~11자리로 입력해주세요.', '', 'warning')
  }


  if (d.guardianPhone && !/^\d{10,11}$/.test(d.guardianPhone)) {
    return Swal.fire('보호자 연락처는 숫자만 10~11자리로 입력해주세요.', '', 'warning')
  }


  if (!emailVerified.value) {
    return Swal.fire('이메일 인증을 완료해주세요.', '', 'warning')
  }

  if (d.guardianRelation === 'other' && !d.guardianRelationEtc.trim()) {
    return Swal.fire('기타 보호자 관계를 입력해주세요.', '', 'warning')
  }
  // 모든 유효성 통과 → API 전송
  try {
    const isSuccess =  true
    // const payload = new FormData()
    // for (const key in d) {
    //   payload.append(key, d[key])
    // }

    // const { data, error } = await useFetch('/api/register', {
    //   baseURL: config.public.backendUrl,
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: payload,
    // })

    // if (error.value) {
    //   return Swal.fire('접수 중 오류가 발생했습니다.', '잠시 후 다시 시도해주세요.', 'error')
    // }

    // 접수 완료 안내창
    
    if (isSuccess) {
      const result = await Swal.fire({
        title: '접수가 완료되었습니다.',
        html: `
          접수번호는 <strong style="color: #B31C45; font-size: 18px;">25Aa001</strong>입니다.<br><br>
          <span style="color: #B31C45; font-size: 16px;">추후 결과 발표 시,<br>
          해당 접수번호로 확인이 가능합니다.</span>
        `,
        icon: 'success',
        confirmButtonText: '확인',
        confirmButtonColor: '#222',
      })

      if (result.isConfirmed) {
        router.push('/') // 👉 메인 페이지로 이동
      }
    } else {
      await Swal.fire({
        title: '일치하는 정보가 없습니다.',
        icon: 'warning',
        confirmButtonText: '다시 조회하기',
        confirmButtonColor: '#222',
      })
      // 👉 페이지 이동 없음 (현재 페이지에 머무름)
    }
  } catch (e) {
    console.error(e)
    Swal.fire('알 수 없는 오류가 발생했습니다.', '', 'error')
  }
}

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
  width: 115px; 
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

.bold {
  font-size: 18px;
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
  .certi span {
    font-size: 16px;
    padding: 0 10px;
  }
  .email-auth {
    width: 100%;
  }
  .form-group input{
    width: 100%;
    max-width: none !important;
  }
  .form-group input::placeholder,
  .form-group textarea::placeholder,
  .form-group select::placeholder {
    font-size: 16px;
  }
  .form-label-wrap.one{
    display: none;
  }
  .form-label-wrap {
    height: 25px;
  }
  .bold {
    font-size: 16px;
  }
}

</style> 