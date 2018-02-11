@echo off
color 2
echo entry lib.entry.js
echo using webpack.lib.js
title build lib 
node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.js