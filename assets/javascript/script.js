const vm = Vue.createApp({
  data() {
    return {
      pictureList: [
        {url:'https://charliewuuu.github.io/business_card/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_1.png',
         name: '幾何圖案名片｜CSS'},
        {url:'https://charliewuuu.github.io/profile/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_2.png',
         name: '新擬態風格個人履歷｜CSS'},
        {url:'https://charliewuuu.github.io/brand_color/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_3.png',
         name: '品牌用色觀察｜CSS'},
        {url:'https://charliewuuu.github.io/weather_calender/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_4.png',
         name: '天氣日曆｜SVG動畫｜Geolocation API｜天氣資料API'},
        {url:'https://charliewuuu.github.io/buylist/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_5.png',
         name: '購物清單｜Javascript' },
        {url:'https://charliewuuu.github.io/bootstrap_blog/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_6.png',
         name: '前端框架介紹｜Bootstrap排版｜仿專欄文章' },
        {url:'https://charliewuuu.github.io/piano_tatsujin/',
         pic: 'https://charliewuuu.github.io/studio_website/assets/image/work/work_8.png',
         name: '鋼琴達人｜Vue.js' },
        {url:'https://charliewuuu.github.io/FantasyFilmFestival/1.%20%E9%A6%96%E9%A0%81/index.html',
         pic:'https://charliewuuu.github.io/studio_website/assets/image/work/cinema.jpg',
         name: '金馬奇幻影展｜個人作品'}
      ],
    }
  }
}).mount('#gallery')

const $container = $('.grid');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector: '.grid-item',
    gutter: 30,
    fitWidth: true
  });
})

//滑鼠移動時觸發的事件
$(window).mousemove(function(evt){
  const pagex = evt.pageX;
  const pagey = evt.pageY;

  //計算相對區域的位置
  const x = pagex-$("header").offset().left;
  const y = pagey-$("header").offset().top;

  //計算貓的中心位置
  const smileWidth = $("#smile").width()
  const smileX = $("#smile").offset().left + smileWidth / 2;
  const smileY = $("#smile").offset().top + smileWidth / 2;

  const img_url="https://charliewuuu.github.io/studio_website/assets/image/smile/";

  //四方位
  //中間
  if (Math.abs(smileX - pagex) < smileWidth/3 && Math.abs(smileY - pagey) < smileWidth/3)
    $("#smile").attr("src", img_url + "smile_center.svg");

  //左方
  if (smileX - smileWidth/3 > pagex && Math.abs(smileY - pagey) < smileWidth/3)
    $("#smile").attr("src", img_url + "smile_left.svg");

  //上面
  if (Math.abs(smileX - pagex) < smileWidth/3 && smileY - smileWidth/3 > pagey)
    $("#smile").attr("src", img_url + "smile_up.svg");

  //右方
  if (smileX + smileWidth/3 < pagex && Math.abs(smileY - pagey) < smileWidth/3)
    $("#smile").attr("src", img_url + "smile_right.svg");

  //下面
  if (Math.abs(smileX - pagex) < smileWidth/3 && smileY + smileWidth/3 < pagey)
    $("#smile").attr("src", img_url + "smile_down.svg");

  //八方位
  //左上
  if (smileX - smileWidth/3 > pagex && smileY - smileWidth/3 > pagey)
    $("#smile").attr("src", img_url + "smile_leftUp.svg");

  //右上
  if (smileX + smileWidth/3 < pagex && smileY - smileWidth/3 > pagey)
    $("#smile").attr("src", img_url + "smile_rightUp.svg");

  //左下
  if (smileX - smileWidth/3 > pagex && smileY + smileWidth/3 < pagey)
    $("#smile").attr("src", img_url + "smile_leftDown.svg");

  //右下
  if (smileX + smileWidth/3 < pagex && smileY + smileWidth/3 < pagey)
    $("#smile").attr("src", img_url + "smile_rightDown.svg");
})
