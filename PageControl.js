const scriptPath = document.currentScript.src;
const directoryPath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

function _1P() {
    //添加隐藏类
    document.body.classList.add('hidden');
    setTimeout(() => {
        window.location.href = directoryPath + "/1P/1P.html";
    }, 1000);
}

function _1P_start() {
    sessionStorage.setItem('timeLimit', document.getElementById("timeLimit").value);
    sessionStorage.setItem('timeLimitEnabled', document.getElementById("timeLimitEnabled").checked);
    window.location.href = directoryPath + "/1P/1P_start.html";
}

function _2P() {
    window.location.href = directoryPath + "/2P/2P.html";
}

function _2P_start() {
    window.location.href = directoryPath + "/2P/2P_start.html";
}

function home() {
    document.body.classList.add('hidden');
    setTimeout(() => {
        window.location.href = directoryPath + "/index.html";
    }, 1000);
}

function SearchIdioms() {
    //切换页面
    const overlay = document.querySelector('.overlay');
    //遮罩放到对应位置
    overlay.style.transform = 'translateY(-100%)';
    overlay.style.transform = 'translateY(0%)';
    setTimeout(() => {
            window.location.href = directoryPath + "/1P/SearchIdioms.html";
    },500)
}