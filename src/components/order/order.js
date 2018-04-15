import Footers from '../footer/footer';
import {cookie} from '../../../static/cookie/cookie'  //引入类

export default {
    components:{
        Footers:Footers
    },
    data(){
        return{
            orderList:[],
            colList:[]
        }
    },
    created:function () {
        let getcookie = new cookie();   // 实例类
        getcookie.getcookie('user_uid');  //实例调用类方法
        console.log(getcookie.datas);
        this.$axios.get('http://localhost/tp5/public/index/Order/order', {
                params:{
                uid:getcookie.datas
             }
        }).then(res=>{
            console.log(res);
            this.orderList=res.data;
        });
        this.$axios.get('http://localhost/tp5/public/index/Order/col',{
            params:{
                uid:getcookie.datas
            }
        }).then(res=>{
            console.log(res);
            this.colList=res.data;
        })
    }
}