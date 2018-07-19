@echo off
title build lib.bundle.js
echo "build lib.bundle.js"
goto choice

:continue&leave
 echo Y:continue,N:leave
 choice
 if errorlevel 2 exit
 if errorlevel 1 goto choice

:choice
 echo B:"bulid",C:"build&compress",E:"exit""
 choice/c:bce
 if errorlevel 3 goto E
 if errorlevel 2 goto C
 if errorlevel 1 goto B

:C 
 echo "build&compress!"
 node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.min.js
 echo "build&compress done!"
 goto continue&leave

:B
 echo "build!"
 node ..\..\node_modules\webpack\bin\webpack  --config webpack.lib.js
 echo "build done!"
 goto continue&leave

