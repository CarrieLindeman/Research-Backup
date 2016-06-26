.. mchoice:: test_question6_2_1
   :answer_a: x &gt; 0 and &lt; 5
   :answer_b: 0 &lt; x &lt; 5
   :answer_c: x &gt; 0 or x &lt; 5
   :answer_d: x &gt; 0 and x &lt; 5
   :correct: d
   :feedback_a: Each comparison must be between exactly two values.  In this case the right-hand expression &lt; 5 lacks a value on its left.
   :feedback_b: This is tricky.  Although most other programming languages do not allow this syntax, in Python, this syntax is allowed.  However, you should not use it.  Instead, make multiple comparisons by using and or or.
   :feedback_c: Although this is legal Python syntax, the expression is incorrect.  It will evaluate to true for all numbers that are either greater than 0 or less than 5.  Because all numbers are either greater than 0 or less than 5, this expression will always be True.
   :feedback_d: Yes, with an and keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true.

   What is the correct Python expression for checking to see if a number stored in a variable x is between 0 and 5.
   
.. mchoice:: test_question6_2_2
    :answer_a: x / 2 == True and x / 7 == False
    :answer_b: x % 2 == 0 and x % 7 == 0
    :answer_c: x % 2 == 0 or x % 7 == 0
    :answer_d: x / 7 == False or x / 2 == True
    :correct: b
    :feedback_a: x / 2 == True is not how you determine if a number is even. x / 7 == False is not how you determine if a number is divisible by 7.
    :feedback_b: This expression only evaluates to True if x is evenly divisible by 2 AND evenly divisible by 7. Both comparisons must be True in order for the whole expression to be True.
    :feedback_c: This expression will evaluate to True if either comparison is True. But we want an expression that depends on both comparisons to be True.
    :feedback_d: x / 7 == False is not how you determine if a number is divisible by 7. x / 2 == True is not how you determine if a number is even.
    
    Which of these expressions evaluates to True if x is equal to a number that is both even and divisible by 7?
    
.. mchoice:: test_question6_2_3
    :multiple_answers:
    :answer_a: x >= 3 or x < 20
    :answer_b: not x < 3 and not x >= 20
    :answer_c: x >=3 and not x >= 20
    :answer_d: x >= 3 and x < 20
    :correct: b,c,d
    
    Which of these expressions evaluates to True if x is greater than or equal to 3 and not greater than or equal to 20? Select all that apply. 