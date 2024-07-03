const defaultText = `"It is essential to have good tools, but it is also essential that the tools should be used in the right way." - Wallace D. Wattles.`;
function showSkillInfoTOP() {
    const skillInfoText = document.getElementById('skillInfoText');
    
    // Remove the visible class to reset the animation
    
    skillInfoText.classList.remove('visible');

    // Change the text after a short delay to allow the animation to reset
    setTimeout(() => {
        // skillInfoText.innerText = "Front End Skills";
        skillInfoText.innerHTML = "<h4>Front End Skills</h4><br><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li></ul>"
        
        // Add the visible class to start the animation
        skillInfoText.classList.add('visible');
    }, 300); // 10 milliseconds delay
}
function showSkillInfoMID() {
    const skillInfoText = document.getElementById('skillInfoText');
    
    // Remove the visible class to reset the animation
    skillInfoText.classList.remove('visible');

    // Change the text after a short delay to allow the animation to reset
    setTimeout(() => {
        skillInfoText.innerText = "Tools";
        
        // Add the visible class to start the animation
        skillInfoText.classList.add('visible');
    }, 300); // 10 milliseconds delay
}
function showSkillInfoBOT() {
    const skillInfoText = document.getElementById('skillInfoText');
    
    // Remove the visible class to reset the animation
    skillInfoText.classList.remove('visible');

    // Change the text after a short delay to allow the animation to reset
    setTimeout(() => {
        skillInfoText.innerText = "Back End Skills";
        
        // Add the visible class to start the animation
        skillInfoText.classList.add('visible');
    }, 300); // 10 milliseconds delay
}
function showSkillInfoORI() {
    const skillInfoText = document.getElementById('skillInfoText');
    
    // Remove the visible class to reset the animation
    skillInfoText.classList.remove('visible');

    // Change the text after a short delay to allow the animation to reset
    setTimeout(() => {
        skillInfoText.innerText = defaultText;
        
        // Add the visible class to start the animation
        skillInfoText.classList.add('visible');
    }, 300); // 10 milliseconds delay
}