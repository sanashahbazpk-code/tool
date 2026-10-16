@echo off
REM ---------------------------------------------------------------------------
REM  seo-tool web UI launcher
REM
REM  Double-click this file, or run:
REM     serve_web.cmd
REM     serve_web.cmd --port 9000
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion

set "TOOLDIR=%~dp0"
set "WEBSCRIPT=%TOOLDIR%serve_web.py"

if defined SEOTOOL_PYTHON if exist "%SEOTOOL_PYTHON%" (
    set "PYTHON=%SEOTOOL_PYTHON%"
    goto :run
)

for %%P in (
    "%USERPROFILE%\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
    "%LOCALAPPDATA%\dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
) do (
    if exist "%%~P" (
        set "PYTHON=%%~P"
        goto :run
    )
)

where python >nul 2>nul
if %ERRORLEVEL%==0 (
    set "PYTHON=python"
    goto :run
)

where py >nul 2>nul
if %ERRORLEVEL%==0 (
    set "PYTHON=py"
    goto :run
)

echo.
echo Koi Python interpreter nahi mila.
echo Ye set karein:  set SEOTOOL_PYTHON=C:\Path\To\python.exe
echo.
pause
exit /b 3

:run
title SEO Jaiza Tool
"%PYTHON%" "%WEBSCRIPT%" %*
echo.
pause
