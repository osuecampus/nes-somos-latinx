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
        "progressBar": false
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

#### Sections

Each object inside of `sections` is a unit. Units must contain pages, which are the objects placed inside sections[x].content. Inside the page objects, you then have a `blocks` array which is where you'll take templates from the `src/assets/json/templates` folder to generate content on your pages.

### The Future

This project is still under development. Things coming soon will be the search function, the ability to move the sidebar to the left side of the screen, and more. This documentation will also expand to help get people started on developing new blocks.