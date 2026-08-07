---
title: Costco Electronics Redesign
summary: Costco's warehouse is built for wandering. Its website inherited the wandering without the warehouse.
role:
  - UX Design
  - Information Architecture
team: 4 people
timeline: Sept 2023 – Dec 2023
tools:
  - Figma
  - Whiteboard
  - Sticky notes
thumbnail: ../../assets/costco/new-category.png
slot: case-03
order: 3
draft: false
---

## A page competing with itself

Costco is one of the largest retailers in the world. Most people know it for the warehouses: bulk goods, low prices, a membership card at the door.

The website does the same job online. The Electronics section sells TVs, laptops, headphones, and accessories, alongside promotions and membership offers, all on one page.

We spent weeks on that page.

The first thing we noticed had nothing to do with categories. Costco's own products looked like ads. The product carousel used the same shapes as an ad unit. The membership banner sat beside it looking much the same. Real products, in the format people have learned to skip.

Underneath that, 17 categories overlapped each other across menus that repeated the same options.

Nothing on the page was broken. It was just competing with itself for attention.

![The current Costco homepage, annotated. Callouts mark a membership promotion that reads as an ad banner, and duplicated subsections across the top navigation and the category carousel that repeat the same options.](../../assets/costco/Home1Suggestion.jpg)

## What we were solving

Costco's Electronics page had two problems stacked on each other: promotional visual patterns that triggered banner blindness, and a fragmented information architecture underneath them.

Four of us, ten weeks, one section. Streamline navigation, labeling, and search, and produce something the rest of the site could inherit.

I'm a psychology major as well as an informatics one, so I came at this as a cognitive load problem rather than a visual one. The page didn't look bad, but asked too much of the person reading it.

## What we changed

### Cut 17 categories to 12

We defined a controlled vocabulary. One agreed label per concept, then
cross-referenced it against Sam's Club's electronics taxonomy. Their
structure gave us a working benchmark for what a comparable retailer
treats as a real category, so the cuts came from comparison rather than
opinion.
![A site map of the controlled vocabulary. Costco Home branches into Electronics alongside Appliances, Toys & Books and Furniture; Electronics then branches into nine parent categories, each with its own children.](../../assets/costco/controlled-vocab.png)

Five categories came out: duplicates under different names, items filed
under the wrong parent, and slices too narrow for anyone to browse by.

Further justified by psychological principals.

> **🧠 Hick's Law** — decision time grows with the number and complexity of
> choices. The overlap was the real cost: users had to rule options out
> before they could rule one in.

> **🧠 Miller's Law** — people hold about seven items in working memory.
> Seventeen isn't a list anymore, it's a wall.

**We unified "Shop by Category' with new icons**

> **🧠 Miller's Law again** — chunking. Twelve icons in a grid read as one
> group. Twelve text links in a column read as twelve decisions.

<div class="compare">
<figure>
<figcaption>Before</figcaption>

![The old Shop by Category grid: seventeen circular tiles across three rows, including overlapping labels like Audio/Video, Headphones & Earbuds and Musical Instruments, plus separate entries for Monitors and Laptops & Desktops.](../../assets/costco/old-category.png)

</figure>
<figure>
<figcaption>After</figcaption>

![The redesigned Electronics page: twelve category tiles in two rows of six, with a single Shop Deals banner beneath them.](../../assets/costco/new-category.png)

</figure>
</div>

### Reordered product cards

The primary action and the key differentiators moved up. A card should
answer "is this the one?" before it answers anything else.

<div class="compare">
<figure>
<figcaption>Before</figcaption>

![The old product card: image first, then the price, a $50 OFF line, the product name, and the star rating last.](../../assets/costco/old-product.png)

</figure>
<figure>
<figcaption>After</figcaption>

![The reordered card: a SPECIAL flag, the image, then the saving in red, the struck-through original beside the new price, the product name in bold, the rating, and a Members Only marker.](../../assets/costco/new-product.jpg)

</figure>
</div>

### Grouped search suggestions by category

Suggestions arrive pre-sorted instead of as a flat list.

> **🧠 Gestalt proximity** — things placed near each other read as one
> group. Grouping does the filtering, so the user doesn't have to.

<div class="compare">
<figure>
<figcaption>Before</figcaption>

![The old search suggestions for "lens wipes": one flat list mixing a Lorex security camera with ZEISS lens wipes and Sight Savers tissues, with nothing separating them.](../../assets/costco/old-search.png)

</figure>
<figure>
<figcaption>After</figcaption>

![The redesigned suggestions, grouped by department: "Lens in Electronics" holds the Lorex camera, "Lens in Glasses" holds the ZEISS wipes and the Sight Savers tissues.](../../assets/costco/new-search.png)

</figure>
</div>

## Result

A restructured Electronics section: 12 categories instead of 17, one
navigation system instead of several, and search that groups before the
user has to.

Project constraints kept us from a full site-wide high-fidelity
prototype, so we treated Electronics as a blueprint — the taxonomy
method and the card hierarchy transfer to any other department.

<!-- FILL: this is the section that needs the most work. Anything you can
measure helps — time-on-task from a walkthrough, click depth to reach a
product before and after, even a count of steps removed. If you have
nothing, say what the deliverable was and who received it. -->

## What I'd change

We designed against principles and a competitor, not against people.
Hick's Law tells you 17 is too many. Sam's Club tells you what a
comparable retailer settled on. Neither tells you which 12 are right for
Costco's shoppers — that needs card sorting, and we didn't have it.

<!-- FILL: confirm — if you did any card sorting or testing, this section
changes completely and should say so. -->

The other thing I'd pursue: connecting online browsing to in-store
inventory. Costco's real advantage is the warehouse down the road, and
the website behaves as if it doesn't exist.

---

_Happy to walk through the full site map and the categories that didn't
survive._
