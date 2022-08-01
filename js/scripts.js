var dropdownLinkItem = document.getElementById('navbarDropdownMenuLink');

dropdownLinkItem.addEventListener('mouseover', function(e){
    document.getElementById('dropdownLinkItem').style.display = 'block';
})

dropdownLinkItem.addEventListener('mouseleave', function(e){
    document.getElementById('dropdownLinkItem').style.display = '';
})



