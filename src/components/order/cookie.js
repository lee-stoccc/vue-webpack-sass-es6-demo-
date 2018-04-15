
class cookie {
    constructor(){
        this.who='我是父类';
        this.type='我是父类的属性type';
        this.name='我是父类的属性name'
    }
    getcookie(name){
        console.log(name);
        // document.cookie='user_uid=1';
        // let cookies = document.cookie;
        // let arr_cookies = cookies.split(';');
        // for(let i=0;i<arr_cookies.length;i++){
        //     let arr = arr_cookies[i].split('=');
        //     if(arr[0] == name){
        //         return arr[1]
        //     }
        // }
    }
}

export {cookie}