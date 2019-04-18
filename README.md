# Bored APP - frontend feladat

## Bevezető
A feladatod egy frontend elkészítése lesz a [Bored API-hoz](http://www.boredapi.com/documentation) a repositoryban található [wireframe](https://raw.githubusercontent.com/ngabesz-wse/bored-app/master/Sr-frontend-test-1.jpg) alapján.
A pontosabb részletek kidolgozása rád van bízva, viszont mivel ez egy frontendes feladat a végeredmény legyen esztétikus. A feladathoz bármilyen keretrendszert vagy eszközt felhasználhatsz.
Általános elvárás hogy az Activity és List pagek közötti váltásnál nem történhet oldalújratöltés, valamint hogy az első megnyitásnál egy random eseményt kínáljon fel az app az Activity pagen az eseményhez igazodjanak a Activity detailek is.
Az oldalakat magába foglaló panelnek a böngészőben vertikálisan és horizontálisan középre igazítva kell megjelennie. 

## Oldalak
**Activity page**:
Az oldalon az első megnyitáskor már szerepeljen egy random esemény. Az eseményhez igazodjanak az Activity detailek is.
Bármely activity detail megváltoztatása esetén frissüljön a felkínált esemény oldalújratöltés nélkül.
A **Save for later** gomb megnyámásakor az aktuális eseményt tároljuk el és a List pagen jelenítsük meg a listában. 
Az eltárolt eseményeknek a böngésző bezárásakor sem szabad elveszniük, a következő megnyitáskor a lista oldalon kell maradniuk a lehetőségekhez mérten a lehető legtöbb ideig.
A **Hit me with a new one!** gomb megnyomásakor frissítsük az eseményt az aktuális activity detaileknek megfelelően.

**List page**:
Az elmentett eseményeket és adataikat jelenítsük meg egy táblázatban. A táblázat minden sorának végén legyen egy action gomb amivel az adott sort törölni lehet.
A **Clear all** gomb megnyomása esetén töröljük az összes mentett eseményt.

