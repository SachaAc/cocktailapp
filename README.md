# 🍸 Cocktail Finder App

## 📚 Inhoudsopgave
1. Inleiding
2. Screenshot
3. Technologieën
4. Installatie
5. Configuratie
6. Inloggen
7. Gebruik
8. Beschikbare npm commando’s

---

## 📖 1. Inleiding

De Cocktail Finder App is een webapplicatie waarmee gebruikers cocktails kunnen zoeken en bekijken. De applicatie maakt gebruik van een externe API om cocktailgegevens op te halen.

### Belangrijkste functionaliteiten:
- Zoeken van cocktails op naam
- Filteren op ingrediënt
- Registreren en inloggen van gebruikers
- Bekijken van cocktail detailpagina’s (recept, ingrediënten, etc.)
- Resetten van filters

---

## 📸 2. Screenshot

*(Voeg hier een screenshot toe van je applicatie, bijvoorbeeld de homepagina)*

![Screenshot](./screenshot.png)

---

## 🛠️ 3. Technologieën

Deze applicatie is gebouwd met de volgende technieken:

- React (frontend framework)
- Vite (build tool en development server)
- Axios (voor HTTP requests)
- CSS (voor styling)
- TheCocktailDB API (externe data bron)

---

## ⚙️ 4. Installatie

Volg onderstaande stappen om het project lokaal te draaien:

### 1. Clone de repository
git clone <repo-url>
### 2. Ga naar de projectmap
cd cocktail-finder
### 3. Installeer dependencies
npm install
### 4. Start de applicatie
npm run dev
De applicatie draait nu op:
http://localhost:5173

---

## 🔑 5. Configuratie
De applicatie maakt gebruik van een externe API. Hiervoor is een .env bestand aanwezig.
.env bestand
VITE_API_URL=https://www.thecocktaildb.com/api/json/v1/1
⚠️ Let op:
Dit bestand is al aanwezig in het project
Je hoeft zelf geen API key aan te maken

---

## 👤 6. Inloggen
Je kunt inloggen met de volgende testgegevens:
E-mail: test@test.nl
Wachtwoord: 123456
(Nog aanpassen)

---

## 🧑‍💻 7. Gebruik
Open de applicatie in de browser
Voer een cocktailnaam in of kies een ingrediënt
Klik op Search
Bekijk de resultaten
Klik op een cocktail voor meer details
Gebruik Reset om opnieuw te zoeken

---

## 📦 8. Beschikbare npm commando’s
Commando	Beschrijving
npm run dev	Start de development server
npm run build	Maakt een productie build van de applicatie
npm run preview	Preview van de productie build lokaal
npm install	Installeert alle dependencies

---

📄 Opmerking
Dit project is ontwikkeld voor studie-doeleinden.