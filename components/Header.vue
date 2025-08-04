<template>
  <!-- 해더 -->
  <header class="header" ref="headerRef">
    <div class="header-inner">
      <!-- 로고 -->
      <div class="logo">
        <img class="logo-img" src="../assets/img/common/logo.png" alt="로고" />
      </div>
      <div class="right pc_display">
        <!-- 메뉴 -->
        <nav class="menu">
          <div 
            v-for="menu in menus" 
            :key="menu.key" 
            class="menu-item"
          >
            <button 
              type="button"
              class="main-a"
              :class="{ active: selectedMenuKey === menu.key }" 
              @click="toggleMenu(menu.key)"
            >
              {{ menu.label }}
            </button>
            <div 
              class="submenu" 
              v-show="isSubmenuVisible"
            >
              <nuxt-link 
                v-for="(sub, idx) in menu.submenu" 
                :key="idx" 
                :href="sub.href"
                class="submenu-a"
              >
                {{ sub.label }}
              </nuxt-link>
            </div>
          </div>
        </nav>
        <div 
          class="submenu-box" 
          :class="{ show: isSubmenuVisible }"
        ></div>
        <!-- 버튼 -->
        <div class="buttons">
          <button class="btn01 black">접수 바로가기</button>
        </div>
      </div>
    </div>


    <!-- 모바일 -->
    <div class="mobile_display">
      <button 
        type="button" 
        class="offcanvas-open" 
        :class="{ active: offcanvasOpenActive }"
        @click="toggleOffcanvas"
      >
          <span class="ham"></span>
          <span class="ham"></span>
          <span class="ham"></span>
      </button>

      <div 
        class="offcanvas" 
        :class="{ active: offcanvasOpenActive }"
        :style="{ transform: offcanvasOpenActive ? 'translateX(0%)' : 'translateX(100%)', height: offcanvasOpenActive ? '100vh' : 'auto' }"
      >
        <div class="offcanvas-body">
          <button class="btn01 black mobile">접수 바로가기</button>
          <nav id="nav" class="nav-mobile">
            <ul class="gnb-mobile">
              <li 
                v-for="(menu, idx) in menus" 
                :key="menu.key" 
                class="gnb-item gnb-menu"
                :class="{ active: activeGnbMenuIndex === idx }"
              >
                <div 
                  class="gnb-item-a" 
                  @click="toggleGnbMenu(idx)"
                >
                  {{ menu.label }}
                  <div class="drop-arrow">
                    <span class="drop-left"></span>
                    <span class="drop-right"></span>
                  </div>
                </div>
                <ul 
                  class="gnb-sub" 
                  :style="{ maxHeight: activeGnbMenuIndex === idx ? '500px' : '0' }"
                >
                  <li 
                    v-for="(sub, subIdx) in menu.submenu" 
                    :key="subIdx" 
                    class="gnb-sub-item"
                  >
                  <nuxt-link :href="sub.href" class="gnb-sub-a"> 
                    {{ sub.label }}
                  </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
  </header>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isSubmenuVisible = ref(false)
const selectedMenuKey = ref(null) 
const headerRef = ref(null)

const offcanvasOpenActive = ref(false)
const activeGnbMenuIndex = ref(null) 

const menus = [
  {
    key: 'intro',
    label: '소개',
    submenu: [
      { label: '공모전 소개', href: '/intro/overview' },
      { label: '인사말', href: '/intro/greeting' },
      { label: '조직도', href: '/intro/organization' }
    ]
  },
  {
    key: 'guideline',
    label: '공모 요강',
    submenu: [
      { label: '모집요강', href: '/guide/recruit' },
      { label: '출품방법', href: '/guide/submit' },
      { label: '심사 및 시사', href: '/guide/judge' }
    ]
  },
  {
    key: 'apply',
    label: '접수 및 조회',
    submenu: [
      { label: '접수', href: '/apply' },
      { label: '조회', href: '/apply/check' }
    ]
  },
  {
    key: 'gallery',
    label: '갤러리',
    submenu: [
      { label: '갤러리', href: '/gallery' }
    ]
  },
  {
    key: 'community',
    label: '커뮤니티',
    submenu: [
      { label: '공지사항', href: '/community/notice' },
      { label: 'FAQ', href: '/community/faq' }
    ]
  }
]


