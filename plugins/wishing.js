const asena = require('../events'); 

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends good morning message"

const GN = "it sends good night message"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'gdmrng', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "❀🍃Good❀ ❀morning❀🥰❀";

    r_text[2] ="☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐";

    r_text[3] ="🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰";

    r_text[4] ="🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸";

    r_text[5] ="🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞";

    r_text[6] ="🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶";

    r_text[7] ="🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰";

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'gdni8', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";

        r_text[2] ="🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";

        r_text[3] ="🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";

        r_text[4] ="😘ցօօժ ⭐️ղíցհԵ 💝";

        r_text[5] ="🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";

        var i = Math.floor(6*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'gdmrng', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "❀🍃Arjunser saysϟ Good❀ ❀morning❀🥰❀";

            r_text[2] ="☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐";

            r_text[3] ="🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰";

            r_text[4] ="🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸";

            r_text[5] ="🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞";

            r_text[6] ="🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶";

            r_text[7] ="🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰";

            var i = Math.floor(8*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'gdni8', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "😘𝘼𝙍𝙅𝙐𝙉𝙎𝙀𝙍 𝙎𝘼𝙔𝙎 𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";

                r_text[2] ="🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";

                r_text[3] ="🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";

                r_text[4] ="😘ցօօժ ⭐️ղíցհԵ 💝";

                r_text[5] ="🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";

                var i = Math.floor(6*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                asena.addCommand({pattern: 'gdmrng', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "❀🍃Good❀ ❀morning❀🥰❀";

                    r_text[2] ="☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐";

                    r_text[3] ="🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰";

                    r_text[4] ="🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸";

                    r_text[5] ="🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞";

                    r_text[6] ="🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶";

                    r_text[7] ="🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰";

                    var i = Math.floor(8*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));

                asena.addCommand({pattern: 'gdni8', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                        var r_text = new Array ();

                        r_text[1] = "😘𝘼𝙧𝙟𝙪𝙣𝙨𝙚𝙧 𝙎𝘼𝙔𝙎 𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";

                        r_text[2] ="🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";

                        r_text[3] ="🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";

                        r_text[4] ="😘ցօօժ ⭐️ղíցհԵ 💝";

                        r_text[5] ="🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";

                        var i = Math.floor(6*Math.random())

                        await message.client.sendMessage(

                            message.jid,(r_text[i]), MessageType.text);

                        }));

}
