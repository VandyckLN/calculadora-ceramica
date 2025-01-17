function calcular() {
    // Solicita as medidas do cômodo
    const alturaComodo = parseFloat(document.getElementById('alturaComodo').value);
    const larguraComodo = parseFloat(document.getElementById('larguraComodo').value);

    // Solicita as medidas do azulejo
    const ladoAzulejo = parseFloat(document.getElementById('ladoAzulejo').value);

    // Calcula a área total do cômodo
    const areaTotalComodo = alturaComodo * larguraComodo;

    // Calcula a área de cada azulejo
    const areaAzulejo = ladoAzulejo * ladoAzulejo;

    // Calcula a quantidade de azulejos necessários
    const quantidadeAzulejos = Math.ceil(areaTotalComodo / areaAzulejo);

    // Calcula a quantidade de caixas necessárias
    const azulejosPorCaixa = 36;
    const quantidadeCaixas = Math.ceil(quantidadeAzulejos / azulejosPorCaixa);

    // Exibe os resultados
    document.getElementById('resultado').innerHTML = `
        Área total do cômodo: ${areaTotalComodo.toFixed(2)} m²<br>
        Área de cada azulejo: ${areaAzulejo.toFixed(2)} m²<br>
        Quantidade de azulejos necessários: ${quantidadeAzulejos}<br>
        Quantidade de caixas necessárias: ${quantidadeCaixas}<br>
        Quantidade de cerâmicas que vão ser utilizadas: ${quantidadeAzulejos}
    `;

    // Logs para depuração
    console.log(`Coloque o tamanho do azulejo: ${ladoAzulejo}`);
    console.log(`Coloque a altura do comodo: ${alturaComodo}`);
    console.log(`Coloque a largura do comodo: ${larguraComodo}`);
    console.log(`Área total do cômodo: ${areaTotalComodo.toFixed(2)} m²`);
    console.log(`Quantidade de cerâmicas que vão ser utilizadas: ${quantidadeAzulejos}`);
}
