---
title: account vless ws tls
layout: page
keywords: account
permalink: account-vless-ws-tls.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  server: ISIKAN IP/HOST BUG
  port: 443
  type: vless
  uuid: ISIKAN UUID
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  servername: ISIKAN IP/HOST
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: ISIKAN IP/HOST
```