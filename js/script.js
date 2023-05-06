let saveIcons = document.getElementsByClassName("sv-custom");

// console.log(saveIcons);


    for(icon of saveIcons){
        icon.addEventListener("mouseover", (event)=>{
            event.target.src="/assets/bookmark.svg";
        });
    }

    for(icon of saveIcons){
        icon.addEventListener("mouseleave", (event)=>{
            event.target.src="/assets/bookmark-outline.svg";
        });
    }
