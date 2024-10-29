const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (e:Event) => {
    e.preventDefault(); //prevent page reload

    // Collect input values
    const profilePictureInput = (document.getElementById('profilePicture') as HTMLInputElement);
    const objectiveElement = (document.getElementById('objective') as HTMLInputElement);
    const certificationElement = (document.getElementById('certification') as HTMLInputElement);
    const nameElement = (document.getElementById('name') as HTMLInputElement);
    const emailElement = (document.getElementById('email') as HTMLInputElement);
    const phoneElement = (document.getElementById('phone') as HTMLInputElement);
    const educationElement = (document.getElementById('education') as HTMLTextAreaElement);
    const experienceElement = (document.getElementById('experience') as HTMLTextAreaElement);
    const skillsElement = (document.getElementById('skills') as HTMLTextAreaElement);

    if (profilePictureInput && objectiveElement && certificationElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const profilePicture = profilePictureInput.value;
        const objective = objectiveElement.value;
        const certification = certificationElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
  

    // Profile Picture
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Generate the resume dynamically
    const resumeHTML = `
         <h2>Editable Resume</h2>

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
    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = 'block';
    }
    else {
        console.error("The resume display element is missing");
    }
  }
});