    function searchBooks() {
    var store = document.getElementById("searchInput").value.toLowerCase();
    var bookTitles =  ["Harry Potter","The lord of the rings","the Great Gatsby","12 Rules for Life","The Alchemist","Anne of Green Gables","The Hobbit","To Kill a Mockingbird","The Pillars of the Earth","Jane Eyre","Nothing pink","Susan Olasky","Sarai's Stripes","Bruises","Aunt Jane's Nieces in the Red Cross","cut","Claude and Medea","Sheep and Goat","Peter Pan","I Had to Say Something","Crazy Town","Narratives of Exile and Return","McFarlandCharlie Gehringer","Till They Meet Again","Scoundrels to the Hoosegow","Hitler Made Me a Jew","My Dirty Little Secrets - Steroids, Alcohol & God","Masonry","Experiments with Alternate Currents of High Potential and High Frequency","Green Warriors","Environmental Flows in Water Resources Policies, Plans, and Projects","A Century of Subways","A Guide to High-performance Powder Coating","Hard Air","The Electronic Republic?","Crisis and Opportunity"];
    var filteredTitles = bookTitles.filter(function (title) {
      return title.toLowerCase().includes(store);
    });

    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";

    if (filteredTitles.length === 0) {
      resultsContainer.innerHTML = "Sorry that we haven't ur book but indeed we will try to proved it for you soon";
    } else {
      var resultList = document.createElement("ul");
      filteredTitles.forEach(function (title) {
        var listItem = document.createElement("li");
        listItem.textContent = title;
        resultList.appendChild(listItem);
      });
      resultsContainer.appendChild(resultList);
    }
  }


  








