
if (typeof browser !== 'undefined' && browser.storage) {
    // Use the storage API
    browser.storage.sync.set({
        'key': 'value'
    }, function() {
        if (browser.runtime.lastError) {
            console.error("Error: " + browser.runtime.lastError);
        } else {
            console.log("Data has been saved to sync storage");
        }
    });
} else {
    console.error("Storage API is not available");
}











async function testpull() {
    let onBool = await browser.storage.sync.get('buttonOn');
    console.log(onBool);
}

async function testpush(bool) {
    await browser.storage.sync.set({
        buttonOn: bool
    });
}