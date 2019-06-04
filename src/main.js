// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Layout.vue';
import '~/assets/vendor/bootstrap/css/bootstrap.min.css';
import '~/assets/vendor/font-awesome/css/all.min.css';
import '~/assets/scss/main.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  });
}
