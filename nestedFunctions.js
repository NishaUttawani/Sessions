//Function:1  ---------> Basic Example

function sumOfSquare(a,b){
	function square(x){
		return x*x;
	}

	return square(a)+square(b);
}

console.log('example1:'+ sumOfSquare(3,4));




//Function:2 ----------> calling outer function but specfying arguments for outer as well as inner method
function outside(x)
{
	function inside(y)
	{
		return x+y;
	}

	return inside;
}

console.log('example2:'+outside(4)(5));  // funInside= outside(3); -->this will return the inner function to funInside
										//  result=funInside(5); ---> this will return the sum  


//Function:3 ----------> Multiple nested functions

function outer(x)
{
	function inner(y)
	{
		function innerInner(z)
		{
			return (x+y+z);
			console.log(x+y+z);
		}

		 return innerInner;
	} 

	return inner;
}

console.log('example3:'+ outer(30)(20)(30));  

//Function:4 -----------> Conflict between variable names

function outFunc()
{
	var x=10;
	function inFunc( x)
	{
		
		return x*2;
	}
	return inFunc;
}

console.log('example4:'+ outFunc()(3));