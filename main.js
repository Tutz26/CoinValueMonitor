// const { Console } = require('node:console');
const prompts = require('prompts');
// const prompt = require('prompt-sync')({sigint: true});
const puppeteer = require('puppeteer');


let urlExtension;
let timeOutTime;

(async ()=>{

    // MESSAGES WELCOME:
    console.log("Welcome to the coin consultor, please type the number as required and then press Intro after selecting your choice:");
    console.log("Press 'q' at any time to exit.");
    
   
    // Choice selection for hyperlink concatenation

    let cryptoChoice = await prompts({
        type: 'number',
        name: 'value',
        message: '1. Bitcoin \n 2. Ethereum \n 3. Tether \n 4. Binance Coin \n 5. Cardano \n 6. Dogecoin \n 7. XRP \n 8. Polkadot \n 9. USD Coin \n 10. Bitcoin Cash \n 11. Litecoin \n 12. Polygon \n 13. Chainlink \n 14. Stellar \n 15. Solana \n 16. THETA \n 17. TRON',
        validate: value => value > 18 || value < 1 ? 'Please enter a valid choice' : true
    });
    
    // console.log(`before switch ${cryptoChoice.value}`);
    
    //#region Switch for choice:
    
    switch(cryptoChoice.value)
    {
        case 1:
            urlExtension = 'bitcoin';
            break;
        case 2:
            urlExtension = 'ethereum';
            break;
        case 3:
            urlExtension = 'tether';
            break;
        case 4:
            urlExtension = 'binance-coin';
            break;
        case 5:
            urlExtension = 'cardano';
            break;
        case 6:
            urlExtension = 'dogecoin';
            break;
        case 7:
            urlExtension = 'xrp';
            break;
        case 8:
            urlExtension = 'polkadot-new';
            break;
        case 9:
            urlExtension = 'usd-coin';
            break;
        case 10:
            urlExtension = 'bitcoin-cash';
            break;
        case 11:
            urlExtension = 'litecoin';
            break;
        case 12:
            urlExtension = 'polygon';
            break;
        case 13:
            urlExtension = 'chainlink';
            break;
        case 14:
            urlExtension = 'stellar';
            break;
        case 15:
            urlExtension = 'solana';
            break;
        case 16:
            urlExtension = 'theta';
            break;
        case 17:
            urlExtension = 'tron';
            break;
    }
    //#endregion
    
    // console.log(`after switch ${urlExtension}`);
    
    // Amount of seconds to wait for interval
    
    let secondsChoice =  await prompts({
        type: 'number',
        name: 'time',
        message: 'Type how many seconds would you like to wait for every refresh.',
        validate: time => time/1 != time ? 'Please enter a valid number' : true
    });
    
    timeOutTime = parseInt(secondsChoice.time) * 1000;
    
    // Run browser and look for information in coinmarketcap
    const browser = await puppeteer.launch();

    
    const page = await browser.newPage();
    await page.goto(`https://coinmarketcap.com/es/currencies/${urlExtension}/`);
    
    let getValueFromWebsite = function(){

        (async ()=>{
            
            // await page.waitForTimeout(1000);

            let value = await page.$eval(".priceValue___11gHJ", elemnt => elemnt.textContent);

            console.log(`The value of ${urlExtension} in USD is $${value}.`);

        })().catch((err) => {
            console.error(err);
        });
    };
    
    console.log(`https://coinmarketcap.com/es/currencies/${urlExtension}/`);

    let myInterval = setInterval(getValueFromWebsite, timeOutTime);

    let exitInput =  await prompts({
        type: 'text',
        name: 'input',
        message: 'Press q at any time to exit. \n'
    });;

    while(exitInput.input !== 'q')
    {
        exitInput =  await prompts({
            type: 'text',
            name: 'input',
            message: ''
        });
    }    

    // await page.waitForTimeout(1000);
    
    clearInterval(myInterval);
    await browser.close();

})().catch((err) => {
    console.error(err);
});