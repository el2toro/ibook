# Ibook

# 💇‍♀️ Appointment Booking Widget

## 🧭 Overview
The **Appointment Booking Widget** is a sleek, interactive, and fully customizable scheduling component built with **Angular 20**.  
It enables users to book appointments for services such as **beauty treatments, wellness sessions, or pet grooming** through a guided, multi-step interface.

Designed to be **modular**, **responsive**, and **easy to integrate**, this widget fits perfectly into any web application that requires appointment or reservation functionality.

---

## ✨ Features

### 🧩 1. Multi-Step Booking Flow
A seamless, user-friendly wizard that walks users through:

1. Selecting a **specialist**
2. Choosing a **date**
3. Picking a **time**
4. Selecting a **procedure or service**
5. Providing **client details** (name, email, phone)
6. Reviewing and confirming the **appointment summary**

Each step is validated and visually guided with a **progress indicator** and **navigation controls**.

---

### 💅 2. Modern & Responsive UI
- Built with **PrimeNG** components (Calendar, TimePicker, Dropdown, Steps).  
- Fully **responsive** — works beautifully on desktop, tablet, and mobile.  
- Includes **lightweight animations**, **icons**, and a **clean, minimal interface**.

---

### ⚡ 3. Dynamic Component Loading
- Uses Angular’s `ViewContainerRef` to **load steps dynamically**, improving modularity and performance.  
- Each step (e.g., Specialist Selection, Client Info) is a self-contained Angular component.  
- Makes the widget easy to maintain, extend, or integrate into other projects.

---

### ✅ 4. Real-Time Validation
- Ensures all required fields (e.g., email, phone) are completed before proceeding.  
- Includes inline validation messages and visual error cues.  
- Protects against invalid or incomplete submissions.

---

### 📅 5. FullCalendar Integration
- Optional integration with **FullCalendar** for advanced date and time visualization.  
- Displays available time slots, existing appointments, and disabled dates dynamically.

---

### 🔔 6. Confirmation & Feedback
- Displays a **success** message upon successful booking or a **failure** notice if submission fails.  
- Provides a summary of all selected details before confirmation.  
- Can be connected to a **backend API** for real data submission and scheduling.

---

### 🔒 7. GDPR-Friendly Design
- Transparent data collection flow.  
- Optional consent checkbox for privacy compliance.  
- Easy to adapt to regional data protection requirements.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| 🅰️ **Angular 20** | Core application framework |
| 🧠 **TypeScript** | Strong typing and maintainable structure |
| 🎨 **PrimeNG** | UI components for form elements and steps |
| 🗓️ **FullCalendar** | Calendar integration and scheduling |
| 💅 **HTML5 / CSS3** | Responsive layout and styling |
| ⚙️ **RxJS** | Reactive programming and event handling |

---

## 🎯 Why Choose This Widget?

✅ **Plug-and-play integration** — easily embed into existing Angular projects.  
✅ **Modular and reusable** — each step is a standalone component.  
✅ **Customizable** — supports theme styling, translations, and business logic extensions.  
✅ **Scalable** — ready for future upgrades like payments, reminders, or user accounts.

---

## 🚀 Roadmap / Future Enhancements

| Feature | Description |
|----------|-------------|
| 🌐 Multi-language support | Built-in localization (English, Romanian, etc.) |
| ☁️ Backend API integration | Real-time data sync with booking databases |
| 🕓 Time slot availability | Live updates based on specialist schedules |
| 💳 Payment integration | Stripe / PayPal booking deposits |
| 🎨 Theming | Dark/light mode customization |

---

## 🧑‍💻 Author

**Developed by:** *[Your Name]*  
**Project Type:** Angular 20 Frontend Widget  
**Focus:** Appointment Scheduling & User Experience

---

## 💡 Summary

The **Appointment Booking Widget** delivers an elegant and efficient solution for businesses that rely on scheduled services.  
It combines a **guided multi-step process**, **modern UI design**, and **dynamic Angular capabilities** to create a smooth, enjoyable booking experience for users.

> 📘 *Ideal for salons, clinics, pet care centers, fitness studios, and other appointment-based businesses.*


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
