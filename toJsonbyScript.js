

//https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

const user = {
    id: 5,
    firstName: "Maria",
    lastName: "Williams",
    age: 34,
    email: "m.williams@example.com",
    address: {
      streetAddress: "123 Main St",
      city: "Anytown",
      state: "US",
      postalCode: "12345",
    },
    phoneNumbers: [
      {
        type: "home",
        number: "555-555-5554",
      },
      {
        type: "work",
        number: "555-555-5555",
      },
    ],
  };
  
  // converting user to JSON
  const userJSON = JSON.stringify(user);

  download(userJSON, 'json.txt', 'text/plain');

  //THIS THING ONLY RUNS ON BROWSER CONSOLE IF YOU DONT HAVE NodeJS
  