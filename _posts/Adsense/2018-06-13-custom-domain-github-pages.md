---
layout: post
title: "Mudahnya Custom Domain Blog Github Pages"
subtitle: "Blog di Github Pages dapat dengan mudah menggunakan custom domain."
description: "Seperti platform blogging lainnya, Github Pages juga mendukung pengunaan custom domain dengan domain utama ataupun sub domain."
date: 2018-06-13
author: "Muhammad Yusuf"
tags: [ GithubPages, Blogging ]
header-img: "img/post/custom-domain.jpg"
image: "img/post/custom-domain.jpg"
social-js: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
iframe-js: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
accordion-js: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
---

Seperti yang telah saya terangkan secara singkat pada **[postingan sebelumnya](http://adhysuryadi.xyz/blogger-wordpress-github/ "postingan sebelumnya"){: target="_blank"}**, Github Pages adalah platform blogging dengan website statis HTML yang tidak memerlukan update software maupun plugin seperti halnya Wordpress, namun konsepnya sama dengan Wordpress yaitu kode web terpisah-pisah tidak seperti blogger di dalam satu editor HTML, selain itu Github Pages tidak memerlukan database. Selain cepat, Github Pages sangat simple namun ini memerlukan pengetahuan yang lebih tentang HTML.

Seperti platform blogging lainnya, Github Pages juga mendukung pengunaan custom domain dengan domain utama ataupun sub domain.

Setelah berhasil membuat blog di Github Pages, tentunya Anda ingin menjadikan blog Anda lebih personal dengan menggunakan domain Anda sendiri. Nah, tidak perlu khawatir karena blog Github Pages dapat dengan mudah menggunakan custom domain dengan hanya beberapa langkah mudah.

## Custom Domain Blog Github Pages

### Langkah Pertama
Langkah pertama yang harus dilakukan tentunya Anda harus menyewa domain di penyedia domain. Setelah domain Anda aktif silahkan lakukan setting DNS dengan A records dengan IP address yang diberikan penyedia layanan dan CNAME record dengan `www` untuk host-nya dengan IP address menggunakan *username.github.io* (ganti *username* dengan username Github Anda).

### Langkah Kedua
Setelah beres melakukan record DNS di penyedia layanan custom domain Anda, kini tinggal membuat file CNAME di repository blog Anda.

Silahkan buat file baru di repository dengan nama **CNAME** kemudian masukan domain Anda (misalnya seperti *adhysuryadi.xyz*) di editornya lalu commit file tersebut. Hanya itu saja, selanjutnya kita tinggal menunggu proses propagasi, biasanya paling cepat 30 menit atau menunggu 24 jam.

Untk melihat apakah blog kita sudah online dengan domain kita yang baru, silahkan klik menu setting di repository dan lihat pada kotak Github Pages akan tampak seperti di bawah ini.

<amp-img src="{{ site.baseurl }}/assets/images/custom-github.jpg"
      width="750"
      height="406"
      layout="responsive"
      alt="Custom Domain"></amp-img>

Bagaimana, mudah bukan? Segera buat blog di Github Pages dan gunakan custom domain. Untuk blog Github Pages ini saya menggunakan domain dari **[NameCheap](https://www.namecheap.com/?aff=101617 "NameCheap"){: target="_blank" rel="nofollow"}**.

Jika Anda menggunakan domain dari NameCheap, silahkan ikuti panduan setting DNS domain dari NameCheap untuk Github Pages **[DI SINI](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages "DI SINI"){: target="_blank" rel="nofollow"}**.