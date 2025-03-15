document.getElementById('burger-btn').addEventListener('click', function () {
    var menu = document.querySelector('.nav-list');
    var main = document.querySelector('main'); // Wybieramy element 'main'
    var ikona1 = document.querySelector(".ikonaMenu");
    var ikona2 = document.querySelector(".ikona2Menu");
    var logo = document.querySelector(".logo");
    var header = document.querySelector("header");
    // Przełączamy klasę 'active' na menu
    menu.classList.toggle('active');

    // Jeśli menu jest aktywne, dodajemy efekt blur do main
    if (menu.classList.contains('active')) {
        main.style.filter = 'blur(5px)';
        ikona1.style.visibility = "hidden";
        ikona2.style.visibility = "visible";
        ikona2.style.opacity = 1.0;
        header.style.boxShadow = "0px 1px 4px black";
    } else {
        main.style.filter = 'none';
        ikona2.style.visibility = "hidden";
        ikona1.style.visibility = "visible";
        ikona1.style.opacity = 1.0;
        header.style.boxShadow = "0px 1px 2px white";
    }

    // Handle burger button visibility based on window width
    if (window.innerWidth >= 768) {
        document.getElementById('burger-btn').style.display = menu.classList.contains('active') ? 'block' : 'none';
    }
});

window.addEventListener('resize', function () {
    var menu = document.querySelector('.nav-list');
    if (window.innerWidth >= 768) {
        document.getElementById('burger-btn').style.display = menu.classList.contains('active') ? 'block' : 'none';
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.querySelector('main').style.filter = 'none';
            document.querySelector(".ikona2Menu").style.visibility = "hidden";
            document.querySelector(".ikonaMenu").style.visibility = "visible";
            document.querySelector(".ikonaMenu").style.opacity = 1.0;
            document.querySelector("header").style.boxShadow = "0px 1px 2px white";
        }
    } else {
        document.getElementById('burger-btn').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        let index = 0;
        const slides = slider.querySelectorAll("img");
        const totalSlides = slides.length;

        function showSlide() {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });

            index++;
            if (index >= totalSlides) {
                index = 0;
            }
        }

        showSlide(); // Pokazujemy pierwsze zdjęcie od razu
        setInterval(showSlide, 2500); // Zmiana co 2.5 sekundy
    });

    // Add event listener to each menu item to close the menu on click
    document.querySelectorAll('.nav-list li').forEach(item => {
        item.addEventListener('click', function () {
            var menu = document.querySelector('.nav-list');
            var main = document.querySelector('main');
            var ikona1 = document.querySelector(".ikonaMenu");
            var ikona2 = document.querySelector(".ikona2Menu");
            var header = document.querySelector("header");

            menu.classList.remove('active');
            main.style.filter = 'none';
            ikona2.style.visibility = "hidden";
            ikona1.style.visibility = "visible";
            ikona1.style.opacity = 1.0;
            header.style.boxShadow = "0px 1px 2px white";
        });
    });
});
