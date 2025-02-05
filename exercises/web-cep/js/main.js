const $ = (selector) => document.querySelector(selector);

async function getCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  return await response.json();
}

$('#cep').onblur = async () => {
  try {
    const cepValue = $('#cep').value;

    const cepData = await getCep(cepValue);

    $('#street').value = cepData.logradouro;
    $('#neighborhood').value = cepData.bairro;
    $('#city').value = cepData.localidade;
    $('#state').value = cepData.uf;
    $('#number').focus();
  } catch (error) {
    console.error(error);
  }
};
