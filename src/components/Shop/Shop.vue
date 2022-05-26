<template>
    <Header class="header" title="购物车"/>
    <Inner/>
    <Footer/>
</template>

<script>
    import Header from "./Header.vue";
    import Inner from "./inner/Inner.vue";
    import Footer from "./Footer.vue";

    export default {
        name: "Shop",
        components: {Footer, Inner, Header}
    }
</script>


<script setup>
    import axios from "axios";
    import {onBeforeMount, ref} from "vue";

    const request = axios.create({
        baseURL: 'https://javaee.xyz/',
        timeout: 10000
    })
    let cartList = ref([]);

    import {useStore} from "vuex";

    const store = useStore(); // 使用useStore方法
    onBeforeMount(async () => {
        let res = await request({
            url: 'article/getList',
            method: 'GET',
            params: {
                current: 1,
                size: 6,
            }
        })
        res = res.data.data.records;
        res.map((item, index) => {
            return Object.assign(item, {num: 1});
        });
        cartList.value = res;
        store.state.cartList = cartList.value;
    });


</script>

<style scoped>
    .header {
        height: 45px;
        line-height: 45px;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
</style>
