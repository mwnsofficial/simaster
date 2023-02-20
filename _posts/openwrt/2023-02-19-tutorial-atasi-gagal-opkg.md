---
published: true
layout: post
title: tutorial mengatasi gagal opkg openwrt
date: 2023-02-19
author: Muhammad Yusuf
permalink: tutorial-atasi-gagal-opkg.html
image: /assets/images/post.png
image1: /assets/images/post.png
image2: /assets/images/post.png
image-alt: tutorial mengatasi gagal opkg openwrt
summary: tutorial mengatasi gagal opkg openwrt
tags: [openwrt]
---

Dalam tutorial ini mungkin anda pernah mengalami hal yang satu ini.

Yang mana pada saat anda melakukan opkg update di terminal openwrt anda menemukan seperti di bawah ini.

```
opkg_conf_load: Could not lock
/var/lock/opkg.lock: Resource temporarily
unavailable.
```

Itu di karenakan koneksi anda sedang bermasalah sehingga menyebab error atau gagal melakukan opkg update di terminal openwrt.

Untuk mengatasi nya, anda cukup menyalin perintah di bawah ini.

```
echo "nameserver 114.114.114.114">/tmp/resolve.conf
rm -f /var/lock/opkg.lock
opkg update
```

Kemudian tempelkan saja di terminal openwrt anda maka akan secara otomatis kembali bisa untuk melakukan opkg update kembali untuk openwrt anda.

Semoga tutorial ini membantu dan bermanfaat untuk anda semua
