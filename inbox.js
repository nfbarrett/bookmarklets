// gets the label thats currently selected and changes to search and adds is:inbox to the search.

// raw javascript

if (location.hash[1] == 'l') {
  window.location.href='https://mail.google.com/mail/u/0/#search/label%3A'+location.hash.replace("#label/","").toLowerCase().concat('+is%3Ainbox')
} else {
  window.location.href=location.href.concat('+is%3Ainbox')
}


// converted on https://mrcoles.com/bookmarklet/

javascript:(function()%7Bif%20(location.hash%5B1%5D%20%3D%20'l')%20%7Bwindow.location.href%3D'https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%23search%2Flabel%253A'%2Blocation.hash.replace(%22%23label%2F%22%2C%22%22).toLowerCase().concat('%2Bis%253Ainbox')%7D%20else%20%7Bwindow.location.href%3Dlocation.href.concat('%2Bis%253Ainbox')%7D%7D)()
