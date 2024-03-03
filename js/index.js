// refVar to the album form
const albumForm = document.querySelector("#album-form");

// references to form elements
const albumTitle = document.querySelector('#album-title');
const albumDescription = document.querySelector('#album-description');
const albumArt = document.querySelector('#album-art');
const allAlbumsList = document.querySelector("#all-albums-list");



// event listener for submit event 
albumForm.addEventListener("submit", onAddNewAlbumCover);

// event listeners for field input validation
albumTitle.addEventListener("input", onValidateInputTitle);
albumDescription.addEventListener("input", onValidateInputDescription);
albumArt.addEventListener("change", onValidateArtSelection);


function onAddNewAlbumCover(e){
    e.preventDefault();// prevents page refresh to form defaults

    
    const titleValid = validateEmpty(albumTitle) && validateLength(albumTitle, 15);
    const descriptionValid = validateEmpty(albumDescription) && validateLength(albumDescription, 30);
    const artValid = validateAlbumArtSelection(); // Validate album art selection

    if(titleValid && descriptionValid && artValid){
        // Proceed with form submission (e.g., creating an album card)
        console.log("form is valid");
        createAlbumCard();
    }

}

function onValidateInputTitle(e){
    const titleValid = validateEmpty(albumTitle) && validateLength(albumTitle, 15);
}
function onValidateInputDescription(e){
    const descriptionValid = validateEmpty(albumDescription) && validateLength(albumDescription, 30);
}

function onValidateArtSelection(e){
    const artValid = validateAlbumArtSelection();
}

// validates for empty fields
function validateEmpty(inputText) {
    if (inputText.value.trim() === "") {
        console.log("field is empty");
        inputText.classList.add("is-invalid"); // displays validation hint 
        return false;
    }
    else{
        inputText.classList.remove("is-invalid");
        return true;
    }
}

// takes argument for input and specified max length 
function validateLength(inputText, maxLength) {
    if (inputText.value.trim().length > maxLength) {
        console.log("too many characters.");
        inputText.classList.add("is-invalid");
        return false;
    }
    else{
        inputText.classList.remove("is-invalid");
        return true;
    }
}

function validateAlbumArtSelection(){
    // Check if the default option "Select album art" is still selected
    if(albumArt.value === ""){
        albumArt.classList.add("is-invalid"); // Display validation hint
        return false;
    } else {
        albumArt.classList.remove("is-invalid"); // Remove validation hint if a valid option is selected
        return true;
    }
}

function createAlbumCard() {


    const albumCardHTML = `
        <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" src="img/${albumArt.value}" alt="Album Art">
                <div class="card-body">
                    <h5 class="card-title">${albumTitle.value}</h5>
                    <p class="card-text">${albumDescription.value}</p>
                </div>
            </div>
        </div>
    `;

    allAlbumsList.innerHTML += albumCardHTML; // adjusts div element to display the new album card 
}
