import scrollReveal from 'scrollreveal';

// eslint-disable-next-line
Plugin.install = function(Vue, options) {
	Vue.prototype.scrollReveal = scrollReveal

	/*Object.defineProperties(Vue.prototype, {
		scrollReveal: scrollReveal,
		$scrollReveal: scrollReveal
	});*/
};

export function useScrollReveal (app) {
    app.use(Plugin)
}