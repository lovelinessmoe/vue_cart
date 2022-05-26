<template>
    <div class="footer-container">
        <!-- 全选按钮 -->
        <el-checkbox
                v-model="store.state.selectAll"
                :indeterminate="store.state.isIndeterminate"
                @change="handleCheckAllChange">
            全选
        </el-checkbox>

        <!-- 合计 -->
        <div>
            <span>合计：</span>
            <span class="amount">￥{{sum}}</span>
        </div>

        <!-- 结算按钮 -->
        <div style="padding-right: 15px;">
            <el-button type="success" :disabled="num===0">结算({{num}})</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>
<script setup>
    import {useStore} from "vuex";
    import {ref, computed} from 'vue';

    const store = useStore(); // 使用useStore方法
    const handleCheckAllChange = (val) => {
        console.log(val)
        console.log("val")
        store.state.checkedList = val ? store.state.cartList : []
        store.state.isIndeterminate = false;
    }

    let sum = computed({
        get: () => {
            let sum = ref(0.0);
            store.state.checkedList.forEach(e => {
                sum.value += e.num * e.viewsCount;
            })
            return sum;
        }
    });
    let num = computed({
        get: () => {
            return store.state.checkedList.length;
        }
    });

</script>

<style scoped>
    .footer-container {
        height: 50px;
        width: 100%;
        background-color: white;
        border-top: 1px solid #efefef;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .amount {
        color: red;
        font-weight: bold;
    }
</style>
