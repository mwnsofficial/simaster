---
layout: post
title: "Aktifkan wifi openwrt"
subtitle: "Mengaktifkan titik akses Wi-Fi di OpenWrt."
description: "Mengaktifkan titik akses Wi-Fi di OpenWrt."
date: 2023-03-07
author: "Muhammad Yusuf"
tags: [ wireless ]
header-img: "assets/images/post.png"
image: "assets/images/post.png"
---

Perangkat yang mempunyai port Ethernet sudah menonaktifkan Wi-Fi secara default. Ini adalah pelukisan dasar wacana cara mengaktifkan jaringan Wi-Fi dan yg terpenting, cara mengonfigurasi kode negara Anda menggunakan sahih sebagai akibatnya jaringan Wi-Fi Anda mematuhi peraturan hukum negara Anda.

## Menggunakan GUI admin web

1. Sambungkan ke web GUI di http://192.168.1.1, dan masuk dengan kata sandi `root` Anda

2. Buka Network → Wireless page ini mencantumkan bagian konfigurasi Wi-Fi terpisah buat setiap radio fisik Anda, (banyak perangkat yg mungkin Anda miliki, akan memiliki satu radio buat 2,4 GHz dan yg ke 2 untuk 5 GHz).

3. buat setiap radio, Anda dapat membuat jaringan Wi-Fi dengan mengeklik masukkan:

 a. Pada jaringan Wi-Fi pertama yang Anda konfigurasikan, buka *Konfigurasi device* dan buka tab *Pengaturan Lanjut*: di bidang Kode Negara, pilih kode negara yang benar, tempat perangkat OpenWrt Anda diinstal. Ini penting untuk memastikan perangkat OpenWrt Anda memenuhi peraturan hukum di negara Anda. (semua radio yang dikonfigurasi lainnya akan menggunakan pengaturan perangkat yang sama)
 
 b. Untuk setiap jaringan Wi-Fi, di bagian "Konfigurasi interface", konfigurasikan pengaturan Wi-Fi Anda:

- Di tab *General Setup*, masukkan `ESSID` untuk menjadi nama jaringan Wi-Fi Anda

- Di tab *Wireless Security*, pilih metode `Encryption` (mis. “WPA2-PSK”, direkomendasikan untuk jaringan rumah/kantor kecil)

- Di tab *Wireless Security*, pilih `Cipher` (misalnya "otomatis" disarankan)

- Di tab *Wireless Security*, masukkan `key`, frasa rahasia yang harus digunakan klien untuk terhubung ke jaringan Wi-Fi Anda. NB: Dengan WPA2-PSK, Key harus terdiri dari minimal delapan (8) karakter.

- Jika perlu, konfigurasikan pengaturan lebih lanjut sesuai dengan kebutuhan Anda. Pengaturan default lainnya biasanya benar untuk penggunaan umum.

- Klik `Save & Apply` setelah selesai.

## Penyelesaian duduk perkara:

- Bila Anda sudah mengonfigurasi Wi-Fi 5GHz dan baru saja mengaktifkannya, namun Wi-Fi 5 GHz sepertinya tidak memulai, pertimbangkan hal berikut: Jika perangkat Anda mendukung saluran Wi-Fi > 100, perangkat OpenWrt Anda terlebih dahulu wajib memindai radar cuaca pada saluran ini, sebelum Anda sahih-benar bisa menggunakan saluran tersebut buat Wi-Fi. Ini mungkin memakan waktu 1-10 mnt sekali setelah reboot pertama tergantung di situasi Wi-Fi Anda serta tergantung pada jumlah saluran yang didukung perangkat > 100. Anda mungkin jua mengalami penundaan 1 mnt di setiap perubahan saluran otomatis, sebab penundaan pemindaian yg sama terjadi dibutuhkan buat kepatuhan terhadap peraturan.

- Jaringan / Nirkabel / Edit / Konfigurasi Antarmuka / Pengaturan awam / Jaringan harus dibiarkan ke "lan" default atau ke antarmuka lain pada mana ada server DHCP yang aktif, JANGAN pilih "wan" atau "wan6" sebab itu artinya antarmuka upstream buat koneksi internet saja
