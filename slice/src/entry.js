import './bootstrap/bootstrap';
import './bootstrap/bootstrap.scss';
import './common/fonts.scss';
import './common/normalize.scss';
// import './common/mixins.scss';
import './common/_helpers.scss';
import './common/global.scss';

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));