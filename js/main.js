/* ====================================
   主要邏輯 - main.js
   ==================================== */

// 頁面載入事件
document.addEventListener('DOMContentLoaded', function() {
  console.log('🐾 艾新寵物診所官方網站已載入');
  initMobileMenu();
  initAccordion();
  setActiveNavLink();
});

// 設置活動導航連結
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        link.getAttribute('href').includes(currentPage.split('/').pop())) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA 按鈕事件追蹤
const ctaButtons = document.querySelectorAll('a[href*="contact"]');
ctaButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('📞 用戶點擊預約按鈕');
  });
});

// 回到頂部按鈕功能（如果存在）
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 簡單的分析事件（可選）
function trackEvent(eventName, eventData = {}) {
  console.log(`📊 事件: ${eventName}`, eventData);
}
