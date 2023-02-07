var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var co = document.getElementById("coi");

a1.addEventListener('click', function() {
    a2.classList.remove('active');
    a3.classList.remove('active');
    this.classList.add('active');
    co.textContent = a1.textContent;
});
a2.addEventListener('click', function() {
    a1.classList.remove('active');
    a3.classList.remove('active');
    this.classList.add('active');
    co.textContent = a2.textContent;
});
a3.addEventListener('click', function() {
    a1.classList.remove('active');
    a2.classList.remove('active');
    this.classList.add('active');
    co.textContent = a3.textContent;
});
