//var ourBrowser = browser; 
async function testpull() {
//    let onBool = await ourBrowser.storage.sync.get('buttonOn');
    let onBool = await browser.storage.sync.get('buttonOn');
    console.log(onBool);
}

async function testpush(bool) {
//    await ourBrowser.storage.sync.set({
    await browser.storage.sync.set({
        buttonOn: bool
    });
}