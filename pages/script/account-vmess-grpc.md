---
title: account vmess grpc
layout: page
keywords: account
permalink: account-vmess-grpc.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  server: ISIKAN IP/HOST
  port: 443
  type: vmess
  uuid: ISIKAN UUID
  alterId: 0
  cipher: auto
  network: grpc
  tls: true
  servername: ISIKAN BUG
  skip-cert-verify: true
  grpc-opts:
    grpc-service-name: ISIKAN NAMA GRPC
```