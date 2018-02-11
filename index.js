// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
// var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
// var x = document.getElementById("table").rows[0].innerHTML;
// var $table = document.getElementById("table");
// var $rowCount = $table.rows.length;
// var $firstRow = table.rows[0].firstelementChild.tagName, $hasHead = ($firstRow === "TH");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// $pageBtn.addEventListener("click", handlePageClick);

// Set filteredAddresses to ufoData initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var  ufoObject = filteredData[i];
    var fields = Object.keys(ufoObject);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the dataSet object, create a new cell at set its inner text to be the current value at the current address field
      var field = fields[j]; //datetime-city-state-country-shape-duration-comments
      var $cell = $row.insertCell(j);
      $cell.innerText = ufoObject[field]; //ufoObject["key"] = value
    }
  }
};
renderTable();

function userInput()

function handleSearchButtonClick() {
  console.log("click")
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    
    // var newInput = {
    //   date: $datetimeInput.value.trim(),
    //   city: $cityInput.value.trim().toLowerCase(),
    //   state: $stateInput.value.trim().toLowerCase(),
    //   country: $countryInput.value.trim().toLowerCase(),
    //   shape: $shapeInput.value.trim().toLowerCase()
    // };
      
  filteredData = dataSet.filter(function(sighting) {
    // var datetime = sighting.datetime;
    var ufoCity = sighting.city.trim().toLowerCase();
    var ufoState = sighting.state.trim().toLowerCase();
    var ufoCountry = sighting.country.trim().toLowerCase();
    var ufoShape = sighting.shape.trim().toLowerCase();
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    // return ufoState === statesearch || ufoCity === citysearch || ufoCountry === countrysearch || ufoShape === shapesearch;
    if (($cityInput.value != "") && ($stateInput.value != "") && ($countryInput.value != "") && ($shapeInput.value != "")) {
       return ufoCity === $cityInput.value && ufoState === $stateInput.value && ufoCountry === $countryInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value != "") && ($countryInput.value != "") && ($shapeInput.value == "")) {
      return ufoCity === $cityInput.value && ufoState === $stateInput.value && ufoCountry === $countryInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value != "") && ($countryInput.value == "") && ($shapeInput.value != "")) {
      return ufoCity === $cityInput.value && ufoState === $stateInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value == "") && ($countryInput.value != "") && ($shapeInput.value != "")) {
      return ufoCity === $cityInput.value && ufoCountry === $countryInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value != "") && ($countryInput.value != "") && ($shapeInput.value != "")) {
      return ufoState === $stateInput.value && ufoCountry === $countryInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value == "") && ($countryInput.value != "") && ($shapeInput.value != "")) {
      return ufoCountry === $countryInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value == "") && ($countryInput.value == "") && ($shapeInput.value != "")) {
      return ufoCity === $cityInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value != "") && ($countryInput.value == "") && ($shapeInput.value == "")) {
      return ufoCity === $cityInput.value && ufoState === $stateInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value == "") && ($countryInput.value != "") && ($shapeInput.value == "")) {
      return ufoCity === $cityInput.value && ufoCountry === $countryInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value != "") && ($countryInput.value != "") && ($shapeInput.value == "")) {
      return ufoState === $stateInput.value && ufoCountry === $countryInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value != "") && ($countryInput.value == "") && ($shapeInput.value != "")) {
      return ufoState === $stateInput.value && ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value != "") && ($stateInput.value == "") && ($countryInput.value == "") && ($shapeInput.value == "")) {
      return ufoCity === $cityInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value != "") && ($countryInput.value == "") && ($shapeInput.value == "")) {
      return ufoState === $stateInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value == "") && ($countryInput.value != "") && ($shapeInput.value == "")) {
      return ufoCountry === $countryInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value == "") && ($countryInput.value == "") && ($shapeInput.value != "")) {
      return ufoShape === $shapeInput.value;
    }
    else if (($cityInput.value == "") && ($stateInput.value == "") && ($countryInput.value == "") && ($shapeInput.value == "")) {
      return ufoCity && ufoState && ufoCountry && ufoShape;
    }
    

  })  
  
  // render table for information input

  // reset each search bar
  // $datetimeInput.value = "";
  // $cityInput.value = "";
  // $stateInput.value = "";
  // $countryInput.value = "";
  // $shapeInput.value = "";

renderTable()
};


// get the table element
var $table = document.getElementById("basic");
// number of rows per page
var $n = 50;
// number of rows of the table
var $rowCount = $table.rows.length;
// get the first cell's tag name (in the first row)
var $firstRow = $table.rows[0].firstElementChild.tagName;
// boolean var to check if table has a head row
var $hasHead = ($firstRow === "TH");
// an array to hold each row
var $tr = [];
// loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
var $i,$ii,$j = ($hasHead)?1:0;
// holds the first row if it has a (<TH>) & nothing if (<TD>)
var $th = ($hasHead?$table.rows[(0)].outerHTML:"");
// count the number of pages
var $pageCount = Math.ceil($rowCount / $n);
// if we had one page only, then we have nothing to do ..
if ($pageCount > 1) {
	// assign each row outHTML (tag name & innerHTML) to the array
	for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
		$tr[$ii] = $table.rows[$i].outerHTML;
	// create a div block to hold the buttons
	$table.insertAdjacentHTML("afterend","<div id='buttons'></div");
	// the first sort, default page is the first one
	sort(1);
};

// ($p) is the selected page number. it will be generated when a user clicks a button
function sort($p) {
	/* create ($rows) a variable to hold the group of rows
	** to be displayed on the selected page,
	** ($s) the start point .. the first row in each page, Do The Math
	*/
	var $rows = $th,$s = (($n * $p)-$n);
	for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
		$rows += $tr[$i];
	
	// now the table has a processed group of rows ..
	$table.innerHTML = $rows;
	// create the pagination buttons
	document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
	// CSS Stuff
	document.getElementById("id"+$p).setAttribute("class","active");
};


// ($pCount) : number of pages,($cur) : current page, the selected one ..
function pageButtons($pCount,$cur) {
	/* this variables will disable the "Prev" button on 1st page
	   and "next" button on the last one */
	var	$prevDis = ($cur == 1)?"disabled":"",
		$nextDis = ($cur == $pCount)?"disabled":"",
		/* this ($buttons) will hold every single button needed
		** it will creates each button and sets the onclick attribute
		** to the "sort" function with a special ($p) number..
		*/
		$buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
	for ($i=1; $i<=$pCount;$i++)
		$buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
	$buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
	return $buttons;
};






// // define the variables for the table getElementById 
// var myTable = document.getElementById('basic');
// var dataTable = new filteredData(myTable, {

//   // maximum number of rows to display on each page
//   perPage: 25,

//   // the per page options in the dropdown
//   perPageSelect: [5, 10, 15, 20, 25],
  
//   // navigation options
//   nextPrev: true,
//   firstLast: false,
//   prevText: '&lsaquo;',
//   nextText: '&rsaquo;',
//   firstText: '&laquo;',
//   lastText: '&raquo;',

//   // enable sortable
//   sortable: true,

//   // enable searchable
//   searchable: true,

//   // truncate the page links to prevent overflow with large datasets.
//   truncatePager: true
// });

// dataTable.on('datatable.init', function() {

// });
