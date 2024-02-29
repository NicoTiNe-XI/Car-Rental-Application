// ALL THE PAGES 
// Animation On Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const zoomOut = document.querySelectorAll(".zoomOut");
const zoomIn = document.querySelectorAll(".zoomIn");
const rightFade = document.querySelectorAll(".rightFade");
const leftFade = document.querySelectorAll(".leftFade");
const upFade = document.querySelectorAll(".upFade");
const downFade = document.querySelectorAll(".downFade");
const animation = [zoomOut, zoomIn, rightFade, leftFade, upFade, downFade]
animation.forEach(anima => {
    anima.forEach(e => {
        observer.observe(e);
    })
})

// Go To Home Btn
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "home.html";
});

// Adding Active Class FOr The Current Page
document.addEventListener('DOMContentLoaded', function () {
    let currentPageUrl = window.location.href;
    let currentPageName = currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);
    let menuItems = document.querySelectorAll("header nav ul li a");
    menuItems.forEach(function (item) {
        let href = item.getAttribute('href');
        let pageName = href.substring(href.lastIndexOf('/') + 1);
        if (pageName === currentPageName)
            item.classList.add('active');
    });
});

// Burger Menu Btn
document.querySelector('.burger-menu').addEventListener('click', function () {
    let navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    let burgerIcon = document.querySelector(".burger-icon");
    burgerIcon.innerHTML = burgerIcon.innerHTML === "close" ? "menu" : "close";
});

// Back To Top Btn
let backToTop = document.getElementById("myBtn");

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
const emailInputs = document.querySelectorAll('input[type="email"]')
const textInputs = document.querySelectorAll('input[type="text"]')
const phoneNumberInputs = document.querySelectorAll('input[type="tel"]')
const passwordInputs = document.querySelectorAll('input[type="password"]')
const inputsArrays = [emailInputs, textInputs, phoneNumberInputs, passwordInputs];

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
    document.addEventListener("DOMContentLoaded", function () {
        const inputs = document.querySelectorAll('select, input[type="date"]');
        inputs.forEach(input => {
            input.addEventListener('change', function () {
                if (this.value === '') {
                    this.style.color = 'gray';
                } else {
                    this.style.color = 'black';
                }
            });
            input.dispatchEvent(new Event('change'));
        });
    });
    // Add And Remove Active Class In Vehicle Models
    const vehicleButtons = document.querySelectorAll("section.vehicle-models .container .content .left-side button");
    vehicleButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            vehicleButtons.forEach(btn => {
                btn.classList.remove("active");
            })
            e.currentTarget.classList.add("active");
            const currentModelImage = document.getElementById("current-model");
            currentModelImage.setAttribute("src", `/Images/${(e.currentTarget).innerHTML}.jpg`);
            const imageSrc = currentModelImage.getAttribute("src");
            const carModel = imageSrc.substring(imageSrc.lastIndexOf("/") + 1).slice(0, -4);
            vehicleDetails(carModel)
            changeImageWithFade(`/Images/${(e.currentTarget).innerHTML}.jpg`);
        })
    })

    function changeImageWithFade(newSrc) {
        const currentModelImage = document.getElementById("current-model");
        currentModelImage.style.opacity = "0";
        currentModelImage.style.transform = "scale(0)";
        setTimeout(() => {
            currentModelImage.setAttribute("src", newSrc);
            currentModelImage.style.opacity = "1";
            currentModelImage.style.transform = "scale(1)";
        }, 300);
    }

    // Detailing Every Car
    function vehicleDetails(carModel) {
        // Declaring Variables
        const pricing = document.querySelector(".price");
        const vehicleModel = document.querySelector(".model");
        const vehicleMark = document.querySelector(".mark");
        const vehicleYear = document.querySelector(".year");
        const vehicleTransmission = document.querySelector(".transmission");
        const vehicleFuel = document.querySelector(".fuel");

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
                pricing.textContent = "$25 /"
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
    const faqButton = document.querySelectorAll(".question");
    faqButton.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const expandMore = e.currentTarget.querySelector(".expand");
            const faqQuestion = e.currentTarget.nextElementSibling;
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
        const testimonialsContainer = document.getElementById("testimonials-container");
        let testimonialHTML = '';
        jsonData.testimonials.forEach(testimonial => {
            testimonialHTML += `
            <div class="testimonials-user">
                <div class="testimonials-user-info">
                    <div class="testimonials-user-info-image"><img src="${testimonial.avatar}" alt="User Image"></div>
                    <div class="testimonials-user-info-text">
                        <span class="user-info-name">${testimonial.name}</span>
                        <span class="user-info-position">${testimonial.position}</span>
                    </div>
                </div>
                <div class="testimonials-user-message">${testimonial.message}</div>
            </div>`;
        });

        // Append all testimonials HTML at once
        testimonialsContainer.innerHTML = testimonialHTML;

        // Add Intersection Observer to show testimonials when they come into view
        const testimonials = document.querySelectorAll('.testimonials-user');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        testimonials.forEach(testimonial => {
            observer.observe(testimonial);
        });
    }
}

