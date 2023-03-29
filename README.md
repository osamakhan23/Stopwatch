# Stopwatch Descriptio:
This is an HTML file that defines a simple timer using JavaScript. The timer displays a digital clock face and has three buttons: Start, Pause, and Stop. The CSS code defines the visual appearance of the timer, and the JavaScript code implements the timer's functionality.

The timer is implemented using an interval timer that updates the digital clock face every 100 milliseconds. When the Start button is clicked, the timer starts running and the interval timer is started. When the Pause button is clicked, the timer is paused, and the interval timer is stopped. When the Stop button is clicked, the timer is stopped, the interval timer is stopped, and the digital clock face is reset to 0.00.

In addition, there is a Lap button that when clicked, records the elapsed time since the last lap button press and display it on the digital clock face for 3 seconds before continuing the normal timing process.

# Code Description:

This code is an implementation of a timer with start, pause, resume, and stop buttons. When the page is loaded, the window.addEventListener function is called, which sets up various event listeners and initializes the state of the timer.

The HTML file defines a page containing a timer, which is displayed using the span element with the id of timer_face. The timer is contained within a div element with a class of timer, which contains the h1 element for the title of the timer, the span element for the timer display, and three button elements for starting, pausing, and stopping the timer.

The CSS file defines the appearance of the timer and its components. It defines various properties such as font sizes, colors, and gradients, as well as the layout of the timer using CSS flexbox.

The JavaScript file contains functions that control the behavior of the timer. The startLapTimeout function sets a timeout for 3 seconds and then calls the resetTimerUI function to reset the timer display. The resetTimerUI function adds 3 seconds to the elapsed time, updates the timer display, and restarts the timer.

The updateTimer function is called every 100ms and updates the elapsed time by 0.1 seconds, which is used to update the timer display. The startButton event listener sets up the behavior of the start/pause/resume button. When the button is clicked, it toggles between starting the timer (when the timer is stopped), pausing the timer (when the timer is running), and resuming the timer (when the timer is paused). Finally, the stopButton event listener stops the timer and resets the timer display to 0.