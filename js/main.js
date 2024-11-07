/// <reference types="../@types/jquery" />


let sectionOffset = $('#about').offset().top; //---> to get far between Top of Window and About Section

let navBar = $('.navbar');

$(window).on('scroll', function(){
    let curentScroll = $(window).scrollTop();

    if (curentScroll > sectionOffset - navBar.outerHeight(true)) {
        navBar.css('backgroundColor', 'rgba(0,0,0,0.8)')
    } else {
        navBar.css('backgroundColor', 'transparent')
    }
})

$(function(){
    $('.loader').fadeOut(1000, function(){
        $('.loading').slideUp(1000, function(){
            $('body').css('overflow' , 'auto');

            $('.loading').remove();
        });
    })
})


$('a[href^="#"]').on('click', function(e){

    let aHref = e.target.getAttribute('href')

    let sectionOffset = $(aHref).offset().top;

    $('body,html').animate({scrollTop:sectionOffset}, 1000)
})


$('aside i').on('click',function(){
    $('.sidebar-box').animate({width:'toggle', paddingInline:'toggle'}, 1000)
})


$('aside span').on('click',function(e){
    let curentColor = $(e.target).css('backgroundColor'); //color

    $('h2,p,a').css('color',curentColor)
})


$('aside img').on('click', function(e){
    let curentSrc = $(e.target).attr('src'); //src path

    console.log(curentSrc); 

    $('#home').css('backgroundImage',`url(${curentSrc})`)
    // $('#home').css('backgroundimage',`url(${curentSrc})`)
})