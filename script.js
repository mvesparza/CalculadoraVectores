const vector2DBtn = document.getElementById("vector2d");
const vector3DBtn = document.getElementById("vector3d");
const contentSection = document.getElementById("content");

vector2DBtn.addEventListener("click", showVector2D);
vector3DBtn.addEventListener("click", showVector3D);

function showVector2D() {
    contentSection.innerHTML = `
        <h3>Calculadora de Vectores 2D</h3>
        <div class="input-group">
            <div class="component">
                <label for="vector2d-x1">Componente X1:</label>
                <input type="number" id="vector2d-x1" placeholder="Ingrese la componente X del primer vector">
            </div>
            <div class="component">
                <label for="vector2d-y1">Componente Y1:</label>
                <input type="number" id="vector2d-y1" placeholder="Ingrese la componente Y del primer vector">
            </div>
        </div>
        <div class="input-group">
            <div class="component">
                <label for="vector2d-x2">Componente X2:</label>
                <input type="number" id="vector2d-x2" placeholder="Ingrese la componente X del segundo vector">
            </div>
            <div class="component">
                <label for="vector2d-y2">Componente Y2:</label>
                <input type="number" id="vector2d-y2" placeholder="Ingrese la componente Y del segundo vector">
            </div>
        </div>
        <div class="btn-group">
            <button onclick="sumarVector2D()">Sumar</button>
            <button onclick="restarVector2D()">Restar</button>
            <button onclick="productoEscalar2D()">Producto Escalar</button>
            <button onclick="magnitudVector2D()">Magnitud</button>
            <button onclick="productoCruz2D()">Producto Cruz</button>
            <button onclick="anguloVector2D()">Ángulo entre Vectores</button>
        </div>
        <div id="resultado2d"></div>
        <canvas id="grafico2d"></canvas>
    `;
}

function showVector3D() {
    contentSection.innerHTML = `
        <h3>Calculadora de Vectores 3D</h3>
        <div class="input-group">
            <div class="component">
                <label for="vector3d-x1">Componente X1:</label>
                <input type="number" id="vector3d-x1" placeholder="Ingrese la componente X del primer vector">
            </div>
            <div class="component">
                <label for="vector3d-y1">Componente Y1:</label>
                <input type="number" id="vector3d-y1" placeholder="Ingrese la componente Y del primer vector">
            </div>
            <div class="component">
                <label for="vector3d-z1">Componente Z1:</label>
                <input type="number" id="vector3d-z1" placeholder="Ingrese la componente Z del primer vector">
            </div>
        </div>
        <div class="input-group">
            <div class="component">
                <label for="vector3d-x2">Componente X2:</label>
                <input type="number" id="vector3d-x2" placeholder="Ingrese la componente X del segundo vector">
            </div>
            <div class="component">
                <label for="vector3d-y2">Componente Y2:</label>
                <input type="number" id="vector3d-y2" placeholder="Ingrese la componente Y del segundo vector">
            </div>
            <div class="component">
                <label for="vector3d-z2">Componente Z2:</label>
                <input type="number" id="vector3d-z2" placeholder="Ingrese la componente Z del segundo vector">
            </div>
        </div>
        <div class="btn-group">
            <button onclick="sumarVector3D()">Sumar</button>
            <button onclick="restarVector3D()">Restar</button>
            <button onclick="productoEscalar3D()">Producto Escalar</button>
            <button onclick="magnitudVector3D()">Magnitud</button>
            <button onclick="productoCruz3D()">Producto Cruz</button>
            <button onclick="anguloVector3D()">Ángulo entre Vectores</button>
        </div>
        <div id="resultado3d"></div>
        <canvas id="grafico3d"></canvas>
    `;
}

