const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event:Event) => {
    event.preventDefault(); //prevent page reload

    // Collect input values
    const profilePictureInput = (document.getElementById('profilePicture') as HTMLInputElement);
    const objectiveElement = (document.getElementById('objective') as HTMLInputElement);
    const certificationElement = (document.getElementById('certification') as HTMLInputElement);
    const usernameElement = (document.getElementById('username') as HTMLInputElement);
    const nameElement = (document.getElementById('name') as HTMLInputElement);
    const emailElement = (document.getElementById('email') as HTMLInputElement);
    const phoneElement = (document.getElementById('phone') as HTMLInputElement);
    const educationElement = (document.getElementById('education') as HTMLTextAreaElement);
    const experienceElement = (document.getElementById('experience') as HTMLTextAreaElement);
    const skillsElement = (document.getElementById('skills') as HTMLTextAreaElement);

    if (profilePictureInput && objectiveElement && certificationElement && usernameElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const profilePicture = profilePictureInput.value;
        const objective = objectiveElement.value;
        const certification = certificationElement.value;
        const username = usernameElement.value
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Save form data in localStorage with the username as the key
const resumeData = {
    profilePicture,
    objective,
    certification,
    username,
    name,
    email,
    phone,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
  

    // Profile Picture setup
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Generate the resume dynamically
    const resumeHTML = `
         <h2>Sharable Resume</h2>

         <fieldset>
         <h3>Profile Section:</h3>
         <p><b>Profile Picture: </b> <span contenteditable="true">${profilePicture ? `<img  src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : "" }</span></p>
         <section id="objective">
            <p><b>Objective:</b><span contenteditable="true"> ${objective}</span><p>
        </section>
        <section id="certification">
            <p><b>Certifications:</b><span contenteditable="true"> ${certification}</span><p>
        </section>
        </fieldset>

        <fieldset >
        <h3>Personal Information:</h3>
        <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone No:</b><span contenteditable="true"> ${phone}</span></p>
</fieldset>

    <fieldset >
    <h3>Education:</h3>
    <p contenteditable="true">${education}</p>
</fieldset>

    <fieldset >
    <h3>Experience:</h3>
    <p contenteditable="true">${experience}</p>
</fieldset>

    <fieldset >
    <h3>Skills:</h3>
    <p contenteditable="true">${skills}</p>
    </fieldset>
    `;
    // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = 'block';
        // Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
    }
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('profilePicture') as HTMLInputElement).value = resumeData.profilePicture;
(document.getElementById('objective') as HTMLInputElement).value = resumeData.objective;
(document.getElementById('certification') as HTMLInputElement).value = resumeData.certification;
(document.getElementById('username') as HTMLInputElement).value = username;
(document.getElementById('name') as HTMLInputElement).value = resumeData.name;
(document.getElementById('email') as HTMLInputElement).value = resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
    }
  }

});