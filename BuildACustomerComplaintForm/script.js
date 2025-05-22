let inputStatus = {
  "full-name": false,
  email: false,
  "order-no": false,
  "product-code": false,
  quantity: false,
  "complaints-group": false,
  "complaint-description": false,
  "solutions-group": false,
  "solution-description": false,
};

let form = document.getElementById("form");
let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let orderNo = document.getElementById("order-no");
let productCode = document.getElementById("product-code");
let quantity = document.getElementById("quantity");
let complaintsGroup = document.getElementById("complaints-group");
let otherComplaint = document.getElementById("other-complaint");
let complaintDescription = document.getElementById("complaint-description");
let solutionsGroup = document.getElementById("solutions-group");
let otherSolution = document.getElementById("other-solution");
let solutionDescription = document.getElementById("solution-description");

fullName.addEventListener("change", function (event) {
  if (fullName.value.trim() !== "") {
    inputStatus["full-name"] = true;
    fullName.style.borderColor = "green";
  } else {
    inputStatus["full-name"] = false;
    fullName.style.borderColor = "red";
  }
});

email.addEventListener("change", function (event) {
  const basicEmailRegex = /^\S+@\S+\.\S+$/;
  if (basicEmailRegex.test(email.value.trim())) {
    inputStatus["email"] = true;
    email.style.borderColor = "green";
  } else {
    inputStatus["email"] = false;
    email.style.borderColor = "red";
  }
});

orderNo.addEventListener("change", function (event) {
  if (!isNaN(Number(orderNo.value.trim()))) {
    let len = orderNo.value.substring(4).length;
    let year = orderNo.value.substring(0, 4);
    if (year == 2024 && len == 6) {
      inputStatus["order-no"] = true;
      orderNo.style.borderColor = "green";
    } else {
      inputStatus["order-no"] = false;
      orderNo.style.borderColor = "red";
    }
  }
});

productCode.addEventListener("change", function (event) {
  //pattern: XX##-X###-XX#
  const pattern = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
  if (pattern.test(productCode.value.trim())) {
    inputStatus["product-code"] = true;
    productCode.style.borderColor = "green";
  } else {
    inputStatus["product-code"] = false;
    productCode.style.borderColor = "red";
  }
});

quantity.addEventListener("change", function (event) {
  if (Number(quantity.value.trim()) > 0) {
    inputStatus["quantity"] = true;
    quantity.style.borderColor = "green";
  } else {
    inputStatus["quantity"] = false;
    quantity.style.borderColor = "red";
  }
});

complaintsGroup.addEventListener("change", function (event) {
  let complaintCheckboxes = document.querySelectorAll(
    'input[name="complaint"]:checked'
  );
  if (complaintCheckboxes.length !== 0) {
    inputStatus["complaints-group"] = true;
    complaintsGroup.style.borderColor = "green";
  } else {
    inputStatus["complaints-group"] = false;
    complaintsGroup.style.borderColor = "red";
  }
});

complaintDescription.addEventListener("change", function (event) {
  let complainText = complaintDescription.value.trim();
  if (complainText !== "") {
    if (otherComplaint.checked && complainText.length >= 20) {
      inputStatus["complaint-description"] = true;
      complaintDescription.style.borderColor = "green";
    } else {
      inputStatus["complaint-description"] = false;
      complaintDescription.style.borderColor = "red";
    }
  }
});

solutionsGroup.addEventListener("change", function (event) {
  let radioButtons = document.querySelectorAll('input[name="solutions"]');
  let radioChecked = [...radioButtons].some((r) => r.checked);
  if (radioChecked) {
    inputStatus["solutions-group"] = true;
    solutionsGroup.style.borderColor = "green";
  } else {
    inputStatus["solutions-group"] = false;
    solutionsGroup.style.borderColor = "red";
  }
});

solutionDescription.addEventListener("change", function (event) {
  let isOtherSolution = otherSolution.checked;
  if (!isOtherSolution || solutionDescription.value.trim().length >= 20) {
    inputStatus["solution-description"] = true;
    solutionDescription.style.borderColor = "green";
  } else {
    inputStatus["solution-description"] = false;
    solutionDescription.style.borderColor = "red";
  }
});

let validateForm = () => {
  inputStatus["full-name"] = fullName.value.trim() !== "";

  const emailRegex = /^\S+@\S+\.\S+$/;
  inputStatus["email"] = emailRegex.test(email.value.trim());

  const orderYear = orderNo.value.substring(0, 4);
  const orderSuffix = orderNo.value.substring(4);
  inputStatus["order-no"] = orderYear === "2024" && /^\d{6}$/.test(orderSuffix);

  const codeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
  inputStatus["product-code"] = codeRegex.test(productCode.value.trim());

  inputStatus["quantity"] = Number(quantity.value) > 0;

  const complaintCheckboxes = document.querySelectorAll(
    'input[name="complaint"]:checked'
  );
  inputStatus["complaints-group"] = complaintCheckboxes.length > 0;

  const isOtherComplaint = document.getElementById("other-complaint").checked;
  const complaintText = complaintDescription.value.trim();
  inputStatus["complaint-description"] = isOtherComplaint
    ? complaintText.length >= 20
    : true;

  const radioChecked = [
    ...document.querySelectorAll('input[name="solutions"]'),
  ].some((r) => r.checked);
  inputStatus["solutions-group"] = radioChecked;

  const isOtherSolution = document.getElementById("other-solution").checked;
  const solutionText = solutionDescription.value.trim();
  inputStatus["solution-description"] = isOtherSolution
    ? solutionText.length >= 20
    : true;

  const entries = Object.entries(inputStatus);
  for (const [key, value] of entries) {
    if (value === false) {
      document.getElementById(`${key}`).style.borderColor = "red";
    }
  }
  return inputStatus;
};

let isValid = (validateForm) => {
  return Object.values(validateForm).every((value) => {
    return value !== false;
  });
};

form.addEventListener("submit", function (event) {
  if (!isValid(validateForm())) {
    console.log("In Complete form....");
    console.log(validateForm());
    event.preventDefault();
  } else {
    console.log("Complete form....");
  }
});
console.log("-------------------------");
//XX##-X###-XX#
//xx12-x111-xx1
//SomeOne@gmail.com
//2024111111
