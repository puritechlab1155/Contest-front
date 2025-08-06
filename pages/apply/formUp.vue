<template>
  <!-- 컨텐츠 섹션 -->
  <main class="sub">
    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">접수</h1>
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
            <h3 class="bgBox-title">작품 접수 (14세 이상)</h3>
            <form class="apply-form" @submit.prevent="submitForm">
              <!-- 참가 부문 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">참가 부문</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="radio-group">
                  <label><input type="radio" value="middle" v-model="formData.category" /> 중등부</label>
                  <label><input type="radio" value="high" v-model="formData.category" /> 고등부</label>
                  <label><input type="radio" value="univ" v-model="formData.category" /> 대학부(대학원생 포함)</label>
                </div>
              </div>

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
                  <label class="label">본인 연락처</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" v-model="formData.phone" placeholder="01012345678" @input="formData.phone = formData.phone.replace(/[^0-9]/g, '')"
                />
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
                        <li>신청내역 조회 시, 이메일 주소가 필요합니다. 꼭 기억해 주세요.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 원서 파일 -->
              <!-- <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">원서 파일</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <button type="button" @click="triggerApplicationFileInput" class="file-button btn01 white">파일 추가</button>
                <span class="file-name" v-if="applicationFileName">{{ applicationFileName }}<button class="remove-button" @click="removeApplicationFile">×</button></span>
                <input ref="applicationFileInput" type="file" @change="handleApplicationFileChange" style="display:none" />
              </div> -->

              <!-- 작품 사진 -->
              <div class="form-group align-up">
                <div class="form-label-wrap h-45">
                  <label class="label required">작품 사진</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="column">
                  <button type="button" @click="triggerWorkImageInput" class="file-button btn01 white">
                    <span>{{ workImageFileName ? '파일 수정' : '파일 추가' }}</span>
                  </button>
                  <div class="file-wrap">
                    <div v-if="workImagePreview" class="preview-container">
                      <img :src="workImagePreview" alt="미리보기 이미지" class="preview-image" />
                    </div>
                    <div v-if="workImageFileName" class="file-name">{{ workImageFileName }}
                      <button class="remove-button" @click="removeWorkImage">×</button>
                    </div>
                    <input
                      ref="workImageInput"
                      type="file"
                      accept="image/*"
                      @change="handleWorkImageChange"
                      style="display:none"
                    />
                  </div>
                </div>
              </div>

              <!-- 작품명 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">작품명</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" v-model="formData.workTitle" placeholder="작품명을 입력해주세요."/>
              </div>

              <!-- 작품 설명 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">작품 설명</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <textarea class="textarea" v-model="formData.workDescription" placeholder="작품에 대한 설명을 입력해주세요."></textarea>
              </div>
            </form>
          </div>
        </div>      
        <div class="btn-wrap">
          <BtnBlack
            :disabled="!allChecked"
            @click="submitForm"
          >
            <span>접수하기</span>
          </BtnBlack>
        </div>
      </section>

    </div>
    <!-- <div class="form-display" style="background-color: aqua; padding: 50px; font-size: 18px;">
      <p>카테고리: {{ formData.category }}</p>
      <p>이름: {{ formData.name }}</p>
      <p>전화번호: {{ formData.phone }}</p>
      <p>이메일: {{ formData.email }}</p>
      <p>인증코드: {{ formData.authCode }}</p>
      <p>작품 이미지: {{ formData.workImage ? formData.workImage.name : '없음' }}</p>
      <p>작품 제목: {{ formData.workTitle }}</p>
      <p>작품 설명: {{ formData.workDescription }}</p>
      <p>agree: {{ formData.agree }}</p>
      <p>workImage: {{ formData.workImage ? '있음' : '없음' }}</p>
    </div> -->

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
let timerInterval = null             // 타이머 인터벌 핸들

const config = useRuntimeConfig()
const token = useCookie('auth_token').value

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

// 작품 사진 상태
const workImageInput = ref(null)
const workImageFileName = ref('')
const workImagePreview = ref('')


function triggerWorkImageInput() {
  workImageInput.value.click()
}

function removeWorkImage() {
  workImageFileName.value = ''
  workImagePreview.value = ''
  formData.value.workImage = null
  workImageInput.value.value = null
}


// api 전송 초기화
function handleWorkImageChange(event) {
  const file = event.target.files[0]
  if (file) {
    workImageFileName.value = file.name
    workImagePreview.value = URL.createObjectURL(file)
    formData.value.workImage = file
  }
}

const formData = ref({
  category: '',
  name: '',
  phone: '',
  email: '',
  authCode: '',
  workImage: null,
  workTitle: '',
  workDescription: '',
  agree: false,
})



