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
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span>접수 및 조회</span>
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">접수</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <div class="contents-container mt-70">
          <div class="box">
            <h3 class="bgBox-title">작품 접수 (14세 미만)</h3>
            <form class="apply-form" @submit.prevent="submitForm">
              <!-- 참가 부문 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">참가 부문</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="radio-group">
                  <label><input type="radio" value="low1" v-model="formData.category" /> 초등부(1~3학년)</label>
                  <label><input type="radio" value="low2" v-model="formData.category" /> 초등부(4~6학년)</label>
                  <label><input type="radio" value="middle" v-model="formData.category" /> 중등부</label>
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
                <input type="text" v-model="formData.phone" placeholder="01012345678" />
              </div>

              <!-- 보호자 관계 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">보호자 관계</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="radio-group ect1">
                  <label><input type="radio" value="mother" v-model="formData.guardianRelation" /> 모</label>
                  <label><input type="radio" value="father" v-model="formData.guardianRelation" /> 부</label>
                  <label class="etc">
                    <input type="radio" value="other" v-model="formData.guardianRelation" />
                      기타
                    <input
                      v-if="formData.guardianRelation === 'other'"
                      type="text"
                      v-model="formData.guardianRelationEtc"
                      class="inline-input"
                      placeholder="입력해주세요"
                    />
                  </label>
                </div>
              </div>

              <!-- 보호자 연락처 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">보호자 연락처</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" v-model="formData.guardianPhone" placeholder="01012345678"/>
              </div>

              <!-- 보호자 성함 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">보호자 성함</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" v-model="formData.guardianName" placeholder="보호자 성함을 입력해주세요."/>
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
                    <input style="max-width: 700px" type="text" v-model="formData.authCode" placeholder="인증 코드 입력" />
                    <div class="caution">
                      <ul>
                        <li>접수 조회 시, 이메일 주소가 필요합니다. 꼭 기억해 주세요.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 원서 파일 -->
              <div class="form-group">
                <div class="form-label-wrap">
                  <label class="label required">원서 파일</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <button type="button" @click="triggerApplicationFileInput" class="file-button btn01 white">파일 추가</button>
                <span class="file-name" v-if="applicationFileName">{{ applicationFileName }}<button class="remove-button" @click="removeApplicationFile">×</button></span>
                <input ref="applicationFileInput" type="file" @change="handleApplicationFileChange" style="display:none" />
              </div>

              <!-- 작품 사진 -->
              <div class="form-group align-up">
                <div class="form-label-wrap">
                  <label class="label required">작품 사진</label>
                  <span class="bold">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <button type="button" @click="triggerWorkImageInput" class="file-button btn01 white">파일 추가</button>
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
                <textarea v-model="formData.workDescription" placeholder="작품에 대한 설명을 입력해주세요."></textarea>
              </div>
            </form>
          </div>
        </div>      
        <div class="box two">
          <div class="bold">[필수] 보호자 동의</div>
          <div class="confirm">본인은 공모전에 지원하는 ○○○(참가자)의 법적 보호자로서, 공모전 참여 및 개인정보 수집·이용에 동의합니다.</div>
          <div class="dot">
            <ul>
              <li>수집 항목: 참가자 및 보호자의 성명, 연락처, 관계 등</li>
              <li>수집 목적: 공모전 접수, 심사, 수상자 안내 및 문의 대응 등</li>
              <li>보유 기간: 공모전 종료 후 1년</li>
            </ul>
          </div>
          <label for="agree">
            <input type="checkbox" v-model="formData.agree" id="agree" />
              위 내용에 동의합니다
          </label>
        </div>
        <div class="btn-wrap">
          <BtnBlack
            :label="'제출'"
            :disabled="!allChecked"
            @click="handleNext"
          />
        </div>
      </section>

    </div>


  </main>
</template>

<script setup>

// 원서 파일 상태
const applicationFileInput = ref(null)
const applicationFileName = ref('')

// 작품 사진 상태
const workImageInput = ref(null)
const workImageFileName = ref('')
const workImagePreview = ref('')

// 버튼 클릭 트리거 함수 구분
function triggerApplicationFileInput() {
  applicationFileInput.value.click()
}

function triggerWorkImageInput() {
  workImageInput.value.click()
}


function removeApplicationFile() {
  applicationFileName.value = ''
  formData.value.applicationFile = null
  applicationFileInput.value.value = null // input 초기화
}

