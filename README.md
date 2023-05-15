## Setup
```
npm install
npm run build
```

## Dev server
```
npm run dev
```
Both `http://localhost:5173` and `http://localhost:5173/index-build.html` should display "Hello from Web Component!".

## External web server
```
<start the /public/index-build.html with a web server, e.g. VS code Live server>
```

If you now visit /public/index-build.html, the web component does not load and console says `Uncaught ReferenceError: process is not defined`.
