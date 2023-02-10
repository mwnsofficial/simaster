---
title: account trojan ws
layout: page
keywords: account
permalink: account-trojan-ws.html
folder: script
tags: [account]
---

```
proxies
- name: KASIH NAMA
  server: ISIKAN IP/HOST
  port: 443
  type: trojan
  password: PASSWORD
  skip-cert-verify: true
  sni: BUGSNI.COM
  udp: true
  network: ws
  ws-opts:
    path: /PATH
    headers:
      Host: BUGSNI.COM
```