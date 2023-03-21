window.addEventListener('load', () => {
    let sliderElement = document.getElementById('infiniteSliding');
    const container = sliderElement.querySelector(".slider-container");

    const infiniteScrollToFirstWhenOnLast = () => {
        if (container.lastElementChild == container.querySelector('.slide-visible')) {
            container.scroll({
                left: 0,
                behavior: "instant"
            });
        }
    };
    //Append the first slide as the last
    container.appendChild(container.firstElementChild.cloneNode(true));
    //Add an additional indicator button to keep counts correct
    sliderElement.querySelector(".slider-indicators").appendChild(sliderElement.querySelector(".slider-indicators").lastElementChild.cloneNode(true));
    swiffyslider.onSlideEnd(sliderElement, infiniteScrollToFirstWhenOnLast, 90);
});