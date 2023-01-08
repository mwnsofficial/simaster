// Manage core logic by this variable
var Settlement = [];
Settlement.empty = function(mixed_var)
{
	var undef, key, i, len;
	var emptyValues = [undef, null, false, 0, '', '0'];
	for (i = 0, len = emptyValues.length; i < len; i++)
	{
		if (mixed_var === emptyValues[i])
		{
			return true;
		}
	}
	if (typeof mixed_var === 'object')
	{
		for (key in mixed_var)
		{
			return false;
		}
		return true;
	}
	return false;
}
Settlement.base64_decode = function(text)
{
 	// Tested in chrome browser
  	return decodeURIComponent(escape(window.atob(text)));
}
Settlement.urldecode = function(str){

  return decodeURIComponent((str + '')
    .replace(/%(?![\da-f]{2})/gi, function() {
      return '%25';
    })
    .replace(/\+/g, '%20'));
}
Settlement.base64_encode = function(text)
{
 	// Tested in chrome browser
  	return window.btoa(unescape(encodeURIComponent(text)));
}
result = '';
if (typeof _POST['input'] !== 'undefined') {
    input = _POST['input'];
    type = _POST['type'];
    if (!Settlement.empty(input)) {
        if (type == 1) {
            result = Settlement.base64_decode(input);
        } else {
            result = Settlement.base64_encode(Settlement.urldecode(input));
        }
    }
}
