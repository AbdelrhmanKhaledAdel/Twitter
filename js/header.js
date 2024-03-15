// ========================================= Header ======================================
let header = document.querySelector(".header");

let mainHeader = () => {
    return (header.innerHTML = `
        <div class="container">
            <div class="log">
                <a href="home.html"><i class="bi bi-twitter-x"></i></a>
            </div>
            <div class="search-bar">
                <i class="bi bi-search"></i>
                <input type="search" placeholder="Search...">
            </div>
            <div class="create">
                <div id="sign-in-and-up">
                    <a id="log-in" class="btn btn-success" href="login.html">Log In</a>
                    <a id="register" class="btn btn-success" href="register.html">Register</a>
                </div>
                <div id="user-profile">
                    <a onclick="logout()" id="logout" class="btn btn-danger" for="create-post">Log Out</a>
                    <div class="profile-photo">
                        <img id="imgUsrer" src="image/avatar.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    `);
}
mainHeader();

let leftHeader = document.querySelector(".left");

let SidebarNav = () => {
    return (leftHeader.innerHTML = `
    <div class="logout">
       <a onclick="logout()"  style="background: var(--color-primary);" id="logout" class="btn" for="create-post">Log Out</a>
    </div>
    <a class="profile">
        <div id="imgUsre" class="profile-photo">
            <img src="image/avatar.png" alt="">
        </div>
        <div class="handle">
            <h4>Abdelrhman Khaled</h4>
            <h5>dsasdd</h5>
        </div>
    </a>
    <!------------------------------------ Sidebar ------------------------------------>
    <div class="sidebar">
        <a class="menu-item active">
            <span><i class="bi bi-house-fill"></i></span>
            <h3>Home</h3>
        </a>
        <a class="menu-item search">
                <span><i class="bi bi-search"></i></span>
                <h3>Search</h3>
        </a>
        <a class="menu-item">
            <span><i class="bi bi-bookmark"></i></span>
            <h3>Bookmarks</h3>
        </a>
        <a class="menu-item">
            <span><i class="bi bi-graph-up-arrow"></i></span>
            <h3>Analytics</h3>
        </a>
        <a class="menu-item" id="theme">
            <span><i class="bi bi-palette"></i></span>
            <h3>Theme</h3>
        </a>
        <a class="menu-item" id="notifications">
            <span><i class="bi bi-bell-fill"><small class="notification-count">9+</small></i></span>
            <h3>Notifications</h3>
        <!------------------------------ Notifications Popup ------------------------------>
        <div class="notifications-popup">
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
            <div>
                <div class="profile-photo">
                    <img src="image/avatar.png" alt="">
                </div>
                <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Age</small>
                </div>
            </div>
        </div>
        <!------------------------------// Notifications Popup //------------------------------>
        </a>
        <a class="menu-item" id="messages-notification">
            <span><i class="bi bi-envelope-fill"><small class="notification-count">9+</small></i></span>
            <h3>Messages</h3>
        </a>
        <a class="menu-item setting">
            <span><i class="bi bi-gear"></i></span>
            <h3>Setting</h3>
        </a>
    </div>
<!------------------------------------// Sidebar //------------------------------------>
<div class="logo">
    <i class="bi bi-twitter-x"></i>
    <h3>Twitter</h3>
</div>
<button id="closeHeader"><i class="bi bi-x"></i></button>
    `)
}

SidebarNav();

// =========== Sidebar ============
const menuItems = document.querySelectorAll(".menu-item")

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        menuItem.classList.add("active");
    })
})



// ============================= Theme / Pisplay Customization =======================
const theme = document.getElementById("theme");
const themeModal = document.querySelector(".customization-theme");
const fontFamily = document.querySelectorAll(".choose-family span");
const setting = document.querySelector(".setting#theme")
var root = document.querySelector(":root")

let overlayTheme = document.querySelectorAll("#overlay")

for(let i = 0; i < overlayTheme.length; i++) {
    overlayTheme[i].addEventListener("click", () => {
        themeModal.style.display = "none"
    })
}


// opens modal
const openThemeModal = () => {
    themeModal.style.display = "grid"
}


document.querySelector(".close").addEventListener("click", () => {
    themeModal.style.display = "none"
})


theme.addEventListener("click", openThemeModal)

const removeSizeSelector = () => {
    fontFamily.forEach(family => {
        family.classList.remove("active")
    })
}


