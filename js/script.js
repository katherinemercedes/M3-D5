let saveIcons = document.getElementsByClassName("sv-custom");

// console.log(saveIcons);


    for(icon of saveIcons){
        icon.addEventListener("mouseover", (event)=>{
            event.target.name="bookmark";
        });
    }

    for(icon of saveIcons){
        icon.addEventListener("mouseleave", (event)=>{
            event.target.name="bookmark-outline";
        });
    }
