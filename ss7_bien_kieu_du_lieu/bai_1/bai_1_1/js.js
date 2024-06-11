let a = parseInt(prompt("Nhập điểm môn vật ly:"))
let b = parseInt(prompt("Nhập điểm môn hoá học:"))
let c = parseInt(prompt("Nhập điểm môn sinh học:"))

while(
    !Number.isInteger(a) || a < 0){
        a = parseInt(prompt("Nhập điểm môn vật ly 2 3:"))
    }



let tb = (a + b + c) / 3;
let sum = a + b + c;
alert(`tổng là :${sum} điểm trung bình là: ${tb}`);
