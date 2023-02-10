---
title: account vmess ws nontls
layout: page
keywords: account
permalink: account-vmess-ws-nontls.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  type: vmess
  server: ISIKAN IP/HOST BUG
  port: 80
  uuid: UUID
  alterId: 0
  cipher: auto
  udp: true
  tls: false
  skip-cert-verify: false
  servername: ISIKAN IP/HOST
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: ISIKAN IP/HOST
```