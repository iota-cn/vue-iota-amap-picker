<template>
    <div id="examples">
        <div class='section'>
            <h3>Install</h3>
            <code>
            </code>
        </div>
        <div class='section'>
            <h3>Example</h3>
            <code>
            </code>
            <h4>Example</h4>
            <div class='example'>

            </div>
        </div>
    </div>
</template>

<script>
import VueLogo from './assets/vue-js.png'

export default {
    name: 'examples',
    data() {
        return {
            vueImg: VueLogo
        }
    },

    components: {
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
