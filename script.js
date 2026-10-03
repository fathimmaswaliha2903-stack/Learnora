// ================= CLASS SELECTION =================

function selectClass(classType) {

    const classTypeField =
        document.getElementById("classType");

    classTypeField.value = classType;

    document.getElementById("register")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= REGISTRATION FORM =================

const form =
    document.getElementById("studentForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const studentName =
        document.getElementById("studentName").value;


    const classType =
        document.getElementById("classType").value;


    const subject =
        document.getElementById("subject").value;


    const message =
        document.getElementById("message");


    message.innerHTML =
        `
        Thank you, ${studentName}! 
        <br>
        Your request for 
        <strong>${classType}</strong>
        in <strong>${subject}</strong>
        has been received.
        <br>
        Our team will contact you soon.
        `;


    form.reset();

});