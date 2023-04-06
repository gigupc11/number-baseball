const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // 입출력

const number = [];
number[0] = Math.floor(Math.random() * 10);
do {
  number[1] = Math.floor(Math.random() * 10);
} while (number[1] === number[0]);
do {
  number[2] = Math.floor(Math.random() * 10);
} while (number[2] === number[0] || number[2] === number[1]);
// 랜덤 숫자 추출

let count = 0;
let tried = 1;
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")
function askNumber() {
    rl.question(tried+"번째 시도", (num) => {
        let arr1 = num.split("").map(Number);
        // console.log(number) 정답 
        // 입력 값 배열로 추출
        let S = 0;
        let B = 0;
        
        
        count++
        tried++

        if (arr1.length === 3 && arr1.every((n) => Number.isInteger(n))) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (number[j] == arr1[k]) {
                        if (j === k) {
                            S++;
        
                        } else {
                            B++;
                        }
           
                        break;
                    }
                }
            }
            
            if (S === 3) {
                console.log(count + "번만에 맞히셨습니다")
                console.log("게임을 종료합니다!!");
                rl.close();
            } else {
                console.log(`${S}s${B}b`);
                askNumber();
            }
        } else {
            console.log("세자리 수를 입력해주세요")
            askNumber();
        }
        
        
    }
  );
}

askNumber();
