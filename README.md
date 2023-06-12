# ChemAcademy
Created for a [hackathon](https://www.hackakhan.org/). A better version of the online periodic table

## Running Locally
This project needs nodejs to run. If you dont have that it must be installed.
It currently needs an openai api key. A version without the AI introgration will be coming soon. For now you can delete the refrences to it in server.js on lines 14-16 and 34-38 and avoid the text box.
First, clone this repo. 
```
git clone https://github.com/WilyHyperion/ChemAcademy/
cd ChemAcademy
```
next, install the dependcies 
```
npm i
```
Add in your api key.
To do this, create a file called `.env` and paste this into
```
GPT_KEY = <your key here>
``` 
Finnaly, run the project
```
node server.js
```
The site will be at the url `localhost:3000`
