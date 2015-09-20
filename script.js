$(document).ready(function() {
  var newMerchRow = $('<div>').load('merch-row.html'); // load new row once, and immediately

  var uniqueId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    counter = 0;

  console.log(uniqueId[counter]); //initial value

  //code for adding new merch items
  $('#add-new-item').click(function() {
    counter = (counter+1) % uniqueId.length;
    // the modulus (%) operator resets the counter to 0
    // when it reaches the length of the array
    $('#merch-table tbody').append(newMerchRow.html());
  });

  $(document).on('click', '.xMerch', function(e) {
    // select row by searching for the <tr> element that contains the actual .xMerch that was clicked
    $(e.target).parents('tr').fadeOut(300, function() {
      $(this).remove(); // remove the row after hiding it
    });
  });

  //code for adding new expenses

  $('#add-new-expense').click(function() {

    counter = (counter+1) % uniqueId.length;
      // the modulus (%) operator resets the counter to 0
      // when it reaches the length of the array

    var $newExpenseRow = '<tr id="expense-row' + uniqueId[counter] + '" class="new-expense-row"><td><div class="form-group" id="expense"><input class="form-control input-lg" type="text" placeholder="Expense"></div></td><td><div class="form-group" id="category"><select class="form-control input-lg"><option value="new-category">New Category</option></select></div></td><td><div class="form-group" id="cost"><input class="form-control input-lg" type="text" placeholder="$0.00"></div></td><td><div id="xs"><img src="images/x.svg" id="xExpense" height="20px" width="20px"/></div></td></tr>';

      $($newExpenseRow).fadeIn().appendTo('#expense-table');
  });


  $(document).on('click', '#xExpense', function() {

      $('table#expense-table tr').eq(-1).fadeOut(300, function() {

        $(this).remove();

      });

  });

//code for merch-form pop-up

  $('.popup-with-form').magnificPopup({

    type: 'inline',

    preloader: false,

    focus: '#type',

    callbacks: {

      beforeOpen: function() {

        if ($(window).width() < 700) {

          this.st.focus = false;

        } else {

          this.st.focus = '#type';

        }

      }

    }

  });

});



//code for moving submitted form data to master sheet.  Need to figure out how to save this data once it is added.  Need to be able to recall it whenever.

function callVal() {

  var date = document.getElementById('date');
  var dateVal = date.value;

  var city = document.getElementById('city');
  var cityVal = city.value;

  var state = document.getElementById('state');
  var stateVal = state.value;

  var venue = document.getElementById('venue');
  var venueVal = venue.value;

  var cap = document.getElementById('capacity');
  var capGetVal = cap.value;
  var capVal = parseInt(capGetVal, 10);

  var promoter = document.getElementById('promoter');
  var promoterVal = promoter.value;

  var tPrice = document.getElementById('tix-price');
  var tPriceGetVal = tPrice.value;
  var tPriceVal = parseInt(tPriceGetVal, 10);

  var tSold = document.getElementById('tix-sold');
  var tSoldGetVal = tSold.value;
  var tSoldVal = parseInt(tSoldGetVal, 10);

  var tAvail = document.getElementById('tix-avail');
  var tAvailGetVal = tAvail.value;
  var tAvailVal = parseInt(tAvailGetVal, 10);

  var comps = document.getElementById('comps');
  var compsGetVal = comps.value;
  var compsVal = parseInt(compsGetVal, 10);

  var showInfo = [];
  showInfo.push(dateVal, cityVal, stateVal, venueVal, capVal, promoterVal, tPriceVal, tSoldVal, tAvailVal, compsVal);

  var $newInfoRow = "<tr><td>" + showInfo[0] + "</td><td>" + showInfo[1] + "</td><td>" + showInfo[2] + "</td><td>" + showInfo[3] + "</td><td>" + showInfo[4] + "</td><td>" + showInfo[5] + "</td><td>" + showInfo[6] + "</td><td>" + showInfo[7] + "</td><td>" + showInfo[8] + "</td><td>" + showInfo[9] + "</td></tr>";

  $($newInfoRow).fadeIn().appendTo('#show-info-sheet');

}


//code for processing new item data
function finishItem() {

  var itemType = document.getElementById('#item-type').value;

  var itemName = document.getElementById('#item-name').value;

  var itemCOG = parseInt(document.getElementById('#cog').value, 10);

  var itemPOG = parseInt(document.getElementById('#pog').value, 10);

}

var crestShirt = {
  type:"T-Shirt",
  name:"Crest Shirt",
  cog:4.00,
  pog:16.00
};