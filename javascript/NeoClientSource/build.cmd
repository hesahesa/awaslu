@echo off

:: Set the correct path
cd %~dp0
mkdir build

:: Compile the javascript
del ..\NeoClient\client.js
for /r "..\NeoClientSource\" %%F in (*.js) do type "%%F" >> ../NeoClient/client.js

:: Create a minified verison using the Google closure compiler
call java -jar compiler.jar --js ../NeoClient/client.js --js_output_file ../NeoClient/client.min.js