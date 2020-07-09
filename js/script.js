// owl carousel //

$('.packages .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items:1,
            stagePadding: 100,
            margin:10
        },
        580:{
            items:1,
            stagePadding: 200
        },
        1000:{
            items:3
        }
    }
})

$('.partner .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})