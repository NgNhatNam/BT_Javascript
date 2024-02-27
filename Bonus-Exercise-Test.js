// 26/2/2024

// Toán tử ba ngôi
const x = 30;
const ketqua = (x < 100) ? console.log("Nhỏ hơn 100") : console.log("Lớn hơn 100");

// Shorthand Evaluated
const bien1 = 'Hello world!';

const bien2 = bien1 || '';
console.log(bien2);

// Variable declaration – If Comparison
var x1, y1 = 10;
if (y1) {
    x1 = y1 + 5;
    } else {
        x1 = y1 - 5 ;
}
console.log(x1);

// For loop – For loop with decimal base
var a = [1,2,3,4];
for (let i in a){
    console.log(a[i]);
    }

for (let i = 0; i < 1e1; i++){
    console.log(i);
}

// Object property
const x2 = 1, y2 = 2;
const obj = { x2,y2 }; 
console.log(obj);

// Rút gọn định nghĩa function
helloword = name => console.log('Hello', name);
helloword('Nam');

setTimeout(() => console.log('Loaded'), 2000);

list = [1,2,3,4,5];
list.forEach(item => console.log(item));

// Set default value for parameter in function

getValue = (a,b = 10, c =5) => (a * b + c);
console.log(getValue(8));       //kq = 85
console.log(getValue(8,9));     //kq = 77
console.log(getValue(8,9,2));   //kq = 74

// Template list
const first = 'Nguyen', last = 'Nhat Nam';
const chaomung = `Chao mung ${first} ${last} .`;
console.log(chaomung);

const lorem = `Lorem ipsum dolor sit amet, consectet
adipisicing elit, sed do e
iusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nost
rud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.`;
console.log(lorem);

// Destructuring Assignment
import {action, service} from 'lib';

const{ form, errors, entity, controller, component} = this.props;

// Spead Operator

const odd = [1,3,5];
const nums = [2,4,6, ...odd];
console.log(nums);

const arr = [1,2,3,4,5,6];
const arr2 = [...arr];
console.log(arr2);

const nums2 = [0, ...arr2,7,8];
console.log(nums2);


// Constraint Param
thamso = () => { throw new Error('Thiếu tham số!');}
sample = (so = thamso()) => so

console.log(sample(10)); // Kq 10
console.log(sample());   // Kq Error Thiếu tham số!

// find() in arrays
const employees = [
    { name: 'Emp A', age: 30 },
    { name: 'Emp B', age: 35 },
    { name: 'Emp C', age: 40 }
];

const name = 'Emp A'

emp = employees.find(item => item.name === name)
console.log(emp);

// Object[key]
const rule = {
    firstName: {required: true},
    lastName : {required: true},
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]){
                return false;
            }  
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Duy'})); //false
console.log(validate(rule, {firstName:'Duy', lastName:'Minh'})); //true

// Bitwise NOT double
Math.floor(6.9) === 6
~~6.9 === 6