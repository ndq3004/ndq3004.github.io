var dropdownLinkItem = document.getElementById('navbarDropdownMenuLink');

var setHeaderFixedScrolling = function(evt, boundingRect){
    let header = document.getElementById('nav-header')

    if(boundingRect.top < -50){
        header.classList.add('logo-header-scroll-down')
        
        // set width logo to make height of header smaller
        document.getElementById('logo-header-img').style.maxHeight = '60px'

        //set logo padding
        document.getElementsByClassName('logo-header')[0].style.padding = '5px'
    }else{
        header.classList.remove('logo-header-scroll-down')

        // Reset header height
        document.getElementById('logo-header-img').style.maxHeight = '85px'
        //set logo padding
        document.getElementsByClassName('logo-header')[0].style.padding = '10px'
    }
}

dropdownLinkItem.addEventListener('mouseover', function(e){
    document.getElementById('dropdownLinkItem').style.display = 'block';
})

dropdownLinkItem.addEventListener('mouseleave', function(e){
    document.getElementById('dropdownLinkItem').style.display = '';
})

document.addEventListener('scroll', (evt) => {
    setHeaderFixedScrolling(evt, document.getElementById('carouselExampleIndicators').getBoundingClientRect())
})
