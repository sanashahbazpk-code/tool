@echo off
REM ---------------------------------------------------------------------------
REM  seo-tool launcher
REM
REM  Usage:
REM     run.cmd audit example.com
REM     run.cmd research example.com --competitors a.com,b.com --xlsx
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion

set "TOOLDIR=%~dp0"
set "SEOSCRIPT=%TOOLDIR%seo.py"

REM 1) explicit override
if defined SEOTOOL_PYTHON if exist "%SEOTOOL_PYTHON%" (
    set "PYTHON=%SEOTOOL_PYTHON%"
    goto :run
)

REM 2) DeepSeek Harness bundled runtime (has lxml + openpyxl)
for %%P in (
    "%USERPROFILE%\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
    "%LOCALAPPDATA%\dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
) do (
    if exist "%%~P" (
        set "PYTHON=%%~P"
        goto :run
    )
)

REM 3) whatever python is on PATH (seo.py will re-launch itself if lxml is missing)
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
echo Could not find any Python interpreter.
echo Set one explicitly, for example:
echo     set SEOTOOL_PYTHON=C:\Path\To\python.exe
echo     run.cmd audit example.com
echo.
exit /b 3

:run
"%PYTHON%" "%SEOSCRIPT%" %*
exit /b %ERRORLEVEL%
