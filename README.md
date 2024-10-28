# **Belive Fitness**
## **Milad Roubei**
### **Klasse: WU10**


### Tech-stack:
Tech-stack
HTML (JSX)
CSS
Tailwind CSS
JavaScript
Next.js
### Teknisk Dokumentation:

HTML (JSX):

Jeg har brugt HTML til at strukturere indholdet i applikationen. Med JSX kunne jeg integrere HTML-lignende syntaks direkte i JavaScript, hvilket gjorde det lettere at læse og vedligeholde komponenterne.

CSS:

CSS har været vigtigt for at style elementerne og skabe et visuelt tiltalende layout.

Tailwind CSS:

Jeg valgte Tailwind CSS, fordi det gør styling hurtigere og mere effektivt. Det reducerer mængden af custom CSS, jeg skulle skrive. I nogle tilfælde

JavaScript:

JavaScript var grundlaget for at tilføje interaktivitet til applikationen. Det gjorde det muligt at implementere dynamiske funktioner som  håndtering af brugerinteraktioner, hvilket forbedrede brugeroplevelsen.

Next.js:

Jeg har valgt Next.js pga dens evne til server-side rendering og statisk site generation. Det gjorde det også nemmere at håndtere routing og API-interaktion.

### Kode til særlig bedømmelse


```javascript
"use client";
import React, { useEffect, useState } from 'react';
import BackHeader from '../components/BackHeaderGrey';
import ClassScheduleCard from '../components/ClassScheduleCard';

const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    
    const storedClasses = [];
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('class_')) {
        const classData = JSON.parse(localStorage.getItem(key));
        storedClasses.push(classData);
      }
    });
    setClasses(storedClasses);
  }, []);

  return (
    <div className="p-6 font-sans">
      <BackHeader />
      <h1 className="text-2xl ml-10 -mt-2 pb-6 font-semibold">My Schedule</h1>

      {classes.length > 0 ? (
  classes.map((classItem, index) => (
    <ClassScheduleCard
      key={classItem.id || index} 
      id={classItem.id || index}  
      className={classItem.className}
      classDay={classItem.classDay}
      classTime={classItem.classTime}
    />
  ))
) : (
  <p className="text-gray-500 mt-4">No classes scheduled.</p>
)}

    </div>
  );
};

export default Schedule;


```

# Schedule Komponent

## Oversigt
Schedule-komponenten viser en liste over aktiviteter, som brugeren har gemt i deres browser. Den henter disse data fra LocaleStorage og præsenterer dem i et brugervenligt format.

## Kodegennemgang

### Importerede Elementer
- **React**: Grundlæggende bibliotek til at bygge brugerinterface.
  - `useEffect`: Bruges til at udføre handlinger efter, at komponenten er monteret, såsom dataindlæsning.
  - `useState`: Bruges til at oprette og administrere komponentens tilstand.
- **Brugerdefinerede komponenter**:
  - `BackHeader`: Navigationskomponent til at vende tilbage til forrige side.
  - `ClassScheduleCard`: Komponent til at vise individuelle klasser i brugerens skema.

### Tilstandshåndtering
- **`classes`**: En tilstandsvariabel, der gemmer de planlagte klasser. Den startes som en tom liste og opdateres, når der hentes data fra `localStorage`.

### Effect Hook
- **`useEffect`**: Kører én gang, når komponenten indlæses. Den:
  1. Opretter en tom liste `storedClasses` til at gemme de klasser, der hentes fra `localStorage`.
  2. Gennemgår alle nøgler i `localStorage`.
  3. Tjekker, om hver nøgle starter med `"class_"`, hvilket indikerer, at det er en gemt klasse.
  4. Henter JSON-data for hver gemt klasse, konverterer den til et objekt og tilføjer den til `storedClasses`-listen.
  5. Opdaterer `classes`-tilstanden med den opdaterede liste af klasser, der er hentet fra `localStorage`.

### Render
- **Visning**:
  - Viser en overskrift ("My Schedule") samt en liste over planlagte klasser.
  - Hvis der er gemte klasser, vises de i individuelle `ClassScheduleCard`-komponenter, der viser detaljer som klasse navn, dag og tid.
  - Hvis der ikke er nogen gemte klasser, vises en besked, der informerer brugeren om, at ingen klasser er planlagt.

## Konklusion
Schedule-komponenten er enkel og effektiv til at vise en liste over gemte klasser, så brugeren nemt kan se deres planlagte aktiviteter.





