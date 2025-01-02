// 加载 idiom.json 数据
fetch('https://canbemax.github.io/CYJL/idiom.json')
    .then(response => response.json())
    .then(idioms => {

        // 处理点击事件
        document.getElementById('checkButton').addEventListener('click', function() {
            const input = document.getElementById('idiomInput').value.trim();
            const idiom = idioms.find(item => item.word === input);

            // 显示结果
            const explanation = document.getElementById('explanation');
            const derivation = document.getElementById('derivation');
            const example = document.getElementById('example');
            if (idiom) {
                explanation.innerText = `释义：${idiom.explanation}`;
                derivation.innerText = `出处：${idiom.derivation}`;
                example.innerText = `示例：${idiom.example}`;
            } else {
                explanation.innerText = '成语无效';
                derivation.innerText = ``;
                example.innerText = ``;
            }
        });
    })
    .catch(error => {
        console.error('加载成语数据失败:', error);
    });