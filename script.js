

window.addEventListener("load", function(e) {
    document.documentElement.classList.add('loaded'); 

    const params = {
        mauntain: document.querySelector(".main-screen__mauntains"),
        birds: document.querySelectorAll(".main-screen__birds"),
        trees: document.querySelectorAll(".main-screen__trees"),
    }

    window.onscroll = createPosition; 

    function createPosition(e) {
        e.preventDefault();

        const content = document.querySelector(".content__container");
        const windowHeight = window.innerHeight;
        const finalPosition = scrollY / (content.offsetTop - windowHeight) * 60;

        finalPosition < 100 ? forestAnimation(finalPosition) : forestAnimation(100);
    }

    function forestAnimation(position){
        const trees = document.querySelectorAll(".main-screen__trees");
        const birds = document.querySelectorAll(".main-screen__birds");
        const mountains = document.querySelector(".main-screen__mountains");



        const translateMountains = 170 / 100 * position; 
        const mountainsScale = 1 + 2 / 100 * position;

        mountains.style.cssText = `
            transform: 
                translate(0, ${translateMountains}%)
                scale(${mountainsScale})
        `;



        trees.forEach((el, idx) => {
            const treeTranslate = 20 * (trees.length - idx) / 100 * position;
            const treeScale = 1 + 2 / 100 * position;

            el.style.cssText = `
            transform: 
                translate(0, ${treeTranslate}%)
                scale(${treeScale})
            `;            
        });



        const birdsTranslate = 200 / 100 * position;
        const birdsScale = 1 + 2 / 100 * position;

        birds[0].style.cssText = `
        transform: 
            translate(-${birdsTranslate}%, 0)
            scale(${birdsScale})
        `;    
        birds[1].style.cssText = `
        transform: 
            translate(${birdsTranslate}%, 0)
            scale(${birdsScale})
        `;  
    
    }
})
