//export 把类公开
export class cookie {
    setcookies(val){
        document.cookie='user_uid='+val
    }
   getcookie(name){
        let arr_cookies = document.cookie.split(';');
        for(let i=0;i<arr_cookies.length;i++){
            let arr = arr_cookies[i].split('=');
            if(arr[0] == name){
               this.datas=arr[1];
                return arr[1]
            }
        }
    }
}
// export {cookie}