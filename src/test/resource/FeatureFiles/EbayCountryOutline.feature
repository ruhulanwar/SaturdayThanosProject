@regression @smoke @us-249 
Feature: Ebay Country Outline 

	Description: User should able to filter items by Country of Manufacture

Background: 
	Given Open Ebay Homepage 
	
	
Scenario Outline: Filter items by Country of Manufacture 
	Given Search for "<Items>" 
	When Filter by Region of Manufacture "<Country>" 
	Then Item list should only have products from "<Country>" 
	
	Examples: 
		|Items		|Country		|
		|Shoes		|China			|
		|Shirts		|Bangladesh		|
		|Pants		|United States	|