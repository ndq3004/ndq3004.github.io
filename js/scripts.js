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

var setOrderSection6 = function(evt){
    if(window.innerWidth <= 766){
        if(!document.getElementById('sec6-make-order-first').classList.contains('order-first')){
            document.getElementById('sec6-make-order-first').classList.add('order-first')
        }
    }else{
        if(document.getElementById('sec6-make-order-first').classList.contains('order-first')){
            document.getElementById('sec6-make-order-first').classList.remove('order-first')
        }
    }
}

//init
setOrderSection6()

dropdownLinkItem.addEventListener('mouseover', function(e){
    document.getElementById('dropdownLinkItem').style.display = 'block';
})

dropdownLinkItem.addEventListener('mouseleave', function(e){
    document.getElementById('dropdownLinkItem').style.display = '';
})

document.addEventListener('scroll', (evt) => {
    setHeaderFixedScrolling(evt, document.getElementById('carouselExampleIndicators').getBoundingClientRect())
})

document.addEventListener('resize', evt => {
    setOrderSection6(evt)
}, true)

window.onresize = function(){
    setOrderSection6(null)
}
