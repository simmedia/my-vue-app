<template>
  <div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'userDetails',
  props: ['user'],
  data() {
    return {
      id: this.$route.params.id
    }
  },
  created() {
    console.log(this.id);
    
  }
}
</script>

<style>

</style>