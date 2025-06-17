const form = document.getElementById("guestForm");

//Page does not reload unnecessarily.
form.addEventListener("submit", function(event){
    event.preventDefault();

//add name, time and other buttons
    function addName(){
        //We start by ensuring the limit does not exceed 10.
        const allGuest = document.querySelectorAll('#list li').length;
        if(allGuest === 10){
            alert('You are late my esteemed friend');
            return;
        }

        const guestName = document.getElementById("guestName").value;
        const list = document.getElementById('list');
        if(guestName === ""){
            alert('Ensure the name is correct');
            //return ends this loop
            return;
        }

        //DOM manipulation begins :)
        const li = document.createElement('li');
        const categoryChecked = document.querySelector('input[name="category"]:checked');
        const category = categoryChecked.value;

        li.textContent = guestName;
        list.appendChild(li);
        //after adding the name, it will be added to the paragraph with id of 'myParagraph' and display as below.
        document.getElementById("myParagraph").textContent = `${guestName}, is now on the list. Thankyou!`;
        //testing my output
        console.log(guestName);
    
        //creating a span element for my friend or family categories with respective ID.
        const relationship = document.createElement('span');
        relationship.innerHTML = category;
        //each value has unique id for easier styling.
        if(category === 'VIP'){
            relationship.id = `vip`;
        }else if(category === 'Friend'){
            relationship.id = `fri`;
        }
        else if(category === 'Relative'){
            relationship.id = `relate`;
        }
        else{
            relationship.id = `fahm`;
        }
        li.appendChild(relationship);
        //testing my output
        console.log(category);

//Forming a span element to hold time data
        const time =new Date().toLocaleTimeString('en',{ hour: '2-digit', minute: '2-digit' });
        const nameInfo = document.createElement('span');
        nameInfo.textContent = time;
        li.appendChild(nameInfo);
        //testing my output
        console.log(time);


        let rsvp = document.createElement("button");
        rsvp.textContent = "Attending";
        rsvp.onclick = function reserved(){
            rsvp.textContent = rsvp.textContent === "Attending" ?"Attending": "Not Attending" ;
        }
        li.appendChild(rsvp);


        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = function(){
            li.remove();
        }
        li.appendChild(remove);
        form.reset();
    }
    addName();
})
