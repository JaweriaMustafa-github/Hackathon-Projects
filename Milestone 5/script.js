var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); //prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var objectiveElement = document.getElementById('objective');
    var certificationElement = document.getElementById('certification');
    var usernameElement = document.getElementById('username');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && objectiveElement && certificationElement && usernameElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var profilePicture = profilePictureInput.value;
        var objective = objectiveElement.value;
        var certification = certificationElement.value;
        var username = usernameElement.value;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Save form data in localStorage with the username as the key
        var resumeData = {
            profilePicture: profilePicture,
            objective: objective,
            certification: certification,
            username: username,
            name: name_1,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skills: skills
        };
        localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
        // Generate the resume content dynamically
        // Profile Picture setup
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Generate the resume dynamically
        var resumeHTML = "\n         <h2>Sharable Resume</h2>\n\n         <fieldset>\n         <h3>Profile Section:</h3>\n         <p><b>Profile Picture: </b> <span contenteditable=\"true\">".concat(profilePicture ? "<img  src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "</span></p>\n         <section id=\"objective\">\n            <p><b>Objective:</b><span contenteditable=\"true\"> ").concat(objective, "</span><p>\n        </section>\n        <section id=\"certification\">\n            <p><b>Certifications:</b><span contenteditable=\"true\"> ").concat(certification, "</span><p>\n        </section>\n        </fieldset>\n\n        <fieldset >\n        <h3>Personal Information:</h3>\n        <p><b>Name:</b><span contenteditable=\"true\"> ").concat(name_1, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone No:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n</fieldset>\n\n    <fieldset >\n    <h3>Education:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n</fieldset>\n\n    <fieldset >\n    <h3>Experience:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n</fieldset>\n\n    <fieldset >\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    </fieldset>\n    ");
        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = 'block';
        // Generate a shareable URL with the username only
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        // Display the shareable link
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    }
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('profilePicture').value = resumeData.profilePicture;
            document.getElementById('objective').value = resumeData.objective;
            document.getElementById('certification').value = resumeData.certification;
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
