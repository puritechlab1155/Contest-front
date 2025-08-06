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
      <section class="awards subContent">
        <CountdownTimer @closedStatus="handleCountdownStatus" class="inner"/>
        <div class="contents-container mt-70">
          <div class="age-select-wrap">
            <div class="age-options">
              <!-- <div
                v-for="(option, idx) in options"
                :key="idx"
                class="age-option"
                :class="{ selected: selected === option.value }"
                @click="selectOption(option.value)"
              >
                <div class="icon-wrap">
                  <img :src="option.icon" alt="icon" class="age-icon" />
                </div>
                <span class="label">{{ option.label }}</span>
                <svg
                  v-if="selected === option.value"
                  class="check-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div> -->
              <div class="left">
                <div class="option-inner" @click="goToUnderInfo">
                  만 14세 미만 <br> 참가자
                </div>
              </div>
              <div class="right">
                <div class="option-inner" @click="goToUpInfo">
                만 14세 이상 <br> 참가자
                </div>
              </div>
            </div>

          </div>
        </div>      
      </section>

    </div>


  </main>
</template>

<script setup>

// const UnderAgeIcon = {
//   template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//   </svg>`
// }

// const OverAgeIcon = {
//   template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
//   </svg>`
// }

import UnderAgeIcon from '/images/apply/ageDown.png'
import OverAgeIcon from '/images/apply/ageUp.png'

const router = useRouter()
const selected = ref(null)

const options = [
  {
    label: '만 14세 미만 참가자',
    value: 'under',
    icon: UnderAgeIcon,
  },
  {
    label: '만 14세 이상 참가자',
    value: 'over',
    icon: OverAgeIcon,
  },
]

const selectOption = (value) => {
  selected.value = value
}


const goToUnderInfo = () => {
  router.push('/apply/formUnder') // underInfo.vue로 이동
}

const goToUpInfo = () => {
  router.push('/apply/formUp') // upInfo.vue로 이동
}

</script>

<style scoped>

.age-select-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.age-options {
  display: flex;
  justify-content: center;
  width: 100%;
}
.contents-container {
  /* width: calc(100% + 40px); */
  /* padding-left: 20px; */
  /* padding-right: 20px; */
}

.left {
  display: flex;
  align-items: right;
  justify-content: center;
  flex: 1;
  height: 300px;
  width: 100%;
  background-image: url(/images/apply/left-bg.png);
  background-position: bottom center; 
  background-repeat: no-repeat;
  background-size: 100% auto;
  /* background-size: calc(100% + 40px) auto;  */
}
.right {
  display: flex;
  align-items: left;
  justify-content: center;
  flex: 1;
  height: 300px;
  width: 100%;
  background-image: url(/images/apply/right-bg.png);
  background-position: bottom center; 
  background-repeat: no-repeat;
  background-size: 100% auto;
  /* background-size: calc(100% + 40px) auto; */
}
.option-inner {
  font-size: 70px;
  font-weight: 600;
  background-color: aquamarine;
  min-width: 624px;
  max-width: 624px;
}
.left .option-inner {
  background-image: url(/images/apply/ageDown.png);
  background-position: right bottom; 
  background-repeat: no-repeat;
  background-size: 50% auto;
  margin-left: auto;
}
.right .option-inner {
  background-image: url(/images/apply/ageUp.png);
  background-position: right bottom; 
  background-repeat: no-repeat;
  background-size: 70% auto;
  margin-right: auto;
}

/* 
.age-option {
  flex: 1;
  padding: 24px 16px;
  border-radius: 12px;
  border: 2px solid transparent;
  background-color: #FEFEFE;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.age-option.selected {
  background-color: rgba(255, 142, 172, 0.1); 
  border-color: #B31C45;
  border: 2px solid #B31C45;
}

.age-option .icon-wrap {
  background-color: white;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.age-option .label {
  font-size: 20px;
  font-weight: 500;
}

.age-option .check-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  color: #B31C45;
}

.age-icon {
  width: 55px;
  height: 55px;
  object-fit: contain;
  padding: 5px;
} */

@media (max-width: 1248px) {
  .option-inner {
    min-width: 0;
  }
}
@media (max-width: 768px) {
  .age-options {
    flex-direction: column;
  }
  .option-inner {
    font-size: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 50px;
  }
  .left .option-inner {
    background-size: 50% auto;
    margin-left: auto;
    height: 350px;
    
  }
  .right .option-inner {
    background-size: 50% auto;
    margin-right: auto;
    height: 350px;
  }
}


</style> 