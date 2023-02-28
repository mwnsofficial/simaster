---
layout: post
title: "Buat direct clash"
subtitle: "Membuat direct koneksi untuk clash."
description: "Membuat direct koneksi untuk clash."
date: 2023-02-28
author: "Muhammad Yusuf"
tags: [ Clash ]
header-img: "assets/images/post.png"
image: "assets/images/post.png"
social-js: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
iframe-js: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
accordion-js: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
---

<p>Selamat datang di tutorial simaster, tutorial kali ini membahas tentang bagaimana cara agar anda bisa membuat rule direct sendiri mulai dari awal hingga anda berhasil melakukan direct.</p>
<p>Berikut ini adalah beberapa contents yang sudah simaster rangkumkan untuk anda.</p>

<div id="btn_toc" on="tap:toc.toggleVisibility" role='button' tabindex='0'>Contents Simaster <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#000000" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg></div>
<div id="toc">
<ol>
  <li><a href="#toc_1" title="Pemahaman Direct Koneksi">Pemahaman Direct Koneksi</a></li>
  <li><a href="#toc_2" title="Membuat Rule Direct">Membuat Rule Direct</a></li>
  <li><a href="#toc_3" title="Membuat Rule Provider Direct">Membuat Rule Provider Direct</a></li>
  <li><a href="#toc_4" title="Membuat Proxy Group Direct">Membuat Proxy Group Direct</a></li>
  <li><a href="#toc_5" title="Pengecekan Conns Yacd Untuk Direct">Pengecekan Conns Yacd Untuk Direct</a></li>
</ol>
</div>

<p>Sebelum anda mengikuti step by step di bawah ini. Pastikan anda sudah ready untuk semua peralatan anda.
Seperti aplikasi html editor dan disini saya hanya membuat rule dengan menggunakan aplikasi Anwritter Free.</p>

<h4 id="toc_1">Pemahaman Direct Koneksi</h4>
<p>Direct Connection adalah pengalihan lalu lintas untuk bisa melepaskan dari jalur vpn.</p>
<p>Dengan adanya direct, maka anda bisa lebih bebas untuk melakukan trafik langsung melalui sumber koneksi utama tanpa harus melalui lalu lintas trafik vpn lagi.</p>

<h4 id="toc_2">Membuat Rule Direct</h4>
<p>Sebelum membuat rule, silahkan anda untuk masuk ke menu <b>Control Panel</b> kemudian menuju ke <b>Conns</b> dan anda akan standby disana sambil anda membuka sebuah aplikasi atau situs yang ingin anda direct.</p>
<p>Jika anda sudah masuk ke salah satu situs atau aplikasi itu. Anda bisa cek di <b>Conns</b> kembali lalu tekan tanda <b>Stop</b> di tombol ikon kanan bawah berwarna biru itu hingga menjadi berwarna merah.</p>
<p>Salin lah satu dulu domain itu jika anda temukan namun hilangkan ini <b>(:443)</b> yaitu port nya dan salin hanya domain nya saja misalkan <b>tiktokcdn.com</b> yang awal nya adalah <b>tiktokcdn.com:443</b>.</p>
<p>Kemudian anda tempelkan domain itu ke aplikasi editor. Anda ikuti seperti yang sudah simaster lakukan dk bawah ini.</p>

```
payload:
  # > Tempelkan domain dibawah ini
  - DOMAIN-SUFFIX,domain1.com
```

<p>Salin lah semua nya satu per satu dari <b>Conns</b> itu ke aplikasi editor kalian masing-masing hingga semuanya sudah terisikan.</p>
<p>Simaster contohkan seperti di bawah ini.</p>

```
payload:
  # > Tempelkan domain dibawah ini
  - DOMAIN-SUFFIX,domain1.com
  - DOMAIN-SUFFIX,domain2.com
  - DOMAIN-SUFFIX,domain3.com
  - DOMAIN-SUFFIX,domain4.com
  - DOMAIN-SUFFIX,domain5.com
```

<p>Lalu setelah selesai, anda bisa menyimpan nya dengan nama <b>namaruleanda.yaml</b>.</p>

<h4 id="toc_3">Membuat Rule Provider Direct</h4>
<p>coba</p>

<h4 id="toc_4">Membuat Proxy Group Direct</h4>
<p>coba</p>

<h4 id="toc_5">Pengecekan Conns Yacd Untuk Direct</h4>
<p>coba</p>

<div class="back_toc" on="tap:toc.scrollTo('position' = 'center')" role="button" tabindex="0">Back to Content Simaster ↑</div>
<br>