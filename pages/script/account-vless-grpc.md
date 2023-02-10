---
title: account vless grpc
layout: page
keywords: account
permalink: account-vless-grpc.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  server: ISIKAN IP/HOST
  port: 443
  type: vless
  uuid: ISIKAN UUID
  cipher: auto
  tls: true
  skip-cert-verify: true
  servername: ISIKAN BUG
  network: grpc
  grpc-opts:
  grpc-mode: gun
  grpc-service-name: ISIKAN NAMA GRPC
  udp: true
```