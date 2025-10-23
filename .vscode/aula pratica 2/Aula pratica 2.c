#include <stdio.h> // Inclui a biblioteca padrão de entrada e saída, que permite usar funções como printf e scanf.

int main() {
    // Declaração de variáveis
int opcao; // Armazena a opção que o usuário escolhe no menu.
int continuar = 1; // Variável de controle para o loop principal. Enquanto for 1, o programa continua rodando.
int contadorSuporte = 0; // Contador para a opção "Suporte Técnico".
int contadorFinanceiro = 0; // Contador para a opção "Setor Financeiro".
int contadorGeral = 0; // Contador para a opção "Informações Gerais".

printf("Bem-vindo ao chatbot de Atendimento virtual!\n"); // Exibe uma mensagem de boas-vindas ao usuário.

    // Loop principal do programa. Ele continua rodando enquanto a variável 'continuar' for igual a 1.
while (continuar) {
        // Menu de opções. Exibe as opções disponíveis para o usuário.
printf("Por favor, escolha uma das opções abaixo:\n");
printf("1. Suporte Técnico\n");
printf("2. Setor Financeiro\n");
 printf("3. Informações Gerais\n");
printf("4. Sair\n");

scanf("%d", &opcao); // Lê a opção que o usuário digitou e a armazena na variável 'opcao'.

        // Estrutura de decisão 'switch'. Executa um bloco de código diferente dependendo do valor da variável 'opcao'.
switch (opcao) {
case 1: // Se a opção for 1 (Suporte Técnico).
printf("Você escolheu Suporte Técnico.\n");
printf("Um de nossos técnicos entrarão em contato com você o mais breve possível.\n");
contadorSuporte++; // Incrementa o contador de "Suporte Técnico" em 1.
break; // Sai do bloco 'switch' para evitar que o código continue executando outros 'cases'.

case 2: // Se a opção for 2 (Setor Financeiro).
printf("Você escolheu Setor Financeiro.\n");
printf("Por favor, tenha seu CPF em mãos para agilizar o atendimento.\n");
contadorFinanceiro++; // Incrementa o contador de "Setor Financeiro" em 1.
break;

case 3: // Se a opção for 3 (Informações Gerais).
printf("Você escolheu Informações Gerais.\n");
printf("Consulte nossa sessão de FAQ para respostas e perguntas frequentes.\n");
contadorGeral++; // Incrementa o contador de "Informações Gerais" em 1.
break;

case 4: // Se a opção for 4 (Sair).
printf("Obrigado por utilizar nosso chatbot de Atendimento virtual. Até logo!\n");
continuar = 0; // Altera o valor de 'continuar' para 0, fazendo com que o loop 'while' termine na próxima verificação.
break;

default: // Se a opção digitada não for 1, 2, 3 ou 4.
printf("Opção inválida. Por favor, tente novamente.\n"); // Exibe uma mensagem de erro.
break;
}

        // Verifica se o usuário não escolheu a opção "Sair" (ou seja, se 'continuar' ainda é 1).
if (continuar) {
            // Exibe a contagem de acessos para cada setor.
printf("--- Contagem de Acessos ---\n");
printf("Suporte Técnico: %d\n", contadorSuporte);
printf("Setor Financeiro: %d\n", contadorFinanceiro);
printf("Informações Gerais: %d\n", contadorGeral);
printf("---------------------------\n");
}
}
return 0; // Encerra a função 'main' e retorna 0, indicando que o programa foi executado com sucesso.
}
