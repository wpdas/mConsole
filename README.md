# MobileConsole (mConsole)

MConsole is a simple tool to be used in projects for mobile (hybrid). It was developed using the Phonegap framework as a test base. Through mConsole, you can see easily all console occurrences in the project (including errors).

Should be used only for projects mobile.

### How to use

* Copy to root folder (or any folder inside of it) the file [mconsole.js](https://github.com/Wpdas/mConsole/blob/master/mconsole/mconsole.js), insert the same in your project and call its start function.

* Example ([demo.js](https://github.com/Wpdas/mConsole/blob/master/demo.js)):
```
window.onload = function(){

    //Start mobile console and pass height (optional) per parameter.
    //$mConsole.init(250);
    $mConsole.init();

    //Execute console
    console.log($mConsole.version);
    console.log("My log");
    console.warn("My warning");
    console.info("My info");
    console.debug("My debug");

    //Proposital error
    myErrorVar;
};
```
This above code will generate something like this below:
![Console running](https://raw.githubusercontent.com/Wpdas/mConsole/master/console.jpg "Console running")
