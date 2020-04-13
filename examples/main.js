import Vue from 'vue'
import Picker from '../src'
Vue.use(Picker)

import Examples from './Examples.vue'

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '47c2356c5124a179696ec3f0907da462',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

Vue.config.productionTip = false

new Vue({
    render: h => h(Examples),
}).$mount('#examples')
