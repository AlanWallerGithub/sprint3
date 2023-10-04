"use strict";
fetch(`http://localhost:3000/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'text/html; charset=UTF-8'
    },
    body: JSON.stringify({
        saludo1: "hola",
        saludo2: "esto estaba antes en minúscula",
        saludo3: "esto también",
        saludo4: "pero ahora en mayúscula"
    }),
})
    .then(res => {
    return res.json();
})
    .then(data => console.log(data));
