// =================================== Id Post ==========================
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("postId")



// =================================== Post Comment ==========================
function getPost() {
    axios.get(`${baseUrl}/posts/${id}`)
    .then((response) => {
            const post = response.data.data
            const author = post.author


            let postTitle = " "

            if (post.title != null) {
                postTitle = post.title
            }
            let postContent = `
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
                        <span><i class="bi bi-three-dots-vertical"></i></span>
                        <div class="megu-menu">
                            <ul class="links">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
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
                        <div class="comment">
                            <p><small>${post.comments_count}</small><i class="bi bi-chat-dots"></i></p>
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
                            <span><i class="bi bi-chat-dots"></i></span>
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

                    document.querySelector(".feeds").innerHTML = postContent;
            

        })
}



getPost()