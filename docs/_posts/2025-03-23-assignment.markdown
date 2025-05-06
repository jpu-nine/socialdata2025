---
layout: post
title:  "02806 Social Data Analysis: Final Assignment - Group X"
date:   2025-05-01 00:00:00 +0100
author: Jonas Puidokas, Manuel Ibanez Andujar, Charalampos Stathopoulos
categories: jekyll update
---

# Introduction
Introduction

# Analysis
## Incident + attack
### Attacks per day
This calendar visualization provides a clear, high-level view of the evolution in the frequency of terrorist attacks over time. In the early 1970s, the dataset shows relatively low daily attack counts, suggesting that terrorism was less frequent or less systematically recorded during that period. Moving into the 1980s, occasional spikes begin to appear, indicating an uptick in both the occurrence and visibility of attacks.

The trend remains fairly consistent throughout the 1990s, but in the months leading up to September 11, 2001, there's a noticeable increase in daily incidents. Interestingly, following the 9/11 attacks, there is a sharp drop in the frequency of attacks, which persists until around 2006–2007. This period of reduced activity may reflect increased global counterterrorism efforts or shifts in reporting.

Beginning in 2012, the number of attacks rises dramatically, peaking in 2014—a year that aligns with the height of ISIS activity and unrest in the Middle East. After 2017, the frequency of attacks begins to decline again, suggesting a potential de-escalation or success in counterterrorism efforts in some regions.

![Attacks per day](/assets/Calendar_Plot_attacks_per_day.png)

Overall, the calendar format effectively highlights temporal patterns and significant turning points in global terrorism trends.

### Heatmap with time series
This heatmap provides a dynamic visualization of the geographic distribution of terrorist attacks over time. One of the most striking patterns is the apparent underreporting or lack of data in the first two decades of the dataset—particularly in regions like Central Africa. Given that this region later emerges as one of the most active in terms of attacks, the early absence likely reflects data limitations rather than a true lack of activity.

Over the years, the intensity and location of attack concentrations fluctuate, but several regions consistently appear as hotspots. These include parts of Europe, the Middle East, a broad belt stretching across Central Africa (from west to east), Southeast Africa, the northern edge of South America, and a swath of South Asia spanning from Afghanistan to Malaysia—including the Philippines.

In addition to these persistent hotspots, the heatmap reveals smaller, time-bound concentrations of activity corresponding to localized conflicts. Examples include South Korea before the 2000s, Northern Ireland during the Troubles, Spain during the height of ETA activity, and Chile during the Pinochet regime. These regional spikes align with well-documented historical and political events, highlighting the value of temporal heatmapping in uncovering context-specific patterns in global terrorism trends.

<iframe src="assets/html/heatmap_globalterrorism.html" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

### Attack types and successful rate
Bombing/Explosion is the most common type of attack. This is not surprising given the effectivity of a bomb against humans and infrastructure plus it can be done remotely. 

![Attack types and successful rate](/assets/Attack_types_and_success_rate.png)

### Regions involved
This set of plots captures both the temporal and regional heterogeneity of terrorism globally. It reveals how terrorism has shifted in focus over time, with some regions becoming more volatile in recent decades. The peak year trends also suggest links to major geopolitical shifts, civil conflicts, and insurgent activities.

1. Middle East & North Africa stands out with the highest peak of attacks, particularly during the early 2010s. The intense yellow tone in this plot highlights that the region experienced the most concentrated period of violence globally, peaking around 2014–2015.

2. South Asia and Sub-Saharan Africa also show high activity, with steep increases starting in the late 2000s and sharp peaks afterward. South Asia's curve is steep and sustained, indicating prolonged conflict intensity.

3. Southeast Asia, Central Asia, and South America exhibit mid-level peaks (orange to pink shading), suggesting regional but less globally dominant spikes in violence, often tied to specific insurgencies or political unrest.

4. Western Europe and North America show more episodic patterns — brief but sharp spikes in attacks (e.g., IRA in the UK or domestic terrorism in the US) but overall lower sustained intensity compared to conflict-heavy regions.

5. Eastern Europe and East Asia show relatively subdued activity, both in terms of frequency and intensity, reflected by darker tones and flatter curves.

6. Central America & Caribbean, despite having moments of activity, never reach the same peaks as other regions, indicating more localized or less frequent terrorist incidents.

![Regions involved](/assets/attacks_per_region.png)

## Victim + casualties and consequences
Harry
## Weapon + perpetrator
### Top 20 Terrorist Groups
### Top Weapon Types
### Top 20 Weapon Sub-types
### Word Cloud of Weapon Sub-types
### Weapon Types Over Time
The dynamic bar chart illustrating how the usage of different weapon types varies over time. Year 1993 is filtered out, because it has no data.

- Dynamic Interaction: The chart is interactive. You can hover over the bars to see the exact count and weapon type for a specific year.
- Time Slider: A slider allows you to adjust the year, enabling you to observe changes in weapon type usage across different years.

A notable trend observed throughout the years is the prevalence of Explosives, which consistently shows a high number of incidents, making it the most frequently used weapon type. Firearms typically follow as the second most common, while Incendiary weapons and, to a lesser extent, Melee weapons also appear with some regularity. Other weapon types such as Chemical, Sabotage Equipment, Fake Weapons, Radiological, Biological, and Other tend to be used much less frequently across the time period represented in the data.
<iframe src="assets/html/weapon_types_over_time.html" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
### Top Perpetrator Groups Over Time

This graph illustrates how the number of attacks attributed to the top 10 perpetrator groups has changed across different years. Unknown group is skipped to increase clarity.

- Dynamic Interaction: The graph is interactive. You can hover over the lines to see the exact number of attacks and the corresponding year for each group.
- Trend Visualization: The lines represent the trend for each perpetrator group over the years, allowing you to observe how their activity increases or decreases.
- Comparative Analysis: By plotting multiple groups on the same graph, it enables a comparison of their activity levels and trends.

The graph shows how the activity of different perpetrator groups has evolved over time. For example, you can observe the rise and fall of attacks by groups like the Irish Republican Army (IRA) and the Kurdistan Workers' Party (PKK) over the decades. Additionally, the graph highlights the emergence and surge in activity of groups like ISIL in more recent years. The Taliban, however, shows a noticeable presence throughout the entire period with varying levels of activity.
<iframe src="assets/html/top_groups_over_time.html" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
# Conclusion
Conclusion

# References
References