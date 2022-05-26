<template>
    <div style="margin-top: 45px;margin-bottom: 50px">
        <el-checkbox-group
                v-model="store.state.checkedList"
                @change="handleCheckedListChange">
            <div v-for="(item,index) in store.state.cartList">
                <div style="float: left;text-align: center;line-height: 130px">
                    <el-checkbox :key="index" :label="store.state.cartList[index]" style="z-index: 0">
                        &nbsp
                    </el-checkbox>
                </div>
                <Item v-model="store.state.cartList[index]"/>
            </div>
        </el-checkbox-group>
    </div>
</template>


<script>
    import Item from "./Item.vue";

    export default {
        name: "Inner",
        components: {Item}
    }
</script>

<script setup>
    import {useStore} from "vuex";
    import {ref} from "vue";

    const store = useStore(); // 使用useStore方法

    const handleCheckedListChange = (value) => {
        console.dir("value")
        console.dir(value)
        const checkedCount = value.length
        store.state.selectAll = checkedCount === store.state.cartList.length
        store.state.isIndeterminate = checkedCount > 0 && checkedCount < store.state.cartList.length
    }
</script>

<style scoped>

</style>
