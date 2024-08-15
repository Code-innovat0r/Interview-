const change_arrow = () => {
    const arrow = document.querySelector('.arrow');
    if (arrow.innerHTML === "arrow_forward") {
        arrow.innerHTML = "arrow_back";
        document.querySelector('.notice-board').style.left = '-270px'
    }else{
        document.querySelector('.notice-board').style.left = '0px'
        arrow.innerHTML = "arrow_forward";
    }
}