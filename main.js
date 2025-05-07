// AVERAGE RATING JS EVENT
    function GradeAnalyzer(){
        var Sub_Grade1 = parseInt(document.getElementById("gr_1id").value);
        var Sub_Grade2 = parseInt(document.getElementById("gr_2id").value);
        var Sub_Grade3 = parseInt(document.getElementById("gr_3id").value);

        // Calculate Average
        let Average = ((Sub_Grade1 + Sub_Grade2 + Sub_Grade3) / 3).toFixed(2);

        // Average Grade & Rating
        if (Average < 70){
            window.alert("Your Average is " + Average + " - Failed");
        } else if(Average >= 70 && Average <= 74.99){
            window.alert("Your Average is " + Average + " - Poor");
        } else if(Average >= 75 && Average <= 79.99){
            window.alert("Your Average is " + Average + " - Needs Improvement");
        } else if(Average >= 80 && Average <= 86.99){
            window.alert("Your Average is " + Average + " - Satisfactory");
        } else if(Average >= 87 && Average <= 93.99){
            window.alert("Your Average is " + Average + " - Above Satisfactory");
        } else if(Average >= 94 && Average <= 100){
            window.alert("Your Average is " + Average + " - Excellent");
        // Invalid or no values put
        } else{
            window.alert("Error: Please enter valid numbers for all subjects.");
        }
    }

// REFRESH JS EVENT
    function Refresh(){
        window.location.reload();
    }