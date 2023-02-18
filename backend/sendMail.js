import mailer from "nodemailer";
import { __dirname } from "./server.js";

const sendMail = async (name, code, collegename, email) => {
    const transport = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "minewsorganization@gmail.com",
            pass: "xfoywfxbedqzwjcl",
        },
    });
    let HTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rangavardhan</title>
        <style>
            body {
                background-color: rgb(68, 68, 68);
            }
            .ranga {
                background-image: url("https://thumbs2.imgbox.com/b7/0b/v59DLnrL_t.jpg");
                width: 400px;
                height: 400px;
                background-repeat: no-repeat;
                background-size: contain;
                margin: auto;
                color: lightgoldenrodyellow;
                position: relative;
            }
            h1 {
                text-align: center;
                background-color: black;
                padding: 1rem;
                color: lightgoldenrodyellow;
                font-size: 25px;
            }
            p {
                margin: 4px;
                padding: 4px;
                text-align: left;
                color: aqua;
                font-size: 16px;
            }
            code {
                font-weight: bold;
                padding: 20px;
                font-size: 25px;
            }
            h2 {
                text-align: left;
                padding: 16px;
                font-size: 32px;
            }

            .ranga div {
                height: 200px;
            }
        </style>
    </head>
    <body>
        <h1>Rangavardhan pass</h1>
        <div class="ranga">
            <h2>${name}</h2>
            <code>${code}</code>
            <div></div>
            <p>${collegename}</p>
            <p>${email}</p>
        </div>
    </body>
</html>

`;

    const mailoptions = {
        from: "minewsorganization@gmail.com",
        to: email,
        subject: "news from nodemailer",
        html: HTML,
    };
    try {
        await transport.sendMail(mailoptions);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// sendMail("miteshsurti93@gmail.com");

export default sendMail;
