/*
alert(+prompt('num1','2') + +prompt('num2',4));*/

/*
function bine(num) {
    return (Math.pow((1+Math.sqrt(5))/2, num)/Math.sqrt(5));
}
alert(bine(77));*/


/*
function max(m) {
    return Math.random()*m;
}

alert(Math.floor(max(6)));*/

/*
function minmax(min, max) {
    return Math.round(Math.random()*(max-min+1) + min - 0.5);
}

alert(minmax(2, 4));*/

/*
function ucFirst(str) {
    var res = str.charAt(0).toUpperCase() + str.slice(1);
    alert(res);
}

ucFirst(prompt(''));*/

/*function checkSpam(str) {
    if (~str.toLowerCase().indexOf('xxx') || ~str.toLowerCase().indexOf('viagra')) {
        return true;
    }
    return false;
}

alert(checkSpam(prompt('')));*/


/*
function truncate(str, maxLength) {
    var buf;
    (maxLength==2) ? buf ='...' :
    (maxLength<str.length) ? buf=str.slice(0, maxLength-3) + '...' : buf=str;
    return buf;

}

alert(truncate(prompt(''), +prompt('')));
*/

/*
var extrackCurentlyValue = function(str){
    alert(+str.slice(1));
}

extrackCurentlyValue(prompt('$120'));*/


/*user = new Object();
user.name = 'Vasya';
user.surname = 'Petrov';
user.name='Sergey';
delete user.name;*/

/*
function isEmpty(obj) {
    /!* ваш код *!/
    var count=0;
    for (var key in obj){
        count++;
    }
    if (count!=0){
        return false;
    }
    return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false*/

/*
"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var sumSal=function (obj) {
    var sum=0;
    for (var key in obj){
        sum+=salaries[key];
    }
    return sum;
}
//... ваш код выведет 650

alert(sumSal(salaries));*/

/*
"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var maxSal=function (obj) {
    var max = 0;
    var maxName = "";
    for (var name in salaries) {
        if (max < salaries[name]) {
            max = salaries[name];
            maxName = name;
        }
    }
    return maxName;
}

alert(maxSal(salaries));*/

/*

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

var multiplyNumeric = function(obj){
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key]*=2;}
    }
}
multiplyNumeric(menu);

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function show(obj) {
    for (var name in obj){
        alert(obj[name]);
    }
}

show(menu);*/

/*
var styles= new Array('jazz', 'blues');
alert(styles);
styles.push('rokn\'roll' );alert(styles);
styles[styles.length-2] = 'classic';alert(styles);
styles.shift();alert(styles);
styles.unshift('rap', 'raggy');alert(styles);*/

/*function rand(min, max) {
    return min+Math.floor(Math.random()* (max+1-min));
}

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

alert(arr[rand(0, arr.length-1)]);*/


/*
function readNum() {
    var arr = new Array();
    while (true) {
        var buf = prompt('num','0');
        if (buf == '' ||buf==null || isNaN(buf)) {
            break;
        }
        arr.push(+buf);
    }
    var sumArr=0;
    for (var i = 0; i<arr.length; i++){
        sumArr+=arr[i];
    }
    return sumArr;

}

alert(readNum());*/


/*
arr = ["test", 2, 1.5, false];


function find(arr, val) {
    for (var i = 0; i<arr.length;i++){
        if (arr[i]===val) return i
    }
    return -1;
}


alert(find(arr, "test")); // 0
alert(find(arr, 2)); // 1
alert(find(arr, 1.5)); // 2

alert(find(arr, 0)); // -1
*/

/*
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, min, max) {
    var buf = new Array();
    for (var i =0; i< arr.length; i++){
        if (arr[i]>=min && arr[i]<=max) buf.push(arr[i]);
    }
    return buf;
}

var new_ = filterRange(arr,3,5);
alert ('buf');
for(var i = 0; i< new_.length; i++){
    alert(new_[i]);
}

alert('old');
for(var i = 0; i< arr.length; i++){
    alert(arr[i]);
}*/



/*

function getMaxSubSum(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}*/


/*
function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me*/


/*
function camelize(str) {
    var arr=str.split('-');
    for (var i=1;i<arr.length; i++){
        arr[i].charAt(0).toUpperCase();
    }
    return arr.join('');
}*/

