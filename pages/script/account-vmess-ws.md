---
title: account vmess ws
layout: page
keywords: account
permalink: account-vmess-ws.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  type: vmess
  server: ISIKAN IP/HOST
  port: 443
  uuid: ISIKAN UUID
  alterId: 0
  cipher: auto
  udp: true
  tls: true
  skip-cert-verify: true
  servername: ISIKAN BUG
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: ISIKAN BUG
```