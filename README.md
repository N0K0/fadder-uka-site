# Boilerplate frontend, sommerprosjekt 2017

## Krav
* npm `^3.0.0`
* node `^6.9.5`

Kan lastes ned [her](https://www.npmjs.com/get-npm)

## Installering
Klon repoet

Kjør ```npm install```

## Utvikling
Lokalt trengs bare ```npm start``` for å kjøre opp dev-server.

Prosjektet vil være tilgjengelig på [localhost:3000](http://localhost:3000) når det er startet.

## Linting
```npm run lint``` kjører kodeanalyse for å se om du bryter definerte konvensjoner for kodestil.
Kjør gjerne før commit. For å fikse filer i henhold til ESLint-oppsett: ```npm run lint:fix```

## Testing
```npm run test``` kjører alle tester i prosjektet. Hva burde du skrive tester for i ett frontend-prosjekt?
- Reducere
- Util klasser

## API-kommunikasjon
Prosjektet er satt opp til å videresende alle kall til /api mot hva enn host satt til
API_HOST som miljøvariabel (default er localhost:8080). Konfigurasjonen for dette ligger
i server/main.js

## Deployment
Prosjektet er satt opp til å kunne deployes rett til Heroku, som vil injecte riktige verdier
for blant annet NODE_ENV, men merk at f. eks API_HOST må settes som en miljøvariable spesifikt i
Heroku config.
