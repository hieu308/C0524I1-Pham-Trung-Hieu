let score = 0;
let currentQuestion = 0;
let timeLimit = 20;
let timer;
let count1 = 0
let audio1 = document.getElementById(`right`);
let audio2 = document.getElementById(`ron`);
let countClick = 0;
let replayArr = [];

function replay() {
    replayArr = [];
    for (let i = 0; i < 10; i++) {
        let questionArr = questions[Math.floor(Math.random() * 50)];
        if (!replayArr.includes(questionArr)) {
        }
        replayArr.push(questionArr);
    }


}

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

function displayRatings() {
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
    ), new Question(
        "Hàm Array.prototype.filter() trong JavaScript được sử dụng để làm gì?",
        [
            "A. Sắp xếp các phần tử của mảng theo một thứ tự nhất định. ", // Correct answer
            "B.Xóa các phần tử trùng lặp trong mảng.",
            "C.Lọc các phần tử của mảng theo một điều kiện xác định.  ",
            "D.Thay thế các phần tử của mảng bằng giá trị mới. "
        ],
        "3"
    ), new Question(
        "Đâu là cách khai báo một tham số cho hàm trong JavaScript?",
        [
            "A.function myFunction(param).... ", // Correct answer
            "B.function myFunction(param: type)....",
            "C.function myFunction(param) {}.... ",
            "D.function myFunction(param, type....) "
        ],
        "3"
    ), new Question(
        "Hàm nào dưới đây không phải là phương thức của đối tượng trong JavaScript?",
        [
            "A. function myFunction() { }...", // Correct answer
            "B.object.myFunction = function() { }...",
            "C.function() { }... ",
            "D. this.myFunction = function() { }..."
        ],
        "4"
    ), new Question(
        "Đối tượng Math trong JavaScript có phương thức nào được sử dụng để làm tròn số?",
        [
            "A. Math.floor()..", // Correct answer
            "B.Math.round()..",
            "C. Math.ceil()..",
            "D. Tất cả các phương án đều đúng.."
        ],
        "4"
    ), new Question(
        "Hàm setTimeout() trong JavaScript được sử dụng để làm gì?",
        [
            "A.Tạo ra một vòng lặp vô hạn .", // Correct answer
            "B.Thực thi một hàm sau một khoảng thời gian xác định.",
            "C. Tạo ra một bộ đếm ngược.",
            "D.Dừng chương trình. "
        ],
        "2"
    ), new Question(
        "Biến nào dưới đây là một biến hợp lệ trong JavaScript?",
        [
            "A. 2variable",
            "B. variable-2",
            "C. variable_2",
            "D. var.2"
        ],
        "3"
    ), new Question(
        "Để kiểm tra kiểu dữ liệu của một biến trong JavaScript, ta sử dụng hàm nào?",
        [
            "A.typeof .", // Correct answer
            "B. checkType.",
            "C.type.",
            "D.getType. "
        ],
        "1"
    ), new Question(
        "Kết quả của phép toán 3 + '5' trong JavaScript là gì?",
        [
            "A.8 .", // Correct answer
            "B.35.",
            "C.NaN.",
            "D.undefined. "
        ],
        "2"
    ), new Question(
        "Đoạn mã nào dưới đây khai báo một hàm đúng cách trong JavaScript?",
        [
            "A.function myFunction {} .", // Correct answer
            "B.function myFunction() {}.",
            "C. function: myFunction() {}.",
            "D.myFunction function() {}. "
        ],
        "2"
    ), new Question(
        "Phương thức nào được sử dụng để thêm một phần tử vào cuối mảng trong JavaScript?",
        [
            "A.push().", // Correct answer
            "B.pop().",
            "C. shift().",
            "D.unshift(). "
        ],
        "1"
    ), new Question(
        "Kết quả của biểu thức typeof null là gì?",
        [
            "A.\"null\".", // Correct answer
            "B.\"undefined\".",
            "C. \"object\".",
            "D.\"boolean\". "
        ],
        "3"
    ), new Question(
        "Phương thức nào được sử dụng để chuyển đổi một chuỗi thành một số nguyên trong JavaScript?",
        [
            "A.parseInteger().", // Correct answer
            "B.parseInt().",
            "C.parseFloat().",
            "D.toInteger(). "
        ],
        "2"
    ), new Question(
        " Trong JavaScript, từ khóa nào được sử dụng để khai báo một hằng số?",
        [
            "A.let.", // Correct answer
            "B.var.",
            "C.const.",
            "D.constant. "
        ],
        "3"
    ), new Question(
        "Biến nào dưới đây là một biến toàn cục (global variable) trong JavaScript?",
        [
            "A.var globalVar .", // Correct answer
            "B.let globalVar.",
            "C.const globalVar.",
            "D.Tất cả các biến trên. "
        ],
        "1"
    ), new Question(
        " Phương thức nào được sử dụng để sao chép một mảng trong JavaScript?",
        [
            "A.copy().", // Correct answer
            "B.slice().",
            "C.splice().",
            "D.copyArray(). "
        ],
        "2"
    ),new Question(
        "Phương thức nào dưới đây trả về ký tự tại một vị trí cụ thể trong chuỗi? ",
        [
            "A.charAt().", // Correct answer
            "B.getChar().",
            "C.characterAt().",
            "D.getCharacter(). "
        ],
        "1"
    ),new Question(
        "Kết quả của phép toán true + true trong JavaScript là gì? ",
        [
            "A.2.", // Correct answer
            "B.11.",
            "C.NaN.",
            "D.true. "
        ],
        "2"
    ),new Question(
        "Trong JavaScript, từ khóa nào được sử dụng để khai báo một biến có phạm vi khối (block scope)? ",
        [
            "A.var.", // Correct answer
            "B.let.",
            "C.const.",
            "D.b và c đều đúng. "
        ],
        "4"
    ),new Question(
        "Phương thức nào dưới đây trả về mảng các phần tử con từ một phần tử HTML? ",
        [
            "A.getChildren().", // Correct answer
            "B.children().",
            "C.childNodes().",
            "D.getElements(). "
        ],
        "3"
    ),new Question(
        "Câu lệnh nào dưới đây được sử dụng để dừng vòng lặp trong JavaScript? ",
        [
            "A.stop.", // Correct answer
            "B.break.",
            "C.exit.",
            "D.terminate. "
        ],
        "2"
    ),new Question(
        "Kết quả của biểu thức NaN == NaN là gì? ",
        [
            "A.false.", // Correct answer
            "B.true.",
            "C.undefined.",
            "D.null. "
        ],
        "1"
    ),new Question(
        "Phương thức nào dưới đây được sử dụng để chuyển đổi một chuỗi thành chữ thường trong JavaScript? ",
        [
            "A.toLowerCase().", // Correct answer
            "B.toLower().",
            "C.convertLowerCase().",
            "D.lowercase(). "
        ],
        "1"
    ),new Question(
        "Đoạn mã nào dưới đây thêm một sự kiện lắng nghe vào một phần tử HTML? ",
        [
            "A.element.addEventListener(\"click\", function).", // Correct answer
            "B.element.attachEvent(\"onclick\", function).",
            "C.element.on(\"click\", function).",
            "D.element.listen(\"click\", function). "
        ],
        "1"
    ),new Question(
        " Kết quả của phép toán [] == [] là gì?",
        [
            "A.true.", // Correct answer
            "B.false.",
            "C.undefined.",
            "D.null. "
        ],
        "2"
    ),new Question(
        "Phương thức nào được sử dụng để nối hai hoặc nhiều mảng trong JavaScript? ",
        [
            "A.concat().", // Correct answer
            "B.join().",
            "C.combine().",
            "D.merge(). "
        ],
        "1"
    ),new Question(
        "Trong JavaScript, từ khóa nào được sử dụng để tạo một đối tượng mới từ một hàm dựng (constructor function)? ",
        [
            "A.object.", // Correct answer
            "B.class.",
            "C.new.",
            "D.create. "
        ],
        "3"
    ),new Question(
        "Kết quả của biểu thức !!false là gì? ",
        [
            "A.true.", // Correct answer
            "B.false.",
            "C.null.",
            "D.undefined. "
        ],
        "2"
    ),new Question(
        "Phương thức nào được sử dụng để kiểm tra xem một mảng có chứa một phần tử cụ thể hay không? ",
        [
            "A.has().", // Correct answer
            "B.contains().",
            "C.includes().",
            "D.exists(). "
        ],
        "3"
    ),new Question(
        "Đoạn mã nào dưới đây khai báo một đối tượng trong JavaScript? ",
        [
            "A.let obj = {};.", // Correct answer
            "B.let obj = [];.",
            "C.let obj = ();.",
            "D.let ojb = {};. "
        ],
        "1"
    ),new Question(
        "Phương thức nào được sử dụng để chuyển đổi một chuỗi thành một số thực trong JavaScript? ",
        [
            "A.parseInteger().", // Correct answer
            "B.parseInt().",
            "C.parseFloat().",
            "D.toFloat(). "
        ],
        "3"
    ),new Question(
        " Kết quả của phép toán null == undefined là gì? ",
        [
            "A.true.", // Correct answer
            "B.false.",
            "C.NaN.",
            "D.undefined. "
        ],
        "1"
    ),new Question(
        " Trong JavaScript, phương thức nào được sử dụng để xóa phần tử cuối cùng của một mảng? ",
        [
            "A.remove().", // Correct answer
            "B.delete().",
            "C.pop().",
            "D.splice(). "
        ],
        "3"
    ),new Question(
        "Kết quả của biểu thức 2 + 3 + '5' trong JavaScript là gì?\n" +
        "a. \"55\" ",
        [
            "A.\"55\".", // Correct answer
            "B.10.",
            "C.NaN.",
            "D.\"55\". "
        ],
        "4"
    ),new Question(
        "Đoạn mã nào dưới đây tạo ra một mảng mới chỉ chứa các phần tử của mảng ban đầu thỏa mãn điều kiện cho trước? ",
        [
            "A.arr.filter().", // Correct answer
            "B.arr.map().",
            "C.arr.reduce().",
            "D.arr.find(). "
        ],
        "2"
    ),new Question(
        "Phương thức nào được sử dụng để thêm một phần tử vào đầu mảng trong JavaScript?",
        [
            "A.push().", // Correct answer
            "B.pop().",
            "C.shift().",
            "D.unshift(). "
        ],
        "d"
    ),new Question(
        "Đoạn mã nào dưới đây tạo ra một đối tượng rỗng trong JavaScript? ",
        [
            "A.let obj = {};.", // Correct answer
            "B.let obj = [];.",
            "C.let obj = ();.",
            "D.let obj = new Object();. "
        ],
        "4"
    ),new Question(
        " Kết quả của phép toán typeof NaN là gì?",
        [
            "A.number.", // Correct answer
            "B.NaN.",
            "C.undefined.",
            "D.object. "
        ],
        "1"
    ),new Question(
        "Đoạn mã nào dưới đây thêm một lớp (class) vào một phần tử HTML? ",
        [
            "A.element.addClass(\"myClass\").", // Correct answer
            "B.element.classList.add(\"myClass\").",
            "C.element.addClassName(\"myClass\").",
            "D.element.className.add(\"myClass\"). "
        ],
        "2"
    ),new Question(
        " Kết quả của biểu thức '5' - 2 trong JavaScript là gì?",
        [
            "A.3.", // Correct answer
            "B.7.",
            "C.NaN.",
            "D.'52'. "
        ],
        "1"
    ),new Question(
        " Phương thức nào dưới đây trả về phần tử đầu tiên trong mảng đáp ứng điều kiện kiểm tra do hàm cung cấp?",
        [
            "A.find().", // Correct answer
            "B.filter().",
            "C.findIndex().",
            "D.indexOf(). "
        ],
        "1"
    ),new Question(
        " Phương thức nào được sử dụng để loại bỏ khoảng trắng từ cả hai phía của chuỗi trong JavaScript?",
        [
            "A.strip().", // Correct answer
            "B.trim().",
            "C.deleteWhitespace().",
            "D.removeWhitespace(). "
        ],
        "2"
    ),new Question(
        "Đoạn mã nào dưới đây kiểm tra xem một biến có phải là mảng hay không? ",
        [
            "A.Array.isArray(variable).", // Correct answer
            "B.variable.isArray().",
            "C.isArray(variable).",
            "D.variable instanceof Array. "
        ],
        "1"
    ),new Question(
        "Kết quả của phép toán {} + [] trong JavaScript là gì? ",
        [
            "A.\"[object Object]\0.", // Correct answer
            "B.\"{}\".",
            "C.{0}.",
            "D.\"[]\" d. 0`. "
        ],
        "1"
    ),new Question(
        " Trong JavaScript, this trong một hàm thông thường tham chiếu đến cái gì? ",
        [
            "A.Đối tượng toàn cục (global object).", // Correct answer
            "B.Đối tượng hiện tại (current object).",
            "C.Đối tượng cha (parent object).",
            "D.Không có cái nào đúng. "
        ],
        "2"
    ),new Question(
        " Phương thức nào dưới đây được sử dụng để duyệt qua từng phần tử của mảng trong JavaScript?",
        [
            "A.forEach().", // Correct answer
            "B.map().",
            "C.reduce().",
            "D.filter(). "
        ],
        "2"
    )
];

