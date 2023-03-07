function launch() {
    const subdomain = document.querySelector('#subdomain').value;
    const token = document.querySelector('#token').value;
    document.querySelector('#subdomain').value = '';
    document.querySelector('#token').value = '';
    document.querySelector('#setup-div').style.display = 'none';
    document.querySelector('#main-div').style.display = 'flex';
}