/*
function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}
alert(camelize('list-style-image'));

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';*/


/*
var obj = {
    className: 'open menu menu'
};

function removeClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
    for (var i=0; i<classes.length; i++){
        if (classes[i]==cls) {
            classes.splice(i,1);
            i--;
        }
    }
    obj.className= classes.join(' ');
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
alert(obj.className) // open*/


/*
arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, min, max) {
    for (var i=0; i<arr.length; i++){
        if (arr[i]<=min || arr[i]>=max) {
            arr.splice(i,1);
        }
    }
}

filterRangeInPlace(arr, 1, 4);

alert(arr);*/


/*
var arr = [5, 2, 1, -10, 8];

function revSort(a,b) {
    return b-a;
}

arr.sort(revSort);

alert(arr);*/

/*
var arr = ["HTML", "JavaScript", "CSS"];

function copyArr(arr) {
    var buf= new Array(arr.length);
    for(var i = 0; i<arr.length; i++){
        buf[i]=arr[i];
    }
    return buf;
}

var buf=copyArr(arr).sort();

alert(buf);
alert(arr);*/

/*

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function compare(a, b) {
    return a.age-b.age ;
}

people.sort(compare);

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6
*/

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/*
function printList(list) {
    var tmp = list;

    while (tmp) {
        alert( tmp.value );
        tmp = tmp.next;
    }

}

printList(list);*/


/*
var printList = function me(list){
    alert(list.value);
    if (list.next) {
        me(list.next)
    }
}

var printRecList = function me(list) {
    /!*if (list.next){
        me(list.next);
    }
    alert(list.value);*!/
    var arr=[];
    var tmp=list;

    while (tmp){
        arr.push(tmp.value);
        tmp=tmp.next;
    }
    for (var i = arr.length-1;i>=0;i--){
        alert(arr[i]);
    }
}

printList(list);
printRecList(list);*/
/*

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"


function aclean(arr) {
    var obj={};
    for (var i =0; i<arr.length; i++){
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] =arr[i];
    }
    var result = [];

    // теперь в obj находится для каждого ключа ровно одно значение
    for (var key in obj) result.push(obj[key]);

    return result;

}*/

/*

function unique(arr) {
    var obj={}
    for (var i = 0; i<arr.length; i++){
        var str=arr[i];
        obj[str]=true;
    }
    return Object.keys(obj);
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()*/

/*

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (t) { return t.length })

alert( arrLength ); // 4,5,2,5*/


/*
arr = [ 1, 2, 3, 4, 5 ];
getSums( arr );

function getSums(arr) {
    var result=[];
    if (!arr.length) return result;
    var totalSum=arr.reduce(function (sum,item) {
        result.push(sum);
        return sum+item;
    });
    result.push(totalSum);
    return result;
}*/


/*
function f(x) {
    // ..ваш код..
    // выведите 1, если первый аргумент есть, и 0 - если нет

    alert(arguments.length ? 1 : 0);
}

f(undefined); // 1
f(); // 0*/

/*

var sum=function () {
    var res=0;
    for (var i = 0; i<arguments.length;i++){
        res+=arguments[i];
    }
    return res;
}

alert(sum(5, 42, 10));*/

/*

var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday:'short'}) ); // 'Пт'*/


/*
function sum(a) {
    return function (b) {
        return a+b;
    }

    }

    alert(sum(1)(76));*/


/*
function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };

    buffer.clear = function() {
        text = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""*/


/*

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
});
*/
/*


function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (func(val)) {
            result.push(val);
        }
    }

    return result;
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function (x) {
        return ~arr.indexOf(x);
    }
}

/!* .. ваш код для filter, inBetween, inArray *!/
var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2*/



/*
function Calc() {
    this.read = function() {
       this.a = +prompt('a', '0');
       this.b = +prompt('b', '');
    };
    this.sum = function() {
        return this.a+this.b;
    };

    this.mul = function() {
        return this.a*this.b;
    }

}


var calculator = new Calc();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/



/*
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
         this.step--;
         return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
};

ladder.up().up().down().up().down().showStep(); // 1*/

