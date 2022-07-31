const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');

  $menuToggle.addEventListener('click', () => {
    $menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');  
  });

  const $menuLinks = $menu.querySelectorAll('.menu__link');
  $menuLinks.forEach($link => {
    $link.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
    });
  });

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu_active')) {
      $menu.classList.remove('menu_active');
    }
  });
}