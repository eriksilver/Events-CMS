## Event Management Web App

### Overview

This app is an example of a content management system (CMS) that was built for events. It allows the user to view a list of events, add a new event, and edit existing events.

Key Components:
<ol>  
  <li>Four views including Event List, Add Event, Edit Event, and About</li>
  <li>Firebase database (2 way sync) with operations to create, edit, and delete events</li>
  <li>Custom directive in list view to display event details</li>
  <li>Utilizes a custom alert service for form notifications</li>
  <li>Manage states/views with UI Router</li>
  <li>HTML5 and Angular form validation</li>
  <li>Event data schema with eight fields</li>
  <li>Serve app with Node.js + Express | Deployed with Heroku</li>
</ol>

### Stack

<ul>
  <li>AngularJS</li>
  <li>Firebase</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Foundation</li>
</ul>

### To run

Local: ```npm start``` <br>
Web: [https://events-to-manage.herokuapp.com/](https://events-to-manage.herokuapp.com/) <br>
Unit test: ```karma start my.conf.js```
