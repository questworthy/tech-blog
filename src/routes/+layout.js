export const prerender = true;

// Pass current route to implement page transitions
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
