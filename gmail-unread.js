// gets the label thats currently selected and changes to search and adds is:unread to the search.

// raw javascript
window.location.href='https://mail.google.com/mail/u/0/#search/'+location.hash.replace("/","%3A").replace("#search%3A","").replace("#imp","is%3Aimportant").replace("#category%3A","category%3A").replace("#label","label").replace("#","in%3A").toLowerCase().concat('+is%3Aunread')

// converted on https://mrcoles.com/bookmarklet/
javascript:(function()%7Bwindow.location.href%3D'https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%23search%2F'%2Blocation.hash.replace(%22%2F%22%2C%22%253A%22).replace(%22%23search%253A%22%2C%22%22).replace(%22%23imp%22%2C%22is%253Aimportant%22).replace(%22%23category%253A%22%2C%22category%253A%22).replace(%22%23label%22%2C%22label%22).replace(%22%23%22%2C%22in%253A%22).toLowerCase().concat('%2Bis%253Aunread')%7D)()


var str = window.location.href;
var n = str.search("is%3Aunread");

if (n > 0) {
  //  block of code to be executed if the condition is true
  window.location.href='https://mail.google.com/mail/u/0/#search/'+location.hash.replace("/","%3A").replace("#search%3A","").replace("#imp","is%3Aimportant").replace("#category%3A","category%3A").replace("#label","label").replace("#","in%3A").replace("is%3Aunread","is%3Aread")
} else {
  //  block of code to be executed if the condition is false
  window.location.href='https://mail.google.com/mail/u/0/#search/'+location.hash.replace("/","%3A").replace("#search%3A","").replace("#imp","is%3Aimportant").replace("#category%3A","category%3A").replace("#label","label").replace("#","in%3A").toLowerCase().concat('+is%3Aunread')
}
