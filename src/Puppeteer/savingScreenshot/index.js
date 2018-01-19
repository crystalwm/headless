const puppeteer = require('puppeteer');
console.log(puppeteer.executablePath());

(async() => {
    const browser = await puppeteer.launch({
        headless: false ,
        executablePath: "C:/Users/cwei/AppData/Local/Chromium/Application/chrome.exe"
    });
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    await page.screenshot({ path: 'baidu.png' });

    await browser.close();
})();