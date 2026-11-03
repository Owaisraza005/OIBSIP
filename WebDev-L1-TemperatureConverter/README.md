
# TempConvert – Temperature Converter Website 🌡️

A modern, responsive, and interactive temperature converter website developed using HTML5, CSS3, and Vanilla JavaScript.

This project is developed as part of the **Oasis Infobyte Web Development Internship – Level 1, Task 3 (Temperature Converter Website)**.

---

## 🌐 Project Overview

TempConvert is a simple and user-friendly web application that allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin.

The application provides accurate temperature calculations, real-time input validation, and absolute zero error handling through a clean and responsive user interface.

The main objective of this project is to demonstrate practical knowledge of HTML, CSS, JavaScript, DOM manipulation, event handling, and conditional logic.

---

## ✨ Features

- **Temperature Input:** Enter any numeric temperature value.
- **Unit Selection:** Choose Celsius, Fahrenheit, or Kelvin as the input unit.
- **Multiple Conversions:** Automatically calculate all three temperature units.
- **Convert Button:** Perform temperature conversion with a single click.
- **Result Display:** Display converted values with appropriate unit labels.
- **Input Validation:** Detect empty and invalid numeric inputs.
- **Absolute Zero Validation:** Prevent temperatures below absolute zero.
- **Error Handling:** Display user-friendly error messages.
- **Reset Functionality:** Clear the input and previous conversion results.
- **Responsive Design:** Works across desktop, tablet, and mobile devices.
- **Modern UI:** Dark navy and blue colour palette with clean typography.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling and visual design |
| JavaScript | Temperature conversion logic |
| DOM Manipulation | Updating conversion results |
| Event Handling | Handling form submission and reset |
| CSS Flexbox | Layout alignment |
| CSS Grid | Result card layout |
| Media Queries | Responsive design |
| Google Fonts | Typography |

**Note:** This project uses Vanilla JavaScript without any external JavaScript frameworks or libraries.

---

## 📁 Project Structure

```text
WebDev-L1-TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
```

---

## 🎨 Colour Palette

The website uses a modern dark navy and blue colour scheme.

| Colour | Hex Code | Usage |
|---|---|---|
| Dark Navy | `#0F172A` | Main background |
| Secondary Navy | `#172554` | Converter card |
| Primary Blue | `#2563EB` | Convert button |
| Light Blue | `#60A5FA` | Highlights and results |
| White | `#FFFFFF` | Main text |
| Light Gray | `#CBD5E1` | Secondary text |

### Typography

- Font Family: Inter
- Headings: Bold and extra-bold typography.
- Body Text: Regular and medium typography.

---

## 🧮 Temperature Conversion Formulas

The application uses standard mathematical formulas to convert temperatures.

### 1. Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### 2. Fahrenheit to Celsius

```text
°C = (°F - 32) × 5/9
```

### 3. Celsius to Kelvin

```text
K = °C + 273.15
```

### 4. Kelvin to Celsius

```text
°C = K - 273.15
```

### 5. Fahrenheit to Kelvin

```text
K = (°F - 32) × 5/9 + 273.15
```

### 6. Kelvin to Fahrenheit

```text
°F = (K - 273.15) × 9/5 + 32
```

The application first converts the entered temperature into Celsius and then calculates the corresponding Fahrenheit and Kelvin values.

---

## 🚀 Getting Started

Follow these instructions to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Owaisraza005/OIBSIP.git
```

### 2. Navigate to the Project Directory

```bash
cd OIBSIP/WebDev-L1-TemperatureConverter
```

### 3. Open the Project in VS Code

```bash
code .
```

### 4. Run the Website

Open the `index.html` file directly in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code.

1. Right-click on `index.html`.
2. Select **Open with Live Server**.
3. The Temperature Converter will open in your browser.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes.

Supported devices:

- Desktop computers
- Laptops
- Tablets
- Smartphones

CSS Flexbox, Grid, and media queries are used to maintain a consistent layout across devices.

---

## 🧪 Testing & Validation

The following test cases can be used to verify the temperature conversion functionality.

| Input | Unit | Expected Output |
|---|---|---|
| 25 | Celsius | 25°C, 77°F, 298.15 K |
| 100 | Celsius | 100°C, 212°F, 373.15 K |
| 32 | Fahrenheit | 0°C, 32°F, 273.15 K |
| 273.15 | Kelvin | 0°C, 32°F, 273.15 K |
| -273.15 | Celsius | Valid absolute zero |
| -300 | Celsius | Absolute zero error |
| -1 | Kelvin | Absolute zero error |
| Empty input | Any unit | Validation error |

---

## 📋 Internship Task Details

| Detail | Information |
|---|---|
| Organization | Oasis Infobyte |
| Internship Domain | Web Development |
| Level | Level 1 |
| Task Number | Task 3 |
| Task Name | Temperature Converter Website |
| Project Name | TempConvert |
| Category | Frontend Development |
| Technologies | HTML5, CSS3, JavaScript |
| Developer | Owais |
| Project Status | Completed |

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Creating interactive web applications.
- Understanding JavaScript fundamentals.
- Performing mathematical calculations using JavaScript.
- Manipulating HTML elements using the DOM.
- Handling form submission and reset events.
- Implementing input validation.
- Handling edge cases and invalid values.
- Designing responsive user interfaces.
- Using CSS Flexbox and Grid.
- Organizing frontend development projects.

---

## 🔮 Future Improvements

Potential improvements for future versions:

- Add automatic conversion while typing.
- Add a temperature conversion history.
- Implement a light and dark theme switcher.
- Add conversion animations.
- Improve accessibility.
- Deploy the website online.

---

## 🔗 Connect With Me

**Owais**

- GitHub: [Owaisraza005](https://github.com/Owaisraza005)
- LinkedIn: [Owais Raza](https://www.linkedin.com/in/owaisraza005)
- Email: [mohammadowaisraza12@gmail.com](mailto:mohammadowaisraza12@gmail.com)

---

## 🙏 Acknowledgement

I would like to express my sincere gratitude to **Oasis Infobyte** for providing me with this internship opportunity and helping me improve my practical web development skills.

This project is completed as part of the **Web Development Internship – Level 1, Task 3**.

---

## 📄 License

This project is created for educational and internship purposes.

---

⭐ Thank you for visiting my project!

**Designed & Developed with ❤️ by Owais**

**Built using HTML5, CSS3 & JavaScript.**
