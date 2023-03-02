---
layout: post
title: "Membuat Link Pada Markdown Terbuka Di Tab Baru"
subtitle: "Cara membuat link terbuka pada tab baru pada editor markdown."
description: "Cara penulisan pada editor markdown untuk membuat link terbuka pada tab baru."
date: 2018-06-04
author: "Muhammad Yusuf"
tags: [ Markdown ]
header-img: "assets/images/target-blank.jpg"
image: "assets/images/target-blank.jpg"
social-js: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
iframe-js: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
accordion-js: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
---

Bagi kita tentu sudah familiar dengan cara penulisan html untuk sebuah link tautan baik menggunakan atribut rel tag ataupun target tag seperti di bawah ini:

```html
<a href="#URL" target="_blank" rel="nofollow" title="Title">Tautan</a>
```

Sebenarnya penulisan html untuk link tautan seperti di atas bisa dilakukan pada editor markdown, namun kita juga perlu mengetahui cara penulisan tautan pada editor markdown.

Secara default, penulisan tautan pada markdown seperti di bawah ini.

```markdown
[Tautan](#URL)
```

Penulisan tautan dengan title tag pada markdown seperti di bawah ini.

```markdown
[Tautan](#URL "Title")
```

Setidaknya itu yang tertulis di panduan penulisan pada markdown seperti **[di sini](http://www.markdowntutorial.com/lesson/3/ "Tutorial Penulisan Markdown"){: target="_blank" rel="nofollow"}**.

Nah untuk penulisan tautan dengan title, target, dan rel tag, Anda bisa lakukan seperti di bawah ini.

```markdown
[Tautan](#URL "Title"){: target="_blank" rel="nofollow"}
```

Perhatian! Harus ada *spasi* setelah **titik dua** (**:**)