import { version } from '../package.json'

import AMapRawPicker from '../src/components/picker/AMapRawPicker'
import AMapPicker from '../src/components/picker/AMapPicker'
import AMapViewer from '../src/components/picker/AMapViewer'
import { events } from '../src/components/popover/bus'

const components = [
    AMapRawPicker,
    AMapPicker,
    AMapViewer
]

export {
    AMapRawPicker,
    AMapPicker,
    AMapViewer
}

const defaultPosition = 'top'

const prepareBinding = ({ arg = '', modifiers = {}, value = {} }) => {
    let mods = Object.keys(modifiers)
    let name = typeof value === 'object' && value.name ? value.name : arg
    let position = mods[0] || value.position || defaultPosition

    return { name, position, value }
}

const addClickEventListener = (target, params) => {
    const click = (srcEvent) => {
        events.$emit('show:click', { ...params, target, srcEvent })

        let handler = (srcEvent) => {
            events.$emit('hide:click', { ...params, target, srcEvent })
            document.removeEventListener('click', handler)
        }

        document.addEventListener('click', handler)
        srcEvent.stopPropagation()
    }

    target.addEventListener('click', click)

    target.$popoverRemoveClickHandlers = () => {
        target.removeEventListener('click', click)
    }
}

const addHoverEventListener = (target, params) => {
    const mouseenter = (srcEvent) => {
        events.$emit('show:hover', { ...params, target, srcEvent })
    }

    const mouseleave = (srcEvent) => {
        events.$emit('hide:hover', { ...params, target, srcEvent })
    }

    target.addEventListener('mouseenter', mouseenter)
    target.addEventListener('mouseleave', mouseleave)

    target.$popoverRemoveHoverHandlers = () => {
        target.removeEventListener('mouseenter', mouseenter)
        target.removeEventListener('mouseleave', mouseleave)
    }
}

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c)

        Vue.directive('iipopover', {
            bind: function (target, binding) {
                let params = prepareBinding(binding)

                addClickEventListener(target, params)
                addHoverEventListener(target, params)
            },
            unbind: function (target) {
                target.$popoverRemoveHoverHandlers()
                target.$popoverRemoveClickHandlers()
            }
        })
    })
}

export default {
    version,
    install
}
