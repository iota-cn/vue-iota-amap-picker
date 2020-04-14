<template>
    <el-amap ref="map"
        :amap-manager="amapManager"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="picker">
        <el-amap-marker :position="mapPosition"
            v-if="validPostion"></el-amap-marker>
    </el-amap>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()
export default {
    name: 'IotaAMapRawPicker',
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
                    if (that.mapPosition !== undefined && Array.isArray(that.mapPosition)
                        && that.mapPosition.length === 2) {
                        amapManager.getMap().setCenter(that.mapPosition)
                    }
                },
                click: that.disabled ? () => { } : (o) => {
                    that.mapPosition = [o.lnglat.lng, o.lnglat.lat]
                    that.$emit('change', that.mapPosition)
                }
            },
            plugin: [{
                pName: 'ToolBar',
                autoPosition: that.position === undefined && !that.disabled,
                events: {
                    location: (o) => {
                        that.mapPosition = [o.lnglat.lng, o.lnglat.lat]
                        that.$emit('change', that.mapPosition)
                    }
                }
            }]
        }
    },
    computed: {
        validPostion() {
            return this.mapPosition !== undefined && Array.isArray(this.mapPosition)
                && this.mapPosition.length === 2
        }
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