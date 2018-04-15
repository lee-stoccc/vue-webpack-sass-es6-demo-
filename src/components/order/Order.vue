<template>
    <div>
        <div class="top">
            订单
        </div>
        <div class="line"></div>
        <section class="mine-order">
            <div>我的订单</div>
            <div class="">
                <span>全部订单</span>
                <span>》</span>
            </div>
        </section>
        <div class="line-two"></div>
        <section class="status">
            <div>
                <img src="/static/imgs/order/pay.png" alt="">
                <span>代付款</span>
            </div>
            <div>
                <img src="/static/imgs/order/pay.png" alt="">
                <span>待使用</span>
            </div>
            <div>
                <img src="/static/imgs/order/pay.png" alt="">
                <span>代评价</span>
            </div>
            <div>
                <img src="/static/imgs/order/pay.png" alt="">
                <span>退款/售后</span>
            </div>
        </section>
        <div class="line-three"><span>最近订单</span></div>
        <!--订单详情-->
        <div v-for="item in orderList">
            <section class="detail">
                <div class="img-show"><img src="/static/imgs/index/in.png" alt=""></div>
                <div class="text">
                    <div><span v-text="item.title">秋天蓝色音乐餐吧</span><span>已退款</span></div>
                    <div><span v-text="item.address">[多城市]</span><span>&nbsp;&nbsp;</span><span>生日宴会套餐，建议4-10人使用</span></div>
                    <div><span>总价:</span><span v-text="item.price">￥20</span><span>写评价</span></div>
                </div>
            </section>
            <div class="line"></div>
        </div>

        <div class="more">
            <span>更多</span>
            <span>V</span>
        </div>
        <div class="line-four"></div>
        <!--我的收藏-->
        <div class="mine-cle">
            <span>我的收藏</span>
            <span>查看全部&nbsp;&nbsp;》</span>
        </div>
        <div class="line"></div>
        <div class="container" v-for="item in colList">
            <div class="class-detail">
                <section class="detail">
                    <div class="detail-left"><img src="/static/imgs/index/in.png" alt=""></div>
                    <div class="detail-right">
                        <div class="right-one">
                            <span v-text="item.title">炳哥茶餐厅(荔萃店)</span>
                            <span>外</span>
                        </div>
                        <div class="right-two">
                            <div>
                                <span><img src="/static/imgs/index/in.png" alt=""></span>
                                <span><img src="/static/imgs/index/in.png" alt=""></span>
                                <span><img src="/static/imgs/index/in.png" alt=""></span>
                                <span><img src="/static/imgs/index/in.png" alt=""></span>
                                <span><img src="/static/imgs/index/in.png" alt=""></span>
                            </div>
                            <div><span>￥</span><span v-text="item.price">15</span><span>/人</span></div>
                        </div>
                        <div>
                            <span>茶餐厅</span>
                            <span>|&nbsp;</span>
                            <span v-text="item.dis">建设北路</span>
                        </div>
                    </div>
                </section>
            </div>
            <div class="line-two"></div>
        </div>

        <div style="margin-top: 100px;width: 100%"></div>
        <Footers></Footers>
    </div>
</template>
<script src="./order.js"></script>
<style src="./order.scss" lang="scss" scoped></style>