function check() {
    let s = document.getElementById("symptom").value.toLowerCase();
    let msg = "";

    if (s.includes("fever")) msg = "Possible cause: Viral infection.";
    else if (s.includes("cough")) msg = "Possible cause: Throat infection.";
    else if (s.includes("headache")) msg = "Possible cause: Stress or dehydration.";
    else msg = "No data found. Please enter a common symptom.";

    document.getElementById("output").innerText = msg;
}
