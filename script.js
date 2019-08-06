let bg = document.getElementById("navbg"); 
let links = document.querySelectorAll("a, li"); 

function changeStyle() {

    if (bg.style.opacity === "0") {
        
        bg.setAttribute("style", "opacity: 1; height: 60px;");
        
/*         bg.style.opacity = "1"; 
        bg.style.height = "60px";  */
        links.forEach(e => e.style.color = "#2571e2"); 
    } else {
/*         bg.style.opacity = "0";  */

        bg.setAttribute("style", "opacity: 0; height:  0px;");

        links.forEach(e => e.style.color = "white");
    }
}

function scrollingTest() {
    let y_scroll_pos = window.pageYOffset; 
    let scroll_pos_test = 1250;

    if(y_scroll_pos > scroll_pos_test) {
        bg.setAttribute("style", "opacity: 1; height: 60px;");

        links.forEach(e => e.style.color = "#2571e2"); 
    } else {
        bg.setAttribute("style", "opacity: 0; height:  0px;");

        links.forEach(e => e.style.color = "white");
    }
};
