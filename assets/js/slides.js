$(document).ready(function(){
    
  $('.slick_tabs').on('click',function(){
      
        $('.news-slider-div').slick("slickNext");
        $('.article-slider-div').slick("slickNext");
  });
    
  $('.news-slider-div').slick({
      dots: false,
      centerPadding: '60px',
      mobileFirst: true,
      autoplay: true
  });

  $('.article-slider-div').slick({
      dots: true,
      centerPadding: '60px',
      autoplay: true
  });
    
  /*  
  $('.news-slider-div').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: false,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
*/
});