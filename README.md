A very simple webpack example.

Build with:
webpack scripts/main.js html/bundle.js

Open index.html in your browser.

Key ideas:
0. Utility functions and stuff no specific to this project in separate files.  Could improve by moving to npm packages.
0. Variables needed in a file are required in that file rather than being global.
0. Many files for devs but still only one script tag/HTTP request.