function sumarVector2D() {
    const x1 = parseFloat(document.getElementById("vector2d-x1").value);
    const y1 = parseFloat(document.getElementById("vector2d-y1").value);
    const x2 = parseFloat(document.getElementById("vector2d-x2").value);
    const y2 = parseFloat(document.getElementById("vector2d-y2").value);

    const resultX = x1 + x2;
    const resultY = y1 + y2;

    const result = `Resultado de la suma: (${resultX}, ${resultY})`;
    document.getElementById("resultado2d").textContent = result;

    graficarVector2D([resultX, resultY]);
}

function restarVector2D() {
    const x1 = parseFloat(document.getElementById("vector2d-x1").value);
    const y1 = parseFloat(document.getElementById("vector2d-y1").value);
    const x2 = parseFloat(document.getElementById("vector2d-x2").value);
    const y2 = parseFloat(document.getElementById("vector2d-y2").value);

    const resultX = x1 - x2;
    const resultY = y1 - y2;

    const result = `Resultado de la resta: (${resultX}, ${resultY})`;
    document.getElementById("resultado2d").textContent = result;

    graficarVector2D([resultX, resultY]);
}

function productoEscalar2D() {
    const x1 = parseFloat(document.getElementById("vector2d-x1").value);
    const y1 = parseFloat(document.getElementById("vector2d-y1").value);
    const x2 = parseFloat(document.getElementById("vector2d-x2").value);
    const y2 = parseFloat(document.getElementById("vector2d-y2").value);

    const result = x1 * x2 + y1 * y2;

    const resultText = `Resultado del Producto Escalar: ${result}`;
    document.getElementById("resultado2d").textContent = resultText;
}

function magnitudVector2D() {
    const x = parseFloat(document.getElementById("vector2d-x1").value);
    const y = parseFloat(document.getElementById("vector2d-y1").value);

    const magnitude = Math.sqrt(x * x + y * y);

    const resultText = `Magnitud del vector: ${magnitude.toFixed(2)}`;
    document.getElementById("resultado2d").textContent = resultText;
}

function productoCruz2D() {
    const x1 = parseFloat(document.getElementById("vector2d-x1").value);
    const y1 = parseFloat(document.getElementById("vector2d-y1").value);
    const x2 = parseFloat(document.getElementById("vector2d-x2").value);
    const y2 = parseFloat(document.getElementById("vector2d-y2").value);

    const result = x1 * y2 - y1 * x2;

    const resultText = `Resultado del Producto Cruz: ${result}`;
    document.getElementById("resultado2d").textContent = resultText;
}

function anguloVector2D() {
    const x1 = parseFloat(document.getElementById("vector2d-x1").value);
    const y1 = parseFloat(document.getElementById("vector2d-y1").value);
    const x2 = parseFloat(document.getElementById("vector2d-x2").value);
    const y2 = parseFloat(document.getElementById("vector2d-y2").value);

    const dotProduct = x1 * x2 + y1 * y2;
    const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
    const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);

    const cosTheta = dotProduct / (magnitude1 * magnitude2);
    const angleRad = Math.acos(cosTheta);
    const angleDeg = (angleRad * 180) / Math.PI;

    const resultText = `Ángulo entre Vectores: ${angleDeg.toFixed(2)} grados`;
    document.getElementById("resultado2d").textContent = resultText;
}

function graficarVector2D(vector) {
    const canvas = document.getElementById("grafico2d");
    const ctx = canvas.getContext("2d");

    const escala = 30; // Escala para ajustar el tamaño del gráfico
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar eje X
    ctx.beginPath();
    ctx.moveTo(0, centroY);
    ctx.lineTo(canvas.width, centroY);
    ctx.strokeStyle = "#333";
    ctx.stroke();

    // Dibujar eje Y
    ctx.beginPath();
    ctx.moveTo(centroX, 0);
    ctx.lineTo(centroX, canvas.height);
    ctx.stroke();

    // Dibujar vector
    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.lineTo(centroX + vector[0] * escala, centroY - vector[1] * escala);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Funciones para la calculadora de vectores 3D (se corrigen las funciones)

function sumarVector3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const resultX = x1 + x2;
    const resultY = y1 + y2;
    const resultZ = z1 + z2;

    const result = `Resultado de la suma: (${resultX}, ${resultY}, ${resultZ})`;
    document.getElementById("resultado3d").textContent = result;

    graficarVector3D([resultX, resultY, resultZ]);
}

