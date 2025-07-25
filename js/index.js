let articleBox = document.getElementsByClassName("articleBox");
let articleTitles = document.getElementsByClassName("articleTitle");
if(isMobile()){
    for(let i = 0; i < articleBox.length; ++i){
        articleBox[i].setAttribute('style',`width:100%;font-size: 3rem`);
    }
    for(let i = 0; i < articleTitles.length; ++i){
        articleTitles[i].setAttribute('style',`font-size: 3.5rem`);
    }
}