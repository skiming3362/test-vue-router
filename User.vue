<template>
  <div>
      <div>{{'params: ' + params_str}}</div>
      <div>{{'query: ' + query_str}}</div>
  </div>
</template>

<script>
    export default {
        data () {
            return {

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
            route (to, from) {
                console.log(from)
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