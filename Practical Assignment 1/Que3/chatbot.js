module.exports.reply = function (msg) {
    this.Bot_Age = 10;
    this.Bot_Name = "abc";

    // msg = msg.toLowerCase();

    if(msg.indexOf("hi")>-1)
    {
        return "Hello..!!";
    }

    else if(msg.indexOf("age") > -1 && 
            msg.indexOf("your"))
        {
            return "I'm " + this.Bot_Age;
        }
        return "Sorry, I didn't get it... ";
}
