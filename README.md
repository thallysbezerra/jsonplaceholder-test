<!-- prettier-ignore -->
# Development Stack

-   Code editor: Visual Studio Code
-   Code formatters: EditorConfig file and Prettier plugin
-   Code suggestions: ESLint plugin
-   CSS preprocessor: SASS/SCSS with CSS3 concepts
-   Lib/Framework: React.js using create-react-app (Webpack as bundler, and Babel as ECMAScript compiler)
-   Markup language: JSX/HTML5
-   Package manager: NPM or Yarn
-   Server: Node.js

**CSS**

-   Animations using `@keyframes` with `cubic-bezier` and `transition`
-   Arrow icon animated made with HTML and CSS
-   BEM methodology (Block Element Modifier)
-   Media-queries with breakpoints inside selector, focuses on future maintenance
-   CSS files organized on the same `.js` file directory and with same name, focused on future maintenances
-   CSS Flexbox to positioning some internal structures
-   CSS Grid with repeat notation to define external structure
-   CSS properties in alphabetical order to prevent duplicity
-   Font-family `Bitter` imported from Google Fonts CDN
-   Layout designed with mMobile first, using four breakpoints: mobile (til 767px), portrait tablet (as from 768px), landscape tablet (as from 1024px) and desktop (as from 1280px)
-   Loading animation with pure CSS
-   Mobile-first with breakpoints definitions using `@mixin`
-   SASS/SCSS using `node-sass` as Webpack dependency

**HTML**

-   Some contents imported from external API
-   Static contents imported from mocked JSON
-   Semantic Web focused on good practices

**Javascript**

-   Directories organized in `/widgets` for modules and `/components` for components
-   Dynamics lists done with `.map` directly on JSX, imported from external API
-   External API using AJAX with Fetch, and UI of loading as feedback
-   Stateless components on widgets and components without high complexity data interaction, focused on performance

# Instructions to run local

-   `npm i` or `yarn` on root directory to install dependencies
-   `npm start` or `yarn start` to run the project