/*function sum(a) {
    var s = a;
    console.log('sum');

    function f(b) {
        console.log('f');
        s += b;
        return f;
    }
    f.toString = function () {
        return s;
    }
    return f;
}

alert(sum(2)(3)(5)(3));*/
/*
function Accumulator(startingValue) {
    this.value=startingValue;
    this.read = function (buf) {
        this.value+=+prompt('adding', '');
    }
    return this;
}


var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение*/

/*

function Calculator() {
    var meth = {
    '+': function (a, b) {
        return (+arr[0]) + (+arr[2]);
    },
    '-':function (a, b) {
        return (+arr[0]) - (+arr[2]);
    }
}
    this.calculate = function (str) {
        this.arr = str.split(' ');
        return meth[this.arr[1]](this.arr[0], this.arr[2]);

    };
    this.addMethod = function (oper, func) {
        meth[oper] = func;
    }
}


var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 * 3");
alert( result ); // 8

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10*/
/*

function User(fullName){
   this.fullName=fullName;
   Object.defineProperties(this,{
       firstName: {
           get:function () {
               return this.fullName.split(' ')[0];
           },
           set:function (newFirstName) {
               this.fullName= newFirstName + " " + this.lastName;
           }
       },
       lastName:{
           get:function () {
               return this.fullName.split(' ')[1];
           },
           set:function (newLastName) {
               this.fullName=this.firstName+ ' '+ newLastName;
           }
       }
   } );

}



var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров*/


/*
function Article() {
    this.created = new Date();
    Article.count++;
    Article.lastDate=this.created;
}

Article.count=0;
Article.lastDate = null;
Article.showStats = function () {
alert('Всего : ' + Article.count + ', Последняя: ' + Article.lastDate.getHours() + ':' + Article.lastDate.getMinutes()+ ':' + Article.lastDate.getSeconds());
}


new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)*/

/*

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)


/!*
function sumArgs() {
   arguments.reduce = [].reduce;
   return arguments.reduce(function(a, b) {
       return a + b;
   });
}
*!/


function sumArgs() {
    return [].reduce.call(arguments, function (a, b) {
        return a+b;
    })
}
alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива*/

/*

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 5, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}*/


/*
"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        ask("Ваш пароль?", this.password,
                this.loginDone.bind(this, true),
                this.loginDone.bind(this, false)
        );
    }
};

var vasya = user;
user = null;
vasya.checkPassword();*/


/*
function work(a) {
    /!* ... *!/ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }
    /!* ваш код *!/
return wrapper
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}

*/


/*function work(a, b) {
    alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
    return wrapper;
    /!* ваш код *!/
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}*/
/*

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение*/


/*

function formatDate(date) {
    if (typeof date == 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date * 1000);
    } else if (typeof date == 'string') {
        // строка в стандартном формате автоматически будет разобрана в дату
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }
    // преобразования для поддержки полиморфизма завершены,
    // теперь мы работаем с датой (форматируем её)

    return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});

}

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14*/


/*
var leader = {
    name: "Василий Иванович",
    age: 35
};

Leader=JSON.stringify(leader, "", 4);
alert(Leader);

var leadObj=JSON.parse(Leader);



var leader = {
    name: "Василий Иванович",
    funcName: "leader"
};

var soldier = {
    name: "Петька",
    funcName: "soldier"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

/*copyObj= function (obj) {
    var coppied = new Object();
        coppied.name=obj.name;
    ('soldier' in obj) ? coppied.soldier=
    return coppied;
}

var crossLinkDeleter=function (obj1, obj2) {
    var coppied1 = {};
    var coppied2 = {};
    var res = [];
    for (var prop in obj1) {
        if (obj1[prop] == obj2) {
            coppied1[prop]=obj2.funcName;
        } else{
            coppied1[prop]=obj1[prop];
        }
    }
    for (var prop in obj2){
        if (obj2[prop] == obj1) {
            coppied2[prop]=obj1.funcName;
        } else{
            coppied2[prop]=obj2[prop];
        }
    }
    res.push(coppied1);
    res.push(coppied2);
    return res;
}
var mas = crossLinkDeleter(leader,soldier);

var team = [mas[0], mas[1]];
alert(JSON.stringify(team,"",4));



let user = {name : "Dima", isAdmin: true}

let clone = Object.assign({}, user)
 alert(JSON.stringify(clone));
*/

