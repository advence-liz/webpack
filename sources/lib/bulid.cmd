@echo off
title build lib.bundle.js

goto choice

:continue&leave
 echo Y:continue,N:leave
 choice
 if errorlevel 2 exit
 if errorlevel 1 goto choice

:choice
 echo E:exit,C:build compress,B:build project.
 choice/c:ecb 
 if errorlevel 3 goto build
 if errorlevel 2 goto compress
 if errorlevel 1 goto exit



:compress 
 echo build&compress!
 node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.min.js
 goto continue&leave

:build
 echo build!
 node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.js
 goto continue&leave

