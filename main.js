
var form = document.getElementById('my-form');
var itemList = document.getElementById('items');
var editId = document.getElementById('editId');
// Form submit event
btn=document.querySelector('#my-form .btn');
btn.addEventListener('click', addItem);

// Delete event
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);

let crudid = '35fdc08cd83c4d03865a1f96365b9006'

window.onload = () => {
    axios.get(`https://crudcrud.com/api/${crudid}/appointmentData`)
        .then((res) => {
            res.data.forEach(e => {
                showOutput(e)
            });
        })
}
// Add item
function addItem(e) {
    e.preventDefault();
    let newName = document.getElementById('name').value;
    let newEmail = document.getElementById('femail').value;
    let newPhone = document.getElementById('phone').value;

    class Myobj {
        constructor(name, email, phone) {
            this.name = name;
            this.email = email
            this.phone = phone
        }
    }
    let postObj = new Myobj(newName, newEmail, newPhone)
    if (editId && editId.textContent) {
        axios.put(`https://crudcrud.com/api/${crudid}/appointmentData/${editId.textContent}`, postObj)
        showOutput(postObj)

    } else {
        axios.post(`https://crudcrud.com/api/${crudid}/appointmentData`, postObj)
            .then(res => showOutput(res.data))
    }
    form.reset()
}
// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            let editobjkey = li.classList[1];
            axios.delete(`https://crudcrud.com/api/${crudid}/appointmentData/${editobjkey}`)
        }
    }
}
// edit item
function editItem(e) {
    

    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        let editData = li.innerText.split("-");
        let editobjkey = li.classList[1];
        editId.textContent = editobjkey;
        
        document.getElementById('name').value = editData[0];
        document.getElementById('femail').value = editData[1];
        document.getElementById('phone').value = editData[2].slice(0, 10);
        itemList.removeChild(li);
    
    }
}
function showOutput(data) {
    itemList.insertAdjacentHTML("beforeend", `
        <li class="list-group-item ${data._id}">${data.name}-${data.email}-${data.phone}<button class="btn btn-primary btn-sm float-right edit ml-2">Edit</button><button class="btn btn-danger btn-sm float-right delete">X</button></li>`)
}