// 제출 처리
const allChecked = computed(() => {
  const d = formData.value

  return (
    d.category &&
    d.name.trim() &&
    d.phone.trim() &&
    d.email.trim() &&
    d.workImage &&
    d.workTitle.trim() &&
    d.workDescription.trim()
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

  // 모든 유효성 통과 → API 전송
  try {

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
    const result = await Swal.fire({
      title: '접수가 완료되었습니다.',
      html: `
        접수번호는 <strong style="color: #B31C45; font-size: 18px;">25Aa001</strong>입니다.<br><br>
        <span style="color: #B31C45; font-size: 16px;">추후 결과 발표 시,<br>
        해당 접수번호로 확인이 가능합니다.</span>
      `,
      icon: 'success',
      confirmButtonText: '접수 확인하기',
      confirmButtonColor: '#222',
    })

    if (result.isConfirmed) {
      router.push('/apply/check')
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
  align-items: center;
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
}
.form-label-wrap.h-45{
  height: 45px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #D9D9D9;
  font-size: 18px;
}
.form-group input {
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
  outline: none;  
  box-shadow: 0 0 5px rgba(199, 147, 161, 0.5); 
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
.radio-group {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}
.radio-group.ect1 {
  min-height: 50px;
}

.radio-group label {
  font-weight: 400;
  color: #5D5D5D;
  display: inline-flex;
  align-items: center;
  font-size: 18px;
}

.radio-group input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-right: 6px;
  width: 22px;
  height: 22px;
  border: 1px solid #5D5D5D;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background: #FAFAFA;
  flex-grow: 0; 
  vertical-align: middle;
}

.radio-group input[type="radio"]:checked {
  background: #FAFAFA;
  border: 1px solid #B31C45;
}

.radio-group input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #B31C45;
}
.red {
  background-color: #B31C45;
  color: #FAFAFA;
  border: 1px solid #B31C45;
}
.file-button {
  cursor: pointer;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  width: auto;
}
.file-button span {
  font-size: 18px;
}

.file-name {
  margin-left: 16px;
  font-weight: 400;
  background-color: #EFEFEF;
  padding: 12px 20px;
  border: 1px solid #D9D9D9;
  color: #5D5D5D;
  font-size: 14px;
}
.file-wrap {
  display: flex;
  align-items: flex-end;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}
.preview-container {
  width: 220px;     
  height: 160px;   
  border: 1px solid #D9D9D9;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  margin-top: 10px;
}
.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.form-group.align-up {
  align-items: start;
}
.etc {
  display: flex;
  align-items: center;
}

.inline-input {
  margin-left: 10px;
  padding: 5px;
  /* max-width: 150px; */
  min-width: 150px;
  flex-shrink: 1;   
  flex-grow: 0;        
  flex-basis: auto;  
  box-sizing: border-box;
}

.email-auth {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.certi {
  /* border: 1px solid #D9D9D9; */
  font-weight: 400;
  z-index: 10px;
}
/* .tip {
  font-size: 16px;
  color: #FF5972;
} */
.mb-0 {
  margin-bottom: 0;
}


.remove-button {
  background-color: #ACACAC;
  color: #EFEFEF;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  line-height: 1;
  margin-left: 5px;
  display: inline;
  padding-bottom: 1.5px;
  padding-right: 0.5px;
}

.form-group .textarea {
  height: 300px;
  overflow-y: auto;   
  resize: none;  
  /* box-sizing: border-box; */
}

.dot {
  margin-top: 20px;
}
.dot ul {
  padding-left: 1.5em; 
  margin: 0.5em 0 1em;
}
.dot li {
  padding-left: 20px;
  font-size: 18px;
  color: #5D5D5D;
  line-height: 150%;
}
.dot li::before {
  content: '• ';
}

.bold {
  font-size: 18px;
}



@media (max-width: 768px) {
  .form-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .form-group .label {
    font-size: 16px;
    width: 100px;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 16px;
  }
  .radio-group label {
    font-size: 16px;
  }
  .radio-group input[type="radio"] {
    width: 18px;
    height: 18px;
  }
  .preview-container {
    margin-left: 0px;
    padding: 10px;
  }
  .file-name {
    margin-left: 0px;
    padding: 10px;
  }
  .box {
    padding: 20px;
  }
  .file-button {
    width: 100%;
  }
  .file-button span {
    font-size: 16px;
  }
  .preview-container {
    width: 100%;
  }
  .file-name, .column {
    width: 100%;
  }
  .apply-form {
    margin-top: 20px;
    gap: 20px;
  }
  .certi {
    font-size: 16px;
  }
  .file-wrap {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .form-group input{
    width: 100%;
    max-width: none !important;
  }
  .email-auth {
    width: 100%;
  }
  .remove-button {
    padding-bottom: 1px;
    padding-right: 0.2px;
  }
  .form-group input::placeholder,
  .form-group textarea::placeholder,
  .form-group select::placeholder {
    font-size: 16px;
  }
  .form-label-wrap.one{
    display: none;
  }
  .confirm {
    font-size: 16px;
    color: #5D5D5D;
  }
  .bold {
    font-size: 16px;
  }
  .dot li {
    font-size: 16px;
  }
  .certi span{
    padding: 10px;
  }
  /* .form-group .textarea {
    height: 300px;
    overflow-y: auto;   
    resize: none;  
  } */
}


</style> 