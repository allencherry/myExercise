/**
学习要点：
1.函数的声明方式
2.作为值的函数
3.函数的内部属性
4.函数的属性和方法

在Ecmascript中，Function（函数）类型实际上是对象，可以用typeof来验证，每个函数都是Function类型的实例，
而且都与其它引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上是一个指向函数对象的指
注意：简单的说一个函数其实就是Function的一个实例
*/

//函数的声明方式
/**普通函数声明
function box(num1,num2){
 return num1 + num2;
}*/
/**
使用变量初始化函数
var box = function(num1,num2){
return num1 + num2;
}
*/

/**
3.使用Function构造函数
var box = new Function('num1','num2','return num1 + num2');
共三种创建函数的方法
第三种方式我们不推荐，因为这种语法会导致解析两次代码（第一次解析常规
ECMAScript 代码，第二次是解析传入构造函数中的字符串），从而影响性能。但我们可以通
过这种语法来理解"函数是对象，函数名是指针"的概念。
*/

/**
ECMAScript 中的函数名本身就是变量，所以函数也可以作为值来使用。也就是说，不仅可以像传递参数一样把一个函数传递给另一个
函数，而且可以将一个函数作为另一个函数的结果返回。
*/

/**
3.函数内部属性：
在函数内部，有两个特殊的对象：argument和 this、arguments是一个类数组对象，包含着传人函数中的所有参数，主要用途是保存函数参数，但这个对象
还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
下面是一个递归函数：递归特点最先执行最后执行结束
function a(num){
if(num <= 1){

}else{
num * arguments.callee(num - 1);
alert(num);
}
}

a(9);
实验可知函数内部可以用arguments.callee属性作为函数名来调用自身

*/

/**
函数内部另一个特殊对象是this，我老高不清楚，其行为与java和C#中的this大致相似。简单说就是
提供操作作用域的那个对象。全局作用域中调用函数时，this指对 是window
window.color= 'yellow';
alert(this.color);

*/
/**
arguemnts,与this为函数的内置对象函数既然是对象当然也有属性和方法
*/
/**函数的两个属性length,prototype length 属性表示希望接收的命名参数的个数
function box(name,age){
alert(name + age);
}
alert(box.length);

var color = 'red';

var box = { 
	color:'蓝色的'
};



//sayColor();

//sayColor.call(this);

//sayColor.call(window);

//sayColor.call(box);
*/




