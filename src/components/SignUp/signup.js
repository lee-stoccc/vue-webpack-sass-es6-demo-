import {cookie} from '../../../static/cookie/cookie'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        submit:function () {
            this.$axios.get('http://localhost/tp5/public/index/user/get_user',{
                params:{
                    u:this.username,
                    p:this.password
                }
            }).then(res =>{
                let setcookie = new cookie();
                setcookie.setcookies(res.data);
                alert(res.data)
            })
        }
    }
}