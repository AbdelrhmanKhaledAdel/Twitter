// Book Mark
// function clickSavePost(userObject) {
//     let post = JSON.parse(decodeURIComponent(userObject))
//     let webpost = document.getElementById(`${post.id}`)
//     webpost.classList.add("favorit")
//     let search = favoritBasket.find((x) => x.id === post.id) 
//     if (search === undefined) {
//       favoritBasket.push({
//         id: post.id,
//         img: post.image,
//         body: post.body
//       })
//     }
//     localStorage.setItem("favorit", JSON.stringify(favoritBasket)) 
//   }
//   function clickUnSavePost(postId, profile) {
//     let webpost = document.getElementById(`${postId}`)
//     webpost.classList.remove("favorit")
//     favoritBasket = favoritBasket.filter((x) => x.id !== postId)
//     localStorage.setItem("favorit", JSON.stringify(favoritBasket))
//     if(profile) {
//       getUserFavorietsPosts()
//     }
//   }
 






// ================================= Create & Edit ==========================

// open Create & Edit Modal
let btnCreatePost = document.querySelector("#add-post")
let cardPost = document.querySelector(".card-add-post")
let overlayPost = document.querySelector(".overlay")


btnCreatePost.addEventListener("click", () => {
    cardPost.classList.add("active")
})

// close Create & Edit Modal
overlayPost.addEventListener("click", () => {
    cardPost.classList.remove("active")
})

// Check Create & Edit Post Image
let inputImage = document.getElementById("inputImage")
let imgPost = document.querySelector(".create-image")

function checkPostImages() {
    // img change
    inputImage.addEventListener("change", function() { 
        imgPost.classList.add("active")
        imgPost.src = URL.createObjectURL(inputImage.files[0]);
        document.querySelector(".create-post-img").style.padding = "0"
})
}
checkPostImages()


function createNewPostClicked() {
    let postId = document.getElementById("post-id-input").value;
    let isCreate = postId == null || postId == "";
    const title = document.getElementById("title-input").value
    const body = document.getElementById("body-input").value
    const image = document.getElementById("inputImage").files[0]

    let formData = new FormData()
    formData.append("body", body)
    formData.append("title", title)
    formData.append("image", image)

    const token = localStorage.getItem("token")
    headerss = {
        "Content-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
    }

    let url = ``

    if(isCreate == true) {
        url = `${baseUrl}/posts`
    }else {
        formData.append("_method", "put")

        url = `${baseUrl}/posts/${postId}`


    }
    // toggleLoader(true)
    axios.post(url, formData, {
        headers: headerss
    })
    .then((response) => {
        getPosts()
        showToast("success", 'New Post Has Been Created');
    }).catch((error) => {
        const message = error.response.data.message
        showToast("danger", message)
    })
    
}


// function editPostBtnCliced(postObject) {

//     console.log("ukukggukukukuk")
//     let post = JSON.parse(decodeURIComponent(postObject))


//     document.getElementById("post-modal-submit-btn").innerHTML = "Update"
//     document.getElementById("post-id-input").value = post.id
//     document.getElementById("post-modal-title").innerHTML = "Edit Post"
//     document.getElementById("post-title-input").value = post.title
//     document.getElementById("post-body-input").value = post.body
//     let postModal = new bootstrap.Modal(document.getElementById("create-post-modal"), {})
//     postModal.toggle()
// }






// =========================================== Posts =============================
// Posts
function getPosts(page = 1) {
    // toggleLoader(true)

    axios.get(`${baseUrl}/posts?limit=4&page=${page}`)
    .then((response) => {
        // toggleLoader(false)
        lastPage = response.data.meta.last_page
        const posts = response.data.data
        for(let post of posts) {

            let postTitle = " "

            // let user = getCurrentUser()
            // let isMyPost = user != null && post.author.id == user.id

                const author = post.author
                
                if (post.title != null) {
                    postTitle = post.title ;
                }

            let content = `
            <div class="feed">
            <div class="head">
                <div class="user">
                    <div class="profile-photo">
                        <img src="${author.profile_image}" alt="">
                    </div>
                <div class="ingo">
                    <h3>${author.username}</h3>
                    <small>${post.created_at}</small>
                </div>
            </div>
            <div class="edit">
                <span class="post-menu"><i class="bi bi-three-dots-vertical"></i></span>
                <div class="megu-menu">
                    <ul class="links">
                        <li><a class ="downloader" onclick="downloadImager('${post.image}')">Download Image</a></li>
                        <li><a class ="copy-body" onclick="copyBady('${post.body}')">Copy</a></li>
                        <li><a onclick="sharepost(${post.id})">Share</a></li>
                        <li><a class ="copy-body" onclick="imageEditor(${post.id})">Editor Image</a></li>
                        <li><a class ="copy-body" onclick="">Edit</a></li>
                        
                        
                    </ul>
                </div>
            </div>
            </div>
            <div class="caption">
                <p>${post.body}</p>
                <span class="text-muted"> ${postTitle}</span>
            </div>
            <div class="photo">
                <img src="${post.image}" alt="">
            </div>
            <div class="like">
                <div class="love">
                    <p><small>3</small><i style="color: rgb(255, 50, 50);" class="bi bi-heart-fill"></i></p>
                </div>
                <div onclick="postClicked(${post.id})" class="comment">
                    <p>Comment <small>${post.comments_count}</small></p>
                </div>
            </div>
            <div class="action-buttons">
                <div class="interaction-buttons">
                    <span>
                        <div class="con-like">
                            <input class="like" type="checkbox" title="like">
                            <div class="checkmark">
                                <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                                    <path
                                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                                    <path
                                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"
                                    class="celebrate">
                                    <polygon class="poly" points="10,10 20,20"></polygon>
                                    <polygon class="poly" points="10,50 20,50"></polygon>
                                    <polygon class="poly" points="20,80 30,70"></polygon>
                                    <polygon class="poly" points="90,10 80,20"></polygon>
                                    <polygon class="poly" points="90,50 80,50"></polygon>
                                    <polygon class="poly" points="80,80 70,70"></polygon>
                                </svg>
                            </div>
                        </div>
                    </span>
                    <span onclick="postClicked(${post.id})"><i class="bi bi-chat-dots"></i></span>
                    <span onclick="sharepost(${post.id})"><i class="bi bi-share"></i></span>
                </div>
                <div class="bookmark">
                    <span>
                        <label class="book">
                            <input type="checkbox" checked="checked">
                            <svg class="save-regular" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 384 512">
                                <path
                                    d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z">
                                </path>
                            </svg>
                            <svg class="save-solid" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 384 512">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z">
                                </path>
                            </svg>
                        </label>
                    </span>
                </div>
            </div>
        </div>
                    `;

            document.querySelector(".feeds").innerHTML += content;


        }
    })
}

