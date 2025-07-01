// 在aside.js之后
let postContent = document.getElementsByTagName("postContent");

//没有二级标题就把文章内容覆盖掉右侧边栏
if (asideHeadings.length == 0) {
    postContent[0].setAttribute('style', 'margin-right:20px');
    aside[0].setAttribute('style', 'z-index:-1;')
}

//给代码块的列号对齐
let gutterLine = document.querySelectorAll(".gutter .line");
let codeLine = document.querySelectorAll(".code .line");
for (let i = 0; i < gutterLine.length; ++i) {
    gutterLine[i].setAttribute('style', `height:${codeLine[i].offsetHeight}px`);
}
console.log(gutterLine);