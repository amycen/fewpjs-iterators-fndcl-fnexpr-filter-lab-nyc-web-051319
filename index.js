// Code your solution here
function findMatching(drivers, string){
  drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
}