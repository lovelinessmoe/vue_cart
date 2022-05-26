<template>
    <div class="goods-container">
        <div class="good_left">
            <el-image style="width: 100px; height: 100px" :src="modelValue.imgUrl" fit="fill"/>
        </div>
        <div class="good_right">
            <div class="top">{{modelValue.articleTitle}}</div>
            <div class="bottom">
                <!-- 商品价格 -->
                <div class="price">￥ {{modelValue.viewsCount}}</div>
                <!-- 商品数量 -->
                <div class="count">
                    <el-input-number v-model="modelValue.num" :min="1" size="small" style="z-index: 0"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item"
    }
</script>

<script setup>

    const props = defineProps({
        modelValue: Object
    })

    const emit = defineEmits(['update:model-value'])

</script>

<style scoped>
    .goods-container {
        display: flex;
        padding: 15px;
        font-size: 15px;
    }

    .good_left {
        margin-right: 10px;
    }

    .good_right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }

    .top {
        font-weight: bold;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .price {
        color: red;
        font-weight: bold;
    }
</style>
