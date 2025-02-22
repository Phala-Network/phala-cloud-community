---
title: Upgrade Application
parent: CVM Management
nav_order: 4
permalink: /docs/management/upgrade-application
---

# Upgrade Application

Your application is upgradable even when running inside a TEE. Thanks to the flexible design of the Dstack SDK, the application is not locked into specific hardware. To execute an upgrade, you need to click **Shutdown** on your CVM, then click **Upgrade** to enter the upgrade window.

![upgrade-cvm]({{ site.baseurl }}/docs/imgs/upgrade-cvm.png)

In the upgrade window, you need to set the new Docker Compose file and environment variables for your application. Note that the **new environment variables will completely override the old ones**, so you must also include any variables you do not intend to update. Once you've set everything, click the **Upgrade** button to execute the upgrade. **After the upgrade is complete, you'll need to start the CVM manually**.

![update-env]({{ site.baseurl }}/docs/imgs/update-env.png)
