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
        <CountdownTimer @closedStatus="handleCountdownStatus"/>
        <div class="contents-container mt-70">
          <div class="box">
            <div 
              v-for="(item, index) in termsList" 
              :key="index" 
              class="term-item"
            >
              <div class="term-header" @click="toggle(index)">
                <strong class="strong">{{ item.title }}</strong>
                <div class="circle">
                  <svg 
                    v-if="opened[index]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- ▲ 위쪽 화살표 -->
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.562 16.9997L3.5 15.9547L11.29 8.28874C11.4803 8.1042 11.7349 8.00101 12 8.00101C12.2651 8.00101 12.5197 8.1042 12.71 8.28874L20.5 15.9547L19.438 16.9997L12 9.68174L4.562 16.9997Z"
                      fill="#222222"
                    />
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- ▼ 아래쪽 화살표 -->
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.438 7.00035L20.5 8.04535L12.71 15.7113C12.5197 15.8958 12.2651 15.999 12 15.999C11.7349 15.999 11.4803 15.8958 11.29 15.7113L3.5 8.04535L4.563 7.00035L12 14.3183L19.438 7.00035Z"
                      fill="#222222"
                    />
                  </svg>
                </div>
              </div>

              <div v-if="opened[index]" class="term-content">
                <div class="term-scroll">
                  <div v-html="item.content"></div>
                </div>
              </div>
              <div class="term-radio">
                  <label :for="`agreeYes-${index}`">
                    <input
                      :id="`agreeYes-${index}`"
                      type="radio"
                      :name="`agree${index}`"
                      value="yes"
                      v-model="agreements[index]"
                    />
                    동의합니다
                  </label>
                  <label :for="`agreeNo-${index}`">
                    <input 
                      :id="`agreeNo-${index}`"
                      type="radio" 
                      :name="`agree${index}`"
                      value="no" 
                      v-model="agreements[index]" 
                      @change="handleDisagree(index)"
                    /> 
                    동의하지 않습니다
                  </label>
                </div>
            </div>
          </div>
          <div class="term-all">
            <label>
              <input type="checkbox" v-model="allChecked" />
              전체 약관에 동의합니다
            </label>
            <!-- <p v-if="!allAgreed" class="error">※ 전체 약관에 동의해 주세요</p> -->
            
          </div>
          <div class="btn-wrap">
            <BtnBlack
              :disabled="!allChecked"
              @click="handleNext"
            >
              <span>다음</span>
            </BtnBlack>
          </div>
        </div>
      </section>

    </div>

  </main>

</template>

<script setup>

import Swal from 'sweetalert2'
import { useState } from "#imports";
import { useRouter, useRoute } from "vue-router";
import { useCookie } from '#imports';

const config = useRuntimeConfig() 
const token = useCookie('auth_token').value
const router = useRouter();
const route = useRoute()
const isDeadlineClosed = ref(false)

function handleCountdownStatus(status) {
  // status가 true면 마감된 상태라고 가정
  isDeadlineClosed.value = status
}



function handleDisagree(index) {
  if (agreements.value[index] === 'no') {
    Swal.fire({
      icon: 'warning',
      title: '약관 동의 필요',
      text: '공모전 참여를 위해서는 모든 약관에 동의해주셔야 합니다.',
      confirmButtonText: '확인'
    })
  }
}


