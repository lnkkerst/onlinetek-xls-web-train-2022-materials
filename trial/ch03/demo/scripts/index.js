let active = true;

// 切换侧边栏状态的函数
function toggle() {
  if (active) {
    document.querySelector('.drawer-left').style.left =
      'calc(var(--width-drawer) * -1)';
    document.querySelector('.page-container').style.paddingLeft = '0';
  } else {
    document.querySelector('.drawer-left').style.left = '0';
    document.querySelector('.page-container').style.paddingLeft =
      'var(--width-drawer)';
  }
  active = !active;
}

// 监听点击事件
document.querySelector('.menu-btn').addEventListener('click', toggle);
