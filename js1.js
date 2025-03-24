<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="style2.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <title>Cennik</title>
</head>

<body>
    <header class="fixed-top">
        <div class="container d-flex justify-content-between align-items-center py-3">
            <a href="index.html"><img src="logo3.png" alt="Logo" class="logo"></a>
            <button id="burger-btn" class="d-md-none navbar-toggler">
                <ion-icon name="menu-outline" class="ikonaMenu"></ion-icon>
                <ion-icon name="close-outline" class="ikona2Menu"></ion-icon>
            </button>
            <div class="menuMobilne">
                <nav class="navbar" id="navbarNav">
                    <ul id="nav-menu" class="nav-list">
                        <li><a href="index.html">Strona główna</a></li>
                        <li><a href="cennik.html">Cennik</a></li>
                        <li><a href="index.html#art3">Lokalizacja</a></li>
                        <li><a href="index.html#art4">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <div id="artAll">
            <div class="container text-center my-5">
                <div class="content-padding">
                    <div class="row justify-content-center">
                        <article class="col-md-8">
                            <div class="p-4 text-white rounded">
                                <h1 class="text-center text-white">Cennik</h1>
                                <div class="accordion" id="priceAccordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">
                                                Przegląd ogólny
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse"
                                            aria-labelledby="headingOne" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Przygotowanie do sezonu (centrowanie kół, kasowanie
                                                                luzów, czyszczenie i smarowanie całego roweru)</td>
                                                            <td>130 PLN</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                Koła
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Centrowanie</td>
                                                            <td>35 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zaplecenie</td>
                                                            <td>60 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana dętki (dętka w cenie)</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zakładanie systemu bezdętkowego</td>
                                                            <td>35 PLN</td>
                                                        </tr>
                                                        <!-- Add more rows as needed -->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Piasty
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Wymiana zapadek</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>czyszczenie i smarowanie</td>
                                                            <td>30 PLN</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                Hamulce
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse"
                                            aria-labelledby="headingFour" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Wymiana klocków</td>
                                                            <td>15 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Odpowietrzanie hamulca (olej w cenie)</td>
                                                            <td>35 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Prostowanie tarczy</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <!-- Add more rows as needed -->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                                Napęd
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse"
                                            aria-labelledby="headingFive" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Regulacja przerzutki</td>
                                                            <td>25 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Czyszczenie i smarowanie łańcucha</td>
                                                            <td>15 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Czyszczenie i smarowanie suportu</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Czyszczenie i smarowanie całego napędu</td>
                                                            <td>40 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Skracanie/wymiana łańcucha (+smarowanie)</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana kasety</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana korby</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana przerzutki (+ regulacja)</td>
                                                            <td>30 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Kasowanie luzu w korbie</td>
                                                            <td>od 20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana haka przerzutki</td>
                                                            <td>10 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana suportu</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana całego napędu</td>
                                                            <td>70zł</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSix">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                                Amortyzacja
                                            </button>
                                        </h2>
                                        <div id="collapseSix" class="accordion-collapse collapse"
                                            aria-labelledby="headingSix" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ustawienie amortyzatorów pod wagę
                                                                (przedni/przedni+tylny)</td>
                                                            <td>30-50 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Serwis podstawowy amortyzatorów Fox 32/34/36/38 (w cenie
                                                                smary i oleje)</td>
                                                            <td>160 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Serwis podstawowy amortyzatorów Marzocchi na tlumiku
                                                                grip/grip2 (w cenie
                                                                smary i oleje)</td>
                                                            <td>160 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Podstawowy + serwis tłumika grip/grip2 (Fox, Marzocchi)
                                                            </td>
                                                            <td>250 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Serwis podstawowy amortyzatorów Rock Shox
                                                                Yari/Pike/Gold/Lyrik/Zeb (w cenie
                                                                smary i oleje)</td>
                                                            <td>150 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Serwis podstawowy amortyzatorów Sr Suntour
                                                                aion/auron/durolux (w cenie
                                                                smary i oleje)</td>
                                                            <td>130 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Podstawowy + serwis tłumika RC2/R2C2 (Suntour)</td>
                                                            <td>200 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dodatkowa wymiana uszczelek lag (cena zależy od
                                                                modelu)
                                                            </td>
                                                            <td>70 - 150 PLN </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Skracanie rury sterowej</td>
                                                            <td>25 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Nabicie bieżni sterów</td>
                                                            <td>15 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana amortyzatora (+ skracanie sterówki, nabicie
                                                                gwiazdki)</td>
                                                            <td>40 PLN</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSeven">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                                Kierownica i stery
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" class="accordion-collapse collapse"
                                            aria-labelledby="headingSeven" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Skracanie kierownicy</td>
                                                            <td>15 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana kierownicy(+skracanie)</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana sterów</td>
                                                            <td>30 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Czyszczenie i smarowanie sterów</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Kasowanie luzów w sterach</td>
                                                            <td>od 20 PLN</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingEight">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                aria-expanded="false" aria-controls="collapseEight">
                                                Przewody i linki
                                            </button>
                                        </h2>
                                        <div id="collapseEight" class="accordion-collapse collapse"
                                            aria-labelledby="headingEight" data-bs-parent="#priceAccordion">
                                            <div class="accordion-body">
                                                <table class="table table-dark table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Usługa</th>
                                                            <th scope="col">Cena</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Wymiana linki hamulca/przerzutki(linka w cenie)</td>
                                                            <td>20 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wymiana + skracanie pancerza przerzutki(pancerz w cenie)
                                                            </td>
                                                            <td>35 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Skracanie przewodu hamulcowego (+ odpowietrzanie)</td>
                                                            <td>45 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Przeprowadzenie przewodu przez ramę z wewnętrznym
                                                                prowadzeniem linek (przerzutka/hamulce + odpowietrzanie)
                                                            </td>
                                                            <td>30-70 PLN</td>
                                                        </tr>
                                                        <!-- Add more rows as needed -->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Add more accordion items as needed -->
                                </div>
                            </div>
                        </article>
                        <article class="cennikInfo">
                            <div class="p-4 mt-3 text-white rounded">
                                <p>Uwaga: Jeśli podane ceny za wymianę części nie zawierają dodatkowego dopisku - nie
                                    obejmują kosztu części. Będą one dobierane na zamówienie po konsultacji z klientem,
                                    uwzględniając jego budżet i wymagania.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <span class="stopkaTekst1"><span class="stopkaStyl1">MTB Garage</span> - działalność
                nierejestrowana</span>
        </footer>
    </main>
    <script src="js1.js"></script>
</body>

</html>
