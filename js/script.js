document.getElementById('delet_user_cange').onclick = function() {
    document.getElementById('name').value = '';
    document.getElementById('fam').value = '';
};

document.getElementById('go').onclick = function() {
    var username = document.getElementById('name').value;
    var fam = document.getElementById('fam').value;
    var log = document.getElementById('log').value;
    var log2 = document.getElementById('log_yes').value;

    if (username > '' && fam > '' && log > '' && log2 > '' && log == log2) {
        document.getElementById('out').innerHTML = 'Вы были успешно зарегестрированы.';
    } else if (username > '' && fam > '' && log > '' && log2 > '' && log != log2) {
        document.getElementById('out').innerHTML = 'Вы неверно подтвердили пароль! Попробуйте ещё раз.'
    } else if (username == '' && fam == '' && log > '' && log2 > '' && log == log2 || username == '' && fam == '' && log > '' && log2 > '' && log != log2) {
        document.getElementById('out').innerHTML = 'Введите личные данные!'
    } else if (username > '' && fam == '' && log > '' && log2 > '' && log == log2 || username == '' && fam > '' && log > '' && log2 > '' && log != log2) {
        document.getElementById('out').innerHTML = 'Введите личные данные!'
    } else if (username == '' && fam > '' && log > '' && log2 > '' && log == log2 || username > '' && fam == '' && log > '' && log2 > '' && log != log2) {
        document.getElementById('out').innerHTML = 'Введите личные данные!'
    } else {
        document.getElementById('out').innerHTML = 'Вы не заполнили какое-либо поле!'
    };
};