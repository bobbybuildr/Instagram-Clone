const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainer = document.getElementById("main")

renderPosts()

function renderPosts() {
let postMarkup = ""

for (let i = 0; i < posts.length; i++) {
    postMarkup += `
    <div class="post">
        <div class="poster-header">
            <img class="poster-avatar" src="${posts[i].avatar}" alt="${posts[i].name} avatar">
            <div class="poster-info">
                <h1 class="username">${posts[i].name}</h1>
                <h2 class="poster-location">${posts[i].location}</h2>
            </div>
        </div>
        <img class="post-img" src="${posts[i].post}" alt="Post image" ondblclick="likePost(${i})">
        <div class="action-btns">
            <button class="like-button" aria-label="Like" onclick="likePost(${i})"><img class="btn-icon" src="images/icon-heart.png" alt=""></button>
            <button class="comment-button" aria-label="Comment"><img class="btn-icon" src="images/icon-comment.png" alt=""></button>
            <button class="dm-button" aria-label="Direct Message"><img class="btn-icon" src="images/icon-dm.png" alt=""></button>
        </div>
        <p class="post-likes">${posts[i].likes} likes</p>
        <p class="post-comment"><span class="comment-user">${posts[i].username}</span> ${posts[i].comment}</p>
    </div>
    `
}

mainContainer.innerHTML = postMarkup

}

function likePost(postNum) {
    posts[postNum].likes++
    renderPosts()
}