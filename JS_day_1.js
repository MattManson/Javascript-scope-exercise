javascript day 1
week 11 day_1

episode1:
declare variable name = “keith”
declare variable printname is a function
function prints “my name is “ +  variable name to the console
call printname
this will print “my name is  Keith” to the console

episode 2:
score hasn’t been declared a variable, line 19 will do nothing
declare variable name result is a function
declare variable score = 3
return value of score
call result
this will pring 3 to the console

episode 3:
declare variable myAnimals is an array containing “chickens” “cats” “rabbits”
declare listAnimals is a function
within listanimals we have an instance variable named myAnimals, its an array containing “ducks” “dogs” “lions”
declare variable i = 0
if i is less than length of myAnimals array, increase i by 1
print value of i, plus corresponding animal within myAnimals array, for each animal in the array.
call listAnimals function
since myAnimals is declared inside the function we’re calling, it will ignore previous myAnimals variable
this will print 0: ducks, 1: dogs, 2: lions

episode 4:
declare supects as variables give them names
in allSuspects function we rename Keith to Harvey
then print out a list, suspects include jay, val harvey, rick
outside of allSuspects function
call allSuspects function
then print value of suspect3 in a sentence
because final print command is outside the allSuspects method, suspect 3 will remain Keith
this will print out suspects include jay val harvey and rick
then it will print out suspect three is keith

episode 5:
declare variable detective as ace ventura
declare function printname as returning detective.name
declare detective info function as having a detective named poirot, and then using the printname function defined earlier
print the result of detectiveInfo function
will return Poirot to the console

episode 6:
declare murderer is Rick
outerfunction contains inner function, both define different murderers
call outerfunction
print murdered value in a sentence
will return “the murderer is rick”
