$(document).ready(function () {
	$('#form-contato').submit(function (event) {
		event.preventDefault();

		if (validarFormulario()) {
			alert('Formulário válido. Enviando...');
			// Aqui você pode adicionar a lógica para enviar o formulário para o servidor.
		}
	});

	function validarFormulario() {
		var nome = $('#nome').val();
		var email = $('#email').val();
		var mensagem = $('#msg').val();

		if (nome.trim() === '') {
			alert('Por favor, preencha o campo Nome.');
			return false;
		}

		if (email.trim() === '' || !isValidEmail(email)) {
			alert('Por favor, insira um e-mail válido.');
			return false;
		}

		if (mensagem.trim() === '') {
			alert('Por favor, preencha o campo Mensagem.');
			return false;
		}

		return true;
	}

	function isValidEmail(email) {
		// Adicione sua lógica de validação de e-mail aqui.
		// Retorna true se o e-mail for válido, false caso contrário.
		return true;
	}
});
