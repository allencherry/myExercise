//this 代码调用该函数操作的对象本身

/**ECMAScript 有两种开发模式：1.函数式(过程化)，2.面向对象(OOP)。面向对象的语言有一个标志，
那就是类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。但是，ECMAScript没有类的
概念，因此它的对象也与基于类的语言的对象有所不同。
//创建一个对象
var box = new Object();
box.name = 'allen';
box.age = 25;
box.run = function(){
return this.name + this.age + 'sucees';
};

//把上面对象的引用
var box1 = box;
box1.name = 'Jack';
//用box.run()发现name 也改变了
//box1 与box的name都会改变，因为他们只创建了一个对象。两个引用操作的为同一个对象
var box2 = new Object();
box2.name = 'cherry'
box2.age = 24;
box2.run = function(){
return this.name + this.age + 'succes';
}

*/


//alert(box.run());
//alert(box2.run());

//结果各自独立，创建了两个对象各自操作自己的对象。

/**
工厂模式的方法
为了解决多个类似对象声明问题，我们可以使用一种叫做工厂模式的方法，
这种方法就是为了解决实例化对象产生大量重复的问题。
function createObject(name,age){
var obj = new Object();
obj.name = name;
obj.age = age;
obj.run = function(){
return this.name + this.age + 'succes';
}
return obj;
}

var a = createObject('allen','24');
var b = createObject('cherry','23');
*/



//alert(a.run());
//alert(b.run());

//这样我们就创建了两个各自独立的对象

/**
工厂模式解决了重复代码重复的问题，但还有一个问题，识别问题，因为根本无法搞清楚它们是哪个对象
的实例。

alert(typeof a);
alert(b instanceof Object);
*/

/**
ECMAScript中可以采用构造函数(构造方法)来创建特定的对象。类型同为object
function Person(name,age){
this.name = name;
this.age = age;
this.run = function(){
 return this.name + this.age + 'succes';
};
}

var d = new Person('allen',24);
var e = new Person('cherry',23);
*/



//alert(d.run());
//alert(e.run());

//这样就像java面向对象语言那样，清楚的看出他们同属于Person

/**
使用构造函数的方法，解决了重复实例化的问题，有解决了对象识别的问题。
构造函数方法与工厂模式方法的3个区别：
1.构造函数方法没有显示的创建对象(new Object());
2.直接将属性和方法赋值给this对象
3.没有return语句

构造函数方法需要遵守一些规范：
1.函数名和实例化构造名相同且大写，(这点类似与java，要严格遵守该规范)；
2.通过构造函数创建对象，必须使用new运算符。

使用构造函数创建对象的隐式操作
1.当使用了构造函数，并且new构造函数(),那么就后台执行了 new Object();
2.构造函数中的this就转换为了new出来到的对象。
3.执行构造函数内的代码。
4.返回新对象像(后台直接返回).

到这里我们可以清楚的认识this的使用了
this其实就是代表当前作用域对象的引用。如果在全局范围this就代表window对象。如果在
构造函数体内，就代表当前的构造函数所声明的对象。(这里可以联想java的this)


区分构造函数与普通函数，它们的唯一区别就是调用方式不同，用new运算符来调用的为构造函数
，否则就是普通函数、如下：
var f = new Person('allencherry',24);
f.run(); //构造函数调用

Person('allen','24); //普通函数调用

var o = new Object();

Person.call(o,'cherry',23);
o.run();   //用call指定作用域调用

//下面代码解决了一个问题
function Box(name, age) {
this.name = name;
this.age = age;
this.run = run;
}
function run() { //通过外面调用，保证引用地址一致
return this.name + this.age + '运行中...';
}

var box3 = new Box('Lee', 100); //传递一致
var box4 = new Box('Lee', 100); //同上
alert(box3.name == box4.name); //true，属性的值相等
alert(box3.run == box4.run); //false，方法其实也是一种引用地址
alert(box3.run() == box4.run()); //true，方法的值相等，因为传参一致


虽然使用了全局函数run()来解决了保证引用地址一致问题，但这种方式又带来了
一个新的问题，全局中的this在对象调用的时候是Box本身，而当作普通函数调用的时候
this又代表window
*/

