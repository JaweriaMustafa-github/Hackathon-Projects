var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault(); //prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var objectiveElement = document.getElementById('objective');
    var certificationElement = document.getElementById('certification');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && objectiveElement && certificationElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var profilePicture = profilePictureInput.value;
        var objective = objectiveElement.value;
        var certification = certificationElement.value;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile Picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Generate the resume dynamically
        var resumeHTML = "\n         <h2>Editable Resume</h2>\n\n         <fieldset>\n         <h3>Profile Section:</h3>\n         <p><b>Profile Picture: </b> <span contenteditable=\"true\">".concat(profilePicture ? "<img  src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "</span></p>\n         <section id=\"objective\">\n            <p><b>Objective:</b><span contenteditable=\"true\"> ").concat(objective, "</span><p>\n        </section>\n        <section id=\"certification\">\n            <p><b>Certifications:</b><span contenteditable=\"true\"> ").concat(certification, "</span><p>\n        </section>\n        </fieldset>\n\n        <fieldset >\n        <h3>Personal Information:</h3>\n        <p><b>Name:</b><span contenteditable=\"true\"> ").concat(name_1, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone No:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n</fieldset>\n\n    <fieldset >\n    <h3>Education:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n</fieldset>\n\n    <fieldset >\n    <h3>Experience:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n</fieldset>\n\n    <fieldset >\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    </fieldset>\n    ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block';
        }
        else {
            console.error("The resume display element is missing");
        }
    }
});
