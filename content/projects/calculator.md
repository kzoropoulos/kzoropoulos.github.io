---
title: "Low-Profile Embedded Calculator"
description: "Design and implementation of a fully functional, battery-powered embedded calculator built on the Waveshare RP2040 Plus platform."
date: 2026-07-18
draft: false
tags: ["RP2040", "Hardware Integration", "3D Printing", "C", "FreeRTOS", "LVGL", "KiCad"]
keywords: ["RP2040", "C", "Embedded Systems", "Hardware Integration", "Microcontrollers", "3D Printing", "PCB Design", "LVGL", "FreeRTOS"]
weight: 4
ShowToc: true
---

### Overview
Designed and engineered a fully functional, battery-powered low-profile calculator. The system utilizes a robust, custom-designed architecture centered around the Waveshare RP2040 Plus microcontroller module. The project seamlessly integrates this custom electronic hardware with a low-tolerance 3D-printed enclosure and C-based firmware. 

### Technical Implementation

#### Hardware & Electronics
*   **Core Microcontroller:** Integrated the Waveshare RP2040 Plus, featuring an RP2040 dual-core Arm Cortex-M0+ processor (up to 133 MHz), 264kB SRAM, and 2MB QSPI flash. 
*   **PCB Design:** Engineered custom electronic hardware schematics and PCB layouts using KiCad 10.0 electronic design automation (EDA) software. The hardware repository explicitly includes the generated Gerber manufacturing files.
*   **Display Interface:** Interfaced a Waveshare 2.0 LCD directly to the MCU via hardware SPI. The data routing establishes direct connections for MOSI, SCK, Chip Select (TFT_CS), Data/Command (TFT_DC), Reset (TFT_RST), and Backlight Control (TFT_BL).
*   **Input Matrix:** Engineered a direct-GPIO 5x4 key matrix comprising 20 tactile push-button switches. The matrix utilizes multiplexed row (ROW1 through ROW5) and column (COL1 through COL4) lines to maximize GPIO efficiency. The matrix is hardware-debounced and protected against ghosting via 1N4148W fast switching diodes (SOD-123 packages) on every switch.
*   **Power Subsystem:** Integrated a 3.7V 550mAh Lithium Polymer (LiPo) battery cell, managed locally by an SPDT slide power switch.

#### Firmware & Software
*   **Language & Toolchain:** Developed the firmware entirely in pure C, utilizing the official toolchain to achieve hardware-level optimization and concurrent execution.
*   **Operating System:** Utilized FreeRTOS for concurrent task scheduling. Independent tasks are configured to handle operations such as SPI driver communication.
*   **User Experience:** Built a modular and streamlined graphical user interface rendered via the LVGL (Light and Versatile Graphics Library) framework.
*   **Low-Level Integration:** Configured custom SPI driver integrations and utilized hardware-level optimization for display and input communication.
*   **Power Management:** Implemented sleep state APIs to allow the microcontroller to enter low-power modes following predefined periods of inactivity. 

#### Mechanical Design
*   **Enclosure:** Engineered and executed a custom, low-tolerance 3D-printed chassis to securely house the physical hardware components. The 3D computer-aided design (CAD) models are maintained within the hardware domain of the project repository.

### Open Source Licensing
To maintain organizational clarity, the repository's licensing model is compartmentalized based on the medium of the components.
*   **Hardware Architecture:** All physical EDA designs, including schematics, PCB layouts, and 3D CAD models, are strictly governed by the CERN Open Hardware Licence Version 2 - Strongly Reciprocal (CERN-OHL-S v2).
*   **Firmware:** The C source code, scripts, and RTOS configurations are distributed under the MIT License.
*   **Documentation:** Theoretical specifications, datasheets, and assembly instructions are reserved with no open-source license granted.
