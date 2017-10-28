# navscroll-js

Check the <a href="http://localhost:8000/examples/example.html">demo</a> 

## Installing

This package is available on npm.

Using npm:
```bash
npm install --save navscroll
```

Using yarn:
```bash
yarn add navscroll
```

Directly include it in html:
```html
<!-- Browsers with ES module support load this file. -->
<script type="module" src="node_modules/navscroll/navscroll.js"></script>

<!-- Older browsers load this file (and module-supporting -->
<!-- browsers know *not* to load this file). -->
<script nomodule src="node_modules/navscroll/navscroll-legacy.js"></script>
```

<p class="warning" style="background: rgba(0,255,0,.05);border-radius: 3px;padding: 1.5em;">
    Warning! The only gotcha here is Safari 10 doesn’t support the nomodule attribute, but you can solve this by <a href="https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc">inlining a JavaScript snippet</a> in your HTML prior to using any <code>&#x3C;script nomodule&#x3E;</code> tags. (Note: this has been fixed in Safari 11).
</p>

<p class="tip" style="background-color: #DCF2FD;color: #618ca0;padding: 0.75em 1em;">
    When including it in html, it will automatically call `Vue.use` and also set a `NavScroll` variable on the window object that you can use !
</p>