/**
原型：

prototype(原型)属性，这个属性是一个对象，它的用途是包含可以由特定类型的所有实例共享的
属性和方法。原型属性其实就是构造函数的一个索引，它的值就是构造函数本身利用它
可以修改构造函数从而实现共享
*/


/**

function Proto(name,age,sex){
 this.name = name;
 this.age = age;
 Proto.prototype = sex;
 this.run = function(){

return this.name + this.age + 'succes';
 }
}

var h = new Proto('allen',25,'男');

alert(Proto.prototype.isPrototypeOf(h));

判断一个对象是否指向了该构造函数的原型对象，可以使用isPrototypeOf()方法来测试

原型模式的执行流程：
1.先查找构造函数实例里的属性或方法，如果有，立刻返回。
2.如果构造函数实例里没有，则去它的原型对象里查找，如果有立刻返回。

判断属性是在实例中还是在原型中
hasOweProperty('name'),

function Proto(name,age,sex){
 this.name = name;
 this.age = age;
 Proto.prototype = sex;
 this.run = function(){

return this.name + this.age + 'succes';
 }
}

var h = new Proto('allen',25,'男');

alert(h.hasOwnProperty('name'));
alert('name' in h);

in操作符可以判断属性是否在对象中无论是实例还是原型中，我们可以通过hsaOwenProperty()与in操作符的
结合来判断原型中是否存在该属性。

function isProperty(object.property){
return !object.hasOwnProperty(property) && (property in object);
}
*/

/**
为了让属性和方法更好的体现封装的效果，并且减少不必要的输入，原型的创建可以使用字面量的方式。
function Box(){};
Box.prototype = {
name:'allen',
	age:22,
	run:function(){
return this.name + this.age + 'success';
}
}
*/

/**
原型模式创建也有自己的缺点，他省略了构造函数传参初始化这一过程，带来的缺点就是初始化的值
都是一致。而原型的最大缺点就是优点，但如果属性包含引用类型，就存在一定的问题：

总结对象不能改变原型的值，要改变必须通过构造函数

*/

/**
原型模式，不管你是否调用了原型中的共享方法，它都会初始化原型中的方法，并且声明
一个对象时，构造函数+ 原型让人感到怪异，最好就是把构造函数和原型封装在一起。为了解决这个问题，我们可以使用动态原型模式
function Box(name,age){
this.name = name;
this.age = age;

if(typeof this.run != 'function'){
	 alert("first execute");
 Box.prototype.run = function(){
	

return this.name + this.age + 'success';
 }
}
}

var m = new Box('allen',10);
alert(m.run());

var n = new Box('cherry',10);

alert(n.run());

由于原型共享所以不必要每次都初始化

*/

/**
创建对象的方法总结
1.寄生构造函数(可用this关键字)

2.稳妥构造函数(与寄生类似，不可使用this，new)

3.构造函数

4.原型

5.构造函数 + 原型

6.动态原型模式

*/

/**
三。继承：
ECMAScript只支持一种方式继承，不支持接口实现，ECMAScript的继承依赖原型。

function Box(){
this.name = 'Lee';
}

function Desk(){
this.age = 100;
}

Desk.prototype = new Box();

var desk = new Desk();

继承方式：
1.原型继承，

2.组合继承(原型链 + 借用构造函数的模式)目的是解决无法为超类传参
*/

function Box(age) {
this.name = ['Lee', 'Jack', 'Hello']
this.age = age;
}

Box.prototype.run = function(){
  return this.name + this.age;
}


function Desk(age){
Box.call(this,age);
}

Desk.prototype = new Box();

var desk = new Desk(100);

alert(desk.run());










