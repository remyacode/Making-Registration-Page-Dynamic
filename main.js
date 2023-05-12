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
*/


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
        axios.post('https://crudcrud.com/api/8c4cccfbed344396ba9c7f58b378eaa0/appointmentData',ob)
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
        axios.delete('https://crudcrud.com/api/8c4cccfbed344396ba9c7f58b378eaa0/appointmentData',e.target)
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
            //catInput.value=ob.Category;
        };

    
    window.addEventListener('DOMContentLoaded', function(e) {
      
       
        axios.get('https://crudcrud.com/api/8c4cccfbed344396ba9c7f58b378eaa0/appointmentData')
        .then((response) => {
          // The data is in the response object's 'data' property
          const appointmentData = response.data;
          console.log(appointmentData);

        
          const ulElement = document.createElement("ul");
          
          for (let i = 0; i < appointmentData.length; i++) {
            var li = document.createElement("li");

            li.id='listitem';
        
        ///////////delete
        
        var delBtn=document.createElement('button');
        
        //add classes to delete button
        delBtn.className='btn btn-danger btn-sm float-right delete';
        delBtn.id='del';
        //append text node delete
        delBtn.appendChild(document.createTextNode('Delete'));

  //////////////EDIT//////////////

        var edBtn=document.createElement('button');
        
  //add classes to edit button
        edBtn.className='btn btn-danger btn-sm float-right edit';
        edBtn.id='ed';
//append text node delete
        edBtn.appendChild(document.createTextNode('Edit'));

  ///////////////////////////////


        li.appendChild(document.createTextNode(`${amtInput.value}:${desInput.value}`));
        

      //append button to li
        //li.appendChild(delBtn);
        //li.appendChild(edBtn);

        li.innerText = appointmentData[i].Name + " :: " + appointmentData[i].Email+delBtn+edBtn;
        delBtn.addEventListener('click',removeItems);
        edBtn.addEventListener('click',edititems);


            
            ulElement.appendChild(li);

          }
          
          document.body.appendChild(ulElement);

         
        })
          // Display the appointment data on the page
          // ...
          .catch((err) => console.log(err));
  

  
    });
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