import {
    app,
    BrowserWindow,
    ipcMain,
} from 'electron';
import path from 'path';

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    await win.loadFile('index.html');
};

void app.whenReady().then(async () => {
    ipcMain.handle('ping', () => 'pong');
    await createWindow();

    app.on('activate', async () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            await createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
