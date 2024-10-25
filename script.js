// To calculate the interest 
function calculateTheInterest(event) {
    event.preventDefault(); // Prevent page refresh or form submission
    
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Checking for NaN instead of empty string
    if (isNaN(principal) || isNaN(rate) || isNaN(tenure)) {
        alert("Please fill all the input fields.");
    } else {
        // Computation process
        const compute = principal + (principal * rate * tenure) / 100;
        // const total = compute + principal;
        document.getElementById('result').innerHTML = `The Maturity Amount: N${compute.toFixed(2)}`;
        // document.getElementById('total').innerHTML = `The Total Payable: N${total.toFixed(2)}`;
    }
}

document.getElementById('submit').addEventListener('click', calculateTheInterest);
