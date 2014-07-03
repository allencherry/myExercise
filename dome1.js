//基本包装类型
/**
学习要点：
1.基本包装类型的概述
2.Boolen类型
3.String类型
*/
/**
为了便于操作基本类型，ECMAScript提供了3个特殊的引用类型，Boolen,Number,String.这些类型与其它引用类型
相似，但同时也具有各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象
从而能够用一些方法来操作这些数据。


var box = 'Hello JavaScript';
var box1 = box.substring(2);
alert(box1);
变量box 是一个字符串类型，而box.substring
alert('Mr lee'.substring(2));

但是要注意一定字面量是无法添加属性的。我们可以这样使用
var str = new String('Hello JavaScript');
str.name = 'allen';
str.age = function(a){
alert(a);
}

alert(str.name);
str.age(6);

在使用new运算符创建以上三种类型对象时，可以自己添加属性和方法，但我们建议不要这样使用，因为这样会导致根本分不清楚是基本类型还是引用类型
*/
/**
Number类型有一些静态属性和方法
属性:MAX_VALUE MIN_VALUE NAN NEGATIV_INFINITY, POSITIVE_INFINITY prototype
方法：toString,toLOcaleString,toFixed(将数字保留小数点后指定位数并转化为字符串)
toExponential(将数字以指定形式表示，保留小数点后指定位数并转化为字符串)
toPrecision(指数形式或点形式表述数，保留小数点后指定位数并转化为字符串)

var num = 2014.3327;
alert(num.toString());  //可以传参数指定转换进制
alert(num.toLocaleString());
alert(num.toFixed(2));
alert(num.toExponential());
alert(num.toPrecision(3));
*/

/**
String 类型
String类型包含了三个属性和大量的可用内置方法
属性：
length,constructor,prototype
方法：
通用方法返回自身基本值：alueOf，toLoaleString,toString
字符:charAt(n),charCodeAt(n) 【一Unicode编码形式返回指定索引位置字符】
var str = 'allen.han';
alert(str.charAt(1));
alert(str.charCodeAt(1));
alert(str[1]);
box[1]在IE 浏览器会显示undefined，所以使用时要慎重。

字符串操作：
concat，slice，substring,substr
var str = 'allen.han';
alert(str.concat('is good','software engineer'));
alert(str.slice(3));
alert(str.substring(3,6));
alert(str.substr(3,6));

var box = 'Mr.Lee';
alert(box.slice(-3)); //Lee，6+(-3)=3 位开始
alert(box.substring(-3)); //Mr.Lee 负数返回全部
alert(box.substr(-3)); //Lee，6+(-3)=3 位开始
var box = 'Mr.Lee';
alert(box.slice(3, -1)); //Le 6+(-1)=5, (3,5)
alert(box.substring(3, -1)); //Mr. 第二参为负，直接转0，
//并且方法会把较小的数字提前，(0,3)
alert(box.substr(3, -1)); //'' 第二参数为负，直接转0 ，(3,0)
字符串位置方法：indexOf(str,n);
lastIndexOf(str,n);
var str = 'allen is hungry allen want eat';
alert(str.indexOf('allen'));
alert(str.indexOf('allen',7));
alert(str.lastIndexOf('allen'));
alert(str.lastIndexOf('allen',7));
*/



/**
大小写转换方法：
toLowerCase(str),toUpperCase,
toLocalLowerCase
toLOcaleupperCase
var str = 'hello allen';
var str1 =  'HELLO ALLEN';
alert(str.toUpperCase());
alert(str1.toLowerCase());
alert(str.toLocaleUpperCase());
alert(str.toLocaleLowerCase());
*/

/**
字符串模式匹配
match(pattern),replace(pattern,replecement),search(pattern),split(pattern)
var box = 'Mr.Lee is L';
alert(box.match('L'));
alert(box.search('L'));
alert(box.replace('L','Q'));
alert(box.split(''));
*/

/**
其它方法
fromCharCode,
localeCompare,
var str = 'Lee';
alert(String.fromCharCode(76));
alert(str.localeCompare('apple'));
alert(str.localeCompare('Lee'));
alert(str.localeCompare('zoo'));
localeCompare(str1,str2)方法详解：比较两个字符串并返回以下值中的一个；
1.如果字符串在字母表中应该排在字符串参数之前，则返回一个负数。(多数-1)
2.如果字符串等于字符串参数，则返回0。
3.如果字符串在自附表中应该排在字符串参数之后，则返回一个正数。(多数1)
*/