// OUR TEAM PAGE
if (window.location.pathname === '/our-team.html') {
    // Fetching Data From JSON File To The Our Team Page
    let jsonData;
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
            const leadershipStructure = `<div class="box leadership all">
        <img src="${leader.avatar} alt="User Image"">
        <span class="name">${leader.name}</span>
        <span class="position">${leader.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += leadershipStructure;
        });
        jsonData.designers.forEach(designer => {
            const designersStructure = `<div class="box designers all">
        <img src="${designer.avatar} alt="User Image"">
        <span class="name">${designer.name}</span>
        <span class="position">${designer.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += designersStructure;
        });
        jsonData.developers.forEach(developer => {
            const developersStructure = `<div class="box developers all">
        <img src="${developer.avatar} alt="User Image"">
        <span class="name">${developer.name}</span>
        <span class="position">${developer.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += developersStructure;
        });
        jsonData.marketing.forEach(market => {
            const marketingStructure = `<div class="box marketing all">
        <img src="${market.avatar} alt="User Image"">
        <span class="name">${market.name}</span>
        <span class="position">${market.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += marketingStructure;
        });
        jsonData.products.forEach(product => {
            const productStructure = `<div class="box product all">
        <img src="${product.avatar} alt="User Image"">
        <span class="name">${product.name}</span>
        <span class="position">${product.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += productStructure;
        });
        jsonData.hr.forEach(hr => {
            const humanResourcesStructure = `<div class="box hr all">
        <img src="${hr.avatar} alt="User Image"">
        <span class="name">${hr.name}</span>
        <span class="position">${hr.position}</span>
        </div>`;
            const ourTeamContainer = document.getElementById("our-team-content");
            ourTeamContainer.innerHTML += humanResourcesStructure;
        });
    }

    // Show All Teams By Default Cause All Has Active Class
    window.addEventListener("load", () => {
        checkingForRoles("all");
    });

    // Filtering Our Team Via Position
    const ourTeamPositionBtn = document.querySelectorAll("ul li a");
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
        const boxElement = document.querySelectorAll(".all")
        const leadersShipTeam = document.querySelectorAll(".leadership");
        const designersTeam = document.querySelectorAll(".designers");
        const developersTeam = document.querySelectorAll(".developers");
        const marketingTeam = document.querySelectorAll(".marketing");
        const productTeam = document.querySelectorAll(".product");
        const hrTeam = document.querySelectorAll(".hr");
        const category = document.querySelector(".category")

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
        document.getElementById("log-in-form").style.border = "1px solid rgba(0, 0, 0, 0.2)";
        document.getElementById("log-in-form").style.borderRadius = "8px";
    })
    document.getElementById("sign-in-login-button").addEventListener("click", () => {
        document.getElementById("loader").style.display = "block";
    })
}

// Registration Page
if (window.location.pathname === '/register.html') {
    // On Click Radio Name Radio Check
    function triggerRadio(id) {
        document.getElementById(id).checked = true;
    }
    // Form Validation
    document.addEventListener('DOMContentLoaded', function () {
        // Setting Variables
        const formFullName = document.querySelector("[name='full-name']");
        const formUserName = document.querySelector("[name='username']");
        const formEmail = document.querySelector("[name='email']");
        const formPhoneNumber = document.querySelector("[name='phone-number']");
        const formPassword = document.querySelector("[name='password']");
        const formConfirmPassword = document.querySelector("[name='confirm-password']");
        // Email Validation
        const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = () => {
            return emailRe.test(formEmail.value.toLowerCase());
        }

        // On Submit Validation And Prevent if Something Is wrong
        document.getElementById("register-form").onsubmit = e => {
            e.preventDefault();
            validateInputs();
        }

        const setSuccess = element => {
            const inputDisplay = element.parentElement;
            const errorDisplay = inputDisplay.querySelector(".error");
            errorDisplay.innerHTML = "";
            inputDisplay.classList.add("valid");
            inputDisplay.classList.remove("not-valid");
        }

        const setError = (element, message) => {
            const inputDisplay = element.parentElement;
            const errorDisplay = inputDisplay.querySelector(".error");
            errorDisplay.innerHTML = message;
            inputDisplay.classList.add("not-valid");
            inputDisplay.classList.remove("valid");
        }

        function validateInputs() {
            const formFullNameValue = formFullName.value;
            const formUserNameValue = formUserName.value;
            const formEmailValue = formEmail.value;
            const formPhoneNumberValue = formPhoneNumber.value;
            const formPasswordValue = formPassword.value;
            const formConfirmPasswordValue = formConfirmPassword.value;
            // Full Name Validation
            if (formFullNameValue === "") {
                setError(formFullName, "Full Name Is required");
            } else if (!formFullNameValue.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
                setError(formFullName, "Enter A Valid Full Name");
            } else {
                setSuccess(formFullName);
            }
            // User Name Validation
            if (formUserNameValue === "") {
                setError(formUserName, "User Name Is required");
            } else if (!formUserNameValue.match(/^[a-zA-Z0-9_]+$/)) {
                setError(formUserName, "Enter A Valid User Name");
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
            } else if (!formPhoneNumberValue.match(/^(\+?\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/)) {
                setError(formPhoneNumber, "Use This Phone Number Pattern +201234567890");
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
    });
}