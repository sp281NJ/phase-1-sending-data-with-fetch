// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
 /* const configurationObject = {
    method: 'Post',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        },
    body:JSON.stringify(formData)
  };*/

 ///////////////////////////////////////////////////////////////////////////////////
  function submitData(){
    
    return fetch('http://localhost:3000/users',
    {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            },
        body:JSON.stringify(formData)
      })
         .then(response => response.json())
         .then(json => addusers(json))
         .catch(function (error) {
           alert("Bad things! Ragnarők!");
           cerror(error.message);
         });

 };


function addusers(userid){
const userinfo = document.querySelector('body');

    const h2 = document.createElement('h2');
    h2.innerHTML = userid.id;
    userinfo.appendChild(h2);


}

function cerror(messerr){
    const errmess = document.querySelector('body');
    const h3 = document.createElement('h3');
    h3.innerHTML = messerr;
    errmess.appendChild(h3);
}



