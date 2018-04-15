<template>
    <section class="form">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button class="submit" @click="submit">点击登录</button>
    </section>
</template>

<style src="./signup.scss" lang="scss"></style>
<script src="./signup.js"></script>