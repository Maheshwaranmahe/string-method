
function Function1() {
    let name = prompt("Please enter your name");
    if (name != null) {
        document.getElementById("string-length").innerHTML = name + " length = " + name.length;
    }
  }

  function Function2() {
    let name = prompt("name1,name2,name3");
    let part = name.slice(2,10);
    if (name != null) {
        document.getElementById("string-slice").innerHTML = part; 
    }
  }

  function Function3() {
    let text = document.getElementById("string-replace").innerHTML; 
    document.getElementById("string-replace").innerHTML =
    text.replace("Name","mahesh");
  }

  function Function4() {
    let name = prompt("Enter Santance");
    if (name != null) {
        document.getElementById("string-upper").innerHTML =
        name.toUpperCase();
    }
  }
  
  function Function5() {
    let text1 = prompt("Enter text1");
    let text2 = prompt("Enter text2");
    let text3 = text1.concat(" ",text2);
    if (name != null) {
        document.getElementById("concat").innerHTML = text3;
    }
  }
  
  function Function6() {
    let text = prompt("Enter text");
    if (text != null) {
        document.getElementById("string-char").innerHTML = text.charAt(1);
    }
  }