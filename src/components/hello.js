import * as aa from './he'   //全部引入，并且用aa 作为对象去接收

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


//第一个原函数，在js中，函数也是类，类也是函数
function parentGirlFn() {
    this.name='parentSusan'
    this.cc=function cc() {
        console.log(`my name is ${this.name}`)
    }
}

//通过原函数实例化一个对象
var childSusiObj =new parentGirlFn();
//调用原函数的属性
console.log(childSusiObj.name)
//调用原函数的方法
childSusiObj.cc()

//另外一个函数，准备被prototype调用的函数
var otherGirlOjb=new function otherGirlFn() {
    this.otherGirl='otherGirl'
    this.cc=function cc() {
        console.log(`my name is ${this.otherGirl}`)
    }
}

//原函数通过prototype添加另外一个函数（otherGirlOjb）作为原函数的方法
parentGirlFn.prototype.$otherGirlObj=otherGirlOjb
//实例化的对象调用添加函数（另外一个函数otherGirlOjb）的属性
console.log(childSusiObj.$otherGirlObj.otherGirl)
//实例化的对象调用添加函数（另外一个函数otherGirlOjb）方法
childSusiObj.$otherGirlObj.cc()


parentGirlFn.prototype.$percon=person
childSusiObj.$percon(1,2,3,4)


