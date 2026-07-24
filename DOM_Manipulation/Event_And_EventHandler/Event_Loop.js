// Javascript is a single threaded synchronous language - it can perform / execute one task at a time and cant do multiple tasks parelley 
// and syncronous language means all task will happen in sync one after another
// javascript is a single threaded synchronous language

/*
--------------------------------------------------------------
|         call stack                web API                  |
|   -----------------         -----------------              |
|   |               |         | setTimeOut/   |              |
|   |               |         | DOM API       |              |
|   |               |         | fetch         |              |
|   |               |         | local storage |              |
|   |               |         | console.log   |              |
|   |               |         | location      |              |
|   |               |         |               |              |
|   |               |         |               |              |
|   |               |         |               |              |
|   -----------------         -----------------              |
|                                                            |
--------------------------------------------------------------
*/

// then there is callback Queue and Main is Event Loop event loop checks callback Queue and if there is call back funtion in call back queue event loop transfers than function to the call stack and after executing the call back funtion is removed from both call stack and call back queue. and the condition is the callback stack must be empty.


/*
=========================================================================================
                         JavaScript Runtime (Browser)
=========================================================================================

                                -----------------------
                                |     CALL STACK      |
                                -----------------------
                                | console.log()       |
                                | myFunction()        |
                                | main()              |
                                -----------------------
                                           ^
                                           |
                                           | Push / Pop
                                           |
                                  +----------------+
                                  |   EVENT LOOP   |
                                  +----------------+
                                      ^        |
                                      |        |
                Microtasks first -----+        +------ Callbacks
                                      |               when stack is empty
                                      |


        ----------------------------              ----------------------------
        |     MICROTASK QUEUE      |              |      CALLBACK QUEUE      |
        ----------------------------              ----------------------------
        | Promise.then()           |              | setTimeout()            |
        | Promise.catch()          |              | setInterval()           |
        | Promise.finally()        |              | DOM Events              |
        | queueMicrotask()         |              | click, scroll           |
        | MutationObserver         |              | fetch callbacks         |
        ----------------------------              ----------------------------
                    ^                                         ^
                    |                                         |
                    |                                         |
                    +------------------+   +------------------+
                                       |   |
                                       |   |
                           -------------------------------
                           |           WEB APIs           |
                           -------------------------------
                           | setTimeout()                |
                           | setInterval()               |
                           | fetch()                     |
                           | DOM API                     |
                           | localStorage                |
                           | console                     |
                           -------------------------------


FLOW
====

Sync Code
    │
    ▼
CALL STACK
    │
    ├──────────────► Executes immediately
    │
    └── Async Function?
            │
            ▼
        WEB APIs
            │
            ├── Promise resolved?
            │        ▼
            │   MICROTASK QUEUE
            │
            └── Timer/Event finished?
                     ▼
              CALLBACK QUEUE
                     │
                     ▼
                EVENT LOOP
                     │
                     ▼
        Is CALL STACK empty?
             │
        Yes ─┴────────────► Execute ALL Microtasks
                           │
                           ▼
                     Execute ONE Callback
                           │
                           ▼
                    Push onto CALL STACK
                           │
                           ▼
                        Execute
                           │
                           ▼
                      Repeat Forever

Priority:
1. Call Stack
2. Microtask Queue (ALL tasks)
3. Callback Queue (ONE task at a time)

=========================================================================================
*/

console.log("Start the Operation");

fetch("https://api.github.com/users").then(()=>{
  console.log("GitHub user info");
})

console.log("end of operation");