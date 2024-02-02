  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    var liArray = Array.from(li);

    liArray.sort(function (a, b) {
      var textA = a.textContent || a.innerText;
      var textB = b.textContent || b.innerText;
      return textA.localeCompare(textB);
    });

    for (i = 0; i < liArray.length; i++) {
      ul.appendChild(liArray[i]);
    }

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
