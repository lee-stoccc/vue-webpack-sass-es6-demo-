<template>
    <div :style="Show >= 1 ? '': 'display:none'">
        <div class="z"></div>
        <div class="border">
            <div class="text">
                <span>确定收藏吗？</span>
            </div>
            <div class="btn">
                <div class="cencel" @click="cencel()"><span >Cencel</span></div>
                <div class="sure" @click="cencel()"><span>Sure</span></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./sure.scss" scoped></style>

<script>
    export default {
        //接收父组件传过来的值
        props:["isShow"],
        watch:{
            isShow:function () {
                this.Show=this.isShow;
            }
        },
        data(){
            return{
                Show:0,
            }
        },
        methods:{
//            isShowFn:function(){
//               if(this.Show == '1'){
//                   console.log('333333333')
//                   return "display:block"
//               }else {
//                   return 'display:none'
//               }
//            },
            cencel:function () {
                this.Show='0';
            }
        }

    }

</script>