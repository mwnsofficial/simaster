---
title: account vmess ws tls
layout: page
keywords: account
permalink: account-vmess-ws-tls.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  type: vmess
  server: ISIKAN IP/HOST BUG
  port: 443
  uuid: ISIKAN UUID
  alterId: 0
  cipher: auto
  udp: true
  tls: true
  skip-cert-verify: true
  servername: ISIKAN IP/HOST
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: ISIKAN IP/HOST
```