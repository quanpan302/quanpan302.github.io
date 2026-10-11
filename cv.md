---
title: Curriculum Vitæ
layout: page
---

My CV is now part of the About page.

{% assign about_page = site.pages | where: "path", "about.md" | first %}

[View my CV on the About page]({{ about_page.url | relative_url }}#cv).

[Download my CV as PDF]({{ '/assets/docs/about/Europass_CV-QuanPan_Sty1.pdf' | relative_url }}).
