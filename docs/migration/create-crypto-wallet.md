---
title: Create Crypto Wallet
parent: Migrate Applications to TEE
nav_order: 4
permalink: /docs/migration/create-crypto-wallet
---

# Create Crypto Wallet

You can derive a deterministic key using the [Dstack Guest SDK](https://github.com/Dstack-TEE/dstack/tree/master/sdk) inside Docker. Under the hood, the `TappdClient` derives the key from the application root key.

```python
from dstack_sdk import TappdClient

# Initialize the client
client = TappdClient()

# Derive Key Account by given **derive** **path** and **alt names**
result = await client.derive_key('/', 'alt names')
```
