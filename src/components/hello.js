//全部引入，并且用aa 作为对象去接收
import * as aa from './he'

//个别属性引入
import {age,name} from './he'
import {person}  from './he'

// 引入外部类之后，本地实例化一个men的对象
var men =new aa.Ans()

//实例化的对象调用原来类的方法
men.say('abcffff')

//打印引入的变量
console.log(age)

//调用引入的函数，并且调用引入的变量
// 两种方法，一种是用全局引入；另外一种是花括号引入
aa.person(aa.Name,aa.sex,aa.age,aa.job)
person(1,2,3,4)
