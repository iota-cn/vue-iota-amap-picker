import { version } from '../package.json';

const components = [
]

export {

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