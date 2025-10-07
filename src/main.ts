import {app, BrowserWindow} from 'electron';

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    await win.loadFile('index.html');
};

void app.whenReady().then(async () => {
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
