const like = document.getElementById("like-btn");
const dislike = document.getElementById("dislike-btn");
const save = document.getElementById("save-btn");
const share = document.getElementById("share-btn");
const videoTitleElement = document.getElementById("title-main-video");
const mainPlayer = document.getElementById("main-player");
const fullDesc = document.getElementById("full-desc");
const extra = document.getElementById("extra-paragraphs");
const subscribe = document.getElementById("subscribe");

const createBtn = document.getElementById("create-btn");
const createModal = document.getElementById("create-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalAddBtn = document.getElementById("modal-add-btn");
const newVideoSrc = document.getElementById("new-video-src");
const newVideoTitle = document.getElementById("new-video-title");
const rightContent = document.getElementById("right-content");

function progressBar(){
    alert("in progress");
}


share.addEventListener("click", function() {
    const currentUrl = mainPlayer.src;
    // Копируем её в буфер обмена
    navigator.clipboard.writeText(currentUrl)
    alert("Ссылка на видео успешно скопирована в буфер обмена!")   
});

save.addEventListener("click", function() {
    const videoTitle = videoTitleElement.innerText;
    // Копируем название в буфер обмена
    navigator.clipboard.writeText(videoTitle)
    alert("Название видео скопировано в буфер обмена!");
});

let FullDescInfo = false;
fullDesc.addEventListener("click", function(){
    if (FullDescInfo === false){
        extra.innerHTML = `
        <br>
        <br>
        <br>
        <br>
        <br>`;
        fullDesc.innerHTML = "Свернуть";
        FullDescInfo = true;
    } 
    else{
        extra.innerHTML = "";
        fullDesc.innerHTML = "Развернуть";
        FullDescInfo = false;
    }
})

let isLiked = false;
let isDisliked = false;
like.addEventListener("click",function(){
    if (isLiked === true){
        like.classList.remove("button-active");
        isLiked = false;
    }
    else{
        like.classList.add("button-active");
        isLiked = true;
    }
    if (isDisliked === true) {
            dislike.classList.remove("button-active");
            isDisliked = false;
        }
})

dislike.addEventListener("click",function(){
    if (isDisliked === true){
        dislike.classList.remove("button-active");
        isDisliked = false;
    }
    else{
        dislike.classList.add("button-active");
        isDisliked = true;
    }
    if (isLiked === true) {
            like.classList.remove("button-active");
            isLiked = false;
        }
})

let isSubscribed = false;
subscribe.addEventListener("click", function(){
    if (isSubscribed === true){
        subscribe.innerHTML = "Подписаться";
        subscribe.classList.remove("subscribe-active");
        isSubscribed = false;
    } else{
        subscribe.innerHTML = "Отписаться";
        subscribe.classList.add("subscribe-active");
        isSubscribed = true;
    }
})

createBtn.addEventListener("click", function() {
    createModal.style.display = "flex"; // Показываем окно
});

modalCloseBtn.addEventListener("click", function() {
    createModal.style.display = "none"; // Прячем окно
});

modalAddBtn.addEventListener("click", function() {
    const srcValue = newVideoSrc.value;
    const titleValue = newVideoTitle.value;

    if (srcValue === "" || titleValue === "") {
        alert("Заполните оба поля!");
        return; // Останавливаем функцию, если поля пустые
    }

    const newVideoDiv = document.createElement("div");
    newVideoDiv.classList.add("small-video"); 

 
    newVideoDiv.innerHTML = `
        <iframe class="main-video" width="260" height="155"
            src="${srcValue}" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        <div class="small-video-info">
            <label id="small-title">${titleValue}</label>
            <label id="small-author">User</label>
            <label id="small-author"><i class="icon icon-play"></i>много млн. Только что</label>
        </div>
    `;

    rightContent.insertBefore(newVideoDiv, rightContent.firstChild);
    // rightContent.appendChild(newVideoDiv); поставило бы его тупо вниз

    // Очищаем поля ввода и закрываем модальное окно
    newVideoSrc.value = "";
    newVideoTitle.value = "";
    createModal.style.display = "none";
})