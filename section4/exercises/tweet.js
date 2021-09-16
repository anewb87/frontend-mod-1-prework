/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments
  }
  changeNumberOfLikes() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
  addComment(additionalComment) {
    this.comments = this.comments + additionalComment;
  }
};

var harryPotter = new Tweet("Harry Potter", "Can anyone help me find that last Horcrux?", "12:01 am, 05/10/1998", 117, "Have you checked your sock drawer? I always find random junk in my sock drawer.")
var ronWeasley = new Tweet("Ron Weasley", "Oi. What's the best way to launch a garden gnome?", "08/25/1996", 8,"Shotput those little devils!")

harryPotter.addComment(" Look inside yourself, Harry.")
console.log(harryPotter)
ronWeasley.addComment(" Mahaha! Widdle Won-Won still has to clean Mom's garden gnomes.")
console.log(ronWeasley)

harryPotter.changeNumberOfLikes()
console.log(harryPotter)
ronWeasley.changeNumberOfLikes()
console.log(ronWeasley)
