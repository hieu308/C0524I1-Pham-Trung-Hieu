function doSth() {
    let amount = document.getElementById("number").value;
   let from = document.getElementById("choice").value;
   let to = document.getElementById("pick").value;
   let result;
  if(from === "vn" && to === "us" && amount !== "" ){
      result = amount/24000
      document.getElementById("ab").innerHTML=`${result.toFixed(2)} USD`;
  }else if(from === "us" && to === "vn" && amount !== "" ){
      result = amount * 24000
      document.getElementById("ab").innerHTML=`${result} VND`;
  }
  else if(from === "vn" && to === "vn" && amount !== "" ){
      result = amount
      document.getElementById("ab").innerHTML=`${result} VND`;

  }
  else if(from === "us" && to === "us" && amount !== ""){
      result = amount
      document.getElementById("ab").innerHTML=`${result} USD`;

  } else if(amount === ""){
      document.getElementById("ab").innerHTML=`Vui lòng nhập số tiền cần chuyển đổi`;
  }


}