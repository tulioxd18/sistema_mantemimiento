document.addEventListener("DOMContentLoaded", () => {

    const btnAgregarRec = document.getElementById("btn_agregar_fila_u");
    const tbodyRec = document.getElementById("tabla_recursos_body");

    btnAgregarRec.addEventListener("click", () => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><input type="text" name="numero_factura[]" placeholder="Número de factura"></td>
            <td><input type="text" name="descripcion[]" placeholder="Descripción"></td>
            <td><input type="text" name="proveedor[]" placeholder="Proveedor"></td>
            <td><input type="number" name="cantidad[]" min="1" value="1"></td>
            <td><input type="number" name="costo_unitario[]" step="0.01" value="0"></td>
            <td><input type="number" name="costo_repuesto[]" step="0.01" value="0"></td>
            <td><button type="button" class="btn_eliminar">❌</button></td>
        `;
        tbodyRec.appendChild(fila);
        fila.querySelector(".btn_eliminar").addEventListener("click", () => fila.remove());
    });


    const btnAgregarAct = document.getElementById("btn_agregar_fila_a");
    const tbodyAct = document.getElementById("tabla_recursos_body_a");

    btnAgregarAct.addEventListener("click", () => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><input type="text" name="Descripcion_actividad[]" placeholder="Descripción de la actividad"></td>
            <td><input type="text" name="horas_trabajadas[]" placeholder="Horas trabajadas"></td>
            <td><input type="text" name="costo_mano_obra[]" placeholder="Costo de mano de obra"></td>
            <td><button type="button" class="btn_eliminar">❌</button></td>
        `;
        tbodyAct.appendChild(fila);
        fila.querySelector(".btn_eliminar").addEventListener("click", () => fila.remove());
    });
});
