let score = 0;
let currentQuestion = 0;
let timeLimit = 20;
let timer;
let count1 = 0
let audio1 = document.getElementById(`right`);
let audio2 = document.getElementById(`ron`);
let countClick = 0;

class Ratings {
    constructor(nameClass, nameSt, point) {
        this.nameClass = nameClass;
        this.nameSt = nameSt;
        this.point = point;
    }
}
function sortRatings() {
    listRatings.sort((a, b) => b.point - a.point);
}
let listRatings = [];
function displayRatings(){
    sortRatings();
    let table = `<tr>
                          <th>STT</th>
                          <th>Class</th>
                          <th>Name</th>
                          <th>Point</th>
                      
</tr>`
    let maxDisplay = Math.min(listRatings.length, 5);
    for (let i = 0; i < maxDisplay; i++) {
        table += `<tr class="tr">
                           <td align="center" >${i + 1}</td>
                           <td align="center">${listRatings[i].nameClass}</td>
                           <td align="center">${listRatings[i].nameSt}</td>
                           <td align="center">${listRatings[i].point} point</td>
                         
 </tr>`
        document.getElementById("ratings").innerHTML = table;
    }
}
class Question {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

let questions = [
    new Question(
        "JavaScript được phát triển bởi nhà phát triển nào sau đây?",
        [
            "A. Tim Berners-Lee.",
            "B. Brendan Eich.", // Correct answer
            "C. Bill Gates.",
            "D. Linus Torvalds."
        ],
        "2"
    ),
    new Question(
        "Đâu là cách định nghĩa một đối tượng (object) trong JavaScript?",
        [
            "A. let obj = {key: \"value\"};", // Correct answer
            "B. object obj = {key: \"value\"};",
            "C. new Object() {key: \"value\"};",
            "D. Object.create({key: \"value\"});"
        ],
        "1"
    ),
    new Question(
        "Hàm Array.isArray([]) trả về giá trị nào?",
        [
            "A. true.", // Correct answer
            "B. false.",
            "C. null.",
            "D. undefined."
        ],
        "1"
    ),
    new Question(
        "Biến let trong JavaScript có phạm vi như thế nào?",
        [
            "A. Phạm vi toàn cục.", // Correct answer
            "B. Không có phạm vi.",
            "C. Phạm vi chỉ trong function mà nó được khai báo.",
            "D. Phạm vi cục bộ, chỉ trong block mà nó được khai báo."
        ],
        "4"
    ),
    new Question(
        "Đối tượng window trong JavaScript được sử dụng để làm gì?",
        [
            "A. Để quản lý các cửa sổ trong trình duyệt.", // Correct answer
            "B. Để quản lý các tài nguyên mạng.",
            "C. Để quản lý và tương tác với cửa sổ trình duyệt.",
            "D. Để quản lý các thư viện JavaScript."
        ],
        "3"
    ),  new Question(
        "Hàm Array.prototype.filter() trong JavaScript được sử dụng để làm gì?",
        [
            "A. Sắp xếp các phần tử của mảng theo một thứ tự nhất định. ", // Correct answer
            "B.Xóa các phần tử trùng lặp trong mảng.",
            "C.Lọc các phần tử của mảng theo một điều kiện xác định.  ",
            "D.Thay thế các phần tử của mảng bằng giá trị mới. "
        ],
        "3"
    ),new Question(
        "Đâu là cách khai báo một tham số cho hàm trong JavaScript?",
        [
            "A.function myFunction(param).... ", // Correct answer
            "B.function myFunction(param: type)....",
            "C.function myFunction(param) {}.... ",
            "D.function myFunction(param, type....) "
        ],
        "3"
    ),new Question(
        "Hàm nào dưới đây không phải là phương thức của đối tượng trong JavaScript?",
        [
            "A. function myFunction() { }...", // Correct answer
            "B.object.myFunction = function() { }...",
            "C.function() { }... ",
            "D. this.myFunction = function() { }..."
        ],
        "4"
    ),new Question(
        "Đối tượng Math trong JavaScript có phương thức nào được sử dụng để làm tròn số?",
        [
            "A. Math.floor()..", // Correct answer
            "B.Math.round()..",
            "C. Math.ceil()..",
            "D. Tất cả các phương án đều đúng.."
        ],
        "4"
    ),new Question(
        "Hàm setTimeout() trong JavaScript được sử dụng để làm gì?",
        [
            "A.Tạo ra một vòng lặp vô hạn .", // Correct answer
            "B.Thực thi một hàm sau một khoảng thời gian xác định.",
            "C. Tạo ra một bộ đếm ngược.",
            "D.Dừng chương trình. "
        ],
        "2"
    ),
];

function displayQuestion() {
    currentQuestion++

    countClick = 0
    startTimer()
    if (currentQuestion < questions.length) {
        document.getElementById(`count`).innerHTML = currentQuestion;

        let question = questions[currentQuestion];
        let table = `
            <table id="table">
              
                <tr>
                    <td colspan="3">
                        <button class="button" id="1" onclick="answer(this.id)">${question.options[0]}</button>
                    </td>
                    <td>
                        <button class="button" id="2" onclick="answer(this.id)">${question.options[1]}</button>
                    </td>
                </tr>
             
                <tr>
                    <td colspan="3">
                        <button class="button" id="3" onclick="answer(this.id)">${question.options[2]}</button>
                    </td>
                    <td colspan="3">
                        <button class="button" id="4" onclick="answer(this.id)">${question.options[3]}</button>
                    </td>
                </tr>
              
            </table>
        `;
        document.getElementById(`question_number`).innerHTML = `Câu ${currentQuestion + 1}:`
        document.getElementById(`desc`).innerHTML = `${question.question}`
        document.getElementById('table').innerHTML = table;
    } else {
        clearInterval(timer);
        document.getElementById(`count`).innerHTML = currentQuestion;
        document.getElementById('table').style.display = 'none';
        document.getElementById('question_number').style.display = 'none';
        document.getElementById('desc').style.display = 'none';
        document.getElementById(`singOut`).disabled = false;
        let info1 = document.getElementById('infoC').innerText.split(": ")[1];
        let infoName1 = document.getElementById('infoN').innerText.split(": ")[1];
        let newSt= new Ratings(info1,infoName1,score);
        listRatings.push(newSt)
        displayRatings()
        gameOver();

    }
}



function displayAnswer() {

    let question = questions[currentQuestion]
    let color = +question.correctAnswer;
    for (let i = 1; i < 5; i++) {
        if (i === color) {
            document.getElementById(`${i}`).style.background = `green`;
        } else {
            document.getElementById(`${i}`).style.background = `red`;
            document.getElementById(`${i}`).style.textDecoration = `line-through`;
        }
    }


}

function answer(id) {
    countClick++
    if (countClick === 1) {
        clearInterval(timer)
        let correctAnswer = questions[currentQuestion].correctAnswer;
        if (id === correctAnswer) {

            displayAnswer();
            audio2.play();
            score += 100;
            document.getElementById('score').innerHTML = `${score} point`;
            count1++;
            document.getElementById(`number`).innerHTML = `Số câu trả loi đúng: ${count1}`;
            setTimeout(function () {

                displayQuestion();

            }, 1500);

        } else {

            displayAnswer();
            audio1.play();
            document.getElementById('score').innerHTML = `${score} point`;

            document.getElementById(`number`).innerHTML = `Số câu trả lời đúng: ${count1}`;

            setTimeout(function () {

                displayQuestion();
            }, 1500);

        }
    }

}

function startGame() {
    document.getElementById("starBtn").style.display = `none`;
    document.getElementById("hero").style.display = `block`;
    document.getElementById(`singOut`).disabled = true;

    startTimer();
}

function startTimer() {

    let timeLeft = timeLimit;
    document.getElementById('timer').innerHTML = timeLeft;
    timer = setInterval(function () {
        timeLeft--;
        document.getElementById('timer').innerHTML = timeLeft;
        if (timeLeft === 0) {
            countClick++
            clearInterval(timer);

            audio1.play();
            displayAnswer();

            setTimeout(function () {

                displayQuestion();

            }, 1500);
        }
    }, 1000);
}




function singIn() {
    let info = document.getElementById(`class`).value;
    let infoName = document.getElementById(`name`).value;
    if (info === "" || infoName === "") {
        alert(`mời đăng nhập`);
        return;

    } else {
        score = 0;
        currentQuestion = 0;
        count1 = 0
        document.getElementById(`number`).innerHTML = `Số câu trả lời đúng: ${count1}`;
        document.getElementById('score').innerHTML = `${score} point`;
        document.getElementById(`starBtn`).innerHTML =
            '<button id="starBtn1" onclick="startGame()">Bắt đầu</button>';
        document.querySelector(`.restart`).disabled = false;
    }
    document.getElementById(`sign-in`).style.display = `none`;
    document.getElementById(`infoC`).innerHTML = `Lớp: ${info} `;
    document.getElementById(`infoN`).innerHTML = `Tên: ${infoName} `;
    document.getElementById(`info`).style.display = `block`;

}
function resultRatings(){
    let info1 = document.getElementById('infoC').innerText.split(": ")[1];
    let infoName1 = document.getElementById('infoN').innerText.split(": ")[1];
    let newSt= new Ratings(info1,infoName1,score);
    listRatings.push(newSt)
    displayRatings()
}

function gameOver() {

    document.querySelector(`.time`).style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById(`timer`).innerHTML = "0";


}
function singOut() {
    document.getElementById(`info`).style.display = `none`;
    document.getElementById(`sign-in`).style.display = `block`;
    document.querySelector(`.restart`).disabled = true;
}


function restartGame() {
    score = 0;
    currentQuestion = 0;
    count1 = 0;
    document.getElementById('score').innerHTML = `${score} point`;
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('table').style.display = 'block';
    document.getElementById(`number`).innerHTML = `Số câu trả lời đúng: ${count1}`;
    document.getElementById('question_number').style.display = 'block';
    document.getElementById('desc').style.display = 'block';
    currentQuestion--;
    document.getElementById(`singOut`).disabled = true;
    document.querySelector(`.time`).style.display = 'block';
    document.getElementById(`quiz`).style.display = `block`;
    displayQuestion();
}
