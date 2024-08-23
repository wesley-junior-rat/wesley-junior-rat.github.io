const url ="https://api.hgbrasil.com/weather?format=json-cors&key=2ebcdf18"

acessarAPI()

async function acessarAPI(){
    const resultado = await fetch(url)
    const dados_json = await resultado.json()

    let cidade = dados_json['results'] ['city']
    let descricao_tempo = dados_json['results'] ['description']
    let temperatura_tempo = dados_json['results']['temp']
    let umidade_ar = dados_json['results']['humidity']
    let data = dados_json['results']['date']
    let hora = dados_json['results']['time']
    let vel_vento = dados_json['results']['wind_speedy']

    let descricao_tempo1 = dados_json['results']['forecast'][1]['description']
    let temp_max1 = dados_json['results']['forecast'][1]['max']
    let temp_min1 = dados_json['results']['forecast'][1]['min']
    let umidade_1 = dados_json['results']['forecast'][1]['humidity']
    let data1 = dados_json['results']['forecast'][1]['date']
    let vel_vento1 = dados_json['results']['forecast'][1]['wind_speedy']

    let descricao_tempo2 = dados_json['results']['forecast'][2]['description']
    let temp_max2 = dados_json['results']['forecast'][2]['max']
    let temp_min2 = dados_json['results']['forecast'][2]['min']
    let umidade_2 = dados_json['results']['forecast'][2]['humidity']
    let data2 = dados_json['results']['forecast'][2]['date']
    let vel_vento2 = dados_json['results']['forecast'][2]['wind_speedy']

    let descricao_tempo3 = dados_json['results']['forecast'][3]['description']
    let temp_max3 = dados_json['results']['forecast'][3]['max']
    let temp_min3 = dados_json['results']['forecast'][3]['min']
    let umidade_3 = dados_json['results']['forecast'][3]['humidity']
    let data3 = dados_json['results']['forecast'][3]['date']
    let vel_vento3 = dados_json['results']['forecast'][3]['wind_speedy']

    let descricao_tempo4 = dados_json['results']['forecast'][4]['description']
    let temp_max4 = dados_json['results']['forecast'][4]['max']
    let temp_min4 = dados_json['results']['forecast'][4]['min']
    let umidade_4 = dados_json['results']['forecast'][4]['humidity']
    let data4 = dados_json['results']['forecast'][4]['date']
    let vel_vento4 = dados_json['results']['forecast'][4]['wind_speedy']

    let descricao_tempo5 = dados_json['results']['forecast'][5]['description']
    let temp_max5 = dados_json['results']['forecast'][5]['max']
    let temp_min5 = dados_json['results']['forecast'][5]['min']
    let umidade_5 = dados_json['results']['forecast'][5]['humidity']
    let data5 = dados_json['results']['forecast'][5]['date']
    let vel_vento5 = dados_json['results']['forecast'][5]['wind_speedy']

    span_cidade.innerText = cidade
    span_descricao.innerText = descricao_tempo
    span_temperatura.innerText = temperatura_tempo
    span_umidade.innerText = umidade_ar
    span_data_hora.innerText = data + " - " + hora
    span_vento.innerText = vel_vento

    span_data1.innerText = data1;
    span_descricao1.innerText = descricao_tempo1;
    span_temperatura1.innerText = temp_max1 + " - " + temp_min1
    span_umidade1.innerText = umidade_1;
    span_vento1 = vel_vento1;

    span_data2.innerText = data2;
    span_descricao2.innerText = descricao_tempo2;
    span_temperatura2.innerText = temp_max2 + " - " + temp_min2
    span_umidade2.innerText = umidade_2;
    span_vento2 = vel_vento2;

    span_data3.innerText = data3;
    span_descricao3.innerText = descricao_tempo3;
    span_temperatura3.innerText = temp_max3 + " - " + temp_min3
    span_umidade3.innerText = umidade_3;
    span_vento3 = vel_vento3;
    
    span_data4.innerText = data4;
    span_descricao4.innerText = descricao_tempo4;
    span_temperatura4.innerText = temp_max4 + " - " + temp_min4
    span_umidade4.innerText = umidade_4;
    span_vento4 = vel_vento4;

    span_data5.innerText = data5;
    span_descricao5.innerText = descricao_tempo5;
    span_temperatura5.innerText = temp_max5 + " - " + temp_min5
    span_umidade5.innerText = umidade_5;
    span_vento5 = vel_vento5;

}