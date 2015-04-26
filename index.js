$(document).ready(function() {

  $("#add-another-item").click(function() {
    $("<tr><td class=\"numbers\">2.</td><td><select><option value=\"crest-shirt\">Crest Shirt - Beige</option><option value=\"WNL-ladies\">WNL ladies shirt - Maroon</option><option value=\"WNL-Vinyl\">We're Not Lost - Vinyl</option></select></td><td><input class=\"quantity\" type=\"text\" maxlength=\"11\" placeholder=\"0\"></input></td><td id=\"x\">X</td></tr>").appendTo("#merch-table");
  });
  $("#add-another-merch").click(function() {
    $("<tr><td class=\"numbers\">2.</td><td><input class=\"expense\" type=\"text\" maxlength=\"100\" placeholder=\"expense\"></input></td><td><select><option value=\"fuel\">Travel</option><option value=\"lodging\">Lodging</option><option value=\"food\">Food</option><option value=\"promo\">Promotion</option></select></td><td><input class=\"cost\" type=\"text\" maxlength=\"11\" placeholder=\"$0.00\"></input></td><td id=\"x\">X</td></tr>").appendTo("#expense-table");
  });

});