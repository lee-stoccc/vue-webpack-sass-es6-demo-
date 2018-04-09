import Footers from '../footer/Foot.vue'
import Swiper from '../../../static/swiper/swiper-4.2.0.min.js'
export default {
    components:{
        Footers
    },
    methods:{
        swiper:function () {
            new Swiper('.swiper-container', {
                loop: true,
                observer: true,
                autoplay: 1000,
            })
        }
    },
    mounted:function () {
        this.swiper()
    }
}