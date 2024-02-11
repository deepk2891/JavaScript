let state = document.getElementById('state');
let confirm = document.getElementById('confirm');
let active = document.getElementById('active');
let death = document.getElementById('death');
let recover = document.getElementById('recovered');

document.getElementById('detail').style.display = "none";

let form = document.getElementById('form');
form.addEventListener('submit',function (e) {
    e.preventDefault();
    fetchData();
});

document.addEventListener('DOMContentLoaded',function () {
    fetchData();
});


function fetchData () {
    let input = document.getElementById('inputdata').value;
    console.log(input);

    $.ajax({
        url: `https://data.covid19india.org/data.json`,
        dataType: "json",
        method: "GET",
        success: function (res) {

            document.getElementById('inputdata').innerHTML = "<option value=''>Select State</option>";
            console.log("All State Names:");
            res.statewise.forEach(state => {
                console.log(state.state);

                let option = document.createElement('option');
                option.value = state.state.toLowerCase();
                option.textContent = state.state;
                document.getElementById('inputdata').appendChild(option);
                console.log();

            });

            updateData(res,input);
        }
    });
}

function updateData (res,input) {
    for (let i = 0; i < res.statewise.length; i++)
    {
        if (input.toLowerCase() === res.statewise[ i ].state.toLowerCase())
        {
            const stat = res.statewise[ i ];
            state.innerHTML = "State: " + stat.state;
            confirm.innerHTML = "Confirmed Cases: " + stat.confirmed;
            active.innerHTML = "Active Cases: " + stat.active;
            death.innerHTML = "Total Deaths: " + stat.deaths;
            recover.innerHTML = "Recovered Cases: " + stat.recovered;

            document.getElementById('detail').style.display = "block";
        }
    }
}
