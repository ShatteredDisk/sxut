function launch() {
    document.querySelector('#setup-div').style.display = 'none';
    document.querySelector('#main-div').style.display = 'flex';
}

function submit() {
    const subdomain = document.querySelector('#subdomain').value;
    const token = document.querySelector('#token').value;
    const file = document.querySelector('#file').files[0];
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const color = document.querySelector('#color').value;
    const site_name = document.querySelector('#site_name').value;
    document.querySelector('#subdomain').value = '';
    document.querySelector('#token').value = '';
    document.querySelector('#file').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#color').value = '';
    document.querySelector('#site_name').value = '';
    const url = ('https://' + subdomain + '/files/create');
    const json = JSON.stringify({
        title: title,
        description: description,
        color: color,
        site_name: site_name
    });
    const og_properties = new Blob([json], {
        type: 'application/json'
    })
    var formData = new FormData();
    formData.append('file', file);
    formData.append('token', token);
    formData.append('og_properties', og_properties);
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then((result) => {
            navigator.clipboard.writeText(result);
        })
        .catch((error) => {
            navigator.clipboard.writeText(error);
        });
}