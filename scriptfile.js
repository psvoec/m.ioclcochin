var answers = $("input:not(:disabled)"); //retrieve all able inputs

//array of ids
var myarr = [
  "myId1Q",  "myId1T",  "myId2Q",  "myId2T",  "myId3Q",  "myId3T",  "myId4P",  "myId4Q",   "myId4R",
  "myId4S",  "myId4T",  "myId4U",  "myId5G",  "myId5K",  "myId5P",  "myId6G",  "myId6K",   "myId6M",
  "myId6P",  "myId6Q",  "myId6R",  "myId6S",  "myId6T",  "myId6U",  "myId6V",  "myId7F",   "myId7G",
  "myId7H",  "myId7I",  "myId7K",  "myId7M",  "myId7P",  "myId8G",  "myId8J",  "myId8K",  "myId8L", 
  "myId8M",  "myId8N",  "myId8O",  "myId8P",  "myId8Q",  "myId8R",  "myId8S",  "myId8T",  "myId8U",  
  "myId8V",  "myId9G",  "myId9K",  "myId9M",  "myId9S",  "myId9V",  "myId10G",  "myId10I",  "myId10K",
  "myId10M",  "myId10P",  "myId10R",  "myId10S",  "myId10T",  "myId10U",  "myId10V",  "myId10W",  "myId11E",
  "myId11G",  "myId11I",  "myId11M",  "myId11P",  "myId11S",  "myId11V",  "myId12B",  "myId12E",  "myId12G",
  "myId12H",  "myId12I",  "myId12J",  "myId12K",  "myId12L",  "myId12M",  "myId12N",  "myId12O",  "myId12P",
  "myId12Q",  "myId12S",  "myId12V",  "myId13B",  "myId13C",  "myId13D",  "myId13E",  "myId13F",  "myId13I",
  "myId13M",  "myId13P",  "myId13S",  "myId13U",  "myId14B",  "myId14E",  "myId14I",  "myId14M",  "myId14P",
  "myId14U",  "myId15B",  "myId15E",
  "myId15F",  "myId15G",  "myId15H",  "myId15I",  "myId15J",  "myId15M",  "myId15P",  "myId15U",  "myId16B",
  "myId16E",  "myId16M",  "myId16P",  "myId16U",  "myId17E",  "myId17F",  "myId17G",  "myId17H",  "myId17I",
  "myId17J",  "myId17K",  "myId17L",  "myId17M",  "myId17O",  "myId17P",  "myId17Q",  "myId17R",  "myId17S",
  "myId17T",  "myId17U",  "myId17V",  "myId18E",  "myId18P",  "myId19E",  "myId19J",  "myId19K",  "myId19L",
  "myId19M",  "myId19N",  "myId19O",  "myId19P",  "myId19Q",  "myId20O",  "myId21O",  "myId22O",  "myId23O"
];

//array of answers
//var arr = ["c", "l", "o", "v", "e", "p", "a", "s", "a", "y", "t", "w"];

var arr = ["P", "D", "E", "Y", "S", "K", "J", "O", "C", "K", "E", "Y", "S", "D",
           "U", "T", "H", "D", "M", "O", "N", "I", "T", "O", "R", "F", "O", "A",
           "M", "R", "I", "B", "C", "Q", "U", "A", "R", "T", "Z", "O", "I", "D",
           "B", "U", "L", "B", "K", "V", "E", "O", "L", "I", "S", "A", "C", "C",
           "B", "U", "L", "L", "E", "T", "W", "S", "W", "T", "H", "S", "V", "P",
           "I", "T", "R", "A", "N", "S", "F", "O", "R", "M", "E", "R", "E", "E",
           "O", "R", "I", "N", "G", "G", "N", "C", "R", "H", "I", "D", "A", "L",
           "K", "A", "N", "S", "A", "F", "E", "T", "Y", "I", "S", "Z", "T", "O",
           "N", "C", "A", "C", "L", "E", "A", "R", "B", "L", "U", "E", "E", "A",
           "R", "T", "H", "I", "N", "G", "K", "L", "S", "C", "A", "R", "O", "U",
           "S", "E", "L", "C", "A", "B", "A" ];

//timing
var seconds = 0;
var timer = setInterval(function(){
  seconds++;
  $("#timer").text(seconds);
}, 1000)
var complete = 0; //to check if the answers is complete

//check inputs
answers.keyup(function(e) {
  var temp = e.target.id;
  var myIndex = myarr.indexOf(temp); //check for index of ids
  var answer = arr[myIndex]; //check for answer
  var myInput = this.value.toUpperCase(); //check for user input
  complete++; //after every input increase the amount of rights _0
  if (myInput == answer) {
    this.style.backgroundColor = "green";
    $(this).attr("disabled", "true");
  } else {
    this.style.backgroundColor = "red";
    complete--; //if wrong, it cancels _0
  }
  if (complete == 147) {
    clearInterval(timer);
    $("#timer").text("Puzzle completed in " + seconds);
    
    alert("Hurray!!!\nChallenge complete");
    //there are 12 answers, if all are right!!!
  }
});
$("button").click(function(){
  seconds += 60;
})