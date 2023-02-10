---
title: account trojan grpc
layout: page
keywords: account
permalink: account-trojan-grpc.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  type: trojan
  server: ISIKAN IP/HOST
  port: 443
  password: PASSWORD
  udp: true
  sni: ISIKAN BUG
  skip-cert-verify: true
  network: grpc
  grpc-opts:
    grpc-service-name: ISIKAN NAMA GRPC
```