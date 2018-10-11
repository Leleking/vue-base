import vue from 'vue'
const state = {
    notificationSystem: {
        options: {
            show: {
                theme: 'dark',
                icon: 'icon-person',
                position: 'topCenter',
                progressBarColor: 'rgb(0, 255, 184)',
                buttons: [
                    ['<button>Ok</button>', function (instance, toast) {
                        alert("Hello world!");
                    }, true],
                    ['<button>Close</button>', function (instance, toast) {
                        instance.hide({
                            transitionOut: 'fadeOutUp',
                            onClosing: function(instance, toast, closedBy){
                                console.info('closedBy: ' + closedBy);
                            }
                        }, toast, 'buttonName');
                    }]
                ],
                onOpening: function(instance, toast){
                    console.info('callback abriu!');
                },
                onClosing: function(instance, toast, closedBy){
                    console.info('closedBy: ' + closedBy);
                }
            },
            ballon: {
                balloon: true,
                position: 'bottomCenter'
            },
            info: {
                icon: '',
                position: 'bottomLeft'
            },
            success: {
                icon: '',
                position: 'bottomRight'
            },
            warning: {
                icon: '',
                position: 'topLeft'
            },
            error: {
                icon: '',
                position: 'topRight'
            },
            question: {
                timeout: 20000,
                close: false,
                overlay: true,
                toastOnce: true,
                id: 'question',
                zindex: 999,
                position: 'center',
                buttons: [
                    ['<button><b>YES</b></button>', function (instance, toast) {
                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    }, true],
                    ['<button>NO</button>', function (instance, toast) {
                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    }]
                ],
                onClosing: function(instance, toast, closedBy){
                    console.info('Closing | closedBy: ' + closedBy);
                },
                onClosed: function(instance, toast, closedBy){
                    console.info('Closed | closedBy: ' + closedBy);
                }
            }
        }
    }
}

const mutations = {

}
const actions = {
    toastSuccess:({commit},message)=>{
        //this is the success alert for all requests
      vue.prototype.$toast.success(message + " has been added to the cart", '', state.notificationSystem.options.error);
    },
    success:({commit},message)=>{
        //this is the success alert for all requests
      vue.prototype.$toast.success(message, '', state.notificationSystem.options.info);
    },
    error:({commit},message)=>{
        vue.prototype.$toast.error(message,'', state.notificationSystem.options.error);
    },
    reqError:({commit},message)=>{
        var mes = ''
        switch(message.status){
            case 401:
                mes = "Server could not be reached";
                break;
            default:
                mes = "Request could not be processed"
        }
        vue.prototype.$toast.error(mes,'',state.notificationSystem.options.error);
    }
}
export default{
    state,mutations,actions
}