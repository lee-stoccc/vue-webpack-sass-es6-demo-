<template>
    <section class="module-one">
        <div><img src="/static/imgs/footer/home.png" alt=""  @click="linkGo('index')"><span>首页</span></div>
        <div><img src="/static/imgs/footer/near.png" alt="" @click="linkGo('near')"><span>附近</span></div>
        <div><img src="/static/imgs/footer/find.png" alt=""><span>发现</span></div>
        <div><img src="/static/imgs/footer/order.png" alt=""@click="linkGo('order')"><span>订单</span></div>
        <div><img src="/static/imgs/footer/mine.png" alt="" @click="linkGo('mine')"><span>我的</span></div>
    </section>
</template>
<style src="./foot.scss" lang="scss" scoped=""></style>
<script src="./footer.js"></script>