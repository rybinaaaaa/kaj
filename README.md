# KAJ - semestral work - art gallery

https://github.com/rybinaaaaa/kaj
Rybina Alina
rybinali@fel.cvut.cz
## Description:
	This is online art gallery, which provides an opportunity to buy copy of some painting work.
## Purpose: 
	Propagate art and sell own product (copy of painting) 
## Pages:
- Main page - presentation of all arts
[http://localhost:8888/semka24](http://localhost:8888/semka24)
- Item page - displays a single painting, offering a preview of what can be purchased
[http://localhost:8888/semka24/item/1](http://localhost:8888/semka24/item/1)
- About us page - description about art gallery
[http://localhost:8888/semka24/aboutUs](http://localhost:8888/semka24/aboutUs)
- Error page
[http://localhost:8888/semka24/jwfkdfnlkwenflekfnlefn](http://localhost:8888/semka24/jwfkdfnlkwenflekfnlefn)

## Functionality 

**HTML 5**

- Validita: Item page - modal window
- Semantické značky: header for example
- Grafika - SVG / Canvas: svg
- Média - Audio/Video: video
- Formulářové prvky
- Offline aplikace

**CSS**

- Pokročilé selektory (/semka24/dist/styles.css 380 line for example)
- Vendor prefixy (/semka24/dist/styles.css 74 line for example)
- CSS3 transformace 2D/3D
- CSS3 transitions/animations
- Media queries: adaptive design 

**Javascript**

- OOP přístup — web components
- Použití pokročilých JS API: LocalStorage
- Funkční historie: navigate in SPA
- Ovládání medií (sound on Item page)
- Offline aplikace (caching requests and simple pop up alert)

*This is SPA, so I also rewrited .htaaccess, httpd.conf. And managed work with docker, connected DB and back-end*

### How to use? 

`git clone https://github.com/rybinaaaaa/kaj`

`cd front/semka24`

`npm i`

`docker-compose up`

preffered browser  - chrome

### How to check post requests from http://localhost:8888/semka24/item/1?

`curl http://127.0.0.1:8080/leads`