function restarVector3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const resultX = x1 - x2;
    const resultY = y1 - y2;
    const resultZ = z1 - z2;

    const result = `Resultado de la resta: (${resultX}, ${resultY}, ${resultZ})`;
    document.getElementById("resultado3d").textContent = result;

    graficarVector3D([resultX, resultY, resultZ]);
}

function productoEscalar3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const result = x1 * x2 + y1 * y2 + z1 * z2;

    const resultText = `Resultado del Producto Escalar: ${result}`;
    document.getElementById("resultado3d").textContent = resultText;
}

function magnitudVector3D() {
    const x = parseFloat(document.getElementById("vector3d-x1").value);
    const y = parseFloat(document.getElementById("vector3d-y1").value);
    const z = parseFloat(document.getElementById("vector3d-z1").value);

    const magnitude = Math.sqrt(x * x + y * y + z * z);

    const resultText = `Magnitud del vector: ${magnitude.toFixed(2)}`;
    document.getElementById("resultado3d").textContent = resultText;
}

function productoCruz3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const resultX = y1 * z2 - z1 * y2;
    const resultY = z1 * x2 - x1 * z2;
    const resultZ = x1 * y2 - y1 * x2;

    const result = `Resultado del Producto Cruz: (${resultX}, ${resultY}, ${resultZ})`;
    document.getElementById("resultado3d").textContent = result;
}

function anguloVector3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const dotProduct = x1 * x2 + y1 * y2 + z1 * z2;
    const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1);
    const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);

    const cosTheta = dotProduct / (magnitude1 * magnitude2);
    const angleRad = Math.acos(cosTheta);
    const angleDeg = (angleRad * 180) / Math.PI;

    const resultText = `Ángulo entre Vectores: ${angleDeg.toFixed(2)} grados`;
    document.getElementById("resultado3d").textContent = resultText;
}

function graficarVector2D(vector) {
    const canvas = document.getElementById("grafico2d");
    const ctx = canvas.getContext("2d");

    const escala = 30; // Escala para ajustar el tamaño del gráfico
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar eje X
    ctx.beginPath();
    ctx.moveTo(0, centroY);
    ctx.lineTo(canvas.width, centroY);
    ctx.strokeStyle = "#333";
    ctx.stroke();

    // Dibujar eje Y
    ctx.beginPath();
    ctx.moveTo(centroX, 0);
    ctx.lineTo(centroX, canvas.height);
    ctx.stroke();

    // Dibujar vector
    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.lineTo(centroX + vector[0] * escala, centroY - vector[1] * escala);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function graficarVector3D() {
    const x1 = parseFloat(document.getElementById("vector3d-x1").value);
    const y1 = parseFloat(document.getElementById("vector3d-y1").value);
    const z1 = parseFloat(document.getElementById("vector3d-z1").value);
    const x2 = parseFloat(document.getElementById("vector3d-x2").value);
    const y2 = parseFloat(document.getElementById("vector3d-y2").value);
    const z2 = parseFloat(document.getElementById("vector3d-z2").value);

    const canvas = document.getElementById("grafico3d");
    const ctx = canvas.getContext("2d");
    const escala = 30;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar ejes
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.strokeStyle = "#333";
    ctx.stroke();

    // Dibujar vector 3D
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + x1 * escala, centerY - y1 * escala);
    ctx.lineTo(centerX + x1 * escala + x2 * escala, centerY - y1 * escala - z2 * escala);
    ctx.lineTo(centerX + x1 * escala + x2 * escala + x1 * escala, centerY - y1 * escala - z2 * escala - y1 * escala);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.stroke();
}