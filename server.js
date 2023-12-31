import express from 'express';
const app = express();
import { ChatGPTAPI } from 'chatgpt'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
const port = 3000;
console.log(process.env.API_KEY);
const chatgpt = new ChatGPTAPI({
    apiKey: process.env.GPT_KEY,
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});
app.get('/javascript/:file', (req, res) => {
    res.sendFile(__dirname + "/public/javascript/" + req.params.file);
});
app.get('/css/:file', (req, res) => {
    res.sendFile(__dirname + "/public/css/" + req.params.file);
});
app.get('/images/:file', (req, res) => {
    res.sendFile(__dirname + "/public/images/" + req.params.file);
});
app.get('/data/:file', (req, res) => {
    res.sendFile(__dirname + "/public/data/" + req.params.file);
});
app.post('/api/gpt', async function(req, res) {
    let message = req.body.text;
    let r  = await chatgpt.sendMessage(message, {
        systemMessage: `You are a chemistry teacher, and your students are asking you questions about elements, specifically the element ` + req.body.element + `. If you are unsure what element it is, use that element. "`
    });
    console.log(r);
    res.send(r);

})
app.listen(port, () => {
    console.log("listening on port " + port);
});