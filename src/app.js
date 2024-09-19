import page from '@page/page.mjs'
import { html, render } from '@lit/lit-html.js'
// import { classMap } from '@lit/directives/class-map.js'
// import { styleMap } from '@lit/directives/style-map.js'
// import { until } from '@lit/directives/until.js'

import * as userApi from './services/users-api.js'
window.userApi =  userApi
page('/index.html', homeView)

page.start()

function homeView() {
    render(html`<h1>Hello World</h1>`, document.body)
}