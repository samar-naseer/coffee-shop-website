/* =====================================================
   BREW & BEAN
   JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ================= MENU FILTER ================= */

const menuTabs =
    document.querySelectorAll(".menu-tab");

const menuItems =
    document.querySelectorAll(".menu-item");


menuTabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        /* Remove active class from all tabs */

        menuTabs.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Add active class to clicked tab */

        tab.classList.add("active");


        /* Get selected category */

        const category =
            tab.getAttribute("data-category");


        /* Show / hide menu items */

        menuItems.forEach(function (item) {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                category === "all" ||
                category === itemCategory
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});



/* ================= ORDER COUNTER ================= */

let orderCount = 0;


const cartCount =
    document.getElementById("cartCount");


const addButtons =
    document.querySelectorAll(".add-btn");


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        orderCount++;

        cartCount.textContent = orderCount;


        const originalText =
            button.textContent;


        button.textContent = "Added ✓";


        button.style.backgroundColor =
            "#765238";

        button.style.color =
            "#ffffff";


        setTimeout(function () {

            button.textContent =
                originalText;

            button.style.backgroundColor =
                "";

            button.style.color =
                "";

        }, 1200);

    });

});



/* ================= RESERVATION FORM ================= */

const reservationForm =
    document.getElementById("reservationForm");


const formMessage =
    document.getElementById("formMessage");


reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const date =
        document.getElementById("date").value;


    const time =
        document.getElementById("time").value;


    const guests =
        document.getElementById("guests").value;


    /* Basic validation */

    if (
        name === "" ||
        email === "" ||
        date === "" ||
        time === "" ||
        guests === ""
    ) {

        formMessage.textContent =
            "Please complete all required fields.";

        formMessage.style.color =
            "#a33a2b";

        return;

    }


    /* Success message */

    formMessage.textContent =
        `Thank you, ${name}! Your table request has been received.`;


    formMessage.style.color =
        "#4f7048";


    /* Clear form */

    reservationForm.reset();

});



/* ================= SET MINIMUM DATE ================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date();


const year =
    today.getFullYear();


const month =
    String(today.getMonth() + 1)
        .padStart(2, "0");


const day =
    String(today.getDate())
        .padStart(2, "0");


const todayString =
    `${year}-${month}-${day}`;


dateInput.setAttribute(
    "min",
    todayString
);



/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();



/* ================= CLOSE MENU ON ESCAPE ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

    }

});