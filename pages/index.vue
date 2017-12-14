<template>
  <section class="container">
    <gmap-map
      :center="defaultMapConfig.center"
      :zoom="defaultMapConfig.zoom"
      :map-type-id="defaultMapConfig.mapTypeID"
      style="width: 100%; height: 500px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :label="m.label"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/markers')
    return { markers: data }
  },
  data () {
    return {
      defaultMapConfig: {
        center: { lat: 35.658034, lng: 139.701636 },
        zoom: 15,
        mapTypeID: 'terrain'
      }
    }
  },
  head () {
    return {
      title: 'Map'
    }
  }
}
</script>

<style scoped>
</style>
