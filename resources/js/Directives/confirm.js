import Swal from 'sweetalert2';
import _ from 'lodash';

const clickNode = function (node) {
    if (document.createEvent) {
        let evt = document.createEvent('MouseEvents');
        evt.initEvent('click', true, false);
        node.dispatchEvent(evt);
    } else if (document.createEventObject) {
        node.fireEvent('onclick');
    } else if (typeof node.onclick === 'function') {
        node.onclick();
    }
};

const getThenCallback = (binding, el) => {
    // Unbind to allow original event
    el.removeEventListener('click', el.ConfirmDialog.clickHandler, true);

    // Trigger original event
    clickNode(el);

    // Re-bind listener
    el.addEventListener('click', el.ConfirmDialog.clickHandler, true);
};

const getOptions = (binding) => {
    return typeof binding.value === 'object' ? _.cloneDeep(binding.value) : {};
};

const clickHandler = function (event, el, binding, ctx) {
    event.preventDefault();
    event.stopImmediatePropagation();

    let options = getOptions(binding);
    Swal.fire({
        title: options.title || ctx.__('Confirm!'),
        text: options.message || ctx.__('Are you sure you want to perform this action?'),
        icon: options.icon || 'warning',
        confirmButtonText: options.confirmButtonText || ctx.__('Proceed'),
        cancelButtonText: options.cancelButtonText || ctx.__('Cancel'),
        showCancelButton: true,
        reverseButtons: true,
        focusCancel: true,
        returnFocus: false,
        confirmButtonColor: '#ed3f20',
        cancelButtonColor: '#909090',
    }).then(result => {
        if (result.isConfirmed) getThenCallback(binding, el);
    }).catch(e => {
        console.log(e);
    });
};

export default {
    bind(el, binding, vnode) {
        el.ConfirmDialog = el.ConfirmDialog || {};
        el.ConfirmDialog.clickHandler = event => clickHandler(event, el, binding, vnode.context);
        el.addEventListener('click', el.ConfirmDialog.clickHandler, true);
    },
    unbind(el) {
        el.removeEventListener('click', el.ConfirmDialog.clickHandler, true);
    }
};
