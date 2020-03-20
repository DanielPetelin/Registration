document.getElementById('go').onclick = function() {
    var username = document.getElementById('name').value;
    var fam = document.getElementById('fam').value;
    var log = document.getElementById('log').value;

    if (username > '' && fam > '' && log > '') {
        document.getElementById('out').innerHTML = 'Вы были успешно зарегестрированы';
    } else {
        document.getElementById('out').innerHTML = 'Вы не заполнили какое-либо поле!'
    };
};