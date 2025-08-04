<template>
  <!-- 컨텐츠 섹션 -->
  <main class="sub">
    <!-- 타이틀 배경 -->
    <div class="subTitle-box">        
      <h1 class="subTitle">심사 및 시상</h1>
    </div>

    <div class="sub-radius">

      <!-- 네비게이션 -->
      <div class="subNav inner">
        <span>홈</span>
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span>공모 요강</span>
        <img src="../../assets/img/common/navarrow.svg" alt="화살표">
        <span class="pointColor01">심사 및 시상</span>
      </div>

      <!-- 컨텐츠  -->
      <section class="awards subContent inner">
        <div class="desc">
          <h2 class="pointColor02">심사기준</h2>
          <p class="f-18 mt-20">
            심사 기준은 단순한 기술 평가가 아닌 새로운 꿈과 상상력, 발상과 표현, 정체성 구현, 가치 창조적 실험 등을 통한 사회적 메시지와 문화적 확장성을 적극 반영합니다.
          </p>
        </div>

        <div class="contents-container mt-70">
          <div class="flex-container">
            <div class="bgBox left">
              <h3 class="bgBox-title">심사 항목</h3>
              <table>              
                <tr>
                  <th class="border-r" style="width: 50%;">심사 항목</th>
                  <th style="width: 50%;">평가 내용</th>
                </tr>
                <tr>
                  <td class="border-r">새로운 꿈과 상상력</td>
                  <td>도전의식, 신선한 창의성</td>
                </tr>
                <tr>
                  <td class="border-r">조화와 균형</td>
                  <td>조형 감각, 비례,<br class="smob"/> 구도 완성도</td>
                </tr>
                <tr>
                  <td class="border-r">재료의 이해와 <br class="smob"/>운용 기법</td>
                  <td>물성 이해, 재료 표현 능력</td>
                </tr>
                <tr>
                  <td class="border-r">발상과 표현</td>
                  <td>발상과 표현</td>
                </tr>
                <tr>
                  <td class="border-r">양식(스타일)의 <br class="smob"/>시대성</td>
                  <td>현대적 형식, 동시대 시각</td>
                </tr>
                <tr>
                  <td class="border-r">시대적 메시지</td>
                  <td>사회적 코드, <br class="smob"/>현실적 감각 표현</td>
                </tr>
                <tr>
                  <td class="border-r">정체성 구현</td>
                  <td>한국성, 동양적 미감, <br class="smob"/>전통 재해석</td>
                </tr>
                <tr>
                  <td class="border-r">가치 창조적 실험</td>
                  <td>진정성, <br class="smob"/>공간의 예술적 세계 구현</td>
                </tr>
                <tr>
                  <td class="border-r">완성도와 안정감</td>
                  <td>통일감, 에너지 내적 일관성</td>
                </tr>

              </table>
            </div>
            <div class="bgBox right">
              <h3 class="bgBox-title">시상 내역</h3>
              <table>              
                <tr>
                  <th class="border-r">구분</th>
                  <th class="border-r">선정</th>
                  <th>상금</th>
                </tr>
                <tr>
                  <td class="border-r">분야별 <br class="smob"/>대상</td>
                  <td class="border-r">전체<br class="smob"/> 4명</td>
                  <td>대학부<br class="smob"/>(대학원생 포함)<br class="smob"/> 100만원,<br/>
                    중고등부 50만원,<br/>
                    초등부 문화상품권</td>
                </tr>
                <tr>
                  <td class="border-r">특별상</td>
                  <td class="border-r">00명</td>
                  <td>상장</td>
                </tr>
                <tr>
                  <td class="border-r">분야별 <br class="smob"/>최우수상</td>
                  <td class="border-r">전체<br class="smob"/> 4명</td>
                  <td>상장</td>
                </tr>
                <tr>
                  <td class="border-r">우수상</td>
                  <td class="border-r">00명</td>
                  <td>상장</td>
                </tr>
                <tr>
                  <td class="border-r">그린상</td>
                  <td class="border-r">00명</td>
                  <td>상장</td>
                </tr>
                <tr>
                  <td class="border-r">블루상</td>
                  <td class="border-r">00명</td>
                  <td>상장</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="caution mt-30">
            <ul>
              <li>수상자는 결과 발표 당일 공지사항에서 확인 가능합니다.</li>
            </ul>
          </div>
        </div>      
      </section>

    </div>


  </main>
</template>

<script setup>
</script>

<style scoped>

  .sub .bgBox table {
    border: 1px solid #ACACAC;
    background: #FEFEFE;
    text-align: center;
    border-collapse: collapse;
    width: 100%;
  }
  .sub .bgBox table th {
    background: #FFF5F5;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
  }
  .sub .bgBox table td {
    border-top: 1px solid #ACACAC;
    padding: 10px;
    font-size: 16px;
  }
  .sub .bgBox table .border-r {
    border-right: 1px solid #ACACAC;
  }
  @media (max-width: 768px) {
  .sub .bgBox table td {
    line-height: 1.2;
    font-size: 14px;
  }
  .sub .bgBox table th {
    font-size: 16px;
  }
  .desc h2.pointColor02 {
      color: #B31C45;
      font-size: 24px;
  }
  .f-18 {
    font-size: 16px;
  }
  .f-18.mt-20 {
    margin-top: 10px;
  }
}

</style> 