---
layout: default
title: Mes réalisations
permalink: /portfolio-technoligies
comments: false
--- 

{% assign technologies = '' | split: '' %}
{% for project in site.projects %}
{% assign technologies = technologies | concat: project.technologies   %}
{% endfor %}

{% for technologie in technologies %}

<section class="recent-posts">
    <div class="section-title">
        <h2 id="{{ technologie | replace: " ","-" | replace: ".","-" }}"><span>{{  technologie }}</span></h2>
    </div>
    <div class="row listrecent">
 {% for project in site.projects %}
 {% if project.technologies contains technologie   %}
 {% include projectbox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

{% endfor %}



