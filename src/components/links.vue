<template>
	<div id="box-links">
		<ul>
      <router-link  v-for="i in list" :to="i.path" key="i"><li>{{i.name}}</li></router-link>  
    </ul>
	</div>
</template>
<script>

export default {
  name: 'box-links',
  data() {
  	return {
     list: []
  	}
  },
  props: {},
  filters: {},
  created() {
    this.list = this.routes;
  },
  methods: {},
  components: {
  }
}
</script>
<style  lang="scss">
 #box-links{

 }
</style>