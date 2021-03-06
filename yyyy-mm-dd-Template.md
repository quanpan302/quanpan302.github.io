---
title: "Template"
categories:
  - IT
tags:
  - Blade
last_modified_at: yyyy-mm-ddT12:00:00-10:00
---

# Processed through Liquid (run)
{% comment %}
  https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
{% endcomment %}

# Passed through Liquid (skip)
{% raw %}
  Jinja Templating, {% ... %} , {{ ... }}
{% endraw %}

Post types:

- AI, Artificial Intelligence
- DS, Data Science
- KG, Knowledge
- IT, Internet Technology
- MA, Mathematics
- PH, Physics
- RS, Remote Sensing
- SD, Software Development

- [Examples](#examples)

## Examples

### image, space %20
[![](/assets/images/posts/)](/assets/images/posts/)
or
{% include image.html href="/assets/images/posts/" %}

### file
[file](/assets/images/posts/){:target="_blank"}

### external link
{% include icon-external-link.html href="http://www.quanpan302.com" %}
or
{:target="_blank"}

### Sup, Sub
km<sup>2</sup> 
km<sub>2</sub> 

# Header1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](another-page).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

## Header2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### [](#header-4)Header4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### [](#header-5)Header5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### [](#header-6)Header6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```