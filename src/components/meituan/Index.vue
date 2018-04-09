<template>
    <div>
        <!--最顶部-->
        <section class="top">
            <div class="temp">
                <img src="/static/imgs/index/fea.png" alt="">
                <span>20</span>
            </div>
            <div class="dir">
                <select class="sel">
                    <option>
                        花都
                    </option>
                </select>
            </div >
            <div class="sear">
                <input type="text" placeholder="请输入您想搜索的内容">
            </div>
            <div class="add">
                <img src="/static/imgs/index/in.png" alt="">
            </div>
        </section>
        <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="/static/imgs/index/in.png" alt=""></div>
                <!--<div class="swiper-slide"><img src="/static/imgs/index/in.png" alt=""></div>-->
                <!--<div class="swiper-slide"><img src="/static/imgs/index/in.png" alt=""></div>-->
            </div>
        </div>
        <!--功能模块-->
        <section class="module-one">
            <div><img src="/static/imgs/index/fo.png" alt=""><span>美食</span></div>
            <div><img src="/static/imgs/index/film.png" alt=""><span>电影/演出</span></div>
            <div><img src="/static/imgs/index/hotle.png" alt=""><span>酒店住宿</span></div>
            <div><img src="/static/imgs/index/enter.png" alt=""><span>休闲娱乐</span></div>
            <div><img src="/static/imgs/index/bike.png" alt=""><span>外卖</span></div>
        </section>
        <div class="line"></div>
        <section class="module-two">
            <div><img src="/static/imgs/index/KTV.png" alt=""><span>KTV</span></div>
            <div><img src="/static/imgs/index/plant.png" alt=""><span>机票/火车票</span></div>
            <div><img src="/static/imgs/index/mou.png" alt=""><span>周边游</span></div>
            <div><img src="/static/imgs/index/girl.png" alt=""><span>丽人/美发</span></div>
            <div><img src="/static/imgs/index/clean.png" alt=""><span>洗浴/汗蒸</span></div>
        </section >
        <section class="module-three">
            <div><img src="/static/imgs/index/hair.png" alt=""><span>美发</span></div>
            <div><img src="/static/imgs/index/foot.png" alt=""><span>足疗/按摩</span></div>
            <div><img src="/static/imgs/index/tip.png" alt=""><span>景点/门票</span></div>
            <div><img src="/static/imgs/index/dir.png" alt=""><span>结婚/摄影</span></div>
            <div><img src="/static/imgs/index/other.png" alt=""><span>全部分类</span></div>
        </section>
        <div class="line-two"></div>
        <!--广告-->
        <section class="advertising">
            <div><img src="/static/imgs/index/in.png" alt=""></div>
            <div><img src="/static/imgs/index/in.png" alt=""></div>
        </section>
        <div class="line-three"></div>
        <section class="guess">
            <div>猜你喜欢</div>
            <div class="line"></div>
        </section>
        <div class="line-four"></div>
        <!--详细-->
        <section class="detail">
            <div class="img-show"><img src="/static/imgs/index/in.png" alt=""></div>
            <div class="text">
                <div><span>秋天蓝色音乐餐吧</span><span>4.7km</span></div>
                <div><span>[多城市]&nbsp;&nbsp;</span><span>生日宴会套餐，建议4-10人使用</span></div>
                <div><span>￥&nbsp;&nbsp;</span><span>20</span><span>已售46&nbsp;&nbsp;</span><span>X</span></div>
                <div><span>1.0折</span></div>
            </div>
        </section>
        <div class="line-four"></div>
        <div style="margin-top: 400px;width: 100%">1</div>
        <Footers></Footers>
    </div>
</template>
<!--<link rel="stylesheet" href="/static/swiper/swiper-4.2.0.min.css">-->
<!--<script src="/static/swiper/swiper-4.2.0.min.js"></script>-->
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>

