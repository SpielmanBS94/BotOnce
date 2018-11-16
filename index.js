console.log("Preparando");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  	if (message.author.bot) return;

	//TEXTO ONCE//
	var mensaje = message.content;
	var letreado = mensaje.replace(/0/g, "o");
	letreado = letreado.replace(/3/g, "e");
	letreado = letreado.replace(/4/g, "a");
	var limpio = letreado.replace(/[^a-zA-Z]/g, "");
	var recorte = limpio.slice(-4);
		if (recorte.toLowerCase() == "once" | recorte.toLowerCase() == "doce" | recorte.toLowerCase() == "doze" | recorte.toLowerCase() == "dose" | recorte.toLowerCase() == "onse" | recorte.toLowerCase() == "onze") {
			message.channel.sendMessage("Chupalo Entonce");
		}

	//NUMERO 12 y 11//
		if (mensaje.endsWith("12")) {
			message.channel.sendMessage("Chupalo Entonce");
		}
		
	
	//EN CASO DE + U OTROS 11//
		if (mensaje.toLowerCase().includes("+") | mensaje.toLowerCase().includes("mas") | mensaje.toLowerCase().includes("m\xe1s")) {
			if (mensaje.toLowerCase().includes("diez") & mensaje.toLowerCase().includes("uno") | mensaje.toLowerCase().includes("10") & mensaje.toLowerCase().includes("uno") | mensaje.toLowerCase().includes("10") & mensaje.toLowerCase().includes("1") | mensaje.toLowerCase().includes("diez") & mensaje.toLowerCase().includes("1")) {
	
			message.channel.sendMessage("Chupalo Entonce");
			}
                }

	//TE LO METI COMO NINGUNO//

	recorte = limpio.slice(-3);
		if (recorte.toLowerCase() == "uno") {
			message.channel.sendMessage("Te la meti como ninguno");
		}
		if (mensaje.endsWith("1")) {
                    if (mensaje.endsWith("11")) {
			message.channel.sendMessage("Chupalo Entonce");
                    } else {
                        message.channel.sendMessage("Te la Meti como Ninguno");
                    }
		}
	
	//POR EL CULO TE LA HINCO//

	recorte = limpio.slice(-5);
		if (recorte.toLowerCase() == "cinco" | recorte.toLowerCase() == "sinco" | recorte.toLowerCase() == "sinco") {
			message.channel.sendMessage("Por el Culo te la Hinco");
		}
		if (mensaje.endsWith("5")) {
                    if (mensaje.endsWith("15")) {
			message.channel.sendMessage("");
                    } else {
                        message.channel.sendMessage("Por El Culo te la Hinco");
                    }
		}

	//TE LA METO POR EL TRASERO//

	recorte = limpio.slice(-4);
		if (recorte.toLowerCase() == "cero" | recorte.toLowerCase() == "zero" | recorte.toLowerCase() == "sero") {
			message.channel.sendMessage("Te la meto por el Trasero");
		}
		if (mensaje.endsWith("0")) {
                    var mensaje0 = mensaje.slice(-2);
                    mensaje0 = mensaje0.replace(/[^0-9]/g, "");
                    if (mensaje0 == "0") {
                        message.channel.sendMessage("Te la meto por el Trasero");
                    }
		}
                
        //TU VIEJA EN CUATRO//

	recorte = limpio.slice(-6);
		if (recorte.toLowerCase() == "cuatro") {
			message.channel.sendMessage("Tu Vieja en Cuatro");
		}
		if (mensaje.endsWith("4")) {
                    if (mensaje.endsWith("14")) {
			message.channel.sendMessage("");
                    } else {
                        message.channel.sendMessage("Tu Vieja en Cuatro");
                    }
		}
        //TE LA METIO PINOCHO//

	recorte = limpio.slice(-4);
		if (recorte.toLowerCase() == "ocho" | recorte.toLowerCase() == "osho" | recorte.toLowerCase() == "ozho") {
			message.channel.sendMessage("Te la Metio Pinocho");
		}
		if (mensaje.endsWith("8")) {
			message.channel.sendMessage("Te la Metio Pinocho");
		}
});
bot.login('NDAxNDgwMTA1OTYyMTExMDA4.Ds20LQ.o1hFPJ16mdym6bSHej7tryiLTsI');
