function mathFunction()
{
	// Unit of table
	var operationNum = prompt ("Enter number: ");
	// Type of calculation
	var mathOperator = prompt ("Enter operation: ( +, -, *, /)");
	var rangeOfNums = prompt ("Enter a range of numbers: ")
	var i = 0;                 // Set counter to 1
	var msg = '';              // Message
	
	if (mathOperator === '+')
	{
		// Do addition
		while (i < rangeOfNums) 
		{
			// grabs a new message from "var msg" every iteration
			msg = msg + i + ' + ' + operationNum + ' = ' + (i + parseInt(operationNum)) + '<br />';
			i = i + 1;
			
			// Write the message onto the blackboard
			// (the blackboard ID is in the html sheet)
			var el = document.getElementById('blackboard');
			el.innerHTML = msg;
		}
	} 
	else if (mathOperator === '-')
	{
		// Do subtraction
		while (i < rangeOfNums) 
		{
			msg = msg + i + ' - ' + operationNum + ' = ' + (i - operationNum) + '<br />';
			i = i + 1;
			
			// Write the message onto the blackboard
			// (the blackboard ID is in the html sheet)
			var el = document.getElementById('blackboard');
			el.innerHTML = msg;
		}
	}
	
	else if (mathOperator === '*')
	{
		// Do multiplication
		while (i < rangeOfNums) 
		{
			msg = msg + i + ' x ' + operationNum + ' = ' + (i * operationNum) + '<br />';
			i = i + 1;
			
			// Write the message onto the blackboard
			// (the blackboard ID is in the html sheet)
			var el = document.getElementById('blackboard');
			el.innerHTML = msg;
		}
	}
	
		
	else if (mathOperator === '/')
	{
		// Do division
		while (i < rangeOfNums) 
		{
			msg = msg + i + ' x ' + operationNum + ' = ' + (i / operationNum) + '<br />';
			i = i + 1;
			
			// Write the message onto the blackboard
			// (the blackboard ID is in the html sheet)
			var el = document.getElementById('blackboard');
			el.innerHTML = msg;
		}
	}
	
	
	var el = document.getElementById('blackboard');
	el.innerHTML = msg;
}
