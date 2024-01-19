/* BÀI TẬP JS 17/01 */

//Bài 1: Switch case 
var x = 2;
switch(x){
    case 0:
        console.log("Thứ 2");
        break;
      case 1:
        console.log("Thứ 3");
        break;
      case 2:
        console.log("Thứ 4");
        break;
      case 3:
        console.log("Thứ 5");
        break;
      case 4:
        console.log("Thứ 6");
        break;
      case 5:
        console.log("Thứ 7");
        break;
      case 6:
        console.log("Chủ nhật");
        break;
}

// Bài 2: Switch case arrays
var x = 5;
var y = ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"];
switch(5){
    case 0:
        console.log(y[x - 5]);
        break;
      case 1:
        console.log(y[x - 4]);
        break;
      case 2:
        console.log(y[x - 3]);
        break;
      case 3:
        console.log(y[x - 2]);
        break;
      case 4:
        console.log(y[x - 1]);
        break;
      case 5:
        console.log(y[x + 0]);
        break;
      case 6:
        console.log(y[x + 1]);
        break;
}

//Bài 3: Hàm Ktra số nguyên tố
function kiem_tra_snt(x)
{
    var ktr = true;
    if (x < 2){
        ktr = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < x-1; i++)
        {
            if (x % i == 0){
                ktr = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (ktr == true){
        console.log(x + " là số nguyên tố");
    }
    else{
        console.log(x + " không phải là số nguyên tố ");
    }
}
kiem_tra_snt(3)

//Bài 4: Hiển thị ma trận
var a = [[1, 1, 0], [1, 0, 1],[0, 1, 1]];
for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        console.log(a[i][j]+ " ");
        
    }
}

//Bài 5: Kiểm tra regex email password
var email = 'anhpo1m@gmail.com';
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if(emailRegex.test(email)) {
  console.log('Email hợp lệ');
  } 
else{
    console.log('Email không hợp lệ')
  }

var pass = '@$@!$!'
var passwordRegex = /^[A-Za-z]\w{7,14}$/;
if(passwordRegex.test(pass)) {
  console.log('Password hợp lệ');
  } 
else{
    console.log('Password không hợp lệ')
  }

//Bài 6: Đổi email, pass thành function
function Email_hople(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
 }
 
 function Password_hople(pass) {
  const passwordRegex = /^[A-Za-z]\w{7,14}$/;
  return passwordRegex.test(pass);
 }
 
var email = 'anhpo1m@gmail.com';
var pass = 'Anhnam1m';

if(Email_hople(email)) {
  console.log('Email hợp lệ');
  } 
  else{
    console.log('Email không hợp lệ')
  }

if(Password_hople(pass)) {
  console.log('Password hợp lệ');
  } 
  else{
    console.log('Password không hợp lệ')
  }

//Bài 7
function checkInput() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!Email_hople(email)) {
      alert('Email không hợp lệ')
  }

  if (!Password_hople(password)) {
    
    alert('Password không hợp lệ')
 
  }
}

//Bài 8: Object
var user = {
  "email" : "nam@gmail.com",
  "password" : "Anh123mn",
  
  "name": "Nam",
  "Properties": {
    "age": 20,
    "height": "175cm",
    "relationship": "single"
  }
}

function checkInput() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!Email_hople(email)) {
      alert('Email không hợp lệ')
  }

  if (!Password_hople(password)) {
    
    alert('Password không hợp lệ')
  }

  if(email === user.email && password === user.password){
    console.log(user.name);
      alert("Tên người dùng: " + user.name );
      console.log(o["name"]);
      console.log(o.Properties.relationship);
      
    }else{
      alert("Đăng nhập thất bại");
    }
}


