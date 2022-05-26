# 购物车样例

使用的依赖

```json
"axios": "^0.27.2",
"element-plus": "^2.2.2",
"vuex": "^4.0.2"
```

本来是购物车,但是懒得写后台接口了,直接使用的博客的列表,浏览人数作为了价钱

使用的技术如上依赖所示

使用element大致,计数器,多选框等,正常开发不能这样封装,图省事了哈哈哈

![image-20220526201738657](https://s2.loli.net/2022/05/26/8H3rYFR7uhkKoXC.png)

存在文字过长重叠的bug,它提供的pdf的锅,咱也不回调样式

![image-20220526201823357](https://s2.loli.net/2022/05/26/HYBARZIL2TpD6NM.png)

价钱都是使用计算属性做的

```js
let sum = computed({
        get: () => {
            let sum = ref(0.0);
            store.state.checkedList.forEach(e => {
                sum.value += e.num * e.viewsCount;
            })
            return sum;
        }
    });
```

图省事直接用了vuex作为组建见参数传递,不然要烦死

```js
import {createStore} from 'vuex'

const state = {
    cartList: [],
    checkedList: [],
    selectAll: false,
    isIndeterminate: false
}
const store = createStore({
    state,
})
export default store
```

使用的时候直接

```js
const store = useStore(); // 使用useStore方法
```

得到的store直接操作就行了,~~正常是通过函数set和get的,我是懒蛋呜呜呜~~

[GitHub地址](https://github.com/lovelinessmoe/vue_cart)
[~~点我下载压缩包~~]()

压缩包不传了呜呜,GitHub又不是不能下,点个Star吧
