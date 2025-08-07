<template>
  <div v-if="show && data?.url" class="popup-overlay">
    <div class="popup-content">
      <img :src="data.url" alt="팝업 이미지" class="popup-image" />
      <div class="popup-buttons">
        <button class="black" >닫기</button>
        <button >하루 동안 보지 않기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const show = ref(true) // 팝업 표시 여부
// 더미 데이터 
const data = reactive({
  url: '/images/mockup/postpop.jpg', 
})


</script>

<style scoped>
button {
  /* opacity: 0.5; */
  cursor: not-allowed !important;
}
.popup-overlay {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 550px;
  background: #fff;
  /* border: 1px solid #ccc; */
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
  box-sizing: border-box;
}

.popup-buttons button {
  flex: 1;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  background-color: #FEFEFE;
}
button.black {
  background-color: #222;
  color: #FEFEFE;
}
</style>