/*

//const ul=document.querySelector('.items');
//ul.firstElementChild.textContent='HELLO';
//ul.children[0].style.color='green';
//ul.children[1].style.color='yellow';

const btn=document.querySelector('#my-form .btn');
/*
btn.addEventListener('click',(e1)=>{
    e1.preventDefault();
    console.log('click');
});
btn.addEventListener('mouseover',(e1)=>{
    
    console.log('mouseover');
});
btn.addEventListener('mouseout',(e1)=>{
    
    console.log('mouseout');
});



const myForm=document.querySelector('my-form');
const amtInput=document.querySelector('#amt');
const desInput=document.querySelector('#des');
//const catInput=document.querySelector('#cat');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

btn.addEventListener('click',onSubmit);


function onSubmit(e){
    e.preventDefault();

    if(amtInput.value===''||desInput.value===''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.id='listitem';
        
        ///////////delete
        
        const delBtn=document.createElement('button');
        
        //add classes to delete button
        delBtn.className='btn btn-danger btn-sm float-right delete';
        delBtn.id='del';
        //append text node delete
        delBtn.appendChild(document.createTextNode('Delete Expense'));

  //////////////EDIT//////////////

        const edBtn=document.createElement('button');
        
  //add classes to edit button
        edBtn.className='btn btn-danger btn-sm float-right edit';
        edBtn.id='ed';
//append text node delete
        edBtn.appendChild(document.createTextNode('Edit Expense'));

  ///////////////////////////////


        li.appendChild(document.createTextNode(`${amtInput.value}:${desInput.value}`));


      //append button to li
        li.appendChild(delBtn);
        li.appendChild(edBtn);

        //localStorage.setItem('Name',nameInput.value);
        //console.log(localStorage.getItem('Name'));
        //localStorage.setItem('Email',emailInput.value);
        //console.log(localStorage.getItem('Email'));
        //localStorage.setItem(nameInput.value,emailInput.value);
        //console.log(localStorage.getItem(nameInput.value));

///////////////




        /////LOCAL STORAGE AS OBJECT

        const ob={
            "Name":amtInput.value,
            "Email":desInput.value,
            
        };
        //to backend crud crud
        axios.post('https://crudcrud.com/api/35fdc08cd83c4d03865a1f96365b9006/appointmentData',ob)
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{document.BODY.innerHTML=document.body.innerHTML+'<h4>Oops..Something went wrong!<\h4>';
            console.log(err)});

  



        var obs=JSON.stringify(ob);
        localStorage.setItem(desInput.value,obs);
        userList.appendChild(li);
        //console.log(obs);

        //getting deserialised
     
        let obd=JSON.parse(localStorage.getItem(desInput.value));
        //console.log(obd);
        delBtn.addEventListener('click',removeItems);
        edBtn.addEventListener('click',edititems);
        ////
        
        //Clear
        amtInput.value='';
        desInput.value='';
        }
    };
    function removeItems(e){
        //localStorage.removeItem(ob.Email);
        var itemList=document.getElementById('listitem').parentNode;
        ////////
        if(e.target.classList.contains('delete') || e.target.classList.contains('edit')){
    //if(confirm('Are you Sure?')){
        var li=e.target.parentElement;
        
        //localStorage.removeItem(ob.Email);
        itemList.removeChild(li);
        axios.delete('https://crudcrud.com/api/35fdc08cd83c4d03865a1f96365b9006/appointmentData',e.target)
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
            console.log(err)});

        
    //}
}
        /////////


        };

    function edititems(e){
            removeItems(e);
            amtInput.value=ob.Name;
            desInput.value=ob.Email;
        
            axios.put('https://crudcrud.com/api/35fdc08cd83c4d03865a1f96365b9006/appointmentData',{"Name":ob.Name,"Email":ob.Email})
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
            console.log(err)});
            //catInput.value=ob.Category;
        };

    
    window.onload=()=> {
      
       
        axios.get('https://crudcrud.com/api/35fdc08cd83c4d03865a1f96365b9006/appointmentData')
        .then((response) => {
          // The data is in the response object's 'data' property
          const appointmentData = response.data;
          console.log(appointmentData);

        
          const ulElement = document.createElement("ul");
          
          for (let i = 0; i < appointmentData.length; i++) {
            var li = document.createElement("li");

            li.id='listitem';
        
        ///////////delete
        var delBtn = '<button class="btn btn-danger btn-sm float-right delete" id="del">Delete</button>';

var edBtn = '<button class="btn btn-danger btn-sm float-right edit" id="ed">Edit</button>';


  //////////////EDIT//////////////

  ///////////////////////////////


        li.appendChild(document.createTextNode(`${amtInput.value}:${desInput.value}`));
        

      //append button to li
        //li.appendChild(delBtn);
        //li.appendChild(edBtn);
        li.innerHTML = appointmentData[i].Name + " :: " + appointmentData[i].Email + delBtn + edBtn;
        delBtn.addEventListener('click',removeItems);
        edBtn.addEventListener('click',edititems);


            
            ulElement.appendChild(li);

          }
          
          document.body.appendChild(ulElement);

         
        })
          // Display the appointment data on the page
          // ...
          .catch((err) => console.log(err));
  

  
    };
/*


//remove item
function removeItem(e){
    var itemList=document.getElementById('listitem').parentNode;
    if(e.target.classList.contains('delete')){
        //if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            
            //localStorage.removeItem(ob.Email);
            itemList.removeChild(li);
            //https://www.youtube.com/embed/5yIm_UgaCYI
        //}
    }
}

*/

