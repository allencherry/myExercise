//ʱ������ѧϰҪ�㣺
/**1.Date���ͣ�ͨ�õķ�������ʽ���������������
ECMAScript�ṩ����Date����������ʱ������ڡ�Date��������һϵ�л�ȡ����������ʱ�����Ϣ�ķ�����
Date����ʹ��UTC��coordinated Universal Time������Э��ʱ�䣨�ֳ�����ͳһʱ�䣩1970��1��1����ҹ��ʱ��ʹ���������ݴ洢��ʽ�������£�Date���ͱ���������ܹ���ȷ��1970��1��1��ǰ��285616nian

*/
//��������
//var a = new Date();
//alert(a);
//�ڵ���Date���췽������������������£��½��Ķ����Զ���ȡ��ǰ��ʱ������ڡ�
//EcmasScript �ṩ������������Date.parse()��Date.UTC().Date.parse()��������һ����ʾ���ڵ��ַ���������EcmA-262û�ж���Date.parse(_)Ӧ��֧���������ڸ�ʽ����˷�������Ϊ��ʵ�ֶ��죬���������
//alert(Date.parse('6/13/2011'));
//alert(Date.parse());
//alert(Date.parse('May 25,2004'));

//��������ָ�������ڣ���ô��Date.parse()����Date���췽����
var  b = new Date('6/13/2011'); //ֱ�Ӵ��ˣ�Date.parse()��̨������

//alert(b);
var c = new Date(Date.parse('6/13/2011')); 
//alert(c);
//Date.UTC()����ͬ��Ҳ���ر�ʾ���ڵĺ�������
//alert(Date.UTC(2011,11));
//alert(Date.UTC());

//����������һ����Date ����Ҳ��д��toLocalString(),toString()��ValueOf()����������Щ��������ֵ�����������еķ�����ͬ

//alert('toString:' + new Date(Date.UTC(2011,11)).toString());
//alert('toLocaleString:' + new Date(Date.UTC(2011,11)).toLocaleString()); //�����ظ�ʽ���

//�������ڸ�ʽ������ toDateString(),toTimeString(),toLocaleDateString(),toLocaleTimeString(),toUTCString(),���ض��ĸ�ʽ��ʾ������UTC����

var d = new Date();
//alert(d.toDateString());
//alert(d.toTimeString());
//alert(d.toLocaleDateString());
//alert(d.toLocaleTimeString());
//alert(d.toUTCString());
//4.�����������Ϊ���ǵ�����ȡ����Ҫ�ĸ���ʱ�䡢���ڶ��ṩ�ķ�����ע�⣺��Щ�����У��д�UTC�ģ��в���UTC�ġ�UTC����ָ������û��ʱ��ƫ�������µ�����ֵ

alert(b.getTime());
alert(b.setTime(100));
alert(b.getFullYear());
alert(b.setFullYear(2012));
alert(b.getMonth());
alert(b.setMonth(11));
alert(b.getDate());
alert(b.setDate());
alert(b.getTimezoneOffset()); //���ϳ���getTimezoneOffset(),����������UTC���ܣ�ʱ��Э��ʱ��


ssssss

