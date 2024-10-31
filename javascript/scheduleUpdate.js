
//will call this function when site is loaded and schedule is updated
//Will read in Json files and update schedule acordingly
function generateSchedule() {
    //change ID accordingly
    


}


function addCourse() {
    //when the add course button is clicked, a form will pop up 
    //when the form is filled and add course button is clicked
    //update json file according to said form data

    let name = document.getElementById("courseInput");
}


//code below might replace the addCourse() function above


/* 
    The Json file by default should have objects
    mon1, mon2, mon3, etc but the values should be empty


    When a user adds a course, it will update the values of these objects of the shcedule.json
    after updating the values, the schedule should read the json file again to update the schedule



    This might be diffuclt, as I don't know how to change the correct object by day, period
    I would need a very long if statement or switch that includes all the possibilities (7 days x 7 periods)
*/


//https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}






//JSON can have objects of the same name --> will need to rewrite the whole file to prevent 
document.getElementById('inputForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let nameofCourse = document.getElementById('coursename').value;
    let weekday = document.getElementById('day').value;
    let periodofcourse = document.getElementById('period').value;
    //let coursedetails = "";

    let course = {
        couseName: nameofCourse,    //string
        day: weekday,               //string
        period: periodofcourse,     //int
        details: "",                //string
    }

    

    let courseJson = JSON.stringify(course);

    download(courseJson, 'json.txt', 'text/plain');




    


    //Close modal after submission
    modal.style.display = "none";
}





const modal = document.getElementById("myModal");
    // Get the button that opens the modal
const btn = document.getElementById("openModal");
    // Get the <span> element that closes the modal
const span = document.getElementById("closeModal");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
