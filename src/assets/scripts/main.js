





function calculateAge() {
    let nigga = false;
        let inp1 = document.getElementById('dayin').value.trim();
        let inp2 = document.getElementById('monthin').value.trim();
        let inp3 = document.getElementById('yearin').value.trim();
    
        var dayRegex = /^(0[1-9]|[12][0-9]|3[01])$/;
        var monthRegex = /^(0[1-9]|1[0-2]|[1-9])$/;
        var yearRegex = /^((19|20)\d\d)$/;
    
        
        // Validating day
    if (dayRegex.test(inp1)) {
        nigga = true;
    } else {
        nigga = false;
        var alterPlaceHolder = 'Enter a valid day';
        document.getElementById('dayin').value = '';
        document.getElementById('dayin').style.border=' 1px solid red';
        document.getElementById('dayin').placeholder = alterPlaceHolder;  
    }   
    
    // Validating month
    if (monthRegex.test(inp2)) {
        nigga = true;
    } else {
        nigga = false;
        var alterPlaceHolder = 'Enter a valid month';
        document.getElementById('monthin').value = '';
        document.getElementById('monthin').style.border=' 1px solid red';
        document.getElementById('monthin').placeholder = alterPlaceHolder;
        
    }
    
    // Validating year
    if (yearRegex.test(inp3)) {
        nigga = true
    } else {
        nigga = false;
        var alterPlaceHolder = 'Enter a valid year';
        document.getElementById('yearin').value = '';
        document.getElementById('yearin').style.border=' 1px solid red';
        document.getElementById('yearin').placeholder = alterPlaceHolder;
        
    }
    // console.log(nigga); //supposed to be true
    
    
    // Get input values from HTML input fields
    if(nigga === true){
    var inputDay = document.getElementById("dayin").value;
    var inputMonth = document.getElementById("monthin").value;
    var inputYear = document.getElementById("yearin").value;

    // Create a Date object with the provided birth date
    var birthDate = new Date(inputYear, inputMonth - 1, inputDay);

    // Create a Date object with the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds between current date and birth date
    var ageInMilliseconds = currentDate - birthDate;

    // Convert milliseconds to years (approximation)
    var ageInYears = Math.floor(ageInMilliseconds / 31536000000); // 31536000000 milliseconds in a year

    // Convert remaining milliseconds to months (approximation)
    var ageInMonths = Math.floor((ageInMilliseconds % 31536000000) / 2628000000); // 2628000000 milliseconds in a month

    // Convert remaining milliseconds to days (approximation)
    var ageInDays = Math.floor(((ageInMilliseconds % 31536000000) % 2628000000) / 86400000); // 86400000 milliseconds in a day

    // Update the text content of div elements with the calculated age values
    document.getElementById("yearoutext").innerText =   ageInYears;
    document.getElementById("monthoutext").innerText =  ageInMonths;
    document.getElementById("dayoutext").innerText =  ageInDays;
    }
}

document.getElementById('subm').addEventListener('click', calculateAge)