# Never-Ending-Story

The Never Ending Story is an application used to tell interactive stories using longform content. It uses block components powered by a JSON document to display different forms of content to users.

### Installation

Installation is crazy easy! Just fork, clone, and run!

```
yarn install && yarn start
```

### Project Setup

To setup your project, you just need to start filling out the JSON document in `src/assets/json/parcel.json`. The JSON document is broken into two sections, config (where project settings are kept) and sections (which is where you would put units and pages of content). Parcel.json should already have the structure for you to get started, but below is a boilerplate of what it should look like:

```
[{
    "config": {
        "title":"Default Project Title",
        "search": false,
        "progressBar": false,
        "sidebar": "left"
    },
    "sections": 
    [
        {
            "id": 0,
            "title": "Unit 1 Title",
            "content": [
                {
                    "id": 0,
                    "title" : "Page 1 Title",
                    "blocks":
                    [
                    ]
                }
            ]
        }
    ]
}]
```

#### Config
* `title` - This is the title of your application that will be displayed to users.
* `search` - Search is not yet complete, but in the future this would show you a search dialog in the sidebar.
* `progressBar` - Setting this to true will show users an overall progress bar in the sidebar, along with checkmarks denoting pages users have read.
* `sidebar` - Sets which side of the screen the sidebar is located. Default is right.

#### Sections

Each object inside of `sections` is a unit. Units must contain pages, which are the objects placed inside sections[x].content. Inside the page objects, you then have a `blocks` array which is where you'll take templates from the `src/assets/json/templates` folder to generate content on your pages.

### Using Custom Blocks

To use custom blocks installed from NPM, yarn install them into your project then import it into blocks.js. You'll also need to add it to the default export. You can also add them to the blocks folder in src. Just make sure to update `src/blocks.js` with the correct path to your block.

### Creating Custom Blocks

To create custom blocks, visit https://github.com/osuecampus/nes-block-template and clone the project into a new folder:

````
git clone https://github.com/osuecampus/nes-block-template nes-block-{blockname}
cd nes-block-{blockname}
npm i
````

Edit the `src/index.js` file to change what JSX is shown when your block is called. Remember that the prop pushed to the block is called `details`. So, if you have "text" as a child of details, you would access that information using {this.props.details.text}.

To test your component as you are editing it, run `yarn link`, then go to your NES folder and run `yarn link nes-block-blockname`. Run `yarn start` (or build) in your custom block folder and you should be able to access it by following the instructions in the *using custom blocks* section. 

Once you are satisfied with it's functionality, push it to Github and alert Austin. Once a code review is performed, it will be pushed to NPM where you will be able to `yarn install nes-block-blockname` into your project.