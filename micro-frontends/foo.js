import singleSpaHtml from 'single-spa-html';

const htmlLifecycles = singleSpaHtml({
  template: '<p>foo</p>',
})

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;