const termsList = [
  {
    title: '개인정보 수집 및 이용에 관한 사항',
    content: `
      <h3>개인정보의 처리 목적</h3>
      <p>'2025 국민참여 청렴콘텐츠 공모전' 이용자 확인을 위한 목적으로 귀하의 개인정보를 수집, 이용하고 있습니다.<br/>
      수집방법에 따른 구체적인 수집목적 및 이용목적은 다음과 같습니다.</p>
      <ul>
        <li>공모전 참가자 본인 확인 및 심사진행을 위한 정보 수집</li>
      </ul>

      <h3>처리하는 개인정보의 항목</h3>
      <p>'2025 국민참여 청렴콘텐츠 공모전' 의 서비스 제공을 위하여 필요한 최소한의 범위 내에서 아래와 같이 개인정보를 수집하고 있습니다.</p>
      <ul>
        <li>성명, 생년월일, 연락처, 전자우편(E-mail), 소속(학교 및 직장), 거주 주소, 작품제목, 작품설명, 작품</li>
      </ul>

      <h3>개인정보의 처리 및 보유기간</h3>
      <p>'2025 국민참여 청렴콘텐츠 공모전' 은 개인정보 수집 및 이용목적이 달성된 후에는 다음과 같이 해당 정보를 지체 없이 파기합니다.</p>
      <ul>
        <li>작품 심사 및 결과 발표 종료 후 6개월 이내</li>
      </ul>

      <h3>개인정보처리의 위탁에 관한 사항</h3>
      <p>'2025 국민참여 청렴콘텐츠 공모전' 은 서비스 이행을 위해 아래와 같이 외부 전문업체에 취급 위탁하여 운영하고 있습니다.</p>
      <ul>
        <li>수탁업체 위탁업무내용 : 홍보 업무 대행, 참가자 DB시스템 구축, 홈페이지 개발 및 유지보수</li>
        <li>수탁업체 명 : ㈜씽굿</li>
      </ul>

      <h3>동의를 거부할 권리 및 미동의 시 불이익</h3>
      <p>개인정보의 수집, 이용, 제공, 위탁 등과 관련한 위 사항에 대하여 원하지 않는 경우 동의를 거부할 수 있습니다.<br/>
      다만, 귀하가 동의를 거부하는 경우 공모과정에서 불이익이 있을 수 있음을 알려드립니다.</p>
      <p>※ 만14세 미만일 경우, 법정대리인 동의 하에 개인정보 처리(수집, 이용, 제공)에 동의합니다.</p>
    `
  },
  {
    title: '저작권 안내사항',
    content: `
      <h3>[출품작 관련]</h3>
      <ul>
        <li>연극·영상 2차 창작 부문을 제외한 모든 출품작은 순수 창작물이어야 함</li>
        <li>제출된 작품의 초상권, 저작권 관련 분쟁 발생 시 책임은 출품자에게 귀속됨</li>
        <li>출품작품에 사용된 이미지 소스, 음원, 폰트는 저작권에 위배되지 않는 음원이어야 하며, 저작권 침해가우려될 시 수상에서 제외될 수 있음</li>
        <li>Chat GPT 등 AI툴에 의한 창작물은 인정하지 않으며, 공개 검증 결과에 따라 AI 활용 의심 시 심사 및 수상에서 제외될 수 있음</li>
        <li>디자인 관련 사이트(미리캔버스, 망고보드)를 사용할 경우 각 사이트의 저작권 규정을 확인하고 문제가 발생하지 않는다는 증빙자료(어플리케이션 및 사이트 저작권 약관, 소유인증 화면 등)를 제출해야 하며, 저작권이 모호한 프로그램 및 사이트 사용은 가급적 권장하지 않음</li>
        <li>타 공모전 및 지원사업 등에서 수상한 작품이거나 표절 시비가 발생할 경우 심사에서 제외되며,입상 발표 후 표절이 확인될 경우에는 수상이 취소되고 시상금 환수와 함께 민·형사상 법적인조치를 취할 수 있음</li>
        <li>특정 브랜드 등이 직접적으로 노출되거나 연상되는 작품은 심사 시 불리하게 작용되지는 않으나,시상식 전에 콘텐츠를 일부 수정 요청할 수 있음</li>
        <li>주최사는 접수작을 국민참여 표절제보 및 국민투표를 위해 공모전 홈페이지 또는 국민생각함에 공개할 수 있으며 이에 따라 접수작 공개 후 출품작이 제3자의 초상권 및 저작권 분쟁 등을 야기한 경우 출품작과 관련된 모든 문제는 출품자의 책임으로 함</li>
        <li>출품자는 출품작이 제3자의 지식재산권을 침해하지 않도록 주의</li>
      </ul>
      <h3>[수상작 관련]</h3>
      <ul>
        <li>최종 수상작에 한해 부문별로 주최측이 요청하는 자료 제출이 불가할 경우 수상이 취소될 수 있음</li>
        <li>초등학생 청렴 교육프로그램 : 교육프로그램 소개 및 활용법 ppt 1부 제출 필수(30매 이내)</li>
        <li>청렴 굿즈 디자인 : 디자인 원본파일(ai 혹은 psd)1식, 실물 제품 1개 제출 필수</li>
        <li>청렴 연극/영상 : 고화질 원본 영상파일 제출 필수</li>
        <li>수상작품 중 초상권 침해 가능성이 있을 경우, 출품자는 초상권 동의서를 제출해야 하며 미제출시수상에서 취소/제외됨</li>
        <li>‘지식재산권 제도의 기본원칙’에 따라 아이디어(수상작)에 대한 권리는 아이디어 제안자에게 있으나, 수상작에 한해 저작권 활용에 대한 동의를 받아 국민권익위원회 청렴연수원이 저작재산권(2차적저작물작성권 포함)을 행사할 수 있음</li>
        <li>굿즈 디자인 부문 수상작은 주최측과의 사전 협의 없이 수상자 단독으로 상품으로 제작·판매하거나, 그 밖의 영리적 목적으로 이용할 수 없음</li>
        <li>수상작은 주최/주관사의 홍보 및 캠페인 사업, 행사, 교육 등 공익적인 목적에 한하여 원본 또는2차적 저작물로 재제작되어 사용될 수 있음</li>
        <li>출품작이 심사기준에 부합하지 않거나, 그 수준이 현격하게 낮을 경우 시상 건수가 축소되거나시상 내역이 없을 수 있음</li>
        <li>수상하지 않은 출품작의 경우에는 최종 수상작 공지/발표 후 3개월 이내에 폐기됨</li>
        <li>저작권 사항을 꼼꼼히 읽어보시고, 동의 여부를 선택해 주세요. 미동의 시, 공모전 접수가 거부될 수 있습니다.</li>
      </ul>
      `
  },
  {
    title: '공모전 출품 시 유의사항 안내',
    content: `
      <h3>[접수 관련]</h3>
      <ul>
        <li>1인(또는 팀)당 부문별 출품수 제한 없음, 단 수상은 1편만 가능</li>
        <li>팀으로 지원 시 팀명으로만 시상하게 되며, 상금은 대표자에게 일괄 지급됨.또한 수상 후 상장 및 상금 배분에 대한 출품자 간의 문제가 발생 시 주관기관은 이에 관여하거나 책임지지 않음</li>
      </ul>
      <h3>[부문별 유의 사항]</h3>
      <ul>
        <li>전 부문 개인·팀 공모 가능</li>
        <li>부문세부내용초등학생 청렴 교육프로그램형식
          <ul>
            <li>초등학생을 위한 청렴 교육프로그램 아이디어</li>
          </ul>
        </li>
      </ul>
      <h3>[ 제출 규격 ]</h3>
      <ul>
        <li>① 제안서 : 제공되는 양식사용, A4 5매 이내 (한글 파일 1식, PDF 파일 1식)</li>
        <li>② 교구 (유인물, 활동지 등) (PDF 파일로 추가 제출/자유양식)</li>
        <li>수상자에 한해 교육프로그램 소개 및 활용법 ppt 1부 제출 필수(30매 이내)</li>
        <li>청렴 굿즈 디자인형식
          <ul>
            <li>액세서리, 공예품, 엽서·그림, 패션잡화, 의류, 생활소품, 문구사무, 청렴 체험 키트(DIY) 등 굿즈 디자인 일체</li>
            <li>크기 : 가로X세로X높이 1㎥ 이내</li>
            <li>가격 : 10만원 이내</li>
          </ul>
        </li>
        <li>제출 규격</li>
        <li>① 작품 설명서 : 제공되는 양식사용, A4 2매 이내 (한글 파일 1식, PDF 파일 1식)</li>
        <li>② 작품 디자인 시안 : 전면/측면/후면 모습 (PDF, JPG 등으로 제출/자유양식)
          <ul>
            <li>용량 : 최대 30MB / 300dpi 이상</li>
          </ul>
        </li>
        <li>수상자에 한해 디자인 원본파일(ai 혹은 psd) 1식, 실물 제품 1개 제출 필수</li>
        <li>청렴 연극/영상형식순수 창작물
          <ul>
            <li>청렴 가치의 중요성과 필요성을 잘 나타내는 재미있는 연극·영상</li>
            <li>청렴을 쉽고 재미있게 배울 수 있는 연극·영상</li>
          </ul>
        </li>
        <li>수상작 2차 활용물
          <ul>
            <li>2018~2024 청렴콘텐츠 공모전 '문학 부문' 수상작을 활용한 2차 창작 연극·영상</li>
          </ul>
        </li>
        <li>2차 창작으로 활용 가능한 수상작 리스트는 공모전 홈페이지를 통해 공지</li>
        <li>제출 규격</li>
        <li>① 썸네일 2종 : 작품 영상의 비율과 동일 (JPG 등으로 제출)</li>
        <li>② 해상도: HD 또는 FHD, 1,280x720 또는 1,920x1,080
          <ul>
            <li>확장자 : MP4</li>
            <li>분량 : 최대 20분</li>
            <li>용량 : 최대 500MB</li>
          </ul>
        </li>
        <li>수상자에 한해 고화질 원본 영상파일 제출 필수</li>
      </ul>
      `
  }
]

