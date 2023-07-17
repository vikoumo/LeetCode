3.实现虚拟滚轮解释
4.123456.123456 转成 1,234,567.123,456,7
```js
function millimeter() {
  return this.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',');
}
```
5.高阶函数
有使用过 Service worker 吗?用过 Web assembly 吗？什么叫响应式？问个什么直接点的，当数据变了，他是怎么做到视图就能跟着变化的？
一说 vue 的时候就会提到 mvvm，就什么叫 mvvm 跟 mvc 有什么区别？数据变了就改变视图就完事了，为什么中间要插一个 vm？
Vue-Router 有哪几种模式？hash 模式和 history 模式，什么时候用 hash 模式，什么时候用 history 模式？还有什么在某些场景一定就要用 hash 模式，或者是在某些诉求下一定就要用 history 模式，有吗？

6.webpack优化方面继续查找问题+总结webpack mark



# 字节二面:
react-router

