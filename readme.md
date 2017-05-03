# Project Name

FöliVR

## Installation

Mitä tarvitaan?
Päällimmäisenä dependencyjen listalla roikkuu node:
https://nodejs.org/en/download/
https://docs.npmjs.com/getting-started/installing-node

Asennetaan reactVR:
`npm install -g react-vr-cli`

Luodaan uusi projekti:
`react-vr init PROJECT_NAME`

Selaimella:
`http://localhost:8081/vr`

Taika löytyy index.vr.js-tiedstosta.

## Usage

Paina nappia ja voilá: Pysäkin aikataulut.

## Certit

VR-näkymän aktivointi esimerkiksi Google Cardboardin kanssa vaatii keskusteluyhteyden ssl/tls:n yli. Siis aika tehdä https-certit!

`npm install -g http-proxy`
`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem`

`https://hackernoon.com/how-i-got-a-react-vr-dev-environment-working-with-an-android-cardboard-1fcaf00faebc`

## Mitä tehdä kun kaikki valmista?

1.Tee koodiin parannuksia ja tyylittelyviilauksia! `https://help.github.com/articles/creating-a-pull-request/`
2. Napeista omat komponenttinsa
3. Dynaamisesti luodut suosikkinapit
4. Kuvaa oma 360° panoraamakuva
5. 3D-visuaalisaatioita
`data.foli.fi` on auki latailuille ja ihmettelyille.

## Contributing

1. git@github.com:dreeri/foli-vr.git Voi vielä ehkä muuttua
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Taiste Oy

