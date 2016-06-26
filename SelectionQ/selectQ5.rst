.. mchoice:: test_question6_5_1
   :answer_a: Output a
   :answer_b: Output b
   :answer_c: Output c
   :answer_d: It will cause an error because every if must have an else clause.
   :correct: b
   :feedback_a: Because -10 is less than 0, Python will execute the body of the if-statement here.
   :feedback_b: Python executes the body of the if-block as well as the statement that follows the if-block.
   :feedback_c: Python will also execute the statement that follows the if-block (because it is not enclosed in an else-block, but rather just a normal statement).
   :feedback_d: It is valid to have an if-block without a corresponding else-block (though you cannot have an else-block without a corresponding if-block).

   What does the following code print?

   .. code-block:: python
     
     x = -10
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     print("This is always printed")

   ::

     a.
     This is always printed

     b.
     The negative number -10 is not valid here
     This is always printed

     c.
     The negative number -10 is not valid here


.. mchoice:: test_question6_5_2
   :answer_a: No
   :answer_b: Yes
   :correct: b
   :feedback_a: Every else-block must have exactly one corresponding if-block.  If you want to chain if-else statements together, you must use the else if construct, described in the chained conditionals section.
   :feedback_b: This will cause an error because the second else-block is not attached to a corresponding if-block.

   Will the following code cause an error?

   .. code-block:: python

     x = -10
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     else:
         print(x, " is a positive number")
     else:
         print("This is always printed")
         
         
.. mchoice:: test_question6_5_3
    :answer_a: 7
    :answer_b: 15
    :answer_c: 4
    :answer_d: 10
    :correct: c
    :feedback_a: x was not assigned the value of 7 because the if statement (if x == 15) did not evaluate to True.
    :feedback_b: x was not assigned the value of 15 because the if statement (if x == 10) evaluated to True so that the else statement was ignored.
    :feedback_c: x was assigned the value of 4 and was not changed again before printing it.
    :feedback_d: x was originally assigned the value of 10, but was later reassigned another value.
    
    What will this program output?
    
    .. code-block:: python
    
    x = 10
    
    if x == 10:
        x = 4
    else: 
        x = 15
        
    if x = 15:
        x = 7
    
    print(x)
    
.. mchoice:: test_question6_5_4
    :answer_a: "Alice is a student!"
    :answer_b: "Alex is a student!"
    :answer_c: "Alice is not a student!"
    :answer_d: "Alex is not a student!"
    :correct: c
    :feedback_a: isStudent is False so it will not print that the individual is a student.
    :feedback_b: isStudent is False so it will not print that the individual is a student.
    :feedback_c: name is equal to "Alice" and isStudent is equal to False.
    :feedback_d: name is not equal to Alex.
    
    What will this program output?
    
    ..code-block:: python
    
    isStudent = False
    name = "Alice"
    
    if name == "Alex":
        isStudent = True
        
    if isStudent == True:
        print(name, "is a student!")
    else:
        print(name, "is not a student!")