/**regular expression 是描述字符模式的对象。EcMaScript的RegExp类表示正则表达式，而String和RegExpd都定义了使用正则表达式进行强大的模式匹配和文本检索与替换的函数。
创建正则表达式：new 与字面量*/
//var a = new RegExp('box');
//var b = new RegExp('box','ig');
//alert(a);
//var c = /box/;
//var d = /box/ig;
//alert(c);
//alert(d);
////测试正则表达式RegExp对象包含两个方法：test() & exec(),用来测试字符窜匹配。
//var e = new RegExp('box','i');
//var str = 'This is a Box!';
//alert(e.test(str));
//var f = /box/i;
//alert(f.test(str));

//也可以使用一条语句实现正则匹配
//alert(/box/i.test('This is a Box!'));alert(f.exec(str));

//除了RegExp提供的test(),exec(),外String对象也提供了4个使用正则表达式的方法
//match()返回pattern中的子串或null,replace()用replacement替换pattern,search()返回字符串中pattern开始位置,split()返回字符串指定pattern拆分的数组,
//var str1 = 'This is a Box!, That is a Box too';
//alert(str1.match(b));
//alert(str1.match(b).length);
//alert(str1.search(b));
//alert(str1.split(b));

//RegExp对象的静态属性
//input $_,lastMatch $&, lastParen $+, leftContext $` ,multiline $*, rightContext $',
//var pattern = /(g)oogle/;
///var str2 = 'This is google！';
//pattern.test(str2); //执行一下
//alert(RegExp.input); //This is google！
//alert(RegExp.leftContext); //This is
//alert(RegExp.rightContext); //！
//alert(RegExp.lastMatch); //google
//alert(RegExp.lastParen); //g
//alert(RegExp.multiline); //false
//以上可以用短名来写
/**alert(RegExp['$_']);
alert(RegExp["$'"]);
alert(RegExp["$`"]);
//alert(RegExP["$&"]);
alert(RegExp['$+']);*/

/**
RegExp对象的实例属性：global,ignoreCase,lastIndex,multiline,
*/
//var pattern1 = /google/ig;
//alert(pattern1.global);
//alert(pattern1.ignoreCase);
//alert(pattern1.nultiline);
//alert(pattern1.lastIndex);
//alert(pattern.source);

/**
正则表达式元字符是包含特殊含意的字符。它们有一些特殊功能，可以控制匹配模式的方式。。反斜杠后的元字符将失去其特殊含意。
.,[a-z0-9],[^a-z0-9],\d,\D,\w,\W,以上字符类：单个字符和数字，\0,\b,\f,\n,\r,\t\,\s\
正则表达式类型：字符类：单个字符和数字，字符类：空白字符，字符型：锚字符，^行首匹配,$行尾匹配,\A只有匹配字符串开头处,\b匹配单词边界，词在【】内时无效,
\B,\G,\Z,\z,字符类：重复字符，x?,x*,x+,(xyz)+,x{m,n},字符类：替代字符this|where|logo|,记录字符

*/

/**var pattern = /g..gle/;
var str = 'google';
alert(pattern.test(str));*/

//var pattern = /g.*gle/;
//var pattern = /g[a-zA-Z_]*gle/;
//var pattern = /g[^0-9]*gle/;
//var pattern = /[a-z][A-Z]+/;
//var pattern = /g\w*gle/;
//var pattern = /google\d*/;
//var pattern = /\D{7,}/;
//var pattern = /^google$/;
//var pattern = /goo\sgle/;
//var pattern = /google\b/;
//var pattern = /google|baidu|bing/;
//var pattern = /(google){4,8}/;
//var pattern = /8(.*)8/;


/**
var str = '8google8';
str.match(pattern);
alert(RegExp.$1);
var result = str.replace(pattern,'<strong>$1<strong>');
document.write(result);
alert(pattern.test(str));

*/
//？号关闭了贪婪匹配，只替换了第一个
/**
var pattern = /(.*)\s(.*)/;
var str = 'google baidu';
var result = str.replace(pattern,'$2 $1');
document.write(result);

var pattern = /[a-z]+/;
var str = 'abcdefj';
var result = str.replace(pattern,'xxx');
alert(result);

var pattern = /8(.+)8/g;
var str = 'This is 8google8, That is 8google8, There is 8google8';
var result = str.replace(pattern,'<strong>$1<strong>');
document.write(result);
*/
/**
使用exec返回数组

var pattern = /^[a-z]+\s[0-9]{4}$/i;
var pattern = /^[a-z]+/i;

var pattern = /^([a-z]+)\s([0-9]{4})$/i;


var str = 'google 2012';
alert(pattern.exec(str)[0]);
alert(pattern.exec(str)[1]);
alert(pattern.exec(str)[2]);
*/

/**
捕获性分组和非捕获性分组
从外到内获取（分组嵌套），
使用前瞻捕获


var pattern = /(\d+)([a-z])/;
var str = '123abc';
alert(pattern.exec(str));

var pattern1 = /(\d+)(?:[a-z])/;
alert(pattern1.exec(str));

var pattern = /(A?(B?(C?)))/;
var str = 'ABC';
alert(pattern.exec(str));
*/









