import Footers from '../footer/Foot.vue'
import Swiper from '../../../static/swiper/swiper-4.2.0.min.js'
import MakeSure from '../makeSure/Sure.vue'
export default {
    data(){
        return{
            holders:'',
            list:[],
            propShow:0,
        }
    },
    components:{
        Footers,
        MakeSure
    },
    methods:{
        swiper:function () {
            new Swiper('.swiper-container', {
                loop: true,
                observer: true,
                autoplay: 1000,
            })
        },
        collect:function () {
            this.propShow +=1
        }
    },
    mounted:function () {
        this.swiper();
        this.$axios.get('http://localhost/tp5/public/index/test/index').then(res =>{
            console.log(res);
            this.list=res.data;
        })
    }
}