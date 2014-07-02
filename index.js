//时间日期学习要点：
/**1.Date类型，通用的方法，格式化方法，组件方法
ECMAScript提供了了Date类型来处理时间和日期。Date类型内置一系列获取和设置日期时间的信息的方法。
Date类型使用UTC（coordinated Universal Time，国际协调时间（又称世界统一时间）1970年1月1日午夜零时在使用这种数据存储格式的条件下，Date类型保存的日期能够精确到1970年1月1日前后285616nian

*/
//创建日期
//var a = new Date();
//alert(a);
//在调用Date构造方法而不传参数的情况下，新建的对象自动获取当前的时间和日期。
//EcmasScript 提供了两个方法，Date.parse()和Date.UTC().Date.parse()方法接受一个表示日期的字符串参数，EcmA-262没有定义Date.parse(_)应该支持那种日期格式，因此方法的行为因实现而异，因地区而异
//alert(Date.parse('6/13/2011'));
//alert(Date.parse());
//alert(Date.parse('May 25,2004'));

//如果想输出指定的日期，那么把Date.parse()传入Date构造方法里
var  b = new Date('6/13/2011'); //直接传人，Date.parse()后台被调用

//alert(b);
var c = new Date(Date.parse('6/13/2011')); 
//alert(c);
//Date.UTC()方法同样也返回表示日期的毫秒数，
//alert(Date.UTC(2011,11));
//alert(Date.UTC());

//与其它类型一样，Date 类型也重写了toLocalString(),toString()和ValueOf()方法：但这些方法返回值与其他类型中的方法不同

//alert('toString:' + new Date(Date.UTC(2011,11)).toString());
//alert('toLocaleString:' + new Date(Date.UTC(2011,11)).toLocaleString()); //按本地格式输出

//五种日期格式化方法 toDateString(),toTimeString(),toLocaleDateString(),toLocaleTimeString(),toUTCString(),以特定的格式显示完整的UTC日期

var d = new Date();
//alert(d.toDateString());
//alert(d.toTimeString());
//alert(d.toLocaleDateString());
//alert(d.toLocaleTimeString());
//alert(d.toUTCString());
//4.组件方法，是为我们单独获取你想要的各种时间、日期而提供的方法。注意：这些方法中，有带UTC的，有不带UTC的。UTC日期指的是在没有时区偏差的情况下的日期值

alert(b.getTime());
alert(b.setTime(100));
alert(b.getFullYear());
alert(b.setFullYear(2012));
alert(b.getMonth());
alert(b.setMonth(11));
alert(b.getDate());
alert(b.setDate());
alert(b.getTimezoneOffset()); //以上除了getTimezoneOffset(),其它都具有UTC功能，时间协调时间


ssssss

