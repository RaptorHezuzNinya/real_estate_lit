Basic router that calls a callback whenever the location is updated.

Example:

      import { installRouter } from 'pwa-helpers/router.js';

      installRouter((location) => handleNavigation(location));

For example, if you're using this router in a Redux-connected component,
you could dispatch an action in the callback:

      import { installRouter } from 'pwa-helpers/router.js';
      import { navigate } from '../actions/app.js';

      installRouter((location) => store.dispatch(navigate(location)))

If you need to force a navigation to a new location programmatically, you can
do so by pushing a new state using the History API, and then manually
calling the callback with the new location:

      window.history.pushState({}, '', '/new-route');
      handleNavigation(window.location);

Optionally, you can use the second argument to read the event that caused the
navigation. For example, you may want to scroll to top only after a link click.

      installRouter((location, event) => {
        // Only scroll to top on link clicks, not popstate events.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
        handleNavigation(location);
      });
