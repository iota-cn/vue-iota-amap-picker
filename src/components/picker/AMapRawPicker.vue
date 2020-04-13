<template>
    <el-amap ref="map"
        :amap-manager="amapManager"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="picker">
        <el-amap-marker :position="mapPosition"
            v-if="mapPosition"></el-amap-marker>
    </el-amap>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()
export default {
    model: {
        prop: 'position',
        event: 'change'
    },
    props: {
        position: Array,
        disabled: Boolean
    },
    data: function () {
        let mapPosition = this.position
        let that = this
        return {
            amapManager,
            mapPosition,
            zoom: 12,
            events: {
                init: () => {
                    if (that.mapPosition !== undefined) {
                        amapManager.getMap().setCenter(this.mapPosition)
                    }
                },
                click: that.disabled ? () => { } : (o) => {
                    that.mapPosition = [o.lnglat.lng, o.lnglat.lat]
                    this.$emit('change', this.mapPosition)
                }
            },
            plugin: [{
                pName: 'ToolBar',
                autoPosition: this.position === undefined && !that.disabled,
                events: {
                    location: (o) => {
                        that.mapPosition = [o.lnglat.lng, o.lnglat.lat]
                        this.$emit('change', this.mapPosition)
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