<template>
  <div id="app">
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/user/3362/post/2?name=aaa">Go to User:aaa</router-link>
        <router-link to="/user/1992/post/5?name=bbb">Go to User:bbb</router-link>
      </p>
        <router-view></router-view>
  </div>
</template>