# SPRINT 3

---
## NIVEL 1

Los archivos JS que tienen el mismo nombre que los ejercicios son los archivos que se pueden ejecutar con LearnYouNode. Por ejemplo "http-client.js". Hay otros archivos JS que sirven para el nivel 2, como servidores falsos que no usan LearnYouNode, estos se llaman cosas como "http-client-webFalsa.js". He intentado que su nombre siempre empiece con el nombre del archivo, como "http-client... bla bla", para que se guarden juntos en la carpeta.

## NIVEL 2

Cada ejercicio tiene su propio modo de ejecución. Lo explicaré ahora:

NOTA: cuando pido que se ejecute más de un archivo a la vez, se deben ejecutar en instancias distintas de terminal. Por ejemplo:

![image](https://github.com/AlanWallerGithub/sprint3/assets/140154835/7135a4d7-92f2-4ae7-90ab-cf6c11ab9930)


- "hello-world.js": se ejecuta sin nada adicional
- "baby-steps.js": se ejecuta introduciendo números cualquiera como argumentos, "node baby-steps.js 1 2 3" resultará en 6
- "my-first-io.js": se ejecuta leyendo "./my-first-io-textoPrueba.txt" como argumento "node my-first-io.js ./my-first-io-textoPrueba.txt"
- "my-first-async-io.js": se ejecuta leyendo "./my-first-async-io-textoPrueba.txt" como argumento "node my-first-async-io.js ./my-first-async-io-textoPrueba.txt"
- "filtered-ls.js": como primer argumento, se usa "./filtered-ls-archivos" y como segundo "js" o "txt", los dos tipos de archivo en la carpeta
- "make-it-modular.js": como primer argumento, se usa "./make-it-modular-archivos" y como segundo "js" o "txt", los dos tipos de archivo
- "http-client.js": primero se ejecuta el archivo "http-client-webFalsa.js". Este te avisará de que la web "http://127.0.0.1:8080/" se ha iniciado. Al introducir esta como primer argumento del archivo "http-client.js", se ejecuta bien.
- "http-collect.js": similar al archivo anterior, pero con la web falsa "http-collect-webFalsa.js". Te dará la dirección "http://127.0.0.1:7070/" para usar como argumento.
- "juggling-async.js": parecido al archivo anterior, pero se ejecutan tres webs falsas. "juggling-async-webFalsa1.js", "juggling-async-webFalsa2.js", "juggling-async-webFalsa3.js". Te imprimirán las webs falsas por pantalla, y al introducirlas en ese orden por "juggling-async.js", como argumentos, te funcionará. Disculpa por el lio de números de "port". Intenté que ningún archivo colisionara con cualquier otro durante la fase de los tests, del nivel 3.
- "time-server.js": primero ejecuta "time-server.js" con un número de "port" de "3330", es decir "node time-server.js 3330", y luego ejecuta sin argumento el "time-server-clienteFalso.js" para ver tu resultado.
- "http-file-server.js": ejecuta "node http-file-server.js" con "4000" como primer argumento y "./http-file-server-texto.txt" como el segundo. Dirígete a la web "localhost:4000" en tu navegador.
- "http-uppercaserer.js": ejecuta "node http-uppercaserer.js 3000" y luego en otro terminal, ejecuta el archivo "http-uppercaserer-post.js" para el POST.
- "http-json-api-server.js": ejecuta "http-json-api-server.js 5000" y luego busca las webs "http://127.0.0.1:5000/api/parsetime?iso=2013-08-10T12:10:15.474Z" y "http://127.0.0.1:5000/api/unixtime?iso=2013-08-10T12:10:15.474Z" en tu navegador.

## NIVEL 3

En la carpeta ‘debounce_nivel3’, el archivo ‘debounce.html’ abre una web que imprime ‘COMPRA REALIZADA en la web cada vez que pulsas el botón ‘COMPRAR’. Esta impresión solo aparecerá cuando haya pasado 1 segundo desde tu último clic, en caso de que pulses a un ritmo más rápido que ese.
Si en el código modificaras la llamada a la función memoize y aplicaras un callback que no fuese una función, este error se imprimiría en pantalla.
