//personalize
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var tName = document.getElementById("tName").value;
  var word = document.getElementById("word").value;

  displayScript.innerHTML = "Hi "+ tName + ", it's " + name + "! I hope you are doing well. I just wanted to say that you look amazing just the way you are and don't ever let anyone change your mind. If you ever feel even slightly sad, just know that I will always be here for you! " + word + ".";
}

//fact

var factList = [
  "You are doing great, keep it up!", 
  "You look amazing!", 
  "A book isn't meant to be judged by its cover, same with a person", 
  "Don't forget to smile!"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
