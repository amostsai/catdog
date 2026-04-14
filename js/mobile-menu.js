/* ====================================
   行動菜單功能 - mobile-menu.js
   ==================================== */

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (!toggle || !menu) {
    console.log('❌ 未找到行動菜單元素');
    return;
  }
  
  // 切換菜單
  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    console.log('📱 行動菜單已切換');
  });
  
  // 點擊菜單項時關閉菜單
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      console.log('✅ 已關閉行動菜單');
    });
  });
  
  // 點擊菜單外部時關閉菜單
  document.addEventListener('click', function(event) {
    const isMenuClick = menu.contains(event.target);
    const isToggleClick = toggle.contains(event.target);
    
    if (!isMenuClick && !isToggleClick && menu.classList.contains('active')) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
    }
  });
  
  console.log('✅ 行動菜單已初始化');
}

// 手動打開/關閉菜單
function toggleMobileMenu() {
  const menu = document.querySelector('.nav-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  if (!menu || !toggle) return;
  
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
}

// 關閉行動菜單
function closeMobileMenu() {
  const menu = document.querySelector('.nav-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  if (!menu || !toggle) return;
  
  menu.classList.remove('active');
  toggle.classList.remove('active');
}

// 打開行動菜單
function openMobileMenu() {
  const menu = document.querySelector('.nav-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  if (!menu || !toggle) return;
  
  menu.classList.add('active');
  toggle.classList.add('active');
}
