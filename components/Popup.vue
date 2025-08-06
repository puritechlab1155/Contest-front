<template>
  <div v-if="show && data?.url" class="popup-overlay">
    <div class="popup-content">
      <img :src="data.url" alt="팝업 이미지" class="popup-image" />
      <div class="popup-buttons">
        <button @click="closeForToday">하루 동안 보지 않기</button>
        <button @click="close">닫기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. 더미 데이터 직접 정의 (API 없이)
const data = reactive({
  url: '/images/postpop.jpg', // public/images/postpop.jpg 에 이미지 파일 위치해야 함
})

// 2. 쿠키 기반으로 팝업 표시 여부 제어
const show = ref(false)

onMounted(() => {
  const hideUntil = useCookie('hidePopupUntil')
  const now = new Date()

  if (!hideUntil.value || new Date(hideUntil.value) < now) {
    show.value = true
  }
})

function close() {
  show.value = false
}

function closeForToday() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  useCookie('hidePopupUntil').value = tomorrow.toISOString()
  show.value = false
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-image {
  width: 100%;
  display: block;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.popup-buttons button {
  flex: 1;
  margin: 0 5px;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
}
</style>
