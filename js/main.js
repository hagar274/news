// const apiKey = "045f0d07a84442738d5c31ad0d2f0611";
// const apiUrl = "https://newsapi.org/v2/everything?q=tesla";

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });

    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});