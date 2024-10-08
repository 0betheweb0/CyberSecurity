// layer-user
$('.btn-icon.user').click(function () {
  var userNav = $(this).siblings('.user-nav');
  if (userNav.hasClass('active')) {
    userNav.removeClass('active');
  } else {
    userNav.addClass('active');
  }
});

// layer-nav
$('.btn-icon.nav').click(function () {
  var navWrap = $(this).parent('.nav-wrap');
  if (navWrap.hasClass('active')) {
    navWrap.removeClass('active');
  } else {
    navWrap.addClass('active');
  }
});

// tab menu
const tabList = document.querySelectorAll('.tab-wrap .tabs li');
const contents = document.querySelectorAll('.tab-wrap .tab-cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('active');
      contents[j].classList.remove('active');
    }

    this.parentNode.classList.add('active');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).classList.add('active');
  });
}