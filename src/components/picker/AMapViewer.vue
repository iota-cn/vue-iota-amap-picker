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

const defaultPicker = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIGNsYXNzPSJpY29uIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcC1pZD0iNzc3NyIgdD0iMTU4NjUwNDgwMTM0NSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHN0eWxlIHR5cGU9InRleHQvY3NzIi8+CjwvZGVmcz4KPHBhdGggZD0ibTIxMy4zMyA0NDhhMjk4LjY3IDI5OC42NyAwIDEgMSA1OTcuMzMgMCAyMS4zMzMgMjEuMzMzIDAgMCAwIDQyLjY2NyAwIDM0MS4zMyAzNDEuMzMgMCAxIDAtNjgyLjY3IDBjMCAyMzEuNjggMzE1LjczIDQ1Ni4xMSAzMjguOTYgNDY1LjQ5YTIxLjMzMyAyMS4zMzMgMCAwIDAgMjkuODY3LTUuMTIgMjEuMzMzIDIxLjMzMyAwIDAgMC01LjEyLTI5Ljg2N2MtMy40MTMzLTIuMTMzMy0zMTEuMDQtMjIxLjAxLTMxMS4wNC00MzAuNTF6IiBwLWlkPSI3Nzc4Ii8+CjxwYXRoIGQ9Im01MTIgMjg4YTE2MCAxNjAgMCAwIDAtNTUuMDQgMTAuNjY3IDIxLjMzMyAyMS4zMzMgMCAwIDAgMTQuNTA3IDQwLjEwNyAxMTYuMDUgMTE2LjA1IDAgMCAxIDQwLjUzMy04LjEwNjcgMTE2LjkxIDExNi45MSAwIDEgMS0xMTQuNzcgOTMuNDQgMjEuMzMzIDIxLjMzMyAwIDEgMC00Mi42NjctOC41MzMzIDE2My40MSAxNjMuNDEgMCAwIDAtMy40MTMzIDMyIDE2MCAxNjAgMCAxIDAgMTYwLjg1LTE1OS41N3ptMzMwLjY3IDM4OS45Ny0xMTEuMzYtNjQuNDI3YTIwLjkwNyAyMC45MDcgMCAwIDAtMTQuMDgtNS41NDY3IDIxLjMzMyAyMS4zMzMgMCAwIDAtMjEuMzMzIDIxLjMzM3YyNDUuMzNoLTM0Ljk4N2EyMS4zMzMgMjEuMzMzIDAgMSAwIDAgNDIuNjY3aDE0OS43NmEyMS4zMzMgMjEuMzMzIDAgMCAwIDAtNDIuNjY3aC03Mi4xMDd2LTk5Ljg0bDEwNC4xMS02MC4xNmEyMS4zMzMgMjEuMzMzIDAgMCAwIDAtMzcuMTJ6bS0xMDQuMTEgNDcuMzZ2LTU4LjQ1M2w1MC43NzMgMjkuNDR6IiBwLWlkPSI3Nzc5Ii8+Cjwvc3ZnPgo="

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