function displayQuestion() {
    currentQuestion++

    countClick = 0
    startTimer()
    if (currentQuestion < replayArr.length) {
        document.getElementById(`count`).innerHTML = currentQuestion;

        let question1 = replayArr[currentQuestion];
        let table = `
            <table id="table">
              
                <tr>
                    <td colspan="3">
                        <button class="button" id="1" onclick="answer(this.id)">${question1.options[0]}</button>
                    </td>
                    <td>
                        <button class="button" id="2" onclick="answer(this.id)">${question1.options[1]}</button>
                    </td>
                </tr>
             
                <tr>
                    <td colspan="3">
                        <button class="button" id="3" onclick="answer(this.id)">${question1.options[2]}</button>
                    </td>
                    <td colspan="3">
                        <button class="button" id="4" onclick="answer(this.id)">${question1.options[3]}</button>
                    </td>
                </tr>
              
            </table>
        `;
        document.getElementById(`question_number`).innerHTML = `Câu ${currentQuestion + 1}:`
        document.getElementById(`desc`).innerHTML = `${question1.question}`
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
        let newSt = new Ratings(info1, infoName1, score);
        listRatings.push(newSt)
        displayRatings()
        gameOver();

    }
}


function displayAnswer() {

    let question2 = replayArr[currentQuestion]
    let color = +question2.correctAnswer;
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
        let correctAnswer = replayArr[currentQuestion].correctAnswer;
        if (id === correctAnswer) {

            displayAnswer();
            audio2.play();
            score += 100;
            document.getElementById('score').innerHTML = `${score} point`;
            count1++;
            document.getElementById(`number`).innerHTML = `Correct answer: ${count1}`;
            setTimeout(function () {

                displayQuestion();

            }, 1500);

        } else {

            displayAnswer();
            audio1.play();
            document.getElementById('score').innerHTML = `${score} point`;

            document.getElementById(`number`).innerHTML = `Correct answer: ${count1}`;

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
    replay();
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
        alert(`Mời đăng nhập`);
        return;

    } else {
        score = 0;
        currentQuestion = 0;
        count1 = 0
        document.getElementById(`number`).innerHTML = `Correct answer: ${count1}`;
        document.getElementById('score').innerHTML = `${score} point`;
        document.getElementById(`starBtn`).innerHTML =
            '<button id="starBtn1" onclick="startGame()">Start</button>';
        document.querySelector(`.restart`).disabled = false;
    }
    document.getElementById(`sign-in`).style.display = `none`;
    document.getElementById(`infoC`).innerHTML = `Lớp: ${info} `;
    document.getElementById(`infoN`).innerHTML = `Tên: ${infoName} `;
    document.getElementById(`info`).style.display = `block`;

}

function resultRatings() {
    let info1 = document.getElementById('infoC').innerText.split(": ")[1];
    let infoName1 = document.getElementById('infoN').innerText.split(": ")[1];
    let newSt = new Ratings(info1, infoName1, score);
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
    document.getElementById(`number`).innerHTML = `Correct answer: ${count1}`;
    document.getElementById('question_number').style.display = 'block';
    document.getElementById('desc').style.display = 'block';
    currentQuestion--;
    document.getElementById(`singOut`).disabled = true;
    document.querySelector(`.time`).style.display = 'block';
    document.getElementById(`quiz`).style.display = `block`;
    replay();
    displayQuestion();
}

