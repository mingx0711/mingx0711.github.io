const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
    const browser = await puppeteer.launch({
    });

    const page = await browser.newPage();

    const filePath = 'file:///C:/Users/ming/Documents/geren/projects/latintroduce/EN_poster.html'; // change this
    await page.goto(filePath, {
        waitUntil: "networkidle0"
    });

    await page.screenshot({
        path: "EN_poster.png",
        fullPage: true,
        type: "png"       // lossless, best for sharp text
        // omitBackground: true, // uncomment if you want transparency
    });

    await browser.close();
})();
