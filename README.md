<p align="center"> 
<img src="https://raw.githubusercontent.com/thecelion/FOX-MD/master/media/menus/Menu1.jpg" alt="FOX-MD" width="500"/>
</p>
<p align="center">
<a href="https://github.com/thecelion/FOX-MD"><img title="FOX-MD" src="https://img.shields.io/badge/⚡ Please do not use it. ⚡ -red?colorA=%233CCED8&colorB=%233CCED8&style=for-the-badge"></a>
</p>
  
#### DISPONIBLE EN:
> - [x] TERMUX, WINDOWS


[`♻️ App Termux`](https://github.com/termux/termux-app/releases)
### 🌼 INSTALACIÓN MANUAL - TERMUX 🌼
```bash
termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/thecelion/FOX-MD 
cd FOX-MD
yarn install
npm install
npm start
```

### 🍁 TERMUX 24/7 🍁 
> Comandos para realizar una ejecución 24/7
- INICIAR
> Use estos comandos dentro de la carpeta GataBotLite-MD
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
```
- DETENER PM2
> Detener todos los procesos del bot
```bash
pm2 stop all && pm2 unstartup
```
- REANUDAR 
> Reanudar los procesos, usar dentro de la carpeta GataBotLite-MD 
```bash
pm2 start index.js 
```
- VISUALIZAR EL PROCESO
> Usar dentro de la carpeta GataBotLite-MD para ver en tiempo real
```bash
pm2 logs 
```
- ELIMINAR PROCESOS PM2
> Eliminar todos los procesos del bot. Para volver a usar PM2 debe volver a usar los comandos de INICIAR
```bash
pm2 delete all
```
> **Note** Demanda consumo de RAM y CPU, el resultado mejora mientras las especificaciones del dispositivo sean moderadas

## 🌻 INSTALACIÓN PARA WINDOWS/VPS/RDP 🌻
* Descargar e instala Git [`Aquí`](https://git-scm.com/downloads)
* Descargar e instala NodeJS [`Aquí`](https://nodejs.org/en/download)
* Descargar e instala FFmpeg [`Aquí`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instala ImageMagick [`Aquí`](https://imagemagick.org/script/download.php)
```bash
git clone https://github.com/GataNina-Li/GataBotLite-MD
cd GataBotLite-MD
npm install -g yarn
yarn
npm install 
npm start
```
### Instalación de FFmpeg para Windows 
* Descarga la siguiente versión de FFmpeg [`Aquí`](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z).
* Extraer FFmpeg con [`7-Zip`](https://www.7-zip.org/download.html)
* Cambie el nombre de la carpeta extraída a `FFmpeg`.
* Mover archivos a `C:\` path.
* Agregar la ruta ejemplo: `C:\ffmpeg\bin` al entorno de variable
* Ejecute el símbolo del sistema como administrador.
* Ejecute el siguiente comando:
```cmd
setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Si tiene éxito, le dará un mensaje como: `SUCCESS: specified value was saved`.
* Ahora que tiene FFmpeg instalado, verifique que funcionó ejecutando este comando para ver la versión:
```cmd
> ffmpeg -version
```
### Error en usar yarn en PowerShell
* Si usa la consola PowerShell y recibe este mensaje `No se puede cargar el archivo yarn.ps1 o yarn porque la ejecución de scripts está deshabilitada en este sistema.` al intentar usar `yarn` dentro de la carpeta del Bot puede usar estos comandos para cambiar la Política de ejecución de PowerShell en su sistema:
> Debe de ejecutar la consola como Administrador
```cmd
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
```
> Aparecerá un mensaje de advertencia preguntando si deseas cambiar la Política de ejecución. Confirma con "Y" y presiona Enter. Luego ya puede volver a ejecutar el comando `yarn`

### 🌟 CREADORA 
[![CEHunter](https://github.com/thecelion.png?size=100)](https://github.com/thecelion) 
