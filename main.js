document.addEventListener("DOMContentLoaded", (event) => {
   
    var readMoreLinks = document.querySelectorAll(".read-more   >a");
    for(let readMore of readMoreLinks){
        readMore.addEventListener("click", (event)=>{
            let showMoreDiv  = event.currentTarget.parentElement;
            showMoreDiv.style.opacity = 1;
            (function fadeOut(){(
                showMoreDiv.style.opacity-=.1)<0?showMoreDiv.style.display="none":setTimeout(fadeOut,40)
            })();

            let targetDiv = document.querySelector(event.currentTarget.dataset.target);
            let fullHeight = Array.from(targetDiv.children)
                .map(el => el.clientHeight).reduce((acc, height) => acc + height + 15);
            targetDiv.setAttribute('style', 
                'max-height: ' + fullHeight + 'px; transition: max-height 0.45s ease-in;');

        });
    }
});