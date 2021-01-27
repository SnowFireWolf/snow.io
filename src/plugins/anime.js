import animejs from 'animejs';

/*
// eslint-disable-next-line
Plugin.install = function(Vue, options) {
	Vue.prototype.anime = animejs

	Object.defineProperties(Vue.prototype, {
		scrollReveal: scrollReveal,
		$scrollReveal: scrollReveal
	});
};

export function useAnime (app) {
    app.use(Plugin)
}*/

export default {
    // eslint-disable-next-line
    install(Vue, options) {
      Vue.prototype.anime = animejs;
    }
}