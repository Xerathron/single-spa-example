import * as singleSpa from 'single-spa';

singleSpa.registerApplication({
    name: 'foo',
    app: () => import('./micro-frontends/foo.js'),
    activeWhen: '/foo',
})

singleSpa.registerApplication({
    name: 'bar',
    app: () => import('./micro-frontends/bar.js'),
    activeWhen: '/bar',
})

window.openFoo = () => {
    singleSpa.navigateToUrl("/foo");
}

window.openBar = () => {
    singleSpa.navigateToUrl("/bar");
}

singleSpa.start();
