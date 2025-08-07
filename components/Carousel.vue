<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const modules = [Autoplay, Pagination]
const slides = ref([
  { img: '/images/main/sec06-sponsor01.png', alt: '한국환경공단' },
  { img: '/images/main/sec06-sponsor02.png', alt: '한국환경산업기술원' },
  { img: '/images/main/sec06-sponsor03.png', alt: '한국예술문화단체총연합회' },
  { img: '/images/main/sec06-sponsor04.png', alt: '한국예술작가협회' },
  { img: '/images/main/sec06-sponsor05.png', alt: '한국전업미술가협회' },
  // 필요하면 더 추가 가능
])
</script>

<template>
  <swiper
    :modules="modules"
    :space-between="10"
    :loop="true"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }"

    class="mySwiper"
  >
    <swiper-slide 
        v-for="(slide, index) in slides" 
        :key="index" 
        :class="`slide-${index + 1}`"
      >
      <div class="slide-content">
        <img :src="slide.img" :alt="slide.alt" />
      </div>
    </swiper-slide>
  </swiper>
</template>


<style scoped>


/* .mySwiper {
  padding-bottom: 50px;
} */

.slide-content {
  height: 324px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent
}
.slide-content img {
  width: auto;
  height: 80%;
  object-fit: contain;
}
.slide-1 {
  background-image: url('/images/main/sec06-bg01.png');
  background-repeat: no-repeat;   
  background-size: contain;           
  background-position: center center;
}
.slide-2 {
  background-image: url('/images/main/sec06-bg02.png');
  background-repeat: no-repeat;   
  background-size: contain;           
  background-position: center center;
}
.slide-3 {
  background-image: url('/images/main/sec06-bg03.png');
  background-repeat: no-repeat;   
  background-size: contain;           
  background-position: center center;
}
.slide-4 {
  background-image: url('/images/main/sec06-bg04.png');
  background-repeat: no-repeat;   
  background-size: contain;           
  background-position: center center;
}
.slide-5 {
  background-image: url('/images/main/sec06-bg05.png');
  background-repeat: no-repeat;   
  background-size: contain;           
  background-position: center center;
}


/* Custom pagination styling */
/* :deep(.swiper-pagination-bullet) {
  background-color: #ea8496;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background-color: #ea8496;
} */
@media (max-width: 1240px) {
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-content {
    width: 80%;
    padding: 0 30px;
  }
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .slide-content {
    height: 250px;
    width: 80%;
    padding: 0 50px;
  }

}
@media (max-width: 480px) {
  .slide-content {
    width: 100%;
  }
}


</style>