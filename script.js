$(document).ready(function() {
	var i = 0;
	var id = ++i;
	    
//code for adding new merch items	

	var $newMerchRow = '<tr id="merch-row' + id + '"><td><div class="form-group" id="merch-item' + id + '"><select class="form-control input-lg"><option value="new-item">New Item</option></select></div></td><td><div class="form-group" id="qty' + id + '"><input class="form-control input-lg" type="text" placeholder="0"></div></td><td><div id="xs"><img src="images/x.svg" id="xMerch" height="20px" width="20px"/></div></td></tr>';

	$('#add-new-item').click(function() {
	    $($newMerchRow).fadeIn().appendTo('#merch-table');
	});

	$(document).on('click', '#xMerch', function() {
	    $('#merch-row1').fadeOut(300, function() {
	    	$(this).remove();
	    })
	})

//code for adding new expenses

	var $newExpenseRow = '<tr id="expense-row' + id + '"><td><div class="form-group" id="expense' + id + '"><input class="form-control input-lg" type="text" placeholder="Expense"></div></td><td><div class="form-group" id="category' + id + '"><select class="form-control input-lg"><option value="new-category">New Category</option></select></div></td><td><div class="form-group" id="cost' + id + '"><input class="form-control input-lg" type="text" placeholder="$0.00"></div></td><td><div id="xs"><img src="images/x.svg" id="xExpense" height="20px" width="20px"/></div></td></tr>';

	$('#add-new-expense').click(function() {
	    $($newExpenseRow).fadeIn().appendTo('#expense-table');
	});

	$(document).on('click', '#xExpense', function() {
	    $('#expense-row1').remove();
	})
});