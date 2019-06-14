# Bored App - frontend interview task

## Introduction
Your task is to create a frontend app for the [Bored API](http://www.boredapi.com/documentation) according to this [wireframe](https://raw.githubusercontent.com/ngabesz-wse/bored-app/master/bored-app-wf.jpg).
How you decide the small details is up to you but since this is a UI try to make it nice and usable. If it not specified you can use any tools and frameworks.
## Requirements
- When the user first opens the Activity page suggest a random activity. Set the details according to the random event. 

## Requirements
**Activity page**:
It is crucial so not realad the page when the user switches between the Activity and My list pages.
If any of the activity details have been changed update the page without reloading it.

After pressing the **Save for later** button store the current activity. It will be available in the List page in a list view.
If the users closes the browser the app must remember the saved acivities and they must be available in the My list page.
Pressing the **Hit me with a new one!** button will recommend a new activity according to the selected acivity details.

**My list page**:
Here the user can see the saved activities. At the end of every row there is an action button to delete the activity. 

A **Clear all** will delete all the saved suggestions .
