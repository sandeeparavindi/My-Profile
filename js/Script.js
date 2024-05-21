//typing style 
var typed = new Typed('.typing',{
    strings:["","Web Developer","Fullstack Developer","Moblie App Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//project part card 
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item-inner');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
        });
    });
});

// Aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const b=navList[i].querySelector("a");
        b.addEventListener("click", function ()
         {  
            removeBackSection();

            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        // allSection[j].classList.add("back-section");
                    }
                navList[j].querySelector("a").classList.remove("active");
                
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
            
        }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active")
    }

    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
            
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active")
            } 
        }
        
    }

    document.querySelector(".hire-me").addEventListener("click", function ()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>{
            asideSectionTogglerBtn();
        })

        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i = 0; i < totalSection; i++) {
               allSection[i].classList.toggle("open");
                
            }
        }