const toggleMenu = (key) => {
  if (isSubmenuVisible.value && selectedMenuKey.value === key) {
    // 같은 메뉴 클릭 시 서브메뉴 닫기
    isSubmenuVisible.value = false
    selectedMenuKey.value = null
  } else {
    // 다른 메뉴 클릭 시 열기 & 선택 메뉴 변경
    isSubmenuVisible.value = true
    selectedMenuKey.value = key
  }
}


const onDocumentClick = (e) => {
  if (headerRef.value && !headerRef.value.contains(e.target)) {
    isSubmenuVisible.value = false
    selectedMenuKey.value = null
  }
}

const onKeydown = (e) => {
  if (e.key === 'Escape') {
    isSubmenuVisible.value = false
    selectedMenuKey.value = null
  }
}


const toggleOffcanvas = () => {
  offcanvasOpenActive.value = !offcanvasOpenActive.value

  if (offcanvasOpenActive.value) {
    // 메뉴 열림 상태일 때
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    if (headerRef.value) {
      headerRef.value.style.backgroundColor = '#fff'
      // 로고 이미지 교체 (필요하면 아래 코드 활성화)
      // const logoImg = headerRef.value.querySelector('.logo-img')
      // if (logoImg) logoImg.src = 'img/offcanvas-logo.png'
    }
  } else {
    // 메뉴 닫힘 상태일 때
    document.body.style.overflow = ''
    if (headerRef.value) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const isSubPage = document.querySelector('.sub-page') !== null
      if (scrollTop > 0 || isSubPage) {
        headerRef.value.style.backgroundColor = '#fff'
        // const logoImg = headerRef.value.querySelector('.logo-img')
        // if (logoImg) logoImg.src = 'img/offcanvas-logo.png'
      } else {
        headerRef.value.style.backgroundColor = 'transparent'
        // const logoImg = headerRef.value.querySelector('.logo-img')
        // if (logoImg) logoImg.src = 'img/avv_logo.png'
      }
    }
    activeGnbMenuIndex.value = null // 메뉴 닫힐 때 모든 서브메뉴 닫기
  }
}

// 모바일 메뉴 아코디언 토글
const toggleGnbMenu = (index) => {
  if (activeGnbMenuIndex.value === index) {
    activeGnbMenuIndex.value = null
  } else {
    activeGnbMenuIndex.value = index
  }
}

// 스크롤 시 헤더 배경 조절 (필요하면 사용)
const onScroll = () => {
  if (headerRef.value && !offcanvasOpenActive.value) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > 0) {
      headerRef.value.style.backgroundColor = '#fff'
    } else {
      headerRef.value.style.backgroundColor = 'transparent'
    }
  }
}



onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

})
</script>

<style>
.header {
  height: 90px;
  width: 100%;
  /* background-color: #FEFEFE; */
}

.header-inner {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .right{
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
}

.header .logo-img {
  width: 200px;
  height: 60px;
  object-fit: contain;
}

.header .menu-item {
  position: relative;
}


.header .menu {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  position: relative;
}

.header .menu-item {
  position: relative;
}

.header .main-a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  font-size: 18px;
  color: #5D5D5D;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  background: #fff;


}

/* 아래 보더 효과 */
.header .main-a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  /* 초기 너비를 0으로 설정 */
  width: 0;
  height: 3px;
  background-color: #222222; /* 보더 색상 변경 */
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}



.header .main-a:hover::after,
.header .main-a.active::after {
  /* 호버 시 너비를 100%로 설정하여 펼쳐지는 효과 구현 */
  width: 100%;
}


/* 서브메뉴 박스 기본 숨김 */
.header .submenu-box {
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;
  height: 180px;
}

.header .submenu-box.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.header .submenu {
  position: absolute;
  top: 100%;
  background: transparent;
  z-index: 100;
  /* display: none; */
  text-align: center;
  height: 50px;
  margin-top: 20px;
}

.header .submenu-a {
  display: block;
  color: #5D5D5D;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 18px;
  width: 130px;
  font-weight: 400;
}

.header .submenu-a:hover {
  font-weight: 700;
  color: #222222;
}

.submenu.show {
  display: block;
}


