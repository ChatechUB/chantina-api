# Chantina api

Denne api'en har data om hva kantinen på charlottenlund vgs serverer for hver uke.

Databasen blir manuelt oppdatert hver uke av kantine lederen.

## Endpoints

For å spørre apien må du spørre `https://api.chantina.no` fulgt av et av de følgene alternaltivene

### /getWeek

Svarer med et array for ukens mat

### /getToday

Svarer med et json objekt med dagens mat

#### Eksempel

`https://api.chantina.no/getToday`

Svar:
{Matrett: "Bolognese", Pris: "40kr"}

### /getDay? [ 1-5]

Svarer med en valgt dags [ 1-5 ] mat

Vil svare med status 400 om dagen er mer enn 6

#### Eksempel

`https://api.chantina.no/getDay?2`

Svar:
{Matrett: "Bolognese", Pris: "40kr"}
