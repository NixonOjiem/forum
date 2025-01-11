@echo off
setlocal

:: Variables
set DB_NAME=forum
set DB_USER=root
set BACKUP_DIR=C:\  :: Backup directory
set BACKUP_FILE=%BACKUP_DIR%%DB_NAME%-%date:~-4,4%-%date:~-10,2%-%date:~-7,2%.sql

:: Prompt for MySQL password
set /p DB_PASS="Enter MySQL password for user '%DB_USER%': "

:: Check if the database exists
mysql -u %DB_USER% -p%DB_PASS% -e "SHOW DATABASES LIKE '%DB_NAME%';" >nul 2>&1
if %errorlevel% neq 0 (
    echo Database '%DB_NAME%' does not exist.
    exit /b
)

echo Database '%DB_NAME%' exists. Backing up...

:: Backup the database
mysqldump -u %DB_USER% -p%DB_PASS% %DB_NAME% > "%BACKUP_FILE%"
if %errorlevel% neq 0 (
    echo Backup failed.
    exit /b
)

echo Backup successful: %BACKUP_FILE%

:: Drop the database
mysql -u %DB_USER% -p%DB_PASS% -e "DROP DATABASE %DB_NAME%;"
if %errorlevel% neq 0 (
    echo Failed to drop database '%DB_NAME%'.
    exit /b
)

echo Database '%DB_NAME%' has been dropped.

endlocal