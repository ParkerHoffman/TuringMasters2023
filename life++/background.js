async function testpull() {
    let onBool = await chrome.storage.sync.get('buttonOn');
    console.log(onBool);
}

async function testpush(bool) {
    await chrome.storage.sync.set({
        buttonOn: bool
    });
}