const opened = ref(termsList.map(() => true))
const agreements = ref(termsList.map(() => null))

const toggle = (index) => {
  opened.value[index] = !opened.value[index]
}

const allAgreed = computed(() => agreements.value.every(val => val === 'yes'))

const allChecked = computed({
  get: () => agreements.value.every(val => val === 'yes'),
  set: (val) => {
    agreements.value = agreements.value.map(() => val ? 'yes' : null)
  }
})


const handleNext = () => {
  if (isDeadlineClosed.value) {
    Swal.fire({
      icon: 'warning',
      title: '접수 기간 종료',
      text: '현재 접수기간이 아닙니다.',
      confirmButtonText: '확인'
    })
    return
  }

  // if (!allAgreed.value) {
  //   Swal.fire({
  //     icon: 'warning',
  //     title: '약관 동의 필요',
  //     text: '공모전 참여를 위해서는 모든 약관에 동의해주셔야 합니다.',
  //     confirmButtonText: '확인'
  //   })
  //   return
  // }

  router.push('/apply/ageCheck')
}


</script>

<style scoped>

.box {
  background-color: #FAFAFA;
  border-radius: 14px;
  border: 1px solid #EFEFEF;
  padding: 50px;
}

.term-item {
  /* border-bottom: 1px solid #ddd; */
  padding: 30px 0;
}

