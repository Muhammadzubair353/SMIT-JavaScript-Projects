function generatePassword() {
    const passwordLength = document.getElementById('passwordLength').value;
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
  
    // Define character sets
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersSet = "0123456789";
    const symbolsSet = "!@#$%^&*()_+-=[]{}|;:'<,>.?/";
  
    let charSets = "";
  
    // Build the character sets string based on selected options
    if (lowercase) {
      charSets += lowercaseChars;
    }
    if (uppercase) {
      charSets += uppercaseChars;
    }
    if (numbers) {
      charSets += numbersSet;
    }
    if (symbols) {
      charSets += symbolsSet;
    }
  
    // Check if any character type is selected
    if (charSets.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Select at least one character type!",
          });
      return;
    }
  
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSets.length);
      password += charSets.charAt(randomIndex);
    }
 
  
    document.getElementById('passwordDisplay').textContent = password;

    // Enable copy button after password is generated
    document.getElementById('copyBtn').disabled = false;
  }
  
  // Event listener for the generate button 
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', generatePassword);
  
  // Event listener for the copy button
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', function() {
    const password = document.getElementById('passwordDisplay').textContent;
  
    // Try navigator.clipboard first (preferred method)
    if (!navigator.clipboard) {
      // Fallback to hidden text field if not supported
      const copyInput = document.getElementById('copyInput');
      copyInput.value = password;
      copyInput.select();
      document.execCommand("copy");
      return;
    }
  
    navigator.clipboard.writeText(password)
      .then(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Password Copied to Clipboard",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch(err => {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Must be Min 8 Characters & Max 20 Characters",
        });
      });
  });