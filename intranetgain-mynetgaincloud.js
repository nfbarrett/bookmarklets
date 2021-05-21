//Raw Code
if (location.host == "www.intranetgain.com") {
  open('https://my.netgaincloud.com/'+location.href.replace("https://www.intranetgain.com/clients/",""));
} else if (location.host == "my.netgaincloud.com") {
  open('https://www.intranetgain.com/clients/'+location.href.replace("https://my.netgaincloud.com/",""));
} else {
  alert('Please use this only on www.intranetgain.com or my.netgaincloud.com.');
}
 
//Formatted for Bookmarklet https://caiorss.github.io/bookmarklet-maker/
javascript:(function()%7Bif (location.host %3D%3D "www.intranetgain.com") %7B%0A  open('https%3A%2F%2Fmy.netgaincloud.com%2F'%2Blocation.href.replace("https%3A%2F%2Fwww.intranetgain.com%2Fclients%2F"%2C""))%3B%0A%7D else if (location.host %3D%3D "my.netgaincloud.com") %7B%0A  open('https%3A%2F%2Fwww.intranetgain.com%2Fclients%2F'%2Blocation.href.replace("https%3A%2F%2Fmy.netgaincloud.com%2F"%2C""))%3B%0A%7D else %7B%0A  alert('Please use this only on www.intranetgain.com or my.netgaincloud.com.')%3B%0A%7D%7D)()%3B