/* 모바일 메뉴 */
.header .mobile_display {
  display: none;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 150;
  text-align: right;
  padding: 20px 20px 0 0;
  max-height: 100vh; 
}
.header .offcanvas-open {
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 105;
  margin-top: -30px;
  background-color: #FEFEFE;
}
.header .offcanvas-open .ham {
  display: block;
  width: 30px;
  height: 2.5px;
  background: #222;
  border-radius: 50px;
  position: absolute;
  left: 0;
  transition: all 0.2s;
}
.header .offcanvas-open .ham:nth-child(1) {
  top: 0;
}
.header .offcanvas-open .ham:nth-child(2) {
  top: 40%;
}
.header .offcanvas-open .ham:nth-child(3) {
  top: 80%;
}
.header .offcanvas-open.active .ham {
  background: #222;
}
.header .offcanvas-open.active .ham:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
.header .offcanvas-open.active .ham:nth-child(2) {
  display: none;
}
.header .offcanvas-open.active .ham:nth-child(3) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}
.header .offcanvas {
  width: 100%;
  height: 100vh;
  padding: 30px 0px;
  background: rgba(100, 100, 100, 0.445);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  right: 0;
  transform: translateX(100%);
  /* transform: translateX(0%); */
  background: #fff;
  transition: transform 0.5s ease-in-out;
  padding: 0 40px;
}
.header .offcanvas .offcanvas-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header .mobile.btn01{
  max-width: 160px;
  margin: 20px auto;
}

.header .offcanvas .nav-mobile{
  width: 100%;
  height: auto;
  overflow-y: auto;
  padding-bottom: 150px;
  flex-grow: 1;
}
.header .gnb-mobile .gnb-item-a {
  width: 100%;
  box-sizing: border-box;
  display: block;
  height: 60px;
  line-height: 61px;
  font-size: 20px;
  letter-spacing: -0.32px;
  text-align: left;
  position: relative;
  font-weight: bold;
}

.header .gnb-menu .gnb-item-a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: #222;
  width: 0;
  transition: width 0.3s ease;
}

.header .gnb-menu .gnb-item-a:hover::after,
.header .gnb-menu.active .gnb-item-a::after {
  width: 100%;
}
.header .gnb-mobile .gnb-sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.header .gnb-menu.active .gnb-sub {
  max-height: 500px;
}
.header .gnb-mobile .gnb-sub-a {
  font-size: 16px;
  font-weight: bold;
  color: #5D5D5D;
  background-color: #FAFAFA;
  padding: 15px;
  display: block;
  text-align: left;

}
.header .gnb-mobile .gnb-sub-item:first-child .gnb-sub-a {
  padding-top: 20px;
}
/* 마지막 요소에 아래쪽 패딩 추가 (15 + 5 = 20px) */
.header .gnb-mobile .gnb-sub-item:last-child .gnb-sub-a {
  padding-bottom: 20px;
}
.header .gnb-mobile .gnb-menu .gnb-sub-a:focus,
.header .gnb-mobile .gnb-menu .gnb-sub-a:hover{
  background-color: #E4E4E4;
}
.header .gnb-menu .drop-arrow {
  float: right;
  margin-top: 14px;
  width: 35px;
  height: 35px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s ease;
}
.header .gnb-menu.active .drop-arrow {
  transform: rotate(180deg);
}
.header .gnb-menu .drop-arrow .drop-left,
.header .gnb-menu .drop-arrow .drop-right{
  display: block;
  width: 14px;
  height: 2px;
  background: #5D5D5D;
  position: absolute;
}
.header .gnb-menu .drop-arrow .drop-left {
  top: 12px;
  left: 6px;
  transform: rotate(45deg);
}
.header .gnb-menu .drop-arrow .drop-right {
  top: 12px;
  right: 6px;
  transform: rotate(-45deg);
}



@media (max-width: 1080px) {
  .header .header-inner{
    padding: 10px !important;
  }

  .header .logo-img {
      height: 40px !important;
      width: 150px !important;
  }
  .header .mobile_display {
      display: block;
  }
  .header .pc_display {
      display: none !important;
  }
}
@media (max-width: 768px) {
  .header {
      height: 60px;
    }
    .header .offcanvas-open {
      width: 25px;
      height: 25px;
      margin-top: -35px;
    }
    .header .offcanvas-open .ham {
      width: 25px;
    }
    .header .offcanvas {
      top: 50px;
    }
    .header .logo-img {
      width: 100px;
      height: 30px;
    }

}
</style>