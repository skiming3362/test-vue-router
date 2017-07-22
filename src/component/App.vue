<template>
  <div id="app">
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/user/3362/post/2?name=aaa">Go to User:aaa</router-link>
        <router-link to="/user/1992/post/5">Go to bbb without profile</router-link>
        <router-link to="/user/1993/post/5/profile/4598?name=bbb">Go to bbb</router-link>
        <router-link :to="{ name: 'user-home', params: { id: '123', post_id: '456' }, query: { time: 7 } }">Go to name: user</router-link>
      </p>
        <router-view></router-view>
        <router-view name="a"></router-view>
  </div>
</template>