---
layout: post
title: "mengatasi gagal opkg openwrt"
subtitle: "tutorial mengatasi gagal opkg openwrt"
description: "tutorial mengatasi gagal opkg openwrt"
date: 2023-01-28
author: "Muhammad Yusuf"
tags: [ Openwrt ]
header-img: "assets/images/post.png"
image: "assets/images/post.png"
social-js: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
iframe-js: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
accordion-js: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
youtube-js: "https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
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