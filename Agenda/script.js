const diasElement = document.querySelector('.dias');
        const mesAnoElement = document.getElementById('mesAno');
        const dataAtual = new Date();

        const nomesMeses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        function gerarCalendario(mes, ano) {
            diasElement.innerHTML = '';
            const primeiroDiaDoMes = new Date(ano, mes, 1).getDay();
            const diasNoMes = new Date(ano, mes + 1, 0).getDate();

            mesAnoElement.textContent = `${nomesMeses[mes]} ${ano}`;

            for (let i = 0; i < primeiroDiaDoMes; i++) {
                diasElement.innerHTML += '<div class="vazio"></div>';
            }

            for (let i = 1; i <= diasNoMes; i++) {
                diasElement.innerHTML += `<div class="dia">${i}</div>`;
            }

            const totalCelulas = primeiroDiaDoMes + diasNoMes;
            const celulasVazias = 42 - totalCelulas;

            for (let i = 0; i < celulasVazias; i++) {
                diasElement.innerHTML += '<div class="vazio"></div>';
            }
        }

        gerarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());

        document.getElementById('mesAnterior').addEventListener('click', () => {
            dataAtual.setMonth(dataAtual.getMonth() - 1);
            gerarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());
        });

        document.getElementById('mesProximo').addEventListener('click', () => {
            dataAtual.setMonth(dataAtual.getMonth() + 1);
            gerarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());
        });