getPosts()


// ============================================= Comments ======================
function postClicked(postId) {
    window.location = `comments.html?postId=${postId}`
}


// ============================================= Scroll Data ========================
let currentPage = 1
let lastPage = 1

window.addEventListener("scroll", function () {
    const endOfPag = window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (endOfPag && currentPage < lastPage) {
        currentPage = currentPage + 1
        getPosts(currentPage)
    }
})


// ========================================= Share ==============================

// open Modal Share
let shareModal = document.querySelector(".share-modal")
const overlayShare = document.querySelector(".overlayShare")

// Link Share

let LinkInput = document.querySelector(".LinkInput")
function sharepost(postId) {
    shareModal.classList.add("active")
    document.querySelector(".hiddenInput").textContent = `${postId}`
  

    LinkInput.value = `${document.location.origin}/share-post.html?postid=${postId}`
    let link = LinkInput.value
  
    document.querySelector(".share-modal .facebook").href =`https://www.facebook.com/share.php?u=${link}`
    document.querySelector(".share-modal .twitter").href  =`https://twitter.com/intent/tweet?text=${link}`
    document.querySelector(".share-modal .whatsapp").href =`https://api.whatsapp.com/send?text=${link}`
    document.querySelector(".share-modal .instagram").href =`https://api.whatsapp.com/send?text=${link}`
    document.querySelector(".share-modal .telegram").href =`https://api.whatsapp.com/send?text=${link}`
}
function sharedPost (postId) {
    window.location = `share-post.html?postid=${postId}`
}
let field = document.querySelector(".content .field")
let copy = document.querySelector("button.copy");
copy.onclick = () => {
    LinkInput.select(); // select input value
    if(document.execCommand('copy')) { // if selected value is copied
        field.classList.add("active");
        copy.innerText = "copied";
        setTimeout(() => {
            field.classList.remove("active");
            copy.innerText = "copy";
            window.getSelection().removeAllRanges()
        }, 3000)
    }
}
// close Modal Share

let closeShare = document.querySelector(".close-share");

overlayShare.addEventListener("click", () => {
    shareModal.classList.remove("active")
})

closeShare.addEventListener("click", () => {
    shareModal.classList.remove("active")
})

// ============================= Dowanload Image ============================
let urlInput = document.querySelector(".url-dowanload")

function downloadImager(link) {
    urlInput.value = `${link}`;
    document.querySelector(".dowanload-img").classList.add("active");
}
let yes = document.querySelector(".btn-click .yes");
let no = document.querySelector(".btn-click .no");

yes.addEventListener("click", (e) => {
    document.querySelector(".dowanload-img").classList.remove("active");
    e.preventDefault();
    fetchFile(urlInput.value)
})

no.addEventListener("click", () => {
    document.querySelector(".dowanload-img").classList.remove("active");
})

function fetchFile(url) {
    // fetching file & returing response as blob
    console.log(url);
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tage
        
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
    })
}

// ================================ Copy Post Body =======================================
let copyText = document.querySelector(".copy-text");
function copyBady(body) {
    let bodyPost = body;
    copyText.value = bodyPost;
    copyText.select(); // select input value
    showToast("success", 'Copy Successfully')
        if(document.execCommand('copy')) { // if selected value is copied
            setTimeout(() => {
                window.getSelection().removeAllRanges()
                
            }, 3000)
        }
}

// ================================================ Editor Image Url ==============================================

// function imageEditor(postId) {
//     window.location = `image-editor.html?postId=${postId}`
// }











