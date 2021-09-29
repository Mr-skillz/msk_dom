# for logging of datas
msc('msk library is connected');


# for get request
MSK('get', 'https://reqres.in/api/users').then((data) => {
    console.log(data)
});

# for post request
MSK('POST', 'https://reqres.in/api/register', {
    "email": "eve.holt@reqres.in",
    "password": "pis"
}).then((data) => {
    console.log(data)
}).catch(({
    error
}) => {
    console.log(error)
}); 

# prepend 

msk('#btn1').on('click', (e) => {
    const div = document.createElement('div');
    div.textContent = 'hello';
    var rad = Math.floor(Math.random() * 6);
    msk(`.div${rad+1}`).hide();
    msk('h1').prepend(div);
})

# append
msk('#btn2').on('click', (e) => {
    const div = document.createElement('div');
    div.textContent = 'hello';
    var rad = Math.floor(Math.random() * 6);
    msk(`.div${rad+1}`).show();
    msk('h1').append(div)
})
