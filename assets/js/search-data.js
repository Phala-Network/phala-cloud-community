(function () {
  window.searchData = {
    
    
      "docs-migration-access-database": {
        "title": "Access Database",
        "content": "Access DatabasePhala TEE Cloud supports running a database locally or connecting to an external database. There is no difference in how you access a database compared to a general server. To save your data to disk, you need to configure volumes in the Docker Compose file and write data to the correct path, here is an example from Docker website.services:  backend:    image: example/database    volumes:      - db-data:/etc/data  backup:    image: backup-service    volumes:      - db-data:/var/lib/backup/datavolumes:  db-data:",
        "url": "http://localhost:4000/phala-cloud-community/docs/migration/access-database",
        "relUrl": "/docs/migration/access-database"
      },
    
      "docs-deployment-access-your-applications": {
        "title": "Access Your Applications",
        "content": "Access Your ApplicationsTo export your service publicly, you need to configure the PORT exposing when deploying your application. After deployment, click View Details in the top-right corner of the CVM instance card and switch to the Network tab below. You will see the list of Endpoint there. These URLs are generated automatically by parsing the PORT configurations in the Docker Compose file. The format for the URL prefix is &lt;app id or instance id&gt;-&lt;port&gt;.&lt;server cluster&gt;.phala.network:443.",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/access-your-applications",
        "relUrl": "/docs/deployment/access-your-applications"
      },
    
      "docs-management-check-logs": {
        "title": "Check Logs",
        "content": "Check LogsThere are two type of logs in Phala TEE cloud. The CVM log and the docker logs.CVM log: By clicking on the Serial Logs in the CVM card, you can view the CVM log. The CVM log allows you to see how your application is bootstrapped, such as generating the default RA report and downloading Docker images.Docker logs: This is your application’s output log. If you chose to make your Docker logs public during deployment in the Advanced Features section, anyone with the log URL can view the logs. To view the log, go to the detailed page and navigate to the Containers section.",
        "url": "http://localhost:4000/phala-cloud-community/docs/management/check-logs",
        "relUrl": "/docs/management/check-logs"
      },
    
      "docs-migration-create-crypto-wallet": {
        "title": "Create Crypto Wallet",
        "content": "Create Crypto WalletYou can derive a deterministic key using the Dstack Guest SDK inside Docker. Under the hood, the TappdClient derives the key from the application root key.from dstack_sdk import TappdClient# Initialize the clientclient = TappdClient()# Derive Key Account by given **derive** **path** and **alt names**result = await client.derive_key('/', 'alt names')",
        "url": "http://localhost:4000/phala-cloud-community/docs/migration/create-crypto-wallet",
        "relUrl": "/docs/migration/create-crypto-wallet"
      },
    
      "docs-deployment-debug-your-application": {
        "title": "Debug Your Application",
        "content": "Debug Your ApplicationWhen deploying your application on the Cloud UI, you can choose between two types of CVM base images: dstack-&lt;version&gt; and dstack-dev-&lt;version&gt;. The dev image allows you to log in to the CVM in the future for debugging purposes. If you opt for a non-dev image, rest assured that no one will have the ability to access your CVM, either physically or remotely.For example, to enable the use of tool ttypd for logging into your CVM from a web browser, you need to add a ttypd service to your Docker Compose file as shown below:services:  alpine-ttypd:    build: .    image: hackinglab/alpine-ttyd-bash:3.2    environment:    - AUTHOR=e1    - HL_USER_USERNAME=root    - HL_USER_PASSWORD=123QWEasd    ports:      - 7681:7681    volumes:      - /:/host    network_mode: hostYou can then view a specific endpoint for the ttypd service by navigating to “View Details” → “Network.” When you open this endpoint in your browser, you will see a terminal interface. The next step is to install the openssh-client.root@tdx:~ # **apk update &amp;&amp; apk add openssh-client**fetch https://dl-cdn.alpinelinux.org/alpine/v3.13/main/x86_64/APKINDEX.tar.gzfetch https://dl-cdn.alpinelinux.org/alpine/v3.13/community/x86_64/APKINDEX.tar.gzv3.13.12-98-g1d183746afa [https://dl-cdn.alpinelinux.org/alpine/v3.13/main]v3.13.12-94-g0551adbecc [https://dl-cdn.alpinelinux.org/alpine/v3.13/community]OK: 13906 distinct packages available(1/3) Installing openssh-keygen (8.4_p1-r4)(2/3) Installing libedit (20191231.3.1-r1)(3/3) Installing openssh-client (8.4_p1-r4)Executing busybox-1.32.1-r9.triggerOK: 280 MiB in 92 packagesYou can now log in to the CVM using the command ssh root@localhost. As shown below, you can retrieve information about running Docker containers by executing the command docker ps -a within the CVM.root@tdx:~ # **ssh root@localhost**The authenticity of host 'localhost (::1)' can't be established.RSA key fingerprint is SHA256:NKeb2o6243Tj+3dRA9CdQXIwxtXFQFeBN/mJDfetMZk.Are you sure you want to continue connecting (yes/no/[fingerprint])? yesWarning: Permanently added 'localhost' (RSA) to the list of known hosts.Welcome to Dstack!root@tdx:~# root@tdx:~# **docker ps -a**CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS          PORTS                               NAMESe011968e78d8   hackinglab/alpine-ttyd-bash:3.2   \"/init\"                  10 minutes ago   Up 10 minutes                                       tapp-alpine-ttypd-1f7acac54add8   kennethreitz/httpbin:latest       \"gunicorn -b 0.0.0.0…\"   2 weeks ago      Up 10 minutes   0.0.0.0:80-&gt;80/tcp, :::80-&gt;80/tcp   tapp-httpbin-1root@tdx:~# ",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/debug-your-application",
        "relUrl": "/docs/deployment/debug-your-application"
      },
    
      "docs-deployment-deploy-with-docker-compose": {
        "title": "Deploy with Docker Compose",
        "content": "Deploy with Docker ComposeSwitch to the Advanced tab in the deployment section to edit the Docker Compose file. Deploying with Docker Compose on Phala TEE Cloud is the same as on a general server. You can specify the image name, such as image: phalanetwork/eliza:v0.1.6-alpha.4, and configure the PORT exposing. You can also configure multiple services within the same Docker Compose file, and these Docker containers will run inside the same CVM.If you want to keep your Docker image private, we support private deployment. Check the Deploy with Private Docker Image section for more information.",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/deploy-with-docker-compose",
        "relUrl": "/docs/deployment/deploy-with-docker-compose"
      },
    
      "docs-deployment-deploy-with-private-docker-image": {
        "title": "Deploy with Private Docker Image",
        "content": "Deploy with Private Docker ImageSet your personal registry account information in Advanced Features → Custom Docker Registry. For example, if you have pushed images to Docker hub, you may need to set registry URL as https://registry-1.docker.io/.",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/deploy-with-private-docker-image",
        "relUrl": "/docs/deployment/deploy-with-private-docker-image"
      },
    
      "docs-deployment-deployment-cheat-sheet": {
        "title": "Deployment Cheat Sheet",
        "content": "📕 Deployment Cheat Sheet      Build docker image on x86 linux    Since some developers use Mac ARM, we highly recommend using an x86 machine to build your Docker images before deploying them to our cloud to avoid compatibility issues.    See also:    Multi-platform    How to build x86 (and others!) Docker images on an M1 Mac    Run or build x86_64 Docker image on Apple M1, M2, and M3        Limit the size of your docker logs to save disk usage    You can config logging options for all of your services to limit the size of the docker logs.     x-common: &amp;common-config   restart: always   logging:     driver: \"json-file\"     options:       max-size: \"100m\"       max-file: \"5\"     services:   example:     &lt;&lt;: *common-config     image: example:0.1.0     container_name: example     ports:       - \"8000:8000\"      ",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/deployment-cheat-sheet",
        "relUrl": "/docs/deployment/deployment-cheat-sheet"
      },
    
      "docs-migration-expose-service-port": {
        "title": "Expose Service Port",
        "content": "Expose Service PortIn Docker, you can specify the HTTP ports you want to expose by configuring port publishing using the format HOST_PORT:CONTAINER_PORT. This configuration forwards requests sent to HOST_PORT to the container’s program listening on CONTAINER_PORT.When deploying your Docker program to Phala TEE Cloud, the process remains the same. You should specify the port mapping in the Docker Compose file using the ports field, as shown below:services:  web:    build: .    ports:      - \"80:8000\"  db:    image: postgres    ports:      - \"8001:5432\"After deployment, you will see two public endpoints on the dashboard. These URLs can be used to publicly access the service running in Docker. Behind the scenes, our cloud platform parses the Docker Compose file and automatically configures the network forwarding.🎉 Congratulations! You’ve successfully deployed your application into a TEE. If you’re interested in learning more, such as how to prove your application’s integrity to others or manage application logs, keep reading.",
        "url": "http://localhost:4000/phala-cloud-community/docs/migration/expose-service-port",
        "relUrl": "/docs/migration/expose-service-port"
      },
    
      "docs-migration-generate-ra-report": {
        "title": "Generate RA Report",
        "content": "Generate RA Report Inside the ContainerThe cloud will generate a default RA report for your application when it is bootstrapped. You can view this report on the dashboard under the Attestation tab and verify it by clicking the Check Attestation button.To generate a new RA report, rather than using the default one, which allows you to prove the execution of your code, you first need to mount the Dstack API socket file to the container by configuring volumes in the Docker Compose file.services:  web:    image: quay.io/jupyter/base-notebook    volumes:      - /var/run/tappd.sock:/var/run/tappd.sockIn your application, you can generate the RA report using the Dstack guest SDK, which supports Python, JS, and Go. The user-data field allows you to attach your own data to the RA report. In practice, this is a method to bind the RA report to your application. For example, you can generate a key pair and include the public key. This way, others can verify that the RA report was indeed generated by your program by checking the signature with the public key, after the RA quote itself has been verified.from dstack_sdk import TappdClient# Initialize the clientclient = TappdClient()# Get quote for a messageresult = client.tdx_quote('user-data')quote = bytes.fromhex(result.quote)",
        "url": "http://localhost:4000/phala-cloud-community/docs/migration/generate-ra-report",
        "relUrl": "/docs/migration/generate-ra-report"
      },
    
      "docs-intro": {
        "title": "Introduction",
        "content": "IntroductionWhat is Phala Cloud?Phala Cloud is a TEE (Trusted Execution Environment) cloud platform that offers secure, confidential computing solutions for various workloads.What You Can Build with Phala Cloud  Unruggable, Autonomous AI Agent: Secure and independent AI processing capabilities  Confidential LLM Training/Inference: Protected environment for machine learning operations  Block Builder: Specialized infrastructure for blockchain operations  Intent Solver/Bridge Relayer: Efficient cross-chain communication solutions  FHE/MPC Nodes: Build anti-collusion MPC networksWhy Choose Phala Cloud?Web2 Pricing, More Added Value  Flexible pricing structure adaptable to diverse workloads  Transparent cost model  Competitive pricing with significant savings compared to alternativesVerifiable Computation  Strong emphasis on secure and verifiable computing with TEE  Enhanced security and trust guarantees for all computationsOpen Source Foundation  Built on the Dstack SDK, an open-source TEE SDK developed by Phala  Enhanced by contributions from leading teams like Flashbots and Nethermind  Community-driven development and transparencyGet Started with Phala CloudCheck out the Getting Started Guide to learn how to deploy your first application on Phala Cloud.",
        "url": "http://localhost:4000/phala-cloud-community/docs/intro/",
        "relUrl": "/docs/intro/"
      },
    
      "docs-references": {
        "title": "Reference Architectures",
        "content": "💎 Reference ArchitecturesDstack SDKThe Dstack SDK is designed to simplify the process for developers to deploy programs to CVM (Confidential VM) while adhering to security best practices by default. Phala TEE Cloud is a platform built on top of the Dstack SDK, providing developers with a seamless experience for deploying and managing their TEE applications. For more information, please refer to the Dstack documentation.Trust ChainTODO.Network TopologyTODO.",
        "url": "http://localhost:4000/phala-cloud-community/docs/references/",
        "relUrl": "/docs/references/"
      },
    
      "docs-resources": {
        "title": "Resources",
        "content": "🪫 ResourcesAccount managementTODOLimitsTODOError handling      exec /usr/local/bin/docker-entrypoint.sh: exec format error    When you see this error in the CVM logs, it indicates that your Docker images are not compatible with the x86 platform. This may happen if you built the image on an ARM or another platform. To resolve this issue, specify the platform by using the argument --platform linux/amd64 when building your Docker images.  ",
        "url": "http://localhost:4000/phala-cloud-community/docs/resources/",
        "relUrl": "/docs/resources/"
      },
    
      "docs-management": {
        "title": "CVM Management",
        "content": "💊 CVM ManagementPhala TEE Cloud provides a comprehensive management system for your CVMs, allowing you to monitor, upgrade, and resize your applications.",
        "url": "http://localhost:4000/phala-cloud-community/docs/management/",
        "relUrl": "/docs/management/"
      },
    
      "docs-cloud-api": {
        "title": "Cloud APIs",
        "content": "📡 Cloud APIsIf you want to deploy and manage your CVM through scripts, we offer APIs that can support this. Please refer to the Cloud API documentation for more information.",
        "url": "http://localhost:4000/phala-cloud-community/docs/cloud-api/",
        "relUrl": "/docs/cloud-api/"
      },
    
      "docs-faqs": {
        "title": "FAQs",
        "content": "📬 FAQs      Can the encrypted environment variable be accessed by any other part, including the host OS?    No, it’s encrypted on the client side and sent to the CVM using X25519 encryption scheme. The variables can only be decrypted inside the CVM.        Can Docker logs be accessed by any other part, including the host OS?    Currently, the logs are not end-to-end encrypted. However, you can decide whether to make them public under Advanced Features → Public Logs during deployment. If you choose public, anyone with the log URL can view them, and the Log URL can be inferred from your instance ID in the public endpoints. If you choose private, no one can access the logs, and you’ll need to configure a log viewer to view them elsewhere.        Is application data persistent on the disk?    Yes, the data you write to the filesystem inside Docker will persist on the disk and be encrypted. Restarting or upgrading will not affect data recovery. To save data on disk, you need to configure volumes in the Docker Compose file and write data to the correct path.        How can others verify that my application is running inside a TEE?    Once the application is successfully launched, you can prove this by providing the RA Report, which can be exported through an endpoint by your Docker application. The RA Report is linked with the application’s runtime information, such as the Docker image hash, the initial arguments passed to the container, and the environment variables.  ",
        "url": "http://localhost:4000/phala-cloud-community/docs/faqs/",
        "relUrl": "/docs/faqs/"
      },
    
      "docs-deployment": {
        "title": "CVM Deployment",
        "content": "CVM DeploymentIf you prefer to use Cloud UI, you can start with the Deploy with Docker Compose section.Or you can CLI or CI/CD to deploy your application with One Click to Deploy with CI/CD.",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/",
        "relUrl": "/docs/deployment/"
      },
    
      "docs-glossary": {
        "title": "Glossary",
        "content": "📚 GlossaryCVMConfidential VM.TEETrusted Execution Environment.RARemote Attestation.",
        "url": "http://localhost:4000/phala-cloud-community/docs/glossary/",
        "relUrl": "/docs/glossary/"
      },
    
      "docs-migration": {
        "title": "Migrate Applications to TEE",
        "content": "🐝 Migrate Applications to TEEThis section will not cover how to containerize your application with Docker. Instead, we assume you have already done so and have tested it locally to ensure all functionalities work well. Our focus here is to demonstrate how to migrate your application into a TEE, ensuring it remains accessible and providing TEE Proof so you can verify its integrity to anyone interested.",
        "url": "http://localhost:4000/phala-cloud-community/docs/migration/",
        "relUrl": "/docs/migration/"
      },
    
      "docs-pricing": {
        "title": "Pricing",
        "content": "💰 Pricing            Service      Specs      Hourly Rate      6-Month Discount      1-Year Discount                  Single TEE Computing Unit      Xeon 5th Gen (1 vCPU, 2GB RAM per unit)      $0.14      $0.12 (14% 🔻)      $0.11 (21%🔻)      For instance, if you deploy an instance using 4 vCPUs and 8GB of RAM, the cost would be $400 per month. Contact us if you are looking for more discount.",
        "url": "http://localhost:4000/phala-cloud-community/docs/pricing/",
        "relUrl": "/docs/pricing/"
      },
    
      "docs-get-started": {
        "title": "Get Started",
        "content": "Get Started  Play with Template  Deploy an Eliza AI Agent in Minutes with the Eliza Template  Create your own application by checking out Migrate Applications to TEE.",
        "url": "http://localhost:4000/phala-cloud-community/docs/get-started/",
        "relUrl": "/docs/get-started/"
      },
    
      "docs": {
        "title": "Home",
        "content": "      Phala Cloud is a secure, confidential, and TEE-powered cloud platform    Deploy confidential workloads with enterprise-grade security      Get Started    Check Dashboard        🔐    Unruggable AI Agent    Deploy autonomous AI agents with confidential LLM training and inference capabilities in a secure TEE environment.        ⚡    Web2 Pricing    Flexible pricing structure with transparent costs and significant savings compared to traditional cloud providers.        🔍    Verifiable Computation    Strong emphasis on secure and verifiable computing with TEE, ensuring trust and integrity for all operations.        🌟    Open Source Foundation    Built on the Dstack SDK, an open-source TEE SDK developed by Phala, along with contributions from teams like Flashbots and Nethermind.  ",
        "url": "http://localhost:4000/phala-cloud-community/docs/",
        "relUrl": "/docs/"
      },
    
      "docs-deployment-one-click-to-deploy-with-cicd": {
        "title": "One Click to Deploy with CI/CD",
        "content": "One Click to Deploy with CI/CDHere is a starter template for building a Cloud TEE application easily with CI/CD instead of manually local build and deploy. You can fork following repository to start your own Cloud TEE application.Cloud Tee Starter TemplateThe Cloud TEE Starter Template by Phala Network simplifies building TEE applications with automated CI/CD workflows. It enables developers to bypass manual processes by automating Docker image builds, registry pushes, and deployment to Phala TEE Cloud using GitHub Actions. Key steps include configuring repository secrets (Docker/Phala credentials), triggering deployments via code changes or manual actions, and monitoring via the Phala Cloud Dashboard. Designed for efficiency, it’s ideal for projects requiring secure, scalable TEE infrastructure.Key Steps of the CI/CD Workflow  Fork the repository Cloud Tee Starter Template  Configure the repository secrets  Trigger deployments via code changes or manual actions  Monitor the deployment status via the Phala Cloud Dashboard",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/one-click-to-deploy-with-cicd",
        "relUrl": "/docs/deployment/one-click-to-deploy-with-cicd"
      },
    
      "docs-get-started-play-with-template": {
        "title": "Play with Template",
        "content": "Play with TemplateStep1- Deploy a CVM with TemplateClick the Deploy button in the top-right corner of the cloud homepage to access the deployment dashboard. Once there, you need to:  Set your application name      Choose a template you want to get started or use your Docker compose file.    📍 For ElizaOS/Eliza, we recommend changing the image name to registry-cache.phala.systems/phalanetwork/eliza:v0.1.6-alpha.4 in the Compose file to use the cached image to save downloading time. Head to the tutorial to see how to play.        Choose the compute resources. There are some preset plans available, or you can customize them for more flexibility.          For the template kennethreitz/httpbin, we recommend choosing TEE Starter.              For elizaOS/eliza, we recommend choosing at least TEE Pro.                      Click the Deploy button to start the deployment process. You will need to wait for a while as the backend sets everything up.      After the deployment is complete, navigate through View Details → Network to see the endpoint information. You can use these endpoints to access the application if you have service serve on.        Or switch to Containers tab to view container logs. For example, if you have deployed Eliza, you can see logs in Eliza container like below:     [37m ◎ LOGS [37m Registering service: [0m [37m aws_s3 [0m 32m [\"✓ Service aws_s3 registered successfully\"] [0m     [37m [\"◎ Room b850bc30-45f8-0041-a00a-83df46d8555d created successfully.\"] [32m [\"**✓ User Eliza created successfully**.\"] [0m [32m [\"✓ Service browser initialized successfully\"] [0m Initializing ImageDescriptionService      Step2 - Verify TEE Proof      Check the default RA Report    We provide a default Remote Attestation Report (also known as TEE proof), which is displayed in the Worker Dashboard. To view the entire report, click View Details → Attestation.            By clicking the Check Attestation button in the certificate chain section, you will be redirected to the quote explorer, where you can verify the quote. You can share this quote with anyone, as it serves as proof that your program is running inside a genuine TEE.  Next Steps  Deploy an Eliza AI Agent in Minutes with the Eliza Template  Create your own application by checking out Migrate Applications to TEE.",
        "url": "http://localhost:4000/phala-cloud-community/docs/get-started/play-with-template",
        "relUrl": "/docs/get-started/play-with-template"
      },
    
      "docs-management-private-log-viewer": {
        "title": "Set Private Log Viewer",
        "content": "Set Private Log ViewerIn most cases, you may not want anyone except specific individuals to see the logs. To make your Docker logs private, you can configure a log viewer in the Docker Compose file. For example, you can use the open-source log viewer Dozzle.      Generate user data    On your local machine, generate a Dozzle user authority token using the Dozzle container by running the following command. In this example, we set the username as “Admin,” the password as “secret,” and the role as “admin.”     docker run amir20/dozzle generate --name Admin --email me@email.net --password secret admin | base64 -w 1000            Then, setup Dozzle in Docker compose file.     services:   # Viewable logs with dozzle   setup:     image: busybox     restart: \"no\"     volumes:       - dozzle-data:/dozzle-data/     command: &gt;       sh -c 'echo \"use authority token\" | base64 -d &gt; /dozzle-data/users.yml || true'       dozzle:     container_name: dozzle     image: amir20/dozzle:latest     depends_on:       - setup     environment:       - DOZZLE_AUTH_PROVIDER=simple     volumes:       - /var/run/docker.sock:/var/run/docker.sock       - dozzle-data:/data/     ports:       - 8080:8080            Once the application is running, you will only be able to view the logs using the username and password you set earlier, accessed through the relevant container’s public endpoint.  ",
        "url": "http://localhost:4000/phala-cloud-community/docs/management/private-log-viewer",
        "relUrl": "/docs/management/private-log-viewer"
      },
    
      "docs-management-resize-resource": {
        "title": "Resize Resource",
        "content": "Resize ResourcePhala TEE Cloud supports adjusting compute resources on demand. To do this, click Resize on the CVM card and adjust the resources as needed. Remember, you must shut down the CVM before executing the resize, and then start it again after the changes are saved.",
        "url": "http://localhost:4000/phala-cloud-community/docs/management/resize-resource",
        "relUrl": "/docs/management/resize-resource"
      },
    
      "docs-deployment-set-secure-environment-variables": {
        "title": "Set Secure Environment Variables",
        "content": "# Set Secure Environment VariablesIf your application requires environment variables, **DO NOT** **set them directly in the Docker Compose file**. Instead, set them through the **Encrypted Secrets** section.1. First you need to declare the environments in Docker compose file like below:        ```python    services:      your-service:    \t  environment:    \t      - OPENAI_API_KEY=${OPENAI_API_KEY_IN_ENV}    \t      - TWITTER_API_KEY=${TWITTER_API_KEY_IN_ENV}    ```        And **DO NOT** set environment with double quotation marks `OPENAI_API_KEY=\"${OPENAI_API_KEY_IN_ENV}\"`    2. Then set ENV values in **Encrypted Secrets** section.![set-env]({{ site.baseurl }}/docs/imgs/set-env.png)",
        "url": "http://localhost:4000/phala-cloud-community/docs/deployment/set-secure-environment-variables",
        "relUrl": "/docs/deployment/set-secure-environment-variables"
      },
    
      "docs-management-upgrade-application": {
        "title": "Upgrade Application",
        "content": "# Upgrade ApplicationYour application is upgradable even when running inside a TEE. Thanks to the flexible design of the Dstack SDK, the application is not locked into specific hardware. To execute an upgrade, you need to click **Shutdown** on your CVM, then click **Upgrade** to enter the upgrade window.![upgrade-cvm]({{ site.baseurl }}/docs/imgs/upgrade-cvm.png)In the upgrade window, you need to set the new Docker Compose file and environment variables for your application. Note that the **new environment variables will completely override the old ones**, so you must also include any variables you do not intend to update. Once you've set everything, click the **Upgrade** button to execute the upgrade. **After the upgrade is complete, you'll need to start the CVM manually**.![update-env]({{ site.baseurl }}/docs/imgs/update-env.png)",
        "url": "http://localhost:4000/phala-cloud-community/docs/management/upgrade-application",
        "relUrl": "/docs/management/upgrade-application"
      }
    
  };
})();
