document.addEventListener('DOMContentLoaded', function() {

    // ===== КНОПКА ОПЛАТЫ =====
    const payButton = document.getElementById('payButton');
    if (payButton) {
        payButton.addEventListener('click', function() {
            const cardNumber = document.getElementById('cardNumber')?.value.trim();
            const expiry = document.getElementById('cardExpiry')?.value.trim();
            const cvc = document.getElementById('cardCvc')?.value.trim();

            if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
                alert('Введите корректный номер карты (16 цифр)');
                return;
            }
            if (!expiry || expiry.length < 5) {
                alert('Введите срок действия (ММ/ГГ)');
                return;
            }
            if (!cvc || cvc.length < 3) {
                alert('Введите CVC/CVV код');
                return;
            }

            payButton.textContent = '⏳ Обработка...';
            payButton.disabled = true;

            setTimeout(() => {
                window.location.href = 'success.html';
            }, 1500);
        });
    }

    // ===== КОПИРОВАНИЕ ССЫЛКИ =====
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const urlSpan = document.getElementById('downloadUrl');
            if (urlSpan) {
                const url = urlSpan.textContent;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url).then(() => {
                        copyBtn.textContent = '✅ Скопировано!';
                        setTimeout(() => {
                            copyBtn.textContent = '📋 Копировать';
                        }, 2000);
                    });
                } else {
                    const range = document.createRange();
                    range.selectNode(urlSpan);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    document.execCommand('copy');
                    copyBtn.textContent = '✅ Скопировано!';
                    setTimeout(() => {
                        copyBtn.textContent = '📋 Копировать';
                    }, 2000);
                }
            }
        });
    }

    // ===== КНОПКА "ВОЙТИ" =====
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('🔑 Вход для покупателей. Вы получите доступ к своему кабинету после оплаты.');
        });
    }

    // ===== ССЫЛКА ДЛЯ СКАЧИВАНИЯ =====
    const downloadLink = document.getElementById('downloadLink');
    if (downloadLink) {
        downloadLink.addEventListener('click', function(e) {
            e.preventDefault();
            const url = document.getElementById('downloadUrl')?.textContent;
            if (url) {
                window.open(url, '_blank');
            }
        });
    }

});
