import puppeteer from "puppeteer";
const ua = "NodBot";
let url = "https://antivirus.uclv.cu/nod32/update_all/";
async function goSite() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setUserAgent(ua);
  await page.goto(url);
  await page.$$eval("tr.even>td.indexcolname>a", (elements) => {
    elements.shift();
    elements.forEach((el, index) => {
      let interval = 2500;
      setTimeout(() => {
        console.log(`Downloading ${el}`);
        el.click();
      }, index * interval);
    });
  });
}
goSite();
