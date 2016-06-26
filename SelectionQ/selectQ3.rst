.. mchoice:: test_question6_3_1
    :answer_a: 9
    :answer_b: 6
    :answer_c: True
    :answer_d: False
    :correct: d
    :feedback_a: This entire line will not evaluate to a number.
    :feedback_b: This entire line will not evaluate to a number.
    :feedback_c: Check your steps. Make sure you calculate and compare using the correct precidence of operations.
    :feedback_d: Yes, the entire line evaluates to False.
    
    What does 3 ** 2 == 4 * 2 + 1 and 2 ** 2 + 2 != 7 - 1 evaluate to? Try to figure this out without running the code! Use paper and pencil!

.. mchoice:: test_question6_3_2
   :answer_a: ((5*3) &gt; 10) and ((4+6) == 11)
   :answer_b: (5*(3 &gt; 10)) and (4 + (6 == 11))
   :answer_c: ((((5*3) &gt; 10) and 4)+6) == 11
   :answer_d: ((5*3) &gt; (10 and (4+6))) == 11
   :correct: a
   :feedback_a: Yes, * and + have higher precedence, followed by &gt; and ==, and then the keyword &quot;and&quot;
   :feedback_b: Arithmetic operators (*, +) have higher precedence than comparison operators (&gt;, ==)
   :feedback_c: This grouping assumes Python simply evaluates from left to right, which is incorrect.  It follows the precedence listed in the table in this section.
   :feedback_d: This grouping assumes that &quot;and&quot; has a higher precedence than ==, which is not true. 

   Which of the following properly expresses the precedence of operators (using parentheses) in the following expression: 5*3 > 10 and 4+6==11