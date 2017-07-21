<template>
  <div>
      <div>it's from user2</div>
      <!-- <div>{{'query: ' + query_str}}</div> -->
      <!-- <el-input v-model="test" class="test-input"></el-input> -->
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
        }
    }
</script>

<style>
    .test-input {
        width: 200px;
    }
</style>