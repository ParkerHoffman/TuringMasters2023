async function testpull() {
    let onBool = await browser.storage.sync.get('buttonOn');
    console.log(onBool);
}

async function testpush(bool) {
    await browser.storage.sync.set({
        buttonOn: bool
    });
}