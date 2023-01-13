---
published: true
layout: post
title: pengertian domain suffix
date: 2023-01-12
permalink: pengertian-domain-suffix.html
image: /assets/images/post-rule.png
image-alt: pengertian tentang rule
summary: Pengertian dari domain, domain-suffix, dan masih banyak lagi lain nya.
tags: [rule]
toc: true
---

## Pengertian dari DOMAIN dan DOMAIN-SUFFIX

Assalamu alaikum warahmatullah wabarkatuh, selamat datang kembali di blog simaster.

Kali ini simaster akan menjelaskan kepada anda semua pengertian dari *DOMAIN* lalu *DOMAIN-SUFFIX* dan lain nya yang berkaitan dengan rule.

Bagi pengguna clash openwrt, clash android, dan type clash lain nya yang mungkin saya rasa tidak asing lagi tentang nama-nama yang saya sebutkan tadi.

Namun saya yakin juga masih banyak yang belum memahami arti dari domain, domain-suffix dan lain untuk proses kelancaran dari sebuah koneksi.

*DOMAIN* adalah adalah nama yang mudah diingat yang terkait dengan alamat IP fisik di internet.

Nama unik ini muncul setelah tanda @ di alamat email, dan setelah www. di alamat web.

Ketika pada saat awal masuk ke browser, kita sering di perlihatkan sebuah pengisian input dalam browser tersebut untuk mengisikan alamat IP maupun domain.

Namun pada clash berfungsi sebagai jalur prerouting sama hal nya seperti kita mengisi pada firewall di mikrotik walau berbeda cara dalam pengisian.

*DOMAIN-SUFFIX* adalah bagian akhir nama domain yang terletak setelah tanda titik atau *dot* terakhir pada domain. Karena top-level domain ini berada pada akhir nama domain.

Contoh dari DOMAIN SUFFIX yaitu berupa domain TLD yang di gunakan kebanyakan oleh perusahaan ternama atau terbesar.

Saya sebut saja seperti .com .co.id .net dan masih banyak lagi untuk domain TLD.

## Bagaimana cara routing DOMAIN dan DOMAIN-SUFFIX di clash ?

Seperti yang sudah saya bahas sebelum nya pada channel youtube saya [Master Wifi Network Solution](https://www.youtube.com/@mwnsofficial).

Untuk merouting DOMAIN maupun DOMAIN-SUFFIX sama hal nya kita merouting ke dalam mikrotik namun saja berbeda dalam cara pengisian.

Pada clash, kita akan mengisi ke dalam folder RULE_PROVIDER yang di awali dengan payload.

contoh nya seperti dibawah ini:

```
payload:

  # > tulisan disini hanya untuk untuk beri komentar
  - DOMAIN,www.google.com #pada symbol tanda (-) ini adalah sebagai jalur dari rule
  - DOMAIN-SUFFIX,classroom.google.com #pada symbol (,) adalah sebagai tanda pembatas antara jalur dengan domain
```

Pada keterangan di atas, anda bisa mengisi untuk mencoba sendiri.

Lalu untuk penghubung antara clash dengan Name Server maka di buat lah rules.

contoh nya seperti di bawah ini:

```
rules:
- RULE-SET,GOOGLE,MODEM1 #RULE-SET adalah rule provider, GOOGLE adalah Nama dari rule provider, MODEM1 adalah nama dari proxy group.
```

Jadi topologi peroutingan domain seperti ini:

domain -> payload -> RULE_PROVIDER -> rules -> RULE-SET -> nama rule provider -> nama proxy group.

Ini adalah topologi dari metode RULE dan jika anda menggunakan metode SCRIPT akan ada sedikit penambahan element.

domain -> payload -> RULE_PROVIDER -> script -> rules -> RULE-SET -> nama rule provider -> nama proxy group.

Semoga bermanfaat dan semoga bisa di terapkan untuk saat ini, esok, dan seterusnya.