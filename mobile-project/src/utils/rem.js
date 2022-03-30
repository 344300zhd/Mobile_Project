// 假设蓝湖设计稿为1920px,可自行修改
const designSize = 750;
const baseSize = designSize * 0.1;

// 设置rem函数
function setRem(){
    // 具体机型缩放比例
    const scale = window.screen.width / designSize;
    // 根元素设置font-size
    document.documentElement.style.fontSize = baseSize * Math.min(scale,2) + "px";
}
setRem()

// 窗口变化监听
window.onresize = function(){
    setRem()
}
