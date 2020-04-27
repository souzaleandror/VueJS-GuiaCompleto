import Vue from 'vue';
import VueRouter from 'vue-router';

import Contatos from './views/contatos/Contatos.vue';
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue';
import ContatoHome from './views/contatos/ContatoHome.vue';
import ContatoEditar from './views/contatos/ContatoEditar.vue';
import Home from './views/Home.vue';
import Error404 from './views/Error404.vue';
import Error404Contato from './views/contatos/Error404Contato.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/contatos',
			component: Contatos,
			alias: [ '/meus-contatos', '/lista-de-contatos' ],
			children: [
				{ path: ':id', component: ContatoDetalhes, name: 'contato' },
				{ path: '', component: ContatoHome },
				{
					path: ':id/editar',
					components: {
						default: ContatoEditar,
						'contato-detalhes': ContatoDetalhes
					},
					name: 'contatoEditar'
				},
				{ path: '/home', component: ContatoHome, name: 'contatos' },
				{
					path: '*',
					//redirect: '/contatos',
					component: Error404Contato
				}
			]
		}, // meus-contatos.com/contatos
		// {
		// 	path: '/contatos',
		// 	redirect: '/meus-contatos'
		// },
		//{ path: '/contatos/:id', component: ContatoDetalhes }, // meus-contatos.com/contatos/2
		{ path: '/home', component: Home }, // meus-contatos.com/
		{
			path: '/',
			redirect: () => {
				return { name: '/contatos' };
			}
		}, // meus-contatos.com/
		{
			path: '*',
			//redirect: '/contatos',
			component: Error404
		}
	]
});
