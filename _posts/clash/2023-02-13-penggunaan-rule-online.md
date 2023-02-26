---
layout: post
title: "Tata cara penggunaan rule online"
subtitle: "Tata cara penggunaan rule online simaster"
description: "Tata cara penggunaan rule online simaster"
date: 2023-01-28
author: "Muhammad Yusuf"
tags: [ Clash ]
header-img: "assets/images/post.png"
image: "assets/images/post.png"
social-js: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
iframe-js: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
accordion-js: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
youtube-js: "https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
---

## Tata Cara Penggunaan Rule Online

Untuk bisa menggunakan rule dari simaster secara online dan otomatis.

Anda tidak perlu bingung karena simaster akan memandu anda agar lebih mudah dan praktis untuk penggunaan di config anda sendiri.

Rule simaster ini akan lebih efektif jika anda bisa memahami dasar pada configurasi clash terlebih dahulu.

Baik kita langsung saja praktikkan secara langsung dengan mengikuti tutorial di halaman ini.

1. Silahkan anda copy salah satu rule online dari simaster [Disini]({{ site.baseurl }}/rule.html) dan simpan di notepad anda.

2. Kemudian silahkan anda untuk Menyalin script dibawah ini.

```
rule-providers:
  Berinamarule:
    type: http
    behavior: domain
    path: "./rule_provider/berimana sesuai nama rule simaster.yaml"
    url: tempelkan link rule online simaster disini
    interval: 3600
```

3. Lalu tempelkan di config anda.

4. Kemudian anda salin kembali script di bawah ini buat cocok kan rule-provider

```
rules:
- RULE-SET,Berinamarule,Nama Proxi Group
```

5. Tempelkan lagi ke config anda.

6. Jika udah beres anda lakukan semua langkah di folder config, folder backup, dan config luar di editor. Anda bisa masuk ke beranda utama openclash.

7. tekan switch config dan pastikan anda memiliki koneksi internet untuk rule online ini.

Jadi itu lah tutorial cara menggunakan rule online dari simaster.

Selamat mencoba dan semoga berhasil.