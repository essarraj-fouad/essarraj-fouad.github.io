---
layout: default
title: Mes réalisations
permalink: /portfolio
comments: false
---

{% assign projectsNatures = '' | split: '' %}
{% for project in site.projects %}
{% assign projectsNatures = projectsNatures | concat: project.projectNatures   %}
{% endfor %}

{% for projectNature in projectsNatures %}

<section class="recent-posts">
    <div class="section-title">
        <h2 id="{{ projectNature | replace: " ","-" }}"><span>{{  projectNature }}</span></h2>
    </div>
    <div class="row listrecent">
 {% for project in site.projects %}
 {% if project.projectNatures contains projectNature   %}
 {% include projectbox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

{% endfor %}



