/**
内置对象
学习要点：
Global对象
Math对象
*/

/**
ECMA-262对内置对象的定义是：由ECMAScript实现提供的，不依赖宿主环境的对象，这写对象在ECMASScript执行之前就已经存在了
也就是说，开发人员不比显示地实例化内置对象，因为它们已经实例化了。ECMA-262 只定义了两个内置对象，GLobal和Math。
*/
/**
Global(全局）对象是ECMAScript中一个特别的对象，因为这个对象是不存在的。在ECMAScript中不属于任何其它对象的属性
和方法，都属于它的属性和方法，所以，事实上，并不存在全局变量和全局函数，所有在全局作用域的变量和函数，
都是Global对象的属性和方法

*/

/**
Global对象有些内置的方法和属性
1.URI编码方法URI编码可以对链接进行编码，以便发送给浏览器，他们采用特殊的UTF-8编码体会所有无效的字符，从而让浏览器能够接受和理解
encodeURI(不会对本身属于URI的特殊字符进行编码，例如冒号，正斜杠，问号和@号),encodeURIComponent(会对他发现的任何非标准的字符进行编码)
var box = '//Lee韩';
alert(encodeURI(box));  //只编码了中文
alert(encodeURIComponent(box));  //特殊字符和中文编码了
注意：
由于encodeURL没encodeURIComponent编码彻底，一般来说encodeURIComponent使用更频繁

与之对应的decodeURI,decodeURLComponent用来进行解码
var str = 'hello//韩';
alert(decodeURI(encodeURI(str)));
alert(decodeURIComponent(encodeURIComponent(str)));
alert(decodeURIComponent(encodeURI(str)));
注意：两个被废弃的方法escape,unescape
*/

/**
2.eval()方法：
eval方法主要承担一个字符串解析器的作用，他只接受一个参数，而这个参数就是要执行的JavaScript代码字符

eval('var a = 10');
eval('alert(a)');
eval('function b(){alert( 123)}');
eval('b()');
注意：eval 功能非常强大，但也很危险，会导致程序安全性问题，比如代码注入等等
*/

/**
Global对象属性
Global对象还包含了一些属性：undefined,NaN,Object,Array,Function等
alert(Array);
*/

/**
Math对象
ECMAScript 还为保存数学公式和信息提供了一个对象，即Math对象。与我们JavaScript直接编写计算功能
相比，Math对象提供的计算功能执行起来要快的多
*/

/**
Math对象有很多方法和属性，注意用时查看手册，这里只列出常用的
1.min(),max()
alert(Math.min(2,8,5,9,3,86,65,5));
alert(Math.max(4,5,87,5,5,8,54,2,88,1));
2.舍入方法
Math.ceil(),floor,round,
var num = 23.32658;
alert(Math.ceil(num));
alert(Math.floor(num));
alert(Math.round(num));
3.random
Math.random() 方法返回介于0到1之间的的随机数，不包括0，和 11.如果想大于这个范围可以套用一下公式
num = Math.random() * 总数 + 第一个值
alert(Math.floor(Math.random()* 10 + 1)); //随机产生1-10之间的任意数

下面一个封装方法
*/

function selectFrom(lower,upper){
var sum = upper - lower + 1;
 return Math.floor(Math.random()* sum + lower);
}

for(var i=0; i<10;i++){
document.write(selectFrom(5,10));
document.write('<br/>');
}





