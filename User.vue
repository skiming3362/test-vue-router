<template>
  <div>
      {{params_str}}
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
          }
        }
    }
</script>