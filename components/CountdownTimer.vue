<template>
  <div class="bar gradient">
    <div class="text">접수마감까지</div>
    <div class="text">{{ countdown }}</div>
  </div>
</template>

<script setup>

const emit = defineEmits(['closedStatus'])

// 마감일 설정 (10월 15일 자정 기준)
const deadline = new Date('2025-10-15T00:00:00')

const countdown = ref('')
const isClosed = ref(false)

// 시간을 계산하는 함수
function updateCountdown() {
  const now = new Date()
  const diff = deadline - now

  if (diff <= 0) {
    countdown.value = '마감되었습니다'
    isClosed.value = true
    emit('closedStatus', isClosed.value)
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  countdown.value = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
  isClosed.value = false

  emit('closedStatus', false)
}

let interval

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.bar {
  padding: 15px 50px;
  width: 100%;
  border-radius: clamp(10px, 2vw, 20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.text {
  color: #FEFEFE;
  font-size: clamp(18px, 5vw, 44px);
  font-weight: 400;
}

@media (max-width: 768px) {
  .bar {
    padding: 15px 20px;
  }
}



</style>
