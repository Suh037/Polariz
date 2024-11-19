// Função para validação de formulário
function validarFormulario(formId) {
    let form = document.getElementById(formId);
    let isValid = true;
    let inputs = form.querySelectorAll('input, textarea, select');
    
    // Loop para verificar se todos os campos estão preenchidos
    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = '2px solid red';  // Destacar campo vazio
        } else {
            input.style.border = '';  // Remover destaque
        }
    });

    if (isValid) {
        if (formId === 'informacoes-form') {
            mostrarMensagem('informacoes-feedback', 'Suas informações foram enviadas com sucesso!');
        } else if (formId === 'feedback-form') {
            mostrarMensagem('feedback-feedback', 'Seu feedback foi enviado com sucesso! Obrigado pela sua avaliação.');
        }
    } else {
        mostrarMensagem(formId === 'informacoes-form' ? 'informacoes-feedback' : 'feedback-feedback', 'Por favor, preencha todos os campos.');
    }

    // Evita o envio real do formulário (somente para demonstração)
    return false;
}

// Função para mostrar mensagens de feedback
function mostrarMensagem(elementId, mensagem) {
    let feedbackElement = document.getElementById(elementId);
    feedbackElement.innerHTML = mensagem;
    feedbackElement.style.color = mensagem.includes('sucesso') ? 'green' : 'red';
    feedbackElement.style.fontWeight = 'bold';
}
