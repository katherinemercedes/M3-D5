let saveIcons = document.getElementsByClassName("sv-custom");

// console.log(saveIcons);


    for(icon of saveIcons){
        icon.addEventListener("mouseover", (event)=>{
            event.target.style="";
        });
    }

    for(icon of saveIcons){
        icon.addEventListener("mouseleave", (event)=>{
            event.target.style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px";
        });
    }
