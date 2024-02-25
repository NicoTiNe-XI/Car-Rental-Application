// ALL THE PAGES 
// Go To Home Btn
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "home.html";
});

// Adding Active Class FOr The Current Page
document.addEventListener('DOMContentLoaded', function () {
    var currentPageUrl = window.location.href;
    var currentPageName = currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);
    var menuItems = document.querySelectorAll("header nav ul li a");
    menuItems.forEach(function (item) {
        var href = item.getAttribute('href');
        var pageName = href.substring(href.lastIndexOf('/') + 1);
        if (pageName === currentPageName)
            item.classList.add('active');
    });
});

// Burger Menu Btn
document.querySelector('.burger-menu').addEventListener('click', function () {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

// Back To Top Btn
var backToTop = document.getElementById("myBtn");

// Checks If The btn Is Needed To Be Shown
window.onscroll = function () {
    scrollFunction();
};

// Shows The Back To Top Btn On Scroll
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

// Reset The Page to Top Again
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Remove And Add  Placeholder On Focus And Blur In Every Page
let emailInputs = document.querySelectorAll('input[type="email"]')
let textInputs = document.querySelectorAll('input[type="text"]')
let phoneNumberInputs = document.querySelectorAll('input[type="tel"]')
let passwordInputs = document.querySelectorAll('input[type="password"]')
let inputsArrays = [emailInputs, textInputs, phoneNumberInputs, passwordInputs];

inputsArrays.forEach(inputs => {
    inputs.forEach(input => {
        input.addEventListener("focus", (e) => {
            e.target.setAttribute("data-attr", e.target.getAttribute("placeholder"));
            e.target.setAttribute("placeholder", "");
        })
        input.addEventListener("blur", (e) => {
            e.target.setAttribute("placeholder", e.target.getAttribute("data-attr"));
            e.target.setAttribute("data-attr", "");
        })
    })
})

// HOME PAGE
if (window.location.pathname === '/home.html') {
    // Add And Remove Active Class In Vehicle Models
    let vehicleButtons = document.querySelectorAll("section.vehicle-models .container .content .left-side button");
    vehicleButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            vehicleButtons.forEach(btn => {
                btn.classList.remove("active");
            })
            e.currentTarget.classList.add("active");
            let currentModelImage = document.getElementById("current-model");
            currentModelImage.setAttribute("src", `/Images/${(e.currentTarget).innerHTML}.jpg`);
            let imageSrc = currentModelImage.getAttribute("src");
            let carModel = imageSrc.substring(imageSrc.lastIndexOf("/") + 1).slice(0, -4);
            currentModelImage.style.opacity = "1"
            vehicleDetails(carModel)
        })
    })

    // Detailing Every Car
    function vehicleDetails(carModel) {
        // Declaring Variables
        let pricing = document.querySelector(".price");
        let vehicleModel = document.querySelector(".model");
        let vehicleMark = document.querySelector(".mark");
        let vehicleYear = document.querySelector(".year");
        let vehicleTransmission = document.querySelector(".transmission");
        let vehicleFuel = document.querySelector(".fuel");

        // Condition Show Team Box Base On The Selected Category
        switch (carModel) {
            case "Audi A1 S-Line":
                pricing.textContent = "$45 /"
                vehicleModel.textContent = "Audi";
                vehicleMark.textContent = "A1";
                vehicleYear.textContent = "2012";
                vehicleTransmission.textContent = "Manual";
                vehicleFuel.textContent = "Gasoline";
                break;
            case "VW Golf 6":
                pricing.textContent = "$37 /"
                vehicleModel.textContent = "Golf 6";
                vehicleMark.textContent = "Volkswagen";
                vehicleYear.textContent = "2008";
                vehicleTransmission.textContent = "Manual";
                vehicleFuel.textContent = "Diesel";
                break;
            case "Toyota Camry":
                pricing.textContent = "$30 /"
                vehicleModel.textContent = "Camry";
                vehicleMark.textContent = "Toyota";
                vehicleYear.textContent = "2006";
                vehicleTransmission.textContent = "Automatic";
                vehicleFuel.textContent = "Hybrid";
                break;
            case "BMW 320 ModernLine":
                pricing.textContent = "$35 /"
                vehicleModel.textContent = "320";
                vehicleMark.textContent = "BMW";
                vehicleYear.textContent = "2012";
                vehicleTransmission.textContent = "Manual";
                vehicleFuel.textContent = "Diesel";
                break;
            case "Mercedes-Benz GLK":
                pricing.textContent = "$50 /"
                vehicleModel.textContent = "Benz GLK";
                vehicleMark.textContent = "Mercedes";
                vehicleYear.textContent = "2006";
                vehicleTransmission.textContent = "Manual";
                vehicleFuel.textContent = "Diesel";
                break;
            case "VW Passat CC":
                pricing.textContent = "$25"
                vehicleModel.textContent = "Passat CC";
                vehicleMark.textContent = "Volkswagen";
                vehicleYear.textContent = "2008";
                vehicleTransmission.textContent = "Automatic";
                vehicleFuel.textContent = "Gasoline";
                break;
            default:
                break;
        }
    }

    // Drop Down FAQ
    let faqButton = document.querySelectorAll(".question");
    faqButton.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let expandMore = e.currentTarget.querySelector(".expand");
            let faqQuestion = e.currentTarget.nextElementSibling;
            faqQuestion.style.display = faqQuestion.style.display === 'block' ? 'none' : 'block';
            expandMore.textContent = expandMore.textContent === 'expand_less' ? 'expand_more' : 'expand_less';
        })
    })
}

