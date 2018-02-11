@echo off
color 2
echo entry lib.entry.js
echo using webpack.lib.min.js
title build lib 
REM node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.js
node ..\..\node_modules\.bin\webpack  --config webpack.lib.js