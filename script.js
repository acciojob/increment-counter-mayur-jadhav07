//your JS code here. If required.
// Get the counter paragraph and the increment button
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Add event listener to the increment button
incrementButton.addEventListener('click', () => {
    // Get the current value of the counter
    const currentValue = parseInt(counterParagraph.textContent);

    // Display an alert with the current value before incrementing
    alert('Current value: ' + currentValue);

    // Increment the counter value and update the paragraph text
    counterParagraph.textContent = currentValue + 1;
});