// ----------------------------------- fonts size -------------------------------
fontFamily.forEach(family => {

    if(window.localStorage.getItem("fontFamily")) { // If There Is Font Size In Local Storage
        // [1] Add Font Size To Root
        document.querySelector("body").style.fontFamily = window.localStorage.getItem("fontFamily");
        // [2] Remove Active Class
        fontFamily.forEach((family) => {
            family.classList.remove("active");
        });
        // [3] Add Active Class To Current Color
        document.querySelector(`[data-family = "${window.localStorage.getItem("fontFamily")}"]`).classList.add("active")
    }else { // If No Color In Local Storage
    
    }

    family.addEventListener("click", (e) => {
        // Remove Active Class From All Font Size span
        fontFamily.forEach((family) => {
            family.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Font Size To Local Storage
        window.localStorage.setItem("fontFamily", e.currentTarget.dataset.family);
        // Change Root Font Size
        document.querySelector("body").style.fontFamily = e.currentTarget.dataset.family;
    })
})

// ----------------------------------- Primary Colors -------------------------------
const colorPalette = document.querySelectorAll(".choose-color span");

if(window.localStorage.getItem("color")) { // If There Is Color In Local Storage
    // [1] Add Color To Root
    root.style.setProperty("--color-primary", window.localStorage.getItem("color"))
    // [2] Remove Active Class
    colorPalette.forEach((color) => {
        color.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")
}else { // If No Color In Local Storage

}


colorPalette.forEach((color) => {
    color.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        // Remove Active Class From All Colors span
        colorPalette.forEach((color) => {
            color.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Color To Local Storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // Change Root Color
        root.style.setProperty("--color-primary", e.currentTarget.dataset.color)
    })
})

// ----------------------------- Background Color -----------------------------------
const chessBg = document.querySelectorAll(".choose-bg div")
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");




if(window.localStorage.getItem("darkcolor") && window.localStorage.getItem("lightcolor") && window.localStorage.getItem("whitecolor")) { // If There Is Color In Local Storage
    // [1] Add Color To Root
    root.style.setProperty("--dark-color-lightness", window.localStorage.getItem("darkcolor"))
    root.style.setProperty("--light-color-lightness", window.localStorage.getItem("lightcolor"))
    root.style.setProperty("--white-color-lightness", window.localStorage.getItem("whitecolor"))
    // [2] Remove Active Class
    chessBg.forEach((bgColor) => {
        bgColor.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-light = "${window.localStorage.getItem("lightcolor")}"]`).classList.add("active")
    document.querySelector(`[data-dark = "${window.localStorage.getItem("darkcolor")}"]`).classList.add("active")
    document.querySelector(`[data-white = "${window.localStorage.getItem("whitecolor")}"]`).classList.add("active")
}else { // If No Color In Local Storage

}


chessBg.forEach((bgColor) => {
    bgColor.addEventListener("click", (e) => {
        // Remove Active Class From All Colors span
        chessBg.forEach((bgColor) => {
            bgColor.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Color To Local Storage
        window.localStorage.setItem("lightcolor", e.currentTarget.dataset.light);
        window.localStorage.setItem("whitecolor", e.currentTarget.dataset.white);
        window.localStorage.setItem("darkcolor", e.currentTarget.dataset.dark);
        // Change Root Color
        root.style.setProperty("--dark-color-lightness", e.currentTarget.dataset.dark)
        root.style.setProperty("--light-color-lightness", e.currentTarget.dataset.light)
        root.style.setProperty("--white-color-lightness", e.currentTarget.dataset.white)
    })
})

// ======================= Alert ======================
let toastBox = document.getElementById("toastBox");

function showToast(customMessage ,msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(customMessage.includes("danger")) {
        toast.classList.add("danger");
        toast.innerHTML =  `<i class="bi bi-x"></i> ${msg}`

    }if(customMessage.includes("success")) {
        toast.classList.add("success")
        toast.innerHTML = `<i class="bi bi-check-lg"></i> ${msg}`
    }

    setTimeout(() => {
        toast.remove()
    }, 3000)
}




// =========================== Url =====================================
let baseUrl = "https://tarmeezacademy.com/api/v1";
let token = localStorage.getItem("token");
let userProfile = document.getElementById("user-profile")
let divLogin = document.getElementById("sign-in-and-up")
let imgUsre = document.getElementById("imgUsrer")
let btnAdd = document.querySelector("#add-post")
imgUsre.addEventListener("click", () => {
    leftHeader.classList.add("open")
})

function setupUI() {
    let user = getCurrentUser();
    const userName = document.querySelectorAll(".handle h4");
    let userImage = document.getElementById("imgUsrer");
    console.log(userImage);
    if(token == null) {
        btnAdd.style.setProperty("display", "none", "important");
        divLogin.style.setProperty("display", "flex", "important");
        userProfile.style.setProperty("display", "none", "important");
    }else {
        btnAdd.style.setProperty("display", "flex", "important");
        divLogin.style.setProperty("display", "none", "important");
        userProfile.style.setProperty("display", "flex", "important");
        userImage.src = user.profile_image

       
    }
}




function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    showToast("success", 'logged out successfully')
    setupUI()
}
setupUI()
function getCurrentUser() {
    let user = null;
    const storageUser = localStorage.getItem("user");
    if(storageUser != null) {
        user = JSON.parse(storageUser)
    }
    return user
}

function toggleLoader(show = true) {
    if(show) {
        document.getElementById("loader").style.visibility = "visible"
    }else{
        document.getElementById("loader").style.visibility = "hidden"
    }
}

let closeHeader = document.querySelector("#closeHeader");

closeHeader.addEventListener("click", () => {
    leftHeader.classList.remove("open");
})

if(document.documentElement.scrollTop <= "1501") {
    imgUsre.classList.add("open")
}