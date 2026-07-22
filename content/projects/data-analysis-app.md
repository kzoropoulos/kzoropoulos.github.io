---
title: "Data Analysis App"
description: "Analytical overview, technical specifications, and description for the educational data aggregation and recommendation project."
date: 2026-05-20
draft: false
tags: ["Python", "pandas", "BeautifulSoup", "API", "Data Engineering", "Tkinter", "Matplotlib"]
keywords: ["Python", "pandas", "Data Engineering", "Web Scraping", "Data Normalization", "API Integration", "Recommendation Engine"]
weight: 2
ShowToc: true
---

## Overview
The project is a Python-based hybrid data collection system designed to aggregate educational course data from multiple internet sources. It features an automated normalization pipeline, a Graphical User Interface (GUI), and a recommendation engine that utilizes a composite scoring algorithm to evaluate and suggest courses based on user-defined parameters. Ultimately, it generates a cohesive, structured dataset ready for algorithmic analysis and querying.

## Technical Implementation & Features

### Data Extraction & Integration
The system relies on a hybrid data integration approach, retrieving data from 6 independent sources through RESTful API requests and DOM parsing utilizing `BeautifulSoup`.
*   **APIs:** Integrates with Coursera (API v1), the OpenLibrary Search API, and the iTunes U / Apple Podcasts API.
*   **Web Scraping:** Extracts information from The Open University (OpenLearn), ClassCentral, and Saylor Academy.

### Data Normalization
*   Employs mapping dictionaries to standardize heterogeneous category and difficulty fields into a uniform schema.
*   Utilizes the `pandas` library for structural normalization, unifying schemas across the diverse sources, and handling missing values.

### Recommendation Engine
*   Computes a composite score that prioritizes course duration (60% weight) and cost (40% weight).
*   Dynamically handles missing values using median imputation.
*   Returns the top 3 optimal course suggestions for the user.

### Graphical User Interface (GUI)
*   Built entirely with the standard library's Tkinter.
*   Provides data filtering and visualization triggers.
*   Features an `Auto-Sync` mechanism that automatically updates records every 30 minutes.

### Data Visualization
*   Implements the Matplotlib library for statistical analysis.
*   Includes bar charts for displaying top duration, pie charts for mapping difficulty distribution, and line plots for correlating cost-to-duration.

### Anti-Bot & Error Handling
*   Utilizes the `cloudscraper` library to bypass 403 Forbidden responses during web scraping.
*   Maintains system stability during individual scraper failures by incorporating isolated `try-except` blocks for each source.
*   Applies a regex-based parsing function (`safe_float`) to ensure robust extraction of cost data.

### Data Storage
*   Extracted course records are persistently appended to a file named `courses.csv`.
*   Idempotency is maintained via duplicate removal using `drop_duplicates()` based on the course title and the educational provider.

## System Architecture

The application is structured into modular Python files to separate concerns:
*   `main.py`: Initializes the application, manages the GUI event loop, and handles data visualization bindings.
*   `data_collection.py`: Executes HTTP requests and utilizes DOM parsing (BeautifulSoup) for data extraction.
*   `utils.py`: Contains the data cleaning functions, mapping dictionaries, and the core normalization logic.
*   `recommendation.py`: Executes the Min-Max normalization process and the composite scoring algorithms.

## Dependencies
The project relies on the following libraries for execution:
*   `requests`
*   `beautifulsoup4`
*   `cloudscraper`
*   `pandas`
*   `numpy`
*   `matplotlib`
*   `tkinter` (Python Standard Library)
