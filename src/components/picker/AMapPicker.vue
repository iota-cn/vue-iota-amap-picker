<script>
import AMapRawPicker from './AMapRawPicker'
import Modal from '../modal/Modal'
import { defaultPicker } from './constants'

export default {
    name: 'IotaAMapPicker',
    model: {
        prop: 'position',
        event: 'change'
    },
    props: {
        position: Array,
        disabled: Boolean,
        okText: String,
        cancelText: String,
        title: String
    },
    data() {
        return {
            visible: false,
            mapPosition: this.position
        }
    },
    methods: {
        setVisible(visible) {
            this.visible = visible
        },

        onClick(e) {
            e.stopPropagation()
            this.visible = true
        },

        onOk() {
            this.setVisible(false)
            this.$emit('change', this.mapPosition)
        },

        onCancel() {
            this.setVisible(false)
        },

        onPosition(position) {
            this.mapPosition = position
        }
    },
    render(h) {
        return (
            <div class='iota-amap-picker'>
                <div class='controller' onClick={this.onClick}>
                    {
                        this.$slots.controller
                            ? h('i', this.$slots.controller)
                            : (<img class='picker' src={defaultPicker} />)
                    }
                </div>
                {this.visible ? <Modal onCancel={this.onCancel} onOk={this.onOk} okText={this.okText} cancelText={this.cancelText}>
                    <div class='iota-avatar-modal-title' slot='header'>{this.title ? this.title : 'Picker Position'}</div>
                    <AMapRawPicker slot="body" vModel={this.mapPosition} disabled={this.disabled} />
                </Modal> : null
                }
            </div>
        )
    }
}
</script>

<style lang="stylus">
@import '../styles/common';

.iota-amap-picker {
    height: 100%;

    /deep/ .modal-body {
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

.iota-amap-picker-modal-title {
    width: 100%;
    letter-spacing: 1px;
    color: rgba(51, 51, 51, 0.8);
    font-size: 16px;
}
</style>