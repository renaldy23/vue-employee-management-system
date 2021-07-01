<template>
  <div class="home">
    <div class="container pt-3">
      <DashboardHeader/>
      <DashboardContent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardContent from '@/components/DashboardContent.vue'

export default {
  name: 'Home',
  components:{
    DashboardHeader,
    DashboardContent
  }
}
</script>

<style scoped>
</style>
