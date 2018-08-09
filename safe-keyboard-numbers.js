/*
Bookmarklet for safe input of digits into form fields. Useful for credit cards, etc.
*/
javascript:(function(){var div = document.createElement("div"); div.style.backgroundColor = "#EEEEEE"; div.style.zIndex = "999"; div.style.position = "fixed"; div.style.left = "16px"; div.style.top = "16px"; for (var i = 0; i < 10; i++){var a = document.createElement("a"); a.style.padding = "16px"; a.style.display = "inline-block"; a.innerText = ""+i; a.addEventListener("mouseover", function(event){document.activeElement.value += this.innerText}); div.appendChild(a)}; document.body.appendChild(div)}) ();
