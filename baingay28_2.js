// 28/2/2024
checksole = num => {const check = (num % 2 != 0) ? console.log(`${num} là só lẻ`) : console.log(`${num} là só chẵn`);
}
checksole(3);


const isOdd = num => { return (num % 2 != 0) ? console.log(`${num} là só lẻ`) : console.log(`${num} là só chẵn`);
}
isOdd(3);

var sach = [
  {
    tacgia : 'Nguyen Nam',
    tieuDe : 'To Kill a ...',
    namXuatBan: 2020,
    trangthai: true
  },
  {
    tacgia : 'Nguyen Vinh',
    tieuDe : 'How to use ...',
    namXuatBan: 2010,
    trangthai: false
  }
]

for(let i in sach){
    console.log(sach[i].tacgia);
    console.log(sach[i].namXuatBan);
    console.log(sach[i].tieuDe);
    console.log(sach[i].trangthai);
}

console.log(sach[0].tacgia,sach[1].tacgia );
console.log(sach[1]);

// bai 1 viết hàm nhập đầu vào là 1 mảng số, xuất ra 1 số lớn nhất và 1 số bé nhất theo thứ tự như vậy
function ktraln(arr) {
  var min = arr[0];
  var max = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [max,min];
}
console.log(ktraln([-2,4,5,6]));

// bai 2 tìm chữ dài nhất trong một đoạn văn
function timchudeandin(str) {
    let result = '';
    for (let i = 0; i <= str.length; i++){
        let temp = '';
        while (i < str.length && str[i] != ' ') {
            temp += str[i];
            i++;
        }
        if (temp.length > result.length) {
            result = temp;
        }
    }
   return result;
}
console.log(timchudeandin('Tôi yêu nhiều em'));

//bài 3
const plus = (x,y) =>{
    return x + y;
}
console.log(plus(1));
console.log(plus(1,2));
console.log(plus(1,2,3));


function plusAll(){
    var res = 0;
    for(var i in arguments){
        res += arguments[i];
    }return res
}
console.log(plusAll(1,2,3));

function func1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1,2,3);

//----------------------------------------------------------------
var person1 = {name: 'John', age:12};
var person2 = {name: 'hn', age:13};

var sayHello = function(){alert('Hello, '+ this.name);};
var sayGoodbye = function(){alert('Goodbye, '+ this.name);};
sayHello.call(person1);
sayGoodbye.call(person2);