function getColor(selection)
{
	switch(selection){
        
        case 'red':
            return true;
            break;
        case 'green':
            return true;
            break;
        case 'blue':
            return true;
            break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}


var isAvailable = getColor(prompt('What color do you want?'));

if(isAvailable){
    console.log('Good news! That color is available');
}
else {
    console.log('We are sorry, that color is not available');
    
}