import { version } from '../package.json'

import AMapRawPicker from '../src/components/picker/AMapRawPicker'
import AMapPicker from '../src/components/picker/AMapPicker'

const components = [
    AMapRawPicker,
    AMapPicker
]

export {
    AMapRawPicker,
    AMapPicker
}

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c)
    })
}

export default {
    version,
    install
}
