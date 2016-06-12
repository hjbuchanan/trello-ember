# Trello-fun

## Synoposis
Note: please see further below for instructions on installing and running application on your local machine. 

#### Ember?
This was my first time working in Ember; Getting accustomed to the data flow and how the components of the application communicate with each other was the biggest hurdle. One thing I was (pleasantly) surprised about was how EASY it was to get up and running on ember. I can see how people often relate it to Rails and the *convention over configuraiton* paradigm. I didn't always love the convention, but it did make things easier once I understand the built-in expectations. 

####Data flow
This was the biggest difference. Angular obviously uses depdency injection pretty heavily. Two way data binding is the default. Once you update the model/data the view automatically follows. Alternatively, ember uses actions to bubble events up and changes the model at the top level and then you notify anything further down the scope of those changes. At one point I used `Ember.inject.service()` but that felt hacky and I would presume is somewhat of an antipattern.


#### Actions
I feel like there has to be a better way of passing actions than how I currently have it implemented. There are certain html elements that have 3 or 4 actions on them. It makes it difficult to follow the path up from the view --> component js --> contianing component view --> component js --> controller --> route. Which leads me too...

#### Data/Models
I bubbled up all my events that dealt with changing data up to the index's route file. I don't know that this was the best place for it or even the correct place for it. For this application it worked but I can see where it could quickly get complicated and how those changes would need to be made somewhere else. Definitely should have spent a little bit more time on the front end of building this to research this better and look into alternatives.

Initially I tried to implement the data using ember and mirage, but that ended up being another layer of complication that I didn't want to work with. Moving forward,I would want to break out items into their own model and have items be associated with a list model. 


#### Components
After continuing to build I realized there were some basic components that could have been shared more easily. Adding an item and adding a list forms are pretty much the same functionality and view but just wired up to different data. 


#### TODOs
* Bugs: When you add an item to the list, in the add-list-modal it has the previously typed in information. Need to clear it. 
* Tests
* Styling bugs (alignment is off, buttons should be styled and align correctly)
* Error Handling
* Linter

#### Design
Needs improvement


## Running this Application
This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

