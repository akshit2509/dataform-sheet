console.log("Forms.js successfully created.")

var rIndex;
table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false;
    fname = document.getElementById("validationCustom01").value;
    lname = document.getElementById("validationCustom02").value;
    userName = document.getElementById("validationCustomUsername").value;
    city = document.getElementById("validationCustom03").value;
    state = document.getElementById("validationCustom04").value;
    zip = document.getElementById("validationCustom05").value;
    message = document.getElementById("exampleFormControlTextarea1").value;


    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    else if (userName === "") {
        alert("Username Connot Be Empty");
        isEmpty = true;
    }
    else if (city === "") {
        alert("City Name Connot Be Empty");
        isEmpty = true;
    }
    else if (state === "") {
        alert("State Name Connot Be Empty");
        isEmpty = true;
    }
    else if (zip === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);
        cell8 = newRow.insertCell(7);
        cell9 = newRow.insertCell(8);

        fname = document.getElementById("validationCustom01").value;
        lname = document.getElementById("validationCustom02").value;
        userName = document.getElementById("validationCustomUsername").value;
        console.log(userName);
        city = document.getElementById("validationCustom03").value;
        state = document.getElementById("validationCustom04").value;
        zip = document.getElementById("validationCustom05").value;
        // function myFunction(gen) {
        //     gender = gen;
        // }
        var ele = document.getElementsByName("inlineRadioOptions")
        for(var i=0;i<ele.length;i++){
            if(ele[i].checked)
            var gender = ele[i].value;
        }

        var selected = new Array();
        var chbx = document.getElementById("chbx");
        var inpTags = chbx.getElementsByTagName("input");

        for(var i=0; i<inpTags.length; i++){
            if(inpTags[i].checked)
                selected.push(inpTags[i].value);
        }

        if(selected.length>0){
            selected.join(",");
        }

        // function func() {
        //     var chb = document.getElementsByClassName('chb');
        //     if (chb[0].checked) {
        //         // document.getElementById('pgh').innerHTML += "Red ";
        //         favColor += "Red "
        //     }

        //     if (chb[1].checked) {
        //         // document.getElementById('pgh').innerHTML += "Green ";
        //         favColor += "Green "
        //     }

        //     if (chb[2].checked) {
        //         // document.getElementById('pgh').innerHtml += "Blue";
        //         favColor += "Blue"
        //     }

        // }
        message = document.getElementById("exampleFormControlTextarea1").value;


        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = userName;
        cell4.innerHTML = city;
        cell5.innerHTML = state;
        cell6.innerHTML = zip;
        cell7.innerHTML = gender;
        cell8.innerHTML = selected;
        cell9.innerHTML = message;

        // call the function to set the event to the new ro
    }
}
function func() {
    var chb = document.getElementsByClassName('chb');
    if (chb[0].checked) {
        document.getElementById('pgh').innerHTML = "Red ";
    }

    if (chb[1].checked) {
        document.getElementById('pgh').style.fontSize = "Green ";
    }

    if (chb[2].checked) {
        document.getElementById('pgh').style.fontWeight = "Blue";
    }

}

// document.getElementById("submitBtn").addEventListener("click", function () {
//     document.getElementById("tableGen").innerHTML = "Hello world";
// })

// let firstName = document.getElementById("validationCustom01");
// console.log(firstName.value);

function res(){
    document.getElementById("resetBtn").reset();
}