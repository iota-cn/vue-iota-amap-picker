<template>
    <div id="examples">
        <div class='section'>
            <h3>Install</h3>
            <code>
            </code>
        </div>
        <div class='section'>
            <h3>Example 1</h3>
            <code>
            </code>
            <h4>Auto Position Example</h4>
            <div :style="{height:'400px'}">
                <iota-amap-raw-picker />
            </div>
        </div>
        <div class='section'>
            <h3>Example 2</h3>
            <code>
            </code>
            <h4>Provide Position</h4>
            <div :style="{height:'400px'}">
                <iota-amap-raw-picker :position="[112,35]" />
            </div>
            <h4>Provide Position (v-model)</h4>
            <div :style="{height:'400px'}">
                <iota-amap-raw-picker v-model="position" />
            </div>
        </div>
        <div class='section'>
            <h3>Example 3</h3>
            <code>
            </code>
            <h4>Provide Position And disabled</h4>
            <div :style="{height:'400px'}">
                <iota-amap-raw-picker :position="[112,35]"
                    disabled />
            </div>
        </div>
        <div class='section'>
            <h3>Example 4</h3>
            <code>
            </code>
            <h4>Default Picker</h4>
            <div :style="{height:'24px'}"
                class="example">
                <picker :position="[112,35]" />
            </div>
            <h4>Default Picker (v-model)</h4>
            <div :style="{height:'24px'}"
                class="example">
                <picker v-model="position" />
            </div>
            <h4>Custome Picker</h4>
            <div :style="{height:'24px'}"
                class="example">
                <picker :position="[112,35]">
                    <a slot="controller"
                        class="controller">Controller Slot</a>
                </picker>
            </div>
            <h4>Custome Disabled Picker</h4>
            <div :style="{height:'24px'}"
                class="example">
                <picker :position="[112,35]"
                    disabled>
                    <a slot="controller"
                        class="controller">Controller Slot</a>
                </picker>
            </div>
        </div>
        <div class='section'>
            <h3>Example 4</h3>
            <code>
            </code>
            <h4>Viewer</h4>
            <div :style="{height:'24px'}"
                class="example">
                <viewer :position="[112,35]">
                </viewer>
            </div>
            <h4>Viewer (Custome Controller)</h4>
            <div :style="{height:'24px'}"
                class="example">
                <viewer :position="[112,35]">
                    <a slot="controller"
                        class="controller">Controller Slot</a>
                </viewer>
            </div>
        </div>
    </div>
</template>

<script>
import VueLogo from './assets/vue-js.png'
import AMapRawPicker from '../src/components/picker/AMapRawPicker'
import AMapPicker from '../src/components/picker/AMapPicker'
import AMapViewer from '../src/components/picker/AMapViewer'

export default {
    name: 'examples',
    data() {
        return {
            vueImg: VueLogo,
            position: undefined
        }
    },

    components: {
        "iota-amap-raw-picker": AMapRawPicker,
        "picker": AMapPicker,
        "viewer": AMapViewer
    }
}
</script>

<style lang="stylus" scoped>
#examples {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
}

.section {
    display: flex;
    flex-direction: column;
    margin: 10px;

    .example {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .controller {
        color: #7cecbe;
        border: 1px solid #efefef;
        padding: 10px;
    }
}
</style>