// TESTIMONIALS PAGE
if (window.location.pathname === '/testimonials.html') {
    // Fetching Data From JSON File To The Testimonials Page
    let jsonData;
    fetch('./element.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            testimonialsData();
        })
        .catch(error => console.log('Error loading JSON file:', error));

    // Adding All The Testimonials Data From The JSON File To the Page
    function testimonialsData() {
        jsonData.testimonials.forEach(testimonial => {
            let testimonialStructure = `<div class="testimonials-user">
        <div class="testimonials-user-info">
        <div class="testimonials-user-info-image"><img src="${testimonial.avatar} alt="User Image""></div>
        <div class="testimonials-user-info-text">
        <span class="user-info-name">${testimonial.name}</span>
        <span class="user-info-position">${testimonial.position}</span>
        </div>
        </div>
        <div class="testimonials-user-message">${testimonial.message}</div>
        </div>`;
            let testimonialsContainer = document.getElementById("testimonials-container");
            testimonialsContainer.innerHTML += testimonialStructure;
        });
    }
}

// OUR TEAM PAGE
if (window.location.pathname === '/our-team.html') {
    // Fetching Data From JSON File To The Our Team Page
    fetch('./element.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            ourTeamData();
        })
        .catch(error => console.log('Error loading JSON file:', error));

    // Adding All The Our Team Data From The JSON File To the Page
    function ourTeamData() {
        jsonData.leadership.forEach(leader => {
            let leadershipStructure = `<div class="box leadership all">
        <img src="${leader.avatar} alt="User Image"">
        <span class="name">${leader.name}</span>
        <span class="position">${leader.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += leadershipStructure;
        });
        jsonData.designers.forEach(designer => {
            let designersStructure = `<div class="box designers all">
        <img src="${designer.avatar} alt="User Image"">
        <span class="name">${designer.name}</span>
        <span class="position">${designer.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += designersStructure;
        });
        jsonData.developers.forEach(developer => {
            let developersStructure = `<div class="box developers all">
        <img src="${developer.avatar} alt="User Image"">
        <span class="name">${developer.name}</span>
        <span class="position">${developer.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += developersStructure;
        });
        jsonData.marketing.forEach(market => {
            let marketingStructure = `<div class="box marketing all">
        <img src="${market.avatar} alt="User Image"">
        <span class="name">${market.name}</span>
        <span class="position">${market.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += marketingStructure;
        });
        jsonData.products.forEach(product => {
            let productStructure = `<div class="box product all">
        <img src="${product.avatar} alt="User Image"">
        <span class="name">${product.name}</span>
        <span class="position">${product.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += productStructure;
        });
        jsonData.hr.forEach(hr => {
            let humanResourcesStructure = `<div class="box hr all">
        <img src="${hr.avatar} alt="User Image"">
        <span class="name">${hr.name}</span>
        <span class="position">${hr.position}</span>
        </div>`;
            let ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += humanResourcesStructure;
        });
    }

    // Show All Teams By Default Cause All Has Active Class
    window.addEventListener("load", () => {
        checkingForRoles("all");
    });

    // Filtering Our Team Via Position
    let ourTeamPositionBtn = document.querySelectorAll("ul li a");
    ourTeamPositionBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            ourTeamPositionBtn.forEach((btn) => {
                btn.classList.remove("sidebar-active")
            });
            e.currentTarget.classList.add("sidebar-active");
            checkingForRoles(e.currentTarget.id)
        });
    });

    // Function To Check For The Roles
    function checkingForRoles(position) {
        // Declaring Variables
        let boxElement = document.querySelectorAll(".all")
        let leadersShipTeam = document.querySelectorAll(".leadership");
        let designersTeam = document.querySelectorAll(".designers");
        let developersTeam = document.querySelectorAll(".developers");
        let marketingTeam = document.querySelectorAll(".marketing");
        let productTeam = document.querySelectorAll(".product");
        let hrTeam = document.querySelectorAll(".hr");
        let category = document.querySelector(".category")

        // Add Hidden Class For All Teams
        boxElement.forEach((box) => {
            box.classList.add("hidden");
        });

        // Condition Show Team Box Base On The Selected Category
        switch (position) {
            case "all":
                boxElement.forEach(box => {
                    box.classList.remove("hidden")
                })
                category.textContent = "Pack";
                break;
            case "leadership":
                leadersShipTeam.forEach(team => {
                    team.classList.remove("hidden")
                })
                category.textContent = "Leaders Team";
                break;
            case "designers":
                designersTeam.forEach(team => {
                    team.classList.remove("hidden")
                })
                category.textContent = "Designers Team";
                break;
            case "developers":
                developersTeam.forEach(team => {
                    team.classList.remove("hidden")
                })
                category.textContent = "Developers Team";
                break;
            case "marketing":
                marketingTeam.forEach(team => {
                    team.classList.remove("hidden")
                })
                category.textContent = "Marketing Team";
                break;
            case "product":
                productTeam.forEach(team => {
                    team.classList.remove("hidden");
                })
                category.textContent = "Product Mangers";
                break;
            case "hr":
                hrTeam.forEach(team => {
                    team.classList.remove("hidden");
                })
                category.textContent = "Human Resources Team";
                break;
            default:
                break;
        }
    }
}

// Sign-In Page
if (window.location.pathname === '/sign-in.html') {
    document.getElementById("remove-image").addEventListener("click", () => {
        document.getElementById("sign-in-image").style.display = "none";
        document.getElementById("log-in-form").style.boxShadow = "rgba(0, 0, 0, 0.2) -20px 18px 30px, rgba(0, 0, 0, 0.2) 20px -20px 30px"
    })
    document.getElementById("sign-in-login-button").addEventListener("click", () => {
        document.getElementById("loader").style.display = "block";
    })
}

// Registration Page
if (window.location.pathname === '/register.html') {
    // Form Validation
    document.addEventListener('DOMContentLoaded', function () {
        // Setting Variables
        let formFullName = document.querySelector("[name='full-name']");
        let formUserName = document.querySelector("[name='username']");
        let formEmail = document.querySelector("[name='email']");
        let formPhoneNumber = document.querySelector("[name='phone-number']");
        let formPassword = document.querySelector("[name='password']");
        let formConfirmPassword = document.querySelector("[name='confirm-password']");
        // Email Validation
        let emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValidEmail = () => {
            return emailRe.test(formEmail.value.toLowerCase());
        }

        // On Submit Validation And Prevent if Something Is wrong
        document.getElementById("register-form").onsubmit = e => {
            e.preventDefault();
            validateInputs();
        }

        const setSuccess = element => {
            let inputDisplay = element.parentElement;
            let errorDisplay = inputDisplay.querySelector(".error");
            errorDisplay.innerHTML = "";
            inputDisplay.classList.add("valid");
            inputDisplay.classList.remove("not-valid");
        }

        const setError = (element, message) => {
            let inputDisplay = element.parentElement;
            let errorDisplay = inputDisplay.querySelector(".error");
            errorDisplay.innerHTML = message;
            inputDisplay.classList.add("not-valid");
            inputDisplay.classList.remove("valid");
        }

        function validateInputs() {
            let formFullNameValue = formFullName.value.trim();
            let formUserNameValue = formUserName.value.trim();
            let formEmailValue = formEmail.value.trim();
            let formPhoneNumberValue = formPhoneNumber.value.trim();
            let formPasswordValue = formPassword.value.trim();
            let formConfirmPasswordValue = formConfirmPassword.value.trim();
            // Full Name Validation
            if (formFullNameValue === "") {
                setError(formFullName, "Full Name Is required");
            } else {
                setSuccess(formFullName);
            }
            // User Name Validation
            if (formUserNameValue === "") {
                setError(formUserName, "User Name Is required");
            } else {
                setSuccess(formUserName);
            }
            // Email Validation
            if (formEmailValue === "") {
                setError(formEmail, "Email Is required");
            } else if (!isValidEmail()) {
                setError(formEmail, "Enter A valid Email");
            } else {
                setSuccess(formEmail);
            }
            // Phone Number Validation
            if (formPhoneNumberValue === "") {
                setError(formPhoneNumber, "Phone Number Is required");
            } else if (!formConfirmPasswordValue.match(/^(\+?\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/)) {
                setError(formPhoneNumber, "Enter A Valid Phone Number");
            } else {
                setSuccess(formPhoneNumber);
            }
            // Password Validation
            if (formPasswordValue === "") {
                setError(formPassword, "Password Is required")
            } else if (formPasswordValue.length < 8) {
                setError(formPassword, "Password Must Be At Least 8 Character");
            } else if (!formPasswordValue.match(/[!@#$%^&*()_+=\[\]{}\\|;':",./<>?]/)) {
                setError(formPassword, "Password Must Be At Least Contain One Special Character Character");
            } else if (!formPasswordValue.match(/\d/)) {
                setError(formPassword, "Password Must Be At Least Contain Number");
            } else if (!formPasswordValue.match(/[A-Z]/)) {
                setError(formPassword, "Password Must Be At Least Capital Letter");
            } else {
                setSuccess(formPassword);
            }
            // Confirm Password Validation
            if (formConfirmPasswordValue === "") {
                setError(formConfirmPassword, "Confirm Password Is Required");
            } else if (formConfirmPasswordValue !== formPasswordValue) {
                setError(formConfirmPassword, "Password Doesn't Match");
            } else {
                setSuccess(formConfirmPassword);
            }
        }
        // On Click Radio Name Radio Check
        function triggerRadio(id) {
            document.getElementById(id).checked = true;
        }
    });
}