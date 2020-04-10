<template>
    <el-amap ref="map"
        :amap-manager="amapManager"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="picker">
        <el-amap-marker :position="mapCenter"
            v-if="mapCenter"></el-amap-marker>
    </el-amap>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()
export default {
    props: {
        center: Array
    },
    data: function () {
        let mapCenter = this.center
        let that = this
        return {
            amapManager,
            mapCenter,
            zoom: 12,
            events: {
                init: () => {
                    if (that.mapCenter !== undefined) {
                        amapManager.getMap().setCenter(this.mapCenter)
                    }
                },
                click: (o) => {
                    that.mapCenter = [o.lnglat.lng, o.lnglat.lat]
                    this.$emit('position', this.mapCenter)
                }
            },
            plugin: [{
                pName: 'ToolBar',
                autoPosition: this.center === undefined,
                events: {
                    location: (o) => {
                        that.mapCenter = [o.lnglat.lng, o.lnglat.lat]
                        this.$emit('position', this.mapCenter)
                    }
                }
            }]
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped>
.picker {
    height: 100%;
}
</style>>