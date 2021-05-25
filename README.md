###### CoinValueMonitor

This is a small program that lets you update the value of a selected cryptocurrency using puppeteer.

## Requerimentos

Necesitaras Node.js y los siguientes paquetes para utilizarlo:

-   npm install puppeteer
-   npm install prompt

## Uso

Para utilizar el programa, solo ejecute el siguiente comando y siga las instrucciones presentadas en la consola.

-   node main.js


## Ejemplo

-   El programa mostrara instrucciones seguido de una lista de monedas que pueden ser consultadas.

 1. Bitcoin 
 2. Ethereum
 3. Tether
 4. Binance Coin
 5. Cardano
 6. Dogecoin
 7. XRP
 8. Polkadot
 9. USD Coin
 10. Bitcoin Cash
 11. Litecoin
 12. Polygon
 13. Chainlink
     ETC...


-   Enseguida teclee un numero de su eleccion entre los posibles y presione enter. Le mostrara lo siguiente.

    "Type how many seconds would you like to wait for every refresh."

-   Teclee la cantidad de segundos que el programa quiere que tome para volver a traer el valor de la cryptomoneda y presione enter. Obtendra el siguiente resultado.

    https://coinmarketcap.com/es/currencies/bitcoin/
    The value of bitcoin in USD is $$38,281.26.
    The value of bitcoin in USD is $$38,250.37.
        ETC....

-   Teclee la tecla q en cualquier momento y presione enter para salir.