---
title: "Educational Data Normalization Pipeline"
description: "Data extraction and normalization pipeline for educational course data from multiple web sources."
date: 2026-05-20
draft: false
tags: ["Python", "pandas", "BeautifulSoup", "API", "Data Engineering"]
keywords: ["Python", "pandas", "Data Engineering", "Web Scraping", "Data Normalization", "API Integration"]
weight: 2
ShowToc: true
---

### Overview
An automated pipeline engineered to aggregate, sanitize, and normalize disparate educational datasets retrieved from external APIs and web scraping (Coursera, Udacity).

### Technical Implementation
* **Data Extraction:** RESTful API requests and DOM parsing utilizing `BeautifulSoup`.
* **Data Transformation:** Utilization of the `pandas` library for structural normalization, handling missing values, and unifying schemas across diverse sources.
* **Outcome:** Generation of a cohesive, structured dataset ready for algorithmic analysis and querying.
