// q1
// 1

// let exp = "faraz" || (true + false) + 5 && " " || "true";
// answer
// "faraz" || 
// "faraz"


// 2

// let exp1 = (1 + 2) + ++b || 5 && 0 ; for b = 3;
// answer
// 7


// 3

// let exp2 = 32 && true - ++a && " " || "true"; for a = 5;
// answer
// let exp2 = " " || "true";
// " "


// 4
// let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
// answer
// let exp3 = 20 && undefined || "faraz" + 5;
// let exp3 = undefined || "faraz" + 5;
// "faraz5"


// 5
// let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
// answer
// let exp4 = "32abc" || (true + false) + false || +5 || "true";
// "32abc"


// 6
// let exp5 = false || (true + true) + 15 && "" || 50;
// answer
// false || 17 && "" || 50;
// false || "" || 50;
// 50


// 7
// let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
// answer
// let exp6 = 6 || false + 8 + "abc" || "true";
// 6



// 8
// let exp7 = "faraz" || false + 10 || "true";
// answer
// "faraz"



// 9
// let exp8 = 12 + (false + false) + true && null || "faraz";
// answer
// let exp8 = 13 && null || "faraz";
// "faraz"

// 10
// let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// answer
// let exp9 = 3 || "faraz" && false || 1 + 10;
// 3




// 11
// let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
// answer
// let exp10 = 6 || false + 8 + "abc" || "true";
// 6



// 12
// let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
// let exp11 = 3 && "" || false + true - (12 + true + true + false);
// let exp11 = "" || false + true - (12 + true + true + false);
// -13





// q2
const brandModels = {
    apple: ["iPhone 13", "iPhone 12", "iPhone 11"],
    samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A52"],
    oneplus: ["OnePlus 9", "OnePlus 8T", "OnePlus Nord"]
};

function populateModels() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const selectedBrand = brandSelect.value;

    // Clear previous models
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';

    if (selectedBrand) {
        const models = brandModels[selectedBrand];
        models.forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function showSelection() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const resultDiv = document.getElementById("result");

    if (brand && model) {
        resultDiv.textContent = `Selected Brand: ${brand.charAt(0).toUpperCase() + brand.slice(1)}, Model: ${model}`;
    } else {
        resultDiv.textContent = "Please select both a brand and a model.";
    }
}
