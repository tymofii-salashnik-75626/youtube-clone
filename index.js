const like = document.getElementById("like-btn");
const dislike = document.getElementById("dislike-btn");
const save = document.getElementById("save-btn");
const share = document.getElementById("share-btn");
const videoTitleElement = document.getElementById("title-main-video");
const mainPlayer = document.getElementById("main-player");
const fullDesc = document.getElementById("full-desc");
const extra = document.getElementById('extra-paragraphs');

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
        FullDescInfo = false;
        extra.innerHTML = "";
        fullDesc.innerHTML = "Развернуть";
    }
})