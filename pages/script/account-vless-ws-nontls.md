---
title: account vless ws nontls
layout: page
keywords: account
permalink: account-vless-ws-nontls.html
folder: script
tags: [account]
---

```
proxies
- name: ISIKAN NAMA
  server: ISIKAN IP/HOST BUG
  port: 80
  type: vless
  uuid: ISIKAN UUID
  cipher: auto
  tls: false
  udp: true
  skip-cert-verify: false
  servername: ISIKAN IP/HOST
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: ISIKAN IP/HOST
```