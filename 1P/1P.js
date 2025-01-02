let last;
let idioms = [];
fetch('https://canbemax.github.io/CYJL/idiom.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        idioms = data; // 将成语数据存储到全局变量
        loadNewIdiom(); // 初始化第一个成语
    })
    
    // 处理异常
    .catch(error => {
        console.error('加载 JSON 文件失败或数据错误:', error);
    });


function loadNewIdiom(){
    const randomIndex = Math.floor(Math.random() * idioms.length);
    const idiom = idioms[randomIndex];

    if (!idiom || !idiom.word) {
        console.error('成语数据无效');
        return;
    }

    const word = idiom.word; // 当前成语
    last = idiom.last; // 最后一个字的拼音

    // 更新显示
    const currentIdiom = document.getElementById('currentWord');
    currentIdiom.innerText = "当前词语: " + word;
}


    document.getElementById('submit').addEventListener('click', function () {
        const input = document.getElementById('inputBox').value; // 获取输入框的值
    // 如果成语存在就获取成语的第一个字的拼音
        try {
            fetch('https://canbemax.github.io/CYJL/idiom.json') // 再次加载 idiom.json
                .then(response => response.json())
                .then(idioms => {
                    const idiom = idioms.find(item => item.word === input);
                    if (!idiom) {
                        alert('此成语不存在');
                    }
                    const first = idiom.first; // 获取第一个字的拼音

                    if (first === last) { // 比较 first 和 back
                        alert('匹配成功');
                        input.value = ''; // 清空输入框
                        loadNewIdiom();
                    } else {
                        alert('不匹配');
                        input.value = ''; // 清空输入框
                    }
                })
        } catch (error) {
            console.error('加载 JSON 文件失败: ', error);
        }
    })