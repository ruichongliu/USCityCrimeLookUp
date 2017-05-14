# USCrimeLookUp
**US City Crime Lookup Project [Demo](http://rliu.me/UsCrimeLookUp/)**

**[Original Data](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-8/table_8_offenses_known_to_law_enforcement_by_state_by_city_2015.xls/view)** Collected by @[ShaoyiZhang](https://github.com/ShaoyiZhang)

**[Porject Page](http://www.minkoder.com/crimerateproj) _(Only in Chinese)_**


Authors: Stell Zhang and @[ruichongliu](https://github.com/ruichongliu) 


## Apr. 22| v1.0.0
**Basic functionalities** are completed, but there still are bugs to fix:
 - [x] The webpage will shrink when the inpux box is selected
 - [ ] Need to remove "Search" button
 - [ ] Autocomplete will automatically generates a line of text at the bottom of the page
 - [x] Node JS is needed
 - [ ] Add comparison function to the wabpage


## Apr. 24| v1.0.1
**One** bug is fixed:
 - [x] The webpage will shrink when the inpux box is selected
 
Remaining todos:
 - [ ] Add comparison function to the wabpage
 - [ ] Need to remove "Search" button
 - [x] Autocomplete will automatically generates a line of text at the bottom of the page
 
Newfound todo:
 - [x] Translate content to English

**Node JS is completed** but there are still bugs to fix. 

**Search button** will be kept for testing purposes, until a better design is out.


## Apr. 25| v1.1.0
**Major changes** to the project:

The original idea to host this website on _Heroku_ did not work out. Instead, the web will remain on _GitHub_. **Node JS** and **Express JS** are not needed for now. The database will be moved from online to local, which might cause a problem when calling **AJAX** and **XMLHttpRequest**, since **Chrome** does not support local calls, yet other browsers do. Considering **Chrome** to be the standard testing platform, we will try to figure out a way to import the database without **Node JS**.


## May. 11| v1.1.1
**Two** bug is fixed:
 - [x] Translate content to English
 - [x] Autocomplete will automatically generates a line of text at the bottom of the page
 
Translated webpage description and fixed data query **Undefined** problem.
 

## May. 13| v1.2.0
Changed the underlying autocomplete function.
