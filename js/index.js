document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
    }
};

//Right-click context menu
document.addEventListener('DOMContentLoaded', function(){
    var rightMenu = document.getElementById('right-menu')
    document.oncontextmenu = function(event){
        event.preventDefault();
        rightMenu.style.display = "none"
        rightMenu.style.display = "block"
        rightMenu.style.left = event.offsetX + 'px'
        rightMenu.style.top = event.offsetY + 'px'
    }
    document.onclick = function(event){
        rightMenu.style.display = "none"
    }
})