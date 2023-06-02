let allWeek = document.getElementById('weekValues')

window.addEventListener("DOMContentLoaded" , async () => {
    await fetch("./data.json").then((response) => response.json()).then((data) =>{
        data.map((value) =>{
            allWeek.innerHTML +=`
            <div class="days" id="${value.day}"">
                <p class="valueDay">$${value.amount}</p>
                <div style="height: ${180 * (value.amount/100)}px"  class="divAmount"></div>
                <p>${value.day}</p>
            </div>`

        })
    })
})

