<template>
  <div>
      <div>{{'params: ' + params_str}}</div>
      <div>{{'query: ' + query_str}}</div>
      <div>{{id}}</div>
      <div>{{post_id}}</div>
      <el-input v-model="test" class="test-input"></el-input>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                test: ''
            }
        },
        props: {
            id: {
                type: String,
                required: true
            },
            post_id: {
                type: String
            }
        },
        computed: {
            params_str () {
                let arr = []
                let params = this.$route.params
                for(let key in params) {
                  arr.push(params[key])
                }
                return arr.join()
            },
            query_str () {
                let arr = []
                let query = this.$route.query
                for(let key in query) {
                arr.push(key)
                arr.push(query[key])
                }
                return arr.join()
            },
            route () {
                return this.$route
            }
        },
        watch: {
            $route (to, from) {
                // console.log(from)
                console.log(to)
            }
        },
        methods: {

        },
        created () {
            console.log(this.$route)
        },
        beforeRouteEnter(to, from ,next) {
            console.log('beforeRouteEnter called');
            next();
        }
    }
</script>

<style>
    .test-input {
        width: 200px;
    }
</style>