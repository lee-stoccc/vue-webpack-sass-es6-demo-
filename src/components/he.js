//类和实例化对象
class Ans {
    constructor(name){
        this.who='我是父类'
        this.type='我是父类的属性type'
        this.name='我是父类的属性name'
    }
    say(ab){
        console.log(`${this.who} say ${ab}`)
    }
}

//实例化对象
let cat = new Ans()
console.log(cat.name)
cat.say('我是父类实例化的对象，并调用父类的say()函数')

// An 继承 Ans
class An extends Ans {
    constructor(){
        super()    //super代指父类，子类调用必须加super方法
        this.who='我是子类'
        this.type='我是子类的属性type'
        this.sex='我是子类独有的属性sex'
    }
}

//子类实例化的对象
let shadow =new An()
console.log(shadow.type)
console.log(shadow.sex)
shadow.say('我从子类那里继承了父类的say()方法')

//公开父类、子类两个类
export {Ans,An}

// 定义常量，并公开
export const Name = 'lee.shadow'
export const sex = 'men'
export const age = '28'

//定义变量，并公开
export var job='teacher'

//定义函数并且公开
export function person(name,sex,age,job) {
    // es6 模板
    console.log(`I am ${name},I am a ${sex},my age is ${age},I am a ${job}`)
}




