let container = document.getElementById("container");
let footer = document.getElementById("footer"); 
let pagination = document.getElementById("pagination");
let articles = document.getElementById("articles");
let indexTitle = document.getElementById("indexTitle");
let nav = document.getElementById("navigation");

function max(a, b){return a > b ? a : b;}
function min(a, b){return a < b ? a : b;}

//手机端适配
function isMobile() {
    let userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

let mobileStr = "";

if(isMobile()){
    document.body.setAttribute('style','font-size:4rem;');
    document.documentElement.style.setProperty('--navText', '5rem');
    document.documentElement.style.setProperty('--codeWrap', 'pre');
    document.documentElement.style.setProperty('--arcText', '4rem');
    document.documentElement.style.setProperty('--imgFit','100%');
}

// console.log(nav.offsetHeight);
if(nav.scrollHeight>100){
    mobileStr = "mobile";
}

// 如果页面过短则自动把footer放在底部，防止latex加载带来的高度变化
function modify_footer(){
    // console.log(container.offsetHeight);
    let navHeight = nav.offsetHeight;
    let paginationHeight = pagination ? pagination.offsetHeight : 0;
    let footerHeight = footer.offsetHeight;
    
    // console.log(paginationHeight,container.offsetHeight,articles.offsetHeight,window.innerHeight,document.documentElement.clientHeight);
    if(articles){
        //20 because it has margins
        if (pagination && articles.offsetHeight + indexTitle.offsetHeight + paginationHeight + navHeight + footerHeight + 20 < window.innerHeight) {
            console.log(paginationHeight,articles.offsetHeight,footerHeight,navHeight,articles.offsetHeight + indexTitle.offsetHeight + paginationHeight + navHeight + footerHeight + 20 ,window.innerHeight);
            footer.setAttribute('style', `position: absolute;bottom: ${0}px;`);
            pagination.setAttribute('style', `position:absolute;bottom: ${footer.offsetHeight}px;left:50%;transform:translateX(-50%)`);
        }
        else{
            // console.log(paginationHeight,container.offsetHeight,footerHeight,navHeight,container.offsetHeight + paginationHeight + navHeight + footerHeight + 20,window.innerHeight);
            pagination.setAttribute('style',``);
            footer.setAttribute('style', ``);
            // console.log("you should not appear in this place");
            // console.log(paginationHeight,articles.offsetHeight,footerHeight,navHeight,articles.offsetHeight + indexTitle.offsetHeight + paginationHeight + navHeight + footerHeight + 20 ,window.innerHeight);
        }
        // 如果页面过短则自动把页码放在底部
    }
    else{
        // console.log(container.offsetHeight+footerHeight+navHeight+" window:"+window.innerHeight);
        if (container.offsetHeight + footerHeight + navHeight < window.innerHeight){
            footer.setAttribute('style', `position: absolute;bottom: ${0}px;`);
            footer.style.bottom = 0;
        }
        else footer.setAttribute('style',''); 
    }
}

function modify_navigation(){
    //暂时懒得写（
    return; 
}

window.addEventListener('resize', function() {
    // console.log(this.window.innerHeight);
    modify_footer(); //根据高度更改页脚位置
    modify_navigation(); //根据宽度更改导航
});

window.addEventListener('DOMContentLoaded', function() {
    modify_footer(); //第一次调整footer
});

//亮暗模式
let ldPic = document.getElementById("lightDarkButton");
function checkMode(){
    if(modelCount==0){
        document.documentElement.style.setProperty('--bgcolor', 'white');
        document.documentElement.style.setProperty('--txtcolor', 'black');
        document.documentElement.style.setProperty('--sdcolor','rgba(0, 0, 0, 0.135)');
        document.documentElement.style.setProperty('--cdcolor', 'rgb(234, 234, 234)');
        ldPic.src=`/img/light${mobileStr}.drawio.svg`;
    }
    if(modelCount==1){
        document.documentElement.style.setProperty('--bgcolor', '#252525');
        document.documentElement.style.setProperty('--txtcolor', '#c7c7c7ff');
        document.documentElement.style.setProperty('--sdcolor','rgba(255, 255, 255, 0.135)');
        document.documentElement.style.setProperty('--cdcolor', 'rgba(62, 62, 62, 1)');
        ldPic.src=`/img/dark${mobileStr}.drawio.svg`;
    }
}

let modelCount = localStorage.getItem('bwthemeMode');
let bodyElement = document.body;

if(!modelCount){
    modelCount=0;
}
checkMode();

function changeModel(){
    ++modelCount;
    modelCount%=2;
    localStorage.setItem('bwthemeMode',modelCount);
    checkMode();
}