.term-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #EFEFEF;
  padding: 10px;
}

.term-content {
  margin-top: 10px;
}

.term-scroll {
  max-height: 300px;
  overflow-y: scroll;
  /* background: #fff; */
  padding: 10px;
  /* border: 1px solid #ccc; */
  margin-bottom: 10px;

  scrollbar-width: thin; /* Firefox용 */
  scrollbar-color: #D9D9D9 #EFEFEF; /* Firefox용 */
}
.term-scroll::-webkit-scrollbar {
  width: 15px;
}

.term-scroll::-webkit-scrollbar-thumb {
  background-color: #D9D9D9;  /* 스크롤 바 색상 */
  border-radius: 10px;
}

.term-scroll::-webkit-scrollbar-track {
  background-color: #EFEFEF;  /* 스크롤 배경 */
  border-radius: 10px;
}


:deep(.term-content h3) {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: #5D5D5D;
}
:deep(.term-content h3:first-of-type) {
  margin-top: 0px;
}
:deep(.term-content ul) {
  padding-left: 1.5em; 
  list-style-type: disc;
  color: #5D5D5D;
}

:deep(.term-content ul ul) {
  font-size: 18px;
  list-style-type: disc;
  padding-left: 1.5em;
}

:deep(.term-content li) {
  font-size: 18px;
  color: #5D5D5D;
}
/* :deep(.term-content ul li::before) {
  content: "- ";
  margin-right: 4px;
  color: #5D5D5D;
} */
:deep(.term-content p) {
  font-size: 18px;
  margin: 0.5em 0;
  color: #5D5D5D;
}

.term-radio {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
}

.term-radio label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  color: #5D5D5D;
  font-weight: 400;
}

.term-radio input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-right: 10px;
  width: 22px;
  height: 22px;
  border: 1px solid #5D5D5D;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background: white;
}

.term-radio input[type="radio"]:checked {
  background: white;
  border: 2px solid #B31C45;
}

.term-radio input[type="radio"]:checked::after {
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

.term-all {
  margin-top: 30px;
  text-align: left;
  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 20px 50px; 
  display: flex;
  align-items: center;
}

.term-all label {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #B31C45;
}

.term-all input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-right: 10px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  /* border: 2px solid #ccc; */
  border: 1px solid #5D5D5D;
  cursor: pointer;
  position: relative;
  background: white;
}

.term-all input[type="checkbox"]:checked {
  border: 2px solid #B31C45;
  background: white;
}

.term-all input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  font-size: 12px;
  border-radius: 50%;
  background: #B31C45;
}


.term-all .error {
  color: red;
  font-size: 14px;
  margin: 10px 0;
}

/* .next-btn {
  background: #000;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
} */

/* .next-btn:disabled {
  background: #aaa;
  cursor: not-allowed;
} */

.btn-wrap {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  position: sticky;
  bottom: 0 !important;
}
/* 
.custom {
  margin: 0 auto;
  padding: 10px 80px;
  margin-top: 50px;
}
.custom:disabled {
  background: #aaa;
  cursor: not-allowed;
  border: 1px solid #aaa;
} */

@media (max-width: 768px) {
  .box {
    padding: 10px 20px;
  }
  .term-all {
    padding: 10px 20px;
  }
  .term-all label {
    font-size: 16px;
  }
  .custom {
    width: 100vw;
    margin-left: -20px;
    margin-right: -20px;
  }
  :deep(.term-content h3) {
    font-size: 16px;
  }
  :deep(.term-content li) {
    font-size: 16px;
  }
  :deep(.term-content p) {
    font-size: 16px;
  }
  .strong {
    font-size: 18px;
  }
  .btn-wrap {
    padding-bottom: 0;
  }
  .term-header {
    font-size: 16px;
  }
  .term-radio label {
    font-size: 16px;
  }
  .circle {
    padding: 8px;
  }
  .circle svg {
    width: 18px;
    height: 18px;
  }
}


</style>
