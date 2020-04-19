import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue.component('Assincrono', (resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({
// 			template: '<h2> Component Assincrono</h2>'
// 		});
// 	}, 2000);

// 	// chamar o error em caso de reject
// 	console.log(reject);
// });

// Vue.component('Assincrono', () => import('./components/Assincrono.vue'));

new Vue({
	render: (h) => h(App)
}).$mount('#app');
