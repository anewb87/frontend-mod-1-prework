## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

+  After reading the blog posts, I'm feeling better about asking questions. I appreciate the push to ask. While I do prefer to figure out things on my own, I get stuck and that can fluster me. I have an innate need to be seen as smart enough and maybe it's my education, maybe it's just me, but asking questions I feel like I *should* know the answer to is hard. The blogposts were reassuring- ask your question and move on, it doesn't make you dumb or a bad programmer to ask a question, that's simply part of the learning process.

+ I feel like I am a too soon, too long, and a somewhere in between question-asker. It all depends on to whom I'm asking a question. When I'm completely comfortable with someone, they're right there, they're a friend, I can ask a question too soon. Outside of this pretty-specific scenario, however, I tend to be an in-between or too long. While I prefer figuring things out on my own, I *hate* feeling like I'm wasting time and that can happen pretty quickly. I think those two tend to balance out in that somewhere in between space with regards to when I generally tend to ask questions.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

+ When you asked me to run the file in node and said that we'd done it in Section 1, I was a bit confused at the first. I didn't remember any mention of node from Section 1 and when I went to the webpage with the Session 1 instructions, the word *node* does not exist on that page. Frustration ensued. I Googled but didn't really understand what exactly I was searching for which was more frustration. I then started typing out a question to a friend, being as detailed as possible, following the Turing instructions of how to write out questions. It was while writing the question that I realized maybe there were more instructions in the actual .js files I had worked on in Section 1.  Sure enough- there were the instructions about how to run a file in node. Woot woot! (And I'd done it SO MANY TIMES. I just forgot because the magic of copy and paste.) Relief and a bit of annoyance at myself that it took that long to think it through. It took me more time than I would have liked to get the information I needed, but in that process I've now learned more about what node actually is in the process.
+ I actually feel pretty good about functions. You told us where to look and the resources were quite clear. I appreciated the extra resources for extra information/practice if we felt we needed it. I think the YouTube video really hit home. I felt fine working through the functions section because of the quality of the resources given. If, however, you'd told us to just figure out functions, I would have felt very overwhelmed. Still in that phase where I'm aware that I know nothing, and it's difficult knowing where to start. This helped support my learning because your sources gave good places to turn to for help in the future.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

+ In regular world speech, a conditional statement is an 'if...then' statement. If something happens then this other thing will happen- the other thing is *conditional* upon the first. If it's lightning, then they won't play the soccer match.
+ This is very much the same principle in coding. A conditional statement is an if/else if/else statement in JavaScript. These statements evaluate a condition. If the condition evaluates to `true`, then any statements in the following code block will be executed. If the condition evaluates to `false`, then the program will continue reading the *else if* and *else* conditions down the line. Only one block can/will be evaluated as `true` and then will run for one specific condition. A conditional is likely used in my library application called Libby. When I type in a book I'd like to checkout, it searches its database. If it has the book it will show me and then allow me to put it on hold or check it out. If it doesn't have the book, it will tell me that it doesn't have that book.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

+ You add multiple conditions to an `if` statement by using *else if* statement(s).  
```JavaScript
if (conditionOne){
  code;
} else if (conditionTwo){
  code;
} else if (conditionThree){
  code;
}else {
  code;
}
```  

I kind of explained this in the question above, but essentially, the program goes down the line to see which condition evaluates to `true`. When it does get `true`, then it runs the subsequent code block. If it evaluates to `false`, then it moves down the line and reads the next condition etc etc until it gets a `true`.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

+ Logical operations! If you want to check that two conditions are met you use the logical AND operation: &&  
If you want to check that 1 of 2 conditions are met you use the logical OR operation: ||

1. What questions do you still have about `if` statements and/or functions?

+ I think I really just need more practice. We didn't do any 'arguments as variables' examples in this work, but I did do one and had a friend check it out. I feel like I have a decent grasp, just need to work them more, really hammer in the difference between arguments and parameters.
