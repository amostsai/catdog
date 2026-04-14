/* ====================================
   手風琴摺疊功能 - accordion.js
   ==================================== */

function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  if (accordionItems.length === 0) {
    console.log('❌ 未找到 Accordion 元素');
    return;
  }
  
  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    if (!header || !content) {
      console.warn(`⚠️ Accordion 項 ${index} 缺少必要元素`);
      return;
    }
    
    // 添加點擊事件
    header.addEventListener('click', function() {
      // 如果需要只展開一個項，取消註解下面的代碼
      // accordionItems.forEach(otherItem => {
      //   if (otherItem !== item && otherItem.classList.contains('active')) {
      //     otherItem.classList.remove('active');
      //   }
      // });
      
      // 切換當前項
      item.classList.toggle('active');
      
      console.log(`🎯 Accordion 項 ${index + 1} 已切換`);
    });
  });
  
  console.log(`✅ Accordion 已初始化 (${accordionItems.length} 項)`);
}

// 程式化展開/摺疊 Accordion
function toggleAccordion(itemIndex, show = null) {
  const items = document.querySelectorAll('.accordion-item');
  if (itemIndex < 0 || itemIndex >= items.length) {
    console.error(`❌ 無效的 Accordion 項索引: ${itemIndex}`);
    return;
  }
  
  const item = items[itemIndex];
  if (show === null) {
    item.classList.toggle('active');
  } else {
    item.classList.toggle('active', show);
  }
}

// 展開所有 Accordion
function expandAllAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => item.classList.add('active'));
}

// 摺疊所有 Accordion
function collapseAllAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => item.classList.remove('active'));
}
