---
title: sitemap clashmwns
layout: tabel
keywords: sitemap
permalink: arsip1.html
folder: blog
---

<center><h2>Arsip Post Clashmwns</h2></center>

<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <table summary="database clashmwns" class="table table-bordered table-hover dt-responsive">
        <caption class="text-center">Hasil pencarian anda</caption>
        <thead>
          <tr>
            <th>Update</th>
            <th>Title</th>
            <th>Keterangan</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {%for post in site.posts %}
          <tr>
            <td><time>{{ post.date | date:"%d-%b-%Y" }}</time></td>
            <td>{{ post.title }}</td>
            <td>{{ post.summary }}</td>
            <td><a href="{{ post.url | remove: "/" }}">Menuju Link</a></td>       
          </tr>
          {% endfor %}
        </tbody>
        <tfoot>
        <tr>
        <td colspan="4" class="text-center">Jika file mengalami gangguan hubungi <a href="https://wa.me/6287764241047" target="_blank">Admin</a>.</td>
        </tr>
        <tr>
        <td colspan="4" class="text-center">Kembali ke <a href="/">Halaman Utama</a>.</td>
        </tr>
        </tfoot>
        </table>
        </div>
        </div>
        </div>

<br>

<center><h2>Arsip Halaman Clashmwns</h2></center>

<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <table summary="database clashmwns" class="table table-bordered table-hover dt-responsive">
        <caption class="text-center">Hasil pencarian anda</caption>
        <thead>
          <tr>
            <th>Update</th>
            <th>Title</th>
            <th>Keterangan</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {% for page in site.pages %}
          <tr>
            <td><time>{{ page.date | date:"%d-%b-%Y" }}</time></td>
            <td>{{ page.title }}</td>
            <td>{{ page.summary }}</td>
            <td><a href="{{ page.url | remove: "/" }}">Menuju Link</a></td>       
          </tr>
          {% endfor %}
        </tbody>
        <tfoot>
        <tr>
        <td colspan="4" class="text-center">Jika file mengalami gangguan hubungi <a href="https://wa.me/6287764241047" target="_blank">Admin</a>.</td>
        </tr>
        <tr>
        <td colspan="4" class="text-center">Kembali ke <a href="/">Halaman Utama</a>.</td>
        </tr>
        </tfoot>
        </table>
        </div>
        </div>
        </div>
