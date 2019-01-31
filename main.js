const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600 });

    // et charge le index.html de l'application.
    win.loadFile('main.html');

    win.on('closed', () => {
        win = null
    });

    win.on('yolo', () => {
        app.quit()
    });
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit()
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});


ipcMain.on('quit-app', (event, arg) => {
    app.quit()
});