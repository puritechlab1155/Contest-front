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
        <span>커뮤니티</span>
        <img src="/images/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">FAQ</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <div class="contents-container mt-70">
          <div class="faq-container">
            <h2 class="total">Total {{ faqs.length }}건</h2>
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item"
            >
              <div
                class="faq-question"
                @click="toggleFaq(index)"
              >
                <span class="q-label">Q</span>
                <span>{{ faq.question }}</span>
              </div>
              <div
                v-if="faq.open"
                class="faq-answer"
              >
                <span class="a-label">A</span>
                <div v-html="faq.answer"></div>
              </div>
            </div>
          </div>
        </div>      
      </section>

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: '유치원생도 참여할 수 있나요?',
    answer: `
      제1회 누스피어 미술 공모전의 참가 부문은 다음과 같습니다.<br>
      <b>초등부(저학년), 초등부, 중등부, 고등부, 대학부</b><br>
      따라서, 초등학생부터 해당 공모전에 참여가 가능합니다.
    `,
    open: true
  },
  {
    question: '디지털 드로잉으로 참가 시, 접수 방법이 어떻게 되나요?',
    answer: `디지털 드로잉 참가 시 공모전 사이트의 접수 페이지를 통해 작품 파일을 업로드하시면 됩니다.`,
    open: false
  },
  {
    question: '온라인작품 업로드 용량 제한이 있나요?',
    answer: `작품 업로드 시 파일당 최대 10MB까지 가능합니다.`,
    open: false
  },
  {
    question: '디지털 드로잉의 출력 기준이 있나요?',
    answer: `출력 시 300dpi 이상의 해상도를 권장합니다.`,
    open: false
  },
  {
    question: '작품사진 업로드시 주의사항이 있나요?',
    answer: `사진 촬영 시 그림이 왜곡되지 않도록 정면에서 촬영하며, 그림 외 배경이 최소화되도록 합니다.`,
    open: false
  }
])

function toggleFaq(index) {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
.faq-container {
  max-width: 700px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.total {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.faq-item {
  border-bottom: 1px solid #f1f1f1;
  padding: 12px 0;
}

.faq-question {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.q-label {
  color: red;
  margin-right: 8px;
}

.a-label {
  color: #d9534f;
  font-weight: bold;
  margin-right: 8px;
}

.faq-answer {
  margin-top: 8px;
  background: #fff5f5;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
}
</style>
