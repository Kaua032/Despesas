let allWeek = document.getElementById('weekValues')




window.addEventListener("DOMContentLoaded" , async () => {
    
    let higherValue = 0
    await fetch("./data.json").then((response) => response.json()).then((data) =>{
        data.map((value, index) =>{
            value.amount > higherValue ? higherValue = value.amount : higherValue = higherValue;

            allWeek.innerHTML +=`
            <div class="days"">
                <p class="valueDay">$${value.amount}</p>
                <div id="${value.day}" style="height: ${200 * (value.amount/100)}px"  class="divAmount"></div>
                <p>${value.day}</p>
            </div>`

        })
    })
    
})

