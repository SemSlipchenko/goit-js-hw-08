import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const formData = {};
const STORAGE_KEY = "feedback-form-state";
let currentData = localStorage.getItem(STORAGE_KEY);

initFrom();

form.addEventListener('input', throttle(e => { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

function initFrom() {
    if (currentData) {
        currentData = JSON.parse(currentData);
        Object.entries(currentData).forEach(([name, value]) => { 
            currentData[name] = value;
            form.elements[name].value = value;
        });
    };
};

form.addEventListener('submit', e => { 
    e.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});