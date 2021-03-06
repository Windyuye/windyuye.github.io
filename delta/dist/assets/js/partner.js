function countTo(json,field) {
      let c = $("h4#" + field);
      let w = c.innerWidth();
      let formatter = function(value, options) {
        let fontSize = w/6;
        if (value > 10000000000) {
          fontSize = w/7.3;
        } else if (value > 1000000000) {
          fontSize = w/6.7;
        }
        return '<span style="font-size: '+fontSize+'px">' + value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',') + "</span>";
      };
      c.data("to",json[field]).countTo({formatter});
}

$(document).ready(function(){
    $.ajax({
      dataType: "json",
      url: 'data/partner-numbers.json?_=' + new Date().getTime()
    }).done(function(json) {
       countTo(json,"receipt");
       countTo(json,"receiptTotal");
       countTo(json,"walkIn");
    });
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

