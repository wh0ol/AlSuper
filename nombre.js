<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
</head>
<body>
    <div id="contenido" style="text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;"></div>

    <script>
        // Obtén el elemento div con el id "contenido"
        var contenido = document.getElementById("contenido");

        // Establece el fondo negro y el texto blanco
        contenido.style.backgroundColor = "black";
        contenido.style.color = "white";

        // Agrega el texto "Daniela Ortiz" al elemento div
        contenido.innerHTML = "<h1>Daniela Ortiz</h1>";
    </script>
</body>
</html>
