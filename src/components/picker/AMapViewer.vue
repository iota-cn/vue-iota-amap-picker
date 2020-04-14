<template>
    <div class='iota-amap-viewer'>
        <div class='controller'
            v-iipopover:viewer>
            <slot name="controller">
                <img class='picker'
                    :src='viewer' />
            </slot>
        </div>
        <Popover name="viewer"
            :width='622'
            event='hover'>
            <div class="pop-viewer">
                <AMapRawPicker disabled
                    :position="position" />
            </div>
        </Popover>
    </div>
</template>

<script>
import AMapRawPicker from './AMapRawPicker'
import Popover from '../popover/Popover'
import { defaultPicker } from './constants'

export default {
    name: 'IotaAMapViewer',
    components: {
        AMapRawPicker,
        Popover
    },
    props: {
        position: Array
    },
    data() {
        return {
            mapPosition: this.position,
            viewer: defaultPicker
        }
    },
    methods: {
    }
}
</script>

<style lang="stylus">
@import '../styles/common';

.iota-amap-viewer {
    height: 100%;

    .pop-viewer {
        height: 422px;
        width: 622px;
    }

    .controller {
        height: 100%;
        cursor: pointer;

        .picker {
            height: 100%;
        }
    }
}
</style>