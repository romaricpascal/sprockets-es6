// Import a module from the `public` folder
// Note that despite being loaded in the middle of `application.js`
// This `import` is hoisted to the top of the file by the browser
// (https://exploringjs.com/es6/ch_modules.html#_imports-are-hoisted,
// didn't manage to find the ref in the TC39 spec though)
import '/to-import.mjs'
// Little `console.log` to tell us that the code has been added to `application.js`
console.log('Exporting module loaded')
// Use of `import.meta` which is only available in modules
console.log(import.meta.url)
// An export statement that may come from a library leaving both exporting things to `window`
// and allowing to be `import`ed. This will require the script to be loaded with `<script type="module">`,
// otherwise, it'll raise an error when the script is interpreted
export const HELLO = 'world'

