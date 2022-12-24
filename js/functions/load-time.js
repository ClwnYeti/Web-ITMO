let loadTime = -1;

(() => {
    const start = new Date().getTime();

    document.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('load', () => {
            loadTime = (new Date().getTime() - start) / 1000;
            const footer = document.getElementsByClassName("info__container")[0]
            footer.setAttribute("load-time", loadTime.toString())
        })

    });
})();