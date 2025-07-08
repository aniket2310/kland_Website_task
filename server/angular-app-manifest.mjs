
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kland_Website_task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/kland_Website_task/login",
    "route": "/kland_Website_task"
  },
  {
    "renderMode": 2,
    "route": "/kland_Website_task/login"
  },
  {
    "renderMode": 2,
    "route": "/kland_Website_task/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27980, hash: '7269d452d0a29b26b912ed10f229de14d616cd80c5fb87346853a42139b3e44f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17139, hash: '9e566d7f2e9c85859a5b47bdf7db3d0608ea68f640477bcdd1d072dfa2172836', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 50070, hash: '4da5248de36f8fdee96dc56e2b65344254f9b287fa42e9a1ec6dc90edce65b08', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 38942, hash: '65a71e3c6fbf027b5665615b220a6242ba90cb74e220bfa00944928633b0a8da', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-W6OMW5XE.css': {size: 322615, hash: 'gzGKG5i0F/g', text: () => import('./assets-chunks/styles-W6OMW5XE_css.mjs').then(m => m.default)}
  },
};
