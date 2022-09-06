import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
initFrom();

form.addEventListener('submit', throttle(e => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));    
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}, 500));

form.addEventListener('input', e => { 
    let filters = localStorage.getItem(STORAGE_KEY);
    filters = filters ? JSON.parse(filters) : {};
    filters[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
});

function initFrom() { 
    let filters = localStorage.getItem(STORAGE_KEY);
    if (filters) { 
        filters = JSON.parse(filters);
        Object.entries(filters).forEach(([name, value]) => {
            form.elements[name].value = value;
        })
    };
};