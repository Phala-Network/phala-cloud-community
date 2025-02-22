---
title: Resources
nav_order: 7
---

# 🪫 Resources

### Account management

TODO

### Limits

TODO

### Error handling

1. **exec /usr/local/bin/docker-entrypoint.sh: exec format error**
    
    When you see this error in the CVM logs, it indicates that your Docker images are not compatible with the x86 platform. This may happen if you built the image on an ARM or another platform. To resolve this issue, specify the platform by using the argument **`--platform linux/amd64`** when building your Docker images.