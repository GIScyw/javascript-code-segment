function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null)
        {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
