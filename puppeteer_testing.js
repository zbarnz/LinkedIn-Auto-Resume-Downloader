/*
var lastScrollHeight = 0; 
function autoScroll() { 
  var sh = document.documentElement.scrollHeight; 
  if (sh != lastScrollHeight) { 
    lastScrollHeight = sh; 
    document.documentElement.scrollTop = sh; 
  } 
} 
window.setInterval(autoScroll, 100); 
*/
//scrolls to the bottom

/*
let names = document.querySelectorAll('.mn-connection-card__name')
for(i=0 ; i < names.length ; i++){
  names[0].click()
  window.addEventListener('load' , function getResume(){
  window.history.back
  })
}

let test = document.querySelectorAll('.pv-s-profile-actions--save-to-pdf')
test[0].click()
*/
/*
var links = document.querySelectorAll('.mn-connection-card__link')
for(i=0 ; i < names.length ; i++){
  var getDownloads = links[i].href
  var htmlcode;
  console.log(getDownloads);
}
*/
const puppeteer = require("puppeteer");
const jszip = require("jszip");

async function scrape(url) {
  const browser = await puppeteer.launch();
  for (let i = 0; i < 3; i++) {
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForNavigation();

    const [el] = await page.$x("/html/head/title");
    const txt = await el.getProperty("textContent");
    const rawTxt = await txt.jsonValue();

    console.log({ rawTxt });
    await page.close();
  }
  await browser.close();
}

scrape("https://www.linkedin.com/in/nicholaspurcellbusiness/");