function removeWorkImage() {
  workImageFileName.value = ''
  workImagePreview.value = ''
  formData.value.workImage = null
  workImageInput.value.value = null // input 초기화
}

// api 전송 초기화
function handleApplicationFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    applicationFileName.value = file.name
    formData.value.applicationFile = file
  }
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
  guardianRelation: '',
  guardianRelationEtc: '',
  guardianPhone: '',
  guardianName: '',
  email: '',
  authCode: '',
  applicationFile: null,
  workImage: null,
  workTitle: '',
  workDescription: ''
})

// const handleFileChange = (event, key) => {
//   const file = event.target.files[0]
//   if (file) {
//     formData.value[key] = file
//   }
// }

// 이메일 인증 코드 전송
const sendCode = () => {
  // TODO: 이메일 인증 코드 API 호출
  console.log('인증코드 전송:', formData.value.email)
}

// 제출 처리
const submitForm = () => {
  // 예시: FormData 사용
  const payload = new FormData()
  for (const key in formData.value) {
    payload.append(key, formData.value[key])
  }

  // TODO: API 호출만 하면 됨
  console.log('제출 준비 완료:', formData.value)

  // 예: axios.post('/api/submit', payload)
}

</script>

<style scoped>

.box {
  background-color: #FAFAFA;
  border-radius: 14px;
  border: 1px solid #EFEFEF;
  padding: 50px;
}
.box.two{
  margin-top: 30px;
  text-align: center;
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
.radio-group {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}
.radio-group.ect1 {
  height: 50px;
}

.radio-group label {
  /* width: auto; */
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
  padding: 10px 30px;
  cursor: pointer;
  font-size: 18px;
  white-space: nowrap;
  font-weight: 400;
}
/* .file-button:hover {
  background-color: #901737;
} */
.file-name {
  margin-left: 16px;
  font-weight: 400;
  background-color: #EFEFEF;
  padding: 12px 30px;
  border: 1px solid #D9D9D9;
  color: #5D5D5D;
  font-size: 14px;
}
.file-wrap {
  display: flex;
  align-items: flex-end;
}
.preview-container {
  width: 220px;     /* 원하는 너비 */
  height: 160px;    /* 원하는 높이 */
  border: 1px solid #D9D9D9;
  overflow: hidden; /* 이미지가 넘칠 때 숨김 처리 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  margin-left: 20px;
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
  padding: 10px 30px;
  font-weight: 400;
}
/* .tip {
  font-size: 16px;
  color: #FF5972;
} */
.mb-0 {
  margin-bottom: 0;
}
.box.two label {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: clamp(16px, 1.2vw, 18px);
  color: #5D5D5D;
  font-weight: 400;
}

.box.two input[type="checkbox"]{
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
  background: white;
}
.box.two input[type="checkbox"]:checked {
  background: white;
  border: 2px solid #B31C45;
}
.box.two input[type="checkbox"]:checked::after {
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


/* .info-wrap input.mx-700 {
  max-width: 700px !important;
} */

.btn-wrap {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  position: sticky;
  bottom: 0 !important;
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
textarea {
  height: 300px;      
  overflow-y: auto;   
  resize: none;        
}
/* .dot ul {
  padding-left: 20px;  
  list-style-type: dot; 
}

.dot li {
  color: #5D5D5D;
  font-size: 16px;
  list-style-position: inside; 
} */
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
  content: '· ';
}

.confirm {
  font-size: 18px;
  color: #5D5D5D;
  margin-top: 10px;
}
.bold {
  font-size: 18px;
}


@media (max-width: 768px) {
  .form-group.align-up2{
    align-items: start;
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

  .radio-group label {
    font-size: 16px;
  }
  .radio-group input[type="radio"] {
    width: 18px;
    height: 18px;
  }
  /* .bold {
    display: none;
  } */
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
  .preview-container {
    width: 100%;
  }
  .file-name {
    width: 100%;
  }
  .apply-form {
    margin-top: 20px;
    gap: 20px;
  }
  .certi {
    padding: 12px 15px;
  }
  .file-wrap {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .form-group input{
    width: 100%;
    max-width: none;
  }
  .email-auth {
    width: 100%;
  }
  .remove-button {
    padding-bottom: 1px;
    padding-right: 0.2px;
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
  .btn-wrap {
    padding-bottom: 0;
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
}

</style> 