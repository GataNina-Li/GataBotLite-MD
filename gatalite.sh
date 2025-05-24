# Código creado por @gata_dios      

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución     
COMANDOS = "pkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/GataNina-Li/GataBotLite-MD\ncd GataBotLite-MD\nyarn install\nnpm install\nnpm start"

echo -e "\e[35m
─█▀▀█ ───░█ ░█─░█ ░█▀▀▀█ ▀▀█▀▀ ░█▀▀▀ 　 ░█─── ─█▀▀█ 　 ░█▀▀█ ─█▀▀█ ░█▄─░█ ▀▀█▀▀ ─█▀▀█ ░█─── ░█─── ─█▀▀█ 
░█▄▄█ ─▄─░█ ░█─░█ ─▀▀▀▄▄ ─░█── ░█▀▀▀ 　 ░█─── ░█▄▄█ 　 ░█▄▄█ ░█▄▄█ ░█░█░█ ─░█── ░█▄▄█ ░█─── ░█─── ░█▄▄█ 
░█─░█ ░█▄▄█ ─▀▄▄▀ ░█▄▄▄█ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█─░█ 　 ░█─── ░█─░█ ░█──▀█ ─░█── ░█─░█ ░█▄▄█ ░█▄▄█ ░█─░█

▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀█\n\e[0m" 

echo -e "\033[01;93mPreparando instalación...\nPreparing installation...\n\033[0m"
echo -e "\033[01;32m\033[01mInstalando dependencias!!\nInstalling dependencies!!\n\033[0m" 
echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █ ▀█▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▄█ █ ░█░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33mGit ya estaba instalado anteriormente.\nGit was already installed previously.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Git. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mGit se ha instalado correctamente.\nGit has been installed successfully.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄ █▀▀ ░ ░░█ █▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▄█ █▄▀ ██▄ ▄ █▄█ ▄█\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33mNodejs ya estaba instalado anteriormente.\nNodejs was already installed previously.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Node.js. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js se ha instalado correctamente.\nNode.js has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █▀▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▀░ █▀░ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[01;33mFfmpeg ya estaba instalado anteriormente.\nFfmpeg was already installed previously.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mFFmpeg se ha instalado correctamente.\nFFmpeg has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █ █▀▄▀█ ▄▀█ █▀▀ █▀▀ █▀▄▀█ ▄▀█ █▀▀ █ █▀▀ █▄▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █ █░▀░█ █▀█ █▄█ ██▄ █░▀░█ █▀█ █▄█ █ █▄▄ █░█\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[01;33mImagemagick ya estaba instalado anteriormente.\nImagemagick was already installed previously.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mImageMagick se ha instalado correctamente.\nImageMagick has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄█ ▄▀█ █▀█ █▄░█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33mYarn ya estaba instalado anteriormente.\nYarn was already installed previously.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mYarn se ha instalado correctamente.\nYarn has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
░░░░░░░░░░░░░░░░░░░░░▄▀░░▌
░░░░░░░░░░░░░░░░░░░▄▀▐░░░▌
░░░░░░░░░░░░░░░░▄▀▀▒▐▒░░░▌
░░░░░▄▀▀▄░░░▄▄▀▀▒▒▒▒▌▒▒░░▌
░░░░▐▒░░░▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░▌▒░░░░▒▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄
░░░░▐▒░░░░░▒▒▒▒▒▒▒▒▒▌▒▐▒▒▒▒▒▀▄
░░░░▌▀▄░░▒▒▒▒▒▒▒▒▐▒▒▒▌▒▌▒▄▄▒▒▐
░░░▌▌▒▒▀▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒█▄█▌▒▒▌
░▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▄▀█▌▒▒▒▒▒▀▀▒▒▐░░░▄
▀▒▒▒▒▌▒▒▒▒▒▒▒▄▒▐███▌▄▒▒▒▒▒▒▒▄▀▀▀▀
▒▒▒▒▒▐▒▒▒▒▒▄▀▒▒▒▀▀▀▒▒▒▒▄█▀░░▒▌▀▀▄▄
▒▒▒▒▒▒█▒▄▄▀▒▒▒▒▒▒▒▒▒▒▒░░▐▒▀▄▀▄░░░░▀
▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▄▒▒▒▒▄▀▒▒▒▌░░▀▄
▒▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▒▀▀▀▀▒▒▒▄▀

▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ 
░▒█░░ ▒█░░▒█ ▒█░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█▄▄▀ ▒█▀▀▀ ▒█░░░ ░▒█░░ ▒█░░▒█ 
░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█ 　 ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ░▒█░░ ▒█▄▄▄█

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"
echo -e "\033[01;32m\033[01m\nTodas las dependencias se han instalado correctamente.\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m
──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█

██╗░░██╗░░██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
╚██╗░╚██╗░╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
░╚██╗░╚██╗░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
░██╔╝░██╔╝░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██╔╝░██╔╝░██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝░░╚═╝░░╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝ 

██╗░░██╗░░  ░██████╗░░█████╗░████████╗░█████╗░██████╗░░█████╗░████████╗  ██╗░░░░░██╗████████╗███████╗
╚██╗░╚██╗░  ██╔════╝░██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝  ██║░░░░░██║╚══██╔══╝██╔════╝
░╚██╗░╚██╗  ██║░░██╗░███████║░░░██║░░░███████║██████╦╝██║░░██║░░░██║░░░  ██║░░░░░██║░░░██║░░░█████╗░░
░██╔╝░██╔╝  ██║░░╚██╗██╔══██║░░░██║░░░██╔══██║██╔══██╗██║░░██║░░░██║░░░  ██║░░░░░██║░░░██║░░░██╔══╝░░
██╔╝░██╔╝░  ╚██████╔╝██║░░██║░░░██║░░░██║░░██║██████╦╝╚█████╔╝░░░██║░░░  ███████╗██║░░░██║░░░███████╗
╚═╝░░╚═╝░░  ░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░░╚════╝░░░░╚═╝░░░  ╚══════╝╚═╝░░░╚═╝░░░╚══════╝\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/Niideaxddd-Bot/MauBotv1.0.git
echo -e "\033[01;32m\033[01mLa clonación se ha descargado e instalado correctamente.\nThe clone has been downloaded and installed successfully.\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando al directorio del repositorio!!\nChanging to the repository directory!!\n\033[0m" 
cd MauBot-v1.0

echo -e "\e[36m
█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀   █▄█ ▄▀█ █▀█ █▄░█
█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

echo -e "\033[0;34mSe actualizará yarn automáticamente. Esto puede tomar tiempo, Espere por favor.\nIt will update yarn automatically. This may take time, please wait..\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mYarn se ha actualizado correctamente.\nYarn has been successfully updated.\n\033[0m" 
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄▀█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▀▀ █░▀░█\n\e[0m"

echo -e "\033[0;34mSe instalará NPM automáticamente. Espere un momento por favor.\nNPM will be installed automatically. Wait a moment please.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar NPM. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mNPM se ha instalado correctamente..\n\033[0m" 
fi

clear
echo -e "\e[36m
░█▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ▀█▀ ─█▀▀█ ░█▀▀▀█ 　 ░█▀▀█ ░█▀▀▀█ ░█▀▀█ 　 ░█▀▀▀█ ░█─░█ 
░█─▄▄ ░█▄▄▀ ░█▄▄█ ░█─── ░█─ ░█▄▄█ ─▀▀▀▄▄ 　 ░█▄▄█ ░█──░█ ░█▄▄▀ 　 ─▀▀▀▄▄ ░█─░█ 
░█▄▄█ ░█─░█ ░█─░█ ░█▄▄█ ▄█▄ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ░█▄▄▄█ ─▀▄▄▀ 

░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ▀█▀ ─█▀▀█ 
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█─ ░█▄▄█ 
░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ▄█▄ ░█─░█


▀▀█▀▀ ░█─░█ ─█▀▀█ ░█▄─░█ ░█─▄▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▀█ ░█▀▀█ 　 ░█──░█ ░█▀▀▀█ ░█─░█ ░█▀▀█ 
─░█── ░█▀▀█ ░█▄▄█ ░█░█░█ ░█▀▄─ ─▀▀▀▄▄ 　 ░█▀▀▀ ░█──░█ ░█▄▄▀ 　 ░█▄▄▄█ ░█──░█ ░█─░█ ░█▄▄▀ 
─░█── ░█─░█ ░█─░█ ░█──▀█ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ──░█── ░█▄▄▄█ ─▀▄▄▀ ░█─░█ 

░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ░█▀▀▀ 
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█▀▀▀ 
░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ░█▄▄▄\n\e[0m"

echo -e "\e[31m
_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
_________░▒▓██
_______░▒▓██
_____░▒▓██\n\e[0m"
    
echo -e "\033[01;32m\033[01mIniciando GataBotLite!!\nStarting GataBotLite!!\n\033[0m"
npm start
