var config = {
  url: "http://theunexplained.ca",
  title: "The Unexplained",
  text: "Discover the enigmas around us that science can’t explain, discuss them, and just maybe solve them. By @omphalosskeptic" ,
  image: "http://markdowner.github.io/img/markdown-humanized.png",
  networks: {
    google_plus: {
      enabled: true,
    },
    twitter: {
      enabled: true,
    },
    facebook: {
      enabled: true,
    },
    pinterest: {
      enabled: true,
    },
    email: {
      enabled: true,
      title: "The Unexplained: Discover, discuss  and solve the enigmas around us that science can’t explain. ",
      description:  "I ran across this neat startup and thought you might be interested: http://theunexplained.ca",
    }
  }
}

  var share = new Share(".share-button", config);
