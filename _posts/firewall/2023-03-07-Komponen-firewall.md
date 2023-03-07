---
layout: post
title: "Komponen firewall"
subtitle: "Implementasi firewall OpenWrt adalah mekanisme dimana kemudian lintas jaringan disaring melalui router."
description: "Implementasi firewall OpenWrt adalah mekanisme dimana kemudian lintas jaringan disaring melalui router."
date: 2023-03-07
author: "Muhammad Yusuf"
tags: [ firewall ]
header-img: "assets/images/post.png"
image: "assets/images/post.png"
---

Implementasi firewall OpenWrt adalah mekanisme dimana kemudian lintas jaringan disaring melalui router. di tingkat tinggi, salah satu asal tiga akibat akan terjadi: paket dibuang (dibuang) tanpa tindakan lebih lanjut, ditolak (menggunakan respons yang sinkron ke asal), atau diterima (dialirkan ke tujuan). Perhatikan bahwa router itu sendiri artinya tujuan untuk manajemen serta pemantauan.

Firewall OpenWrt berputar pada lebih kurang proyek [netfilter](http://www.netfilter.org/) Linux. ada komponen primer berikut buat firewall OpenWrt:

<hr>{% include iklan.html %}<hr>

1. software [firewall3](https://openwrt.org/docs/guide-user/firewall/overview)

2. satu set kait netfilter pada tumpukan jaringan kernel

3. satu set modul kernel linux yang menangani investigasi paket jaringan

4. satu set parameter penyetelan kernel buat mengonfigurasi tumpukan jaringan serta modul firewall

Dokumentasi ini berdasarkan pada OpenWrt [18.06.0](https://openwrt.org/releases/18.06/notes-18.06.0). banyak konfigurasi telah diuji terhadap rilis ini menggunakan [jaringan uji](https://openwrt.org/docs/guide-user/firewall/fw3_configurations/fw3_ref_topo)

## Firewall3 (fw3)
Paket [software fw3](https://openwrt.org/docs/guide-user/firewall/overview) adalah perangkat lunak primer yg digunakan buat menyediakan firewall. Ini dikembangkan sang tim OpenWrt spesifik buat proyek tersebut.

<hr>{% include iklan.html %}<hr>

## Pengait netfilter kernel

Setiap tumpukan jaringan memiliki kait panggilan fungsi netfilter yang disematkan pada daerah eksklusif pada kode. ketika paket jaringan bergerak melalui tumpukan, setiap `hook` dipanggil buat mempelajari paket terhadap kemungkinan aturan netfilter yg terikat di kait.

Kode kait netfilter menggunakan deretan makro `NF_HOOK`. Setiap pengait mengambil argumen berikut:

- protokol jaringan: unspec (all), ipv4, ipv6, arp, bridge, decnet

- angka hook: PRE_ROUTING, LOCAL_IN, FORWARD, LOCAL_OUT, POST_ROUTING

- struktur bersih: konteks buat tumpukan jaringan

- socket: Soket BSD digunakan buat paket

- paket jaringan: buffer soket yang berisi paket jaringan

- perangkat masuk (antarmuka): asal paket

- perangkat keluar (antarmuka): tujuan paket selesainya perutean

- panggilan kembali fungsi Jika paket melewati filter

<hr>{% include iklan.html %}<hr>

## Modul netfilter kernel

Modul kernel netfilter dimuat ketika boot tergantung pada konfigurasi. terdapat kira-kira 35 modul kernel buat mendukung kemampuan netfilter baku, namun masih banyak lagi tergantung pada kebutuhan router. sebagai contoh, banyak router yang memakai fitur [ipset](http://ipset.netfilter.org/). Ini menambahkan ~16 modul kernel tambahan.

Sebagian besar modul netfilter berukuran kecil, menyediakan satu kemampuan khusus. misalnya:

- `ipt_REJECT` melakukan REJECT (target),
- `xt_multiport` melakukan pencocokan port IP (cocok)
- `xt_TCPMSS` melakukan penyesuaian ukuran Segmen Maksimum pada header TCP (target di tabel mangle)

Beberapa modul netfilter berukuran lebih akbar. contohnya:

- `nf_conntrack` melakukan pelacakan koneksi buat penyamaran (NAT) dan de-fragmentasi paket.

<hr>{% include iklan.html %}<hr>

## Penyetelan kernel melalui sysctl

`/etc/init.d/sysctl` dijalankan saat boot. Ini merupakan skrip shell yg memuat `/etc/sysctl.conf` serta semua file di bawah `/etc/sysctl.d/`. Set/tune parameter kernel ini buat menyediakan fitur OpenWrt. Lihat [sysctl.conf](http://man.cx/sysctl.conf).

semua merupakan parameter yang didokumentasikan di bawah direktori `Documentation/networking` pohon sumber kernel sebagai akibatnya spesifikasinya tidak akan diulangi pada sini. Lihat `ip-sysctl.txt` serta `nf_conntrack-sysctl.txt` buat referensi.

:!: karena set fitur OpenWrt relatif tidak aktif, parameter kernel hampir pasti tidak perlu disetel pada luar default yg disediakan di build.

:!: Perhatikan bahwa dukungan bridging netfilter di kernel dinonaktifkan! Lihat `ip-sysctl.txt`:

```
bridge-nf-call-iptables - BOOLEAN
	1 : pass bridged IPv4 traffic to iptables' chains.
	0 : disable this.
	Default: 1
```
