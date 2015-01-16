el.dataset.prop = "val";
var propvar = el.dataset.prop;
document.querySelector("body").dataset.prop = "val";
document.body["firstChild"].children[0].lastChild.dataset.prop ="n";
elem.dataset["foo"];
document.querySelector("body").dataset["foo"+8+"bar"] = "val";
elem.dataset.prop = "complicated" + (function(){ return "function-call"})() + 3*(foo + 5)*bar;
