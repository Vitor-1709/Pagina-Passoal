// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos necessários
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    const storageKey = 'portfolio-theme'; // Chave para o localStorage

    // --- Função para aplicar o tema ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // --- 2. Carregar a Preferência do Usuário ---
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme) {
        // Se houver, aplica o tema salvo
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver, verifica a preferência do sistema operacional (opcional, mas bom!)
        applyTheme('dark');
    } else {
        // Se nenhuma preferência for encontrada, o padrão é o modo claro (Light)
        applyTheme('light');
    }

    // --- 3. Evento de Alternância ---
    modeToggle.addEventListener('click', () => {
        // Verifica se o corpo já tem a classe 'dark-mode'
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            // Se estiver em modo escuro, muda para claro
            applyTheme('light');
            localStorage.setItem(storageKey, 'light');
        } else {
            // Se estiver em modo claro, muda para escuro
            applyTheme('dark');
            localStorage.setItem(storageKey, 'dark');
        }
    });
});