// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays an answer based on the temperature entered by the user
 */
function displayAnswer () {
  
  	// initialize variables (answer)
	let answer = ""
	
	// get user input (temperature)
	let temperature = parseInt(document.getElementById('temperature').value)


  	// if temperature is less than 15, display "It's cold outside." Otherwise display "It's hot outside."
	if (temperature<15) {
		answer = "It's cold outside."
	} 
  else {
    answer = "It's hot outside."

    }  

  // display the results 
  document.getElementById('answer').innerHTML = answer
}