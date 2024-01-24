# ChemAcademy
Created for a [hackathon](https://www.hackakhan.org/). An interactive online periodic table.

## Images
### Home
![image](https://github.com/WilyHyperion/ChemAcademy/assets/97263038/59ec8e0e-a1f7-435c-94c3-5a432af00f54)

### Element View
![image](https://github.com/WilyHyperion/ChemAcademy/assets/97263038/1ff3c4e0-0fea-4d21-a04f-733b7b5f8ef7)


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
