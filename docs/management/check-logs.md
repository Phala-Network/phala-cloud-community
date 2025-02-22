---
title: Check Logs
parent: CVM Management
nav_order: 1
permalink: /docs/management/check-logs
---

# Check Logs

There are two type of logs in Phala TEE cloud. The CVM log and the docker logs.

**CVM log**: By clicking on the **Serial Logs** in the CVM card, you can view the CVM log. The CVM log allows you to see how your application is bootstrapped, such as generating the default RA report and downloading Docker images.

![cvm-log]({{ site.baseurl }}/docs/imgs/cvm-log.png)

**Docker logs:** This is your application's output log. If you chose to make your Docker logs public during deployment in the **Advanced Features** section, anyone with the log URL can view the logs. To view the log, go to the detailed page and navigate to the **Containers** section.

![container-log]({{ site.baseurl }}/docs/imgs/container-log.png)