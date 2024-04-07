document.writeln('<div id="picabooLoggerDiv" style="visibility: hidden">');
document.writeln('<img id="picabooLogger" width="0" height="0">');
document.writeln('</div>');

function getPageParameter(vParam)
{
    vParam = vParam.toLowerCase();
    var query=this.location.search.substring(1);
    if (query.length > 0){
        var params=query.split("&");
        for (var i=0 ; i<params.length ; i++){
            var pos = params[i].indexOf("=");
            var name = (params[i].substring(0, pos)).toLowerCase();
            if (name == vParam) {
				return params[i].substring(pos + 1);
			}
        }
    }
    return "";
}

function getSource()
{
    vValue = getPageParameter('utm_source');
	if ( vValue == '') {
		vValue = cookie.source;
	}
	return vValue;
}


function getSiteID()
{
  var vValue = '';
  if (cookie.siteID) {
      if (cookie.siteID != 'null') {
        vValue = cookie.siteID;
        }
      }
  if (!  vValue) {
    vValue = getPageParameter('siteID');
  }
  if (! vValue) { 
    vValue = Utm2SiteID();
  }
    return vValue;    
}

function Utm2SiteID()
{
  var utm = '';
  var medium = getPageParameter('utm_medium');
  if (medium)  
  {
    utm += medium;
    var source = getPageParameter('utm_source');
    if (source) 
    {
      utm += '_' + source;
      var campaign = getPageParameter('utm_campaign');
      if (campaign)
      { 
        utm += '_' + campaign;
        var content = getPageParameter('utm_content');
        if (content)
        {
          utm += '_' + content;
          term = getPageParameter('utm_term');
          if (term)
          {
          utm += '_' + term;
          }
        }
      }
    }
  }
  return utm;
}

function picabooGetSiteID()
{
        return cookie.siteID;
}

function metaCookie(document, name, expiration, path, domain)
{
    this.$document = document;
    this.$name = name;
    if (expiration)
        this.$expiration = expiration;
    else
        this.$expiration = null;

    this.$path = path;
    this.$domain = domain;
}

metaCookie.prototype.store = function () {
    var cookieval = "";
    for(var prop in this) {
        if ((prop.charAt(0) == '$') || ((typeof this[prop]) == 'function')) 
            continue;
        if (cookieval != "") cookieval += '&';
        cookieval += prop + ':' + escape(this[prop]);
    }

    var cookie = this.$name + '=' + cookieval;
    if (this.$expiration)
        cookie += '; expires=' + this.$expiration.toGMTString();
    if (this.$path)
       cookie += '; path=' + this.$path
    else
       cookie += '; path=/';
    if (this.$domain) cookie += '; domain=' + this.$domain;

    this.$document.cookie = cookie;
}

metaCookie.prototype.load = function() { 
    var allcookies = this.$document.cookie;
    if (allcookies == "") return false;

    var start = allcookies.indexOf(this.$name + '=');
    if (start == -1) return false;
    start += this.$name.length + 1;
    var end = allcookies.indexOf(';', start);
    if (end == -1) end = allcookies.length;
    var cookieval = allcookies.substring(start, end);

    var a = cookieval.split('&');
    var txt = "";

    for(var i=0; i < a.length; i++) {
        a[i] = a[i].split(':');
	txt += a;
    }


    for(var i = 0; i < a.length; i++) {
        this[a[i][0]] = unescape(a[i][1]);
    }

    return true;
}

metaCookie.prototype.remove = function() {
    var cookie;
    cookie = this.$name + '=';
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';

    this.$document.cookie = cookie;
}

function getUserId()
{
	return cookie.userId;
}

function getUserOID()
{
	return cookie.userOID;
}

function lGeneric(type)
{
  var str = new Array();
  logEvent(type, str);

}

function lGeneric(type, arg0, arg1)
{
  var str = new Array();
  var element = new Object();

  element = new Object();
  element.name = arg0;
  element.value = arg1;
  str[0] = element;

  logEvent(type, str);

}

function getTLD(domain) {
	var objRegExp = /[^.]*\.[a-zA-Z]{3}$/i;
	var result = objRegExp.exec(domain);
	var tld = "";
	if (result != null) {
		tld = "." + result[0];
	}
	return tld;
	
}

function logEvent(eName, eData)
{
  var logImage = document.getElementById('picabooLogger');
  var fullURL = baseURL + "?event="+eName+"&userUID="+getUserId()+"&userOID="+getUserOID()+"&source="+getSource() + "&siteID=" + getSiteID();
  fullURL +=  "&userAgent=" + escape(navigator.userAgent) + "&referrer=" + escape(document.referrer) + "&url=" + escape(document.URL);

  try {
	for (var i in eData)
	{
		var eEvent = eData[i];
			
		if (typeof eEvent == 'undefined' || eEvent.name == null) {
			continue;
		}
		if (typeof eEvent.value == 'undefined' || eEvent.value == null) {
			continue;
		}		
		
		fullURL = fullURL + "&" + eEvent.name+"="+eEvent.value;
	}

	logImage.src = fullURL;
  } catch (e)
   {
   }
}

var today = new Date ();
var firstPart = (today.getTime()) + (Math.floor(Math.random()*8999)+1000);
expDate = new Date();
expDate.setTime(expDate.getTime() + (10 * 365 * 24 * 60 * 60 * 1000)); 

var cookie = new metaCookie(document, "Picaboo", expDate, "/", getTLD(document.domain));
var baseURL = "https://appssl.picaboo.com/LoggerX/picaboo.aspx";

cookie.load();

if (typeof cookie.userId == "undefined") {
	cookie.userId = firstPart;
	cookie.userOID = 0;
	cookie.Domain = getTLD(document.domain);
        if (getPageParameter('utm_source') != '') 
           cookie.source = getPageParameter('utm_source');
        else
 	    cookie.source = "";
        if (getSiteID() != '') 
           cookie.siteID = getSiteID();
        else
 	    cookie.siteID = "";
        cookie.store();	
} else {
        if (getPageParameter('utm_source') != '') {
           cookie.source = getPageParameter('utm_source');
       }
        if (getSiteID() != '') {
           cookie.siteID = getSiteID();
       }
       cookie.store();	
}
