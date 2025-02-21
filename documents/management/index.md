---
title: CVM Management
nav_order: 5
---

# 💊 CVM Management

### Check Logs

There are two type of logs in Phala TEE cloud. The CVM log and the docker logs.

**CVM log**: By clicking on the **Serial Logs** in the CVM card, you can view the CVM log. The CVM log allows you to see how your application is bootstrapped, such as generating the default RA report and downloading Docker images.

![cvm-log]({{ site.baseurl }}/imgs/cvm-log.png)

**Docker logs:** This is your application's output log. If you chose to make your Docker logs public during deployment in the **Advanced Features** section, anyone with the log URL can view the logs. To view the log, go to the detailed page and navigate to the **Containers** section.

![container-log]({{ site.baseurl }}/imgs/container-log.png)

### Set Private Log Viewer

In most cases, you may not want anyone except specific individuals to see the logs. To make your Docker logs private, you can configure a log viewer in the Docker Compose file. For example, you can use the open-source log viewer [Dozzle](https://github.com/amir20/dozzle).

1. Generate user data
    
    On your local machine, generate a Dozzle user authority token using the Dozzle container by running the following command. In this example, we set the username as "Admin," the password as "secret," and the role as "admin.”
    
    ```python
    docker run amir20/dozzle generate --name Admin --email me@email.net --password secret admin | base64 -w 1000
    ```
    
2. Then, setup Dozzle in Docker compose file.
    
    ```python
    services:
      # Viewable logs with dozzle
      setup:
        image: busybox
        restart: "no"
        volumes:
          - dozzle-data:/dozzle-data/
        command: >
          sh -c 'echo "use authority token" | base64 -d > /dozzle-data/users.yml || true'
    
      dozzle:
        container_name: dozzle
        image: amir20/dozzle:latest
        depends_on:
          - setup
        environment:
          - DOZZLE_AUTH_PROVIDER=simple
        volumes:
          - /var/run/docker.sock:/var/run/docker.sock
          - dozzle-data:/data/
        ports:
          - 8080:8080
    ```
    
3. Once the application is running, you will only be able to view the logs using the username and password you set earlier, accessed through the relevant container's public endpoint.

### Monitor Your Application

It's beneficial to have a way to monitor your application, allowing you to check resource usage, network traffic, and more. For instance, by setting up a node-exporter service in your Docker Compose file, you can connect it with Grafana to enable real-time monitoring.

```python
  # Grafana metrics with node_exporter
  services:
	  node_exporter:
	    image: quay.io/prometheus/node-exporter:latest
	    container_name: node_exporter
	    command:
	      - '--path.rootfs=/host'
	    network_mode: host
	    pid: host
	    restart: unless-stopped
	    volumes:
	      - '/:/host:ro,rslave'
	
```

### Upgrade Application

Your application is upgradable even when running inside a TEE. Thanks to the flexible design of the Dstack SDK, the application is not locked into specific hardware. To execute an upgrade, you need to click **Shutdown** on your CVM, then click **Upgrade** to enter the upgrade window.

![upgrade-cvm](/imgs/upgrade-cvm.png)

In the upgrade window, you need to set the new Docker Compose file and environment variables for your application. Note that the **new environment variables will completely override the old ones**, so you must also include any variables you do not intend to update. Once you've set everything, click the **Upgrade** button to execute the upgrade. **After the upgrade is complete, you'll need to start the CVM manually**.

![update-env]({{ site.baseurl }}/imgs/update-env.png)

### Resize Resource

Phala TEE Cloud supports adjusting compute resources on demand. To do this, click **Resize** on the CVM card and adjust the resources as needed. Remember, you must shut down the CVM before executing the resize, and then start it again after the changes are saved.

![resize-cvm]({{ site.baseurl }}/imgs/resize-cvm.png)