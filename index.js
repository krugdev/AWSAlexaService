/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');


const APP_ID = 'amzn1.ask.skill.7a338b1d-d8d1-4bd3-8cc2-ecb29debd1b1'; 
const SKILL_NAME = 'Kruger Home Assistant';
const WELCOME_MESSAGE_DEV_DEVICE = 'Cool, I see that you are developing new skills for me, I am very grateful for your care.'
const WELCOME_MESSAGE_OFFICE = 'Welcome baby. You\'re in the office, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_BATHROOM = 'Welcome baby. You\'re in the bathroom, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_WASHBASIN = 'Welcome baby. You\'re in the washbasin, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_PORTA_SOCIAL_INTERNA = 'Welcome baby. You\'re behind the social door, be careful with the door, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_PORTA_SOCIAL_EXTERNA = 'Welcome baby. You\'re in front of the social door, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_SALA = 'Welcome baby. You\'re in the living room, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_COZINHA = 'Welcome baby. You\'re in the kitchen, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_JARDIM = 'Welcome baby. You\'re in the garden, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_PISCINA = 'Welcome baby. You\'re in the swimming pool area, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_SUITE = 'Welcome baby. You\'re in your bedroom, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_PORTA_SOCIAL = 'Welcome baby. You\'re close the social door, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_ESCADA = 'Welcome baby. You\'re in the stairs, be careful with the steps, right??? Ask me something that I\'ll be grateful to help you. By the way, you are so handsome, what\'s your secret??? Now, what can I do for you???';
const WELCOME_MESSAGE_PORTAO = 'Welcome back baby. I was missing you. Ask me something that I\'ll be grateful to help you.';
const WELCOME_MESSAGE_REPROMPT = 'Come on baby. Ask me something, anything you want. For instructions on what you can say, if you are lost, please say help me.';
const HELP_MESSAGE = 'You can ask me to turn the lights on or off, open or close the windows, doors and courtains, things like that. It depend\'s on where you are. Now, what can I help you with?';
const HELP_REPROMPT = 'You can say exit too. Now, how can I help you baby?';
const EXIT_MESSAGE = 'Goodbye, I can\'t wait to talk to you again, babie, I\'m in love with you, you know that.';

            
//completar com os valores dos outros echo dots. Está em "Settings->History" no app do alexa
const DEV_DEVICE_ID = '';
const ESCRITORIO_DEVICE_ID = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWCXICBCYFUYH2ZJIIORHS6DFTYZ5552WB3YYVEIGJZZAN3FBLKO7E4K2KFTCOJCRPILN4KO2WGNNW3KN5HZV727NZYZPQKS5GJCAZJHOMQW3MRYZC5A7OG4245ELUOGS6Q';
const BANHEIRO_SUITE_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWFPGOYPQUQ2VZCEBF57LVBWUE5C7WKCIAJUQRKUCNM4TSDDD7CCDJ7LAXTBYNOIQVK4A6BEZ3UMQDHJ7TBCFNLVUT5UP7EIMG7NYVQHLYTRPKNQQROK3JHOJBBT6CW4GCA';
const BANHEIRO_SUITE_DEVICE_ID_2 = '';
const BANHEIRO_2_DEVICE_ID = '';
const LAVABO_DEVICE_ID = '';
const SALA_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWJIXTJGVDP22EBMGPLRTL2X2Q7NP4S32EV5R55PCGTQU4ATV5P74JWP2JVTX7XNOWRFOBM2C6NCR3SADZRERBKIU3DQ42VYPIQRQEVFR2ZVHFBSWTQYDLBIGCOTJT2TCSA';
const SALA_DEVICE_ID_2 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWHOBDBPWA2PDPCT4V4V4K544KBLEATHOSA2VESIJ2LBIDLJIJBBZGUU44JCSVZ4E5O7GZEBYXRSU5MBHLXLFKPLF6H7ZEOY4RHYH7G7K44EU3AF7PDPB6IJHI7BP76SK3Q';
const SALA_DEVICE_ID_3 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWMFWM6R3FEXES4FXSPC3VT7Z2YL75DN47RDHDHC6KKEWAOEJBEN67W72L7UTFT44DFEYHDMYOR6BUWWTUAFS7VL2BXVAN2AFYMEHHKGOATEPSNMGJ5VRQDELEYGMG2NC6A';
const SALA_DEVICE_ID_4 = '';
const PORTA_SOCIAL_INTERNA_DEVICE_ID = '';
const PORTA_SOCIAL_EXTERNA_DEVICE_ID = '';
const COZINHA_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWF5ETYN3UWINL6VU2M64DJW2MSORKTKO6GBJ6T5SL3W3FXPY4DTY6GLTO7LRB3ORPEMJGGN2JVJ5PA36AC2S4OXMY4XHUVMYNUTE6VE2IA64AUQAZPEYRX2DJT2QU2UOEA';
const COZINHA_DEVICE_ID_2 = '';
const HALL_ENTRADA_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWE7LSUYRU625VZRV6FS5P4SK2AHGJRVA4LAUARK6T2RZXZWNXLG4HN2L6S5JNEJWRSKSXFQLEFCOT2SCOV5J7BADMZIQ6AUO4ZSSWKXP2IGXGSZSR7SBQCLM73QZIMC2CQ';
const HALL_ENTRADA_ID_2 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWIFYLYSGU45SSDGTAHDEJPP3SO2HMW5LWGM7WSE5M7PQ6YQHAEHWBZFQB5NSR7CCPYALWMO3ZXXVZX4QJ2QM2V6IJRYWPM74RHAKONVN3AHC5G6RPKIQY4O75ECDIM4WAA';
const JARDIM_DEVICE_ID_1 = '';
const JARDIM_DEVICE_ID_2 = '';
const JARDIM_DEVICE_ID_3 = '';
const JARDIM_DEVICE_ID_4 = '';
const PISCINA_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWF2UGKNOQF5VMBVM3QDM6BOSXXMCSIJTXO7726JS7Q67FSMUPAMT3WJRQAZSCBRYY67PB6LXVZ3PAP5RNZHHNKMGNJLQRY5TEH36R4WDWYSMWHP4WPWHLDRA7HJBWQS6GQ';
const PISCINA_DEVICE_ID_2 = '';
const PISCINA_DEVICE_ID_3 = '';
const PISCINA_DEVICE_ID_4 = '';
const SUITE_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWKHRUAZBLDTC2NLNZTABS6FSUOJPGNDHK5PQ6S23UD434PAJBB4VV4YJZ6M4URYVOLNT2Y7YSUWEZNOLJOYXZXMMC3HUSAM6O7ZQZCIXC6VFJIBGZIDHH2KANBWZD66O6A';
const SUITE_DEVICE_ID_2 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWLYKVLQAZVE2YH4MSKEMWDM6BA5QATIX26BLGRHVGAKOS7EC6ZPE7G32ONPTT53FJSYZFAIUG4Z5ZK7EAXGK2NBLQEWVSEINGV4WMZGGJWRCSPNCBTI77AI4IFSWEFI37Q';
const SUITE_DEVICE_ID_3 = '';
const ESCADA_DEVICE_ID_1 = 'amzn1.ask.device.AFPQCHOW553FAZSUOSF43IMNUKWKZHGFSKGBHJXBAONTMNVPDD7QYTG62M37JPRXS673KJ3NI5WFYSR4PIGCEZFLUNIDW2VDUZEBNBT3RTUK6WF44AZLAXT3WASE2CCJVBM7J6LKY7JWQPQVB5ZSYDRS4IRQ';
const ESCADA_DEVICE_ID_2 = '';
const PORTAO_ENTRADA_DEVICE_ID = '';


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var speechOutput = '';
var repromptOutput = '';


const handlers = {
    
    //Intent de inicialização
    'LaunchRequest': function () {
        
        const deviceId = this.event.context.System.device.deviceId;
        
        switch (deviceId) {
            
            case DEV_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_DEV_DEVICE).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
            
            case ESCRITORIO_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_OFFICE).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
            
            case BANHEIRO_SUITE_DEVICE_ID_1 || BANHEIRO_SUITE_DEVICE_ID_2:
                this.response.speak(WELCOME_MESSAGE_BATHROOM).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
 
            case BANHEIRO_2_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_BATHROOM).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;           
            
            case LAVABO_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_WASHBASIN).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;           
            
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3 || SALA_DEVICE_ID_4:
                this.response.speak(WELCOME_MESSAGE_SALA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case PORTA_SOCIAL_INTERNA_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_PORTA_SOCIAL_INTERNA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
            
            case PORTA_SOCIAL_EXTERNA_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_PORTA_SOCIAL_EXTERNA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
        
            case COZINHA_DEVICE_ID_1 | COZINHA_DEVICE_ID_2:
                this.response.speak(WELCOME_MESSAGE_COZINHA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
            break;
            
            case JARDIM_DEVICE_ID_1 || JARDIM_DEVICE_ID_2 || JARDIM_DEVICE_ID_3 || JARDIM_DEVICE_ID_4:
                this.response.speak(WELCOME_MESSAGE_JARDIM).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case PISCINA_DEVICE_ID_1 || PISCINA_DEVICE_ID_2 || PISCINA_DEVICE_ID_3 || PISCINA_DEVICE_ID_4:
                this.response.speak(WELCOME_MESSAGE_PISCINA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case SUITE_DEVICE_ID_1 || SUITE_DEVICE_ID_2 || SUITE_DEVICE_ID_3:
                this.response.speak(WELCOME_MESSAGE_SUITE).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case PORTA_SOCIAL_INTERNA_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_PORTA_SOCIAL).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case PORTA_SOCIAL_EXTERNA_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_PORTA_SOCIAL).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case ESCADA_DEVICE_ID_1 || ESCADA_DEVICE_ID_2:
                this.response.speak(WELCOME_MESSAGE_ESCADA).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case HALL_ENTRADA_ID_1 || HALL_ENTRADA_ID_2:
                this.response.speak(WELCOME_MESSAGE_CORREDOR).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case LAVABO_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_CORREDOR).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
            
            case BANHEIRO_2_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_CORREDOR).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;
         
            case PORTAO_DEVICE_ID:
                this.response.speak(WELCOME_MESSAGE_CORREDOR).listen(WELCOME_MESSAGE_REPROMPT);
                this.emit(':responseReady');
        
            break;         
            
            
            default: 
                //Erro, deviceId não reconhecido
                speechOutput='I didn\'t recognize this equipament, I\'m so sorry, I can\'t trust you';
                repromptOutput = 'If this is a new device, your device ID is: ' + deviceId;
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                    
                    //habilitar para teste com o echo sim
                    //this.response.speak(WELCOME_MESSAGE_SALA).listen(WELCOME_MESSAGE_REPROMPT);
                    //this.emit(':responseReady');
                    
        }
    },



///////////////////////////openTheCourtainIntent////////////////////////////////////    
    'openTheCourtainIntent': function () {
        
        //delegate to Alexa to collect all the required slot values
        var filledSlots = delegateSlotCollection.call(this);
        
        //Obtém os slots
        var whichCourtain=this.event.request.intent.slots.whichCourtain.value;
        var openClose=this.event.request.intent.slots.openClose.value;
        
        //obtem o deviceID que requisitou o intent    
        const deviceId = this.event.context.System.device.deviceId;
        
        switch (deviceId) {
                
////////////////////////cortina do escritório/////////////////////////////////////////                
            case ESCRITORIO_DEVICE_ID:
                //Estamos no escritório, colocar a lógica do escritório aqui
                    
                speechOutput='The office doesn\'t have any automatic courtain, I\'m so sorry, I can\'t help you';
                repromptOutput = 'Is there anything else I can do for you?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;        
                
//////////////////////////////Cortinas da sala////////////////////////////////// 
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3 || SALA_DEVICE_ID_4:
                //Estamos na sala, colocar a lógica da sala aqui
                
                switch (whichCourtain){
                    //Qual cortina?
                    
                    case 'window':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Opening the living room window courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Closing the living room window courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                                
                    break;
                            
                    case 'social door':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('opening the social door courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('closing the social door courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                            
                            //define o que alexa dirá
                            this.response.speak('I didn\'t understand what you said, I\'m so sorry baby, could you ask me again?').listen('Are you there?');
                            this.emit(':responseReady');
                        }
                    
                    break;
                        
                    case 'both':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da sala e da porta
                        
                            //define o que alexa dirá
                            this.response.speak('opening both courtains baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina do escritório e da porta
                            
                            //define o que alexa dirá
                            this.response.speak('closing both courtains baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro em "openClose"
                        
                            //define o que alexa dirá
                            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                            repromptOutput = 'are you there?';
                            this.response.speak(speechOutput).listen(repromptOutput);
                            this.emit(':responseReady');
                        }
                
                    break;  
                    
                    default: 
                        //Erro, witchCourtain
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
            
            break;        
            
////////////////////////////////Cortinas do Banheiro////////////////////////////////////////////            
            case BANHEIRO_SUITE_DEVICE_ID_1 || BANHEIRO_SUITE_DEVICE_ID_2:
                    //Estamos no banheiro da suite, colocar a lógica aqui
                    
                    speechOutput='the bedroom\'s bathroom doesn\'t have any courtain baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                    repromptOutput = 'Are you there?';
                    this.response.speak(speechOutput).listen(repromptOutput);
                    this.emit(':responseReady');
                
            break;        
                            
                    
///////////////////////////Cortina da cozinha//////////////////////////////////////                    
            case COZINHA_DEVICE_ID_1 || COZINHA_DEVICE_ID_2:
                   //Estamos na cozinha, colocar lógica aqui
                    
                    speechOutput='the kitchen doesn\'t have any courtain baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                    repromptOutput = 'Are you there?';
                    this.response.speak(speechOutput).listen(repromptOutput);
                    this.emit(':responseReady');
                
            break;        
            
            
            case JARDIM_DEVICE_ID_1 || JARDIM_DEVICE_ID_2 || JARDIM_DEVICE_ID_3 || JARDIM_DEVICE_ID_3:
                //Estamos no jardim, colocar lógica aqui
                    
                speechOutput='the garden doesn\'t have any courtain baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;       
            
            
            case PISCINA_DEVICE_ID_1 || PISCINA_DEVICE_ID_2 || PISCINA_DEVICE_ID_3 || PISCINA_DEVICE_ID_4:
                //Estamos na ÁREA DA PISCINA, colocar lógica aqui
                    
                speechOutput='the swimming pool area doesn\'t have any courtain, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;        
            
            case SUITE_DEVICE_ID_1 || SUITE_DEVICE_ID_2 || SUITE_DEVICE_ID_3:
                //fazer a lógica
                    if (openClose==='open') {
                        //Lógica para abrir a porta social
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the bedroom courtain baby.').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a cortina da sala
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the bedroom courtain baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Lógica para erro
                        
                        //define o que alexa dirá
                        this.response.speak('Sorry baby, I didn\'t understand what you said, I\'m so sorry').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }
            
            break;
            
            
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3 || SALA_DEVICE_ID_4:
                //Estamos na sala, colocar a lógica da sala aqui
                
                switch (whichCourtain){
                    //Qual cortina?
                    
                    case 'window':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Opening the living room window courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Closing the living room window courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                                
                    break;
                            
                    case 'social door':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('opening the social door courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('closing the social door courtain baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                            
                            //define o que alexa dirá
                            this.response.speak('I didn\'t understand what you said, I\'m so sorry baby, could you ask me again?').listen('Are you there?');
                            this.emit(':responseReady');
                        }
                    
                    break;
                        
                    case 'both':
                        if (openClose==='open') {
                            //Lógica para abrir a cortina da sala e da porta
                        
                            //define o que alexa dirá
                            this.response.speak('opening both courtains baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina do escritório e da porta
                            
                            //define o que alexa dirá
                            this.response.speak('closing both courtains baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro em "openClose"
                        
                            //define o que alexa dirá
                            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                            repromptOutput = 'are you there?';
                            this.response.speak(speechOutput).listen(repromptOutput);
                            this.emit(':responseReady');
                        }
                
                    break;  
                    
                    default: 
                        //Erro, witchCourtain
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
                
            break;
            
            case CORREDOR_DEVICE_ID_1 || CORREDOR_DEVICE_ID_2:
                //Estamos no corredor, colocar lógica aqui
                    
                speechOutput='the hall doesn\'t have any automatic courtain, I\'m so sorry, I can\'t help you';
                repromptOutput = 'Is there anything else I can do for you?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');                
            
            break;
            
            //////////////////continuar com os demais Echo Dots que forem instalados
            
        default:
            //Erro, witchCourtain
            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
            repromptOutput = 'are you there?';
            this.response.speak(speechOutput).listen(repromptOutput);
            this.emit(':responseReady');
        }
            
        
    },    
    
    
    
    
    'openTheDoorIntent': function () {
        
        //delegate to Alexa to collect all the required slot values
        var filledSlots = delegateSlotCollection.call(this);
        
        //Obtém os slots
        var whichDoor=this.event.request.intent.slots.whichDoor.value;
        var openClose=this.event.request.intent.slots.openClose.value;
        
        //obtem o deviceID que requisitou o intent    
        const deviceId = this.event.context.System.device.deviceId;
        
        switch (deviceId) {
                
////////////////////////porta do escritório/////////////////////////////////////////                
            case ESCRITORIO_DEVICE_ID:
                //Estamos no escritório, colocar a lógica do escritório aqui
                    
                speechOutput='the office doesn\'t have any automatic door, I\'m so sorry, I can\'t help you. Are there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;        
                
//////////////////////////////Cortinas da sala////////////////////////////////// 
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3:
                //Estamos na sala, colocar a lógica da sala aqui
                
                switch (whichDoor){
                    //Qual porta?
                    
                    case 'social':
                        if (openClose==='open') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Opening the social door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Closing the social door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                                
                    break;
                            
                    case 'kitchen':
                        if (openClose==='open') {
                            //Lógica para abrir a porta da cozinha
                        
                            //define o que alexa dirá
                            this.response.speak('opening the kitchen\'s door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('closing the kitchen\'s door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                            
                            //define o que alexa dirá
                            this.response.speak('I didn\'t understand what you said, I\'m so sorry baby, could you ask me again?').listen('Are you there?');
                            this.emit(':responseReady');
                        }
                    
                    break;
                        
                    
                    default: 
                        //Erro, witchDoor
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
            
            break;        
            
////////////////////////////////Porta do Banheiro////////////////////////////////////////////            
            case BANHEIRO_SUITE_DEVICE_ID:
                    //Estamos no banheiro da suite, colocar a lógica aqui
                    
                    speechOutput='the bedroom\'s bathroom doesn\'t have any automatic door baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                    repromptOutput = 'Are you there?';
                    this.response.speak(speechOutput).listen(repromptOutput);
                    this.emit(':responseReady');
                
            break;        
                            
                    
///////////////////////////Porta da cozinha//////////////////////////////////////                    
            case COZINHA_DEVICE_ID:
                    //Estamos na cozinha, colocar lógica aqui
                    
                    speechOutput = 'the kitchen doesn\'t have any automatic door baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                    repromptOutput = 'Are you there?';
                    this.response.speak(speechOutput).listen(repromptOutput);
                    this.emit(':responseReady');
                
            break;        
            
            
            case JARDIM_1_DEVICE_ID || JARDIM_2_DEVICE_ID:
                //Estamos no jardim, colocar lógica aqui
                    
                switch (whichDoor){
                    //Qual porta?
                    
                    case 'social':
                        if (openClose==='open') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Opening the social door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a porta da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Closing the social door baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                    break;    
                        
                    case 'gate':                        
                        if (openClose==='open') {
                            //Lógica para abrir o portão da casa
                        
                            //define o que alexa dirá
                            this.response.speak('Opening the gate baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(openClose==='close'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Closing the gate baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                        
                                
                    break;
                        
                    
                    default: 
                        //Erro, witchDoor
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
                
                
                break;       
            
            
            case PISCINA_DEVICE_1_ID:
                //Estamos area da piscina, colocar lógica aqui
                    
                speechOutput='the swimming pool area doesn\'t have any automatic door, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;     
            
            
            case SUITE_1_DEVICE_ID || SUITE_2_DEVICE_ID:
                //Estamos na suite, colocar lógica aqui
                    
                speechOutput='the bedroom doesn\'t have any automatic door, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
            
            break;
            
            
            case CORREDOR_DEVICE_ID:
                //Estamos no corredor, colocar lógica aqui
                    
                speechOutput='the hall doesn\'t have any automatic door, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');            
            
            break;
            
            //////////////////continuar com os demais Echo Dots que forem instalados
            
        default:
            //Erro, witchDeviceID
            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
            repromptOutput = 'are you there?';
            this.response.speak(speechOutput).listen(repromptOutput);
            this.emit(':responseReady');

        }
            
        
    },    
    
    
    
   'openTheWindowIntent': function () {
        
        //delegate to Alexa to collect all the required slot values
        var filledSlots = delegateSlotCollection.call(this);
        
        //Obtém os slots
        var openClose = this.event.request.intent.slots.openClose.value;
        
        //obtem o deviceID que requisitou o intent    
        const deviceId = this.event.context.System.device.deviceId;
        
        switch (deviceId) {
                
////////////////////////janela do escritório/////////////////////////////////////////                
            case ESCRITORIO_DEVICE_ID:
                //Estamos no escritório, colocar a lógica do escritório aqui
                    
                speechOutput='the office doesn\'t have any automatic window, I\'m so sorry, I can\'t help you. Are there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');
                
            break;        
                
//////////////////////////////janela da sala////////////////////////////////// 
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3:
                //Estamos na sala, colocar a lógica da sala aqui
                    
                    if (openClose==='open') {
                        //Lógica para abrir a janela da Sala
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the living room window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a cortina da sala
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the living room window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Erro, openClose
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
            
            break;        
            
////////////////////////////////janela do Banheiro////////////////////////////////////////////            
            case BANHEIRO_SUITE_DEVICE_ID:
                    //Estamos no banheiro da suite, colocar a lógica aqui
                    
                    speechOutput='the bedroom\'s bathroom doesn\'t have any automatic window baby, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                    repromptOutput = 'Are you there?';
                    this.response.speak(speechOutput).listen(repromptOutput);
                    this.emit(':responseReady');
                
            break;        
                            
                    
///////////////////////////Janela da cozinha//////////////////////////////////////                    
            case COZINHA_DEVICE_ID:
                   //Estamos na cozinha, colocar lógica aqui
                    
                    if (openClose==='open') {
                        //Lógica para abrir a janela da Cozinha
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the kitchen window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a cortina da cozinha
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the kitchen window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Erro, openClose
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
                
            break;        
            
            
            case JARDIM_1_DEVICE_ID || JARDIM_2_DEVICE_ID:
                //Estamos no jardim, colocar lógica aqui
                    
                    if (openClose==='open') {
                        //Lógica para abrir a janela da Sala
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the living room window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a cortina da sala
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the living room window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Erro, openClose
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
                
            break;       
            
            
            case PISCINA_DEVICE_1_ID:
                   //Estamos na area da piscina, colocar lógica aqui
                    
                    if (openClose==='open') {
                        //Lógica para abrir a janela da Cozinha
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the kitchen\'s window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a janela da cozinha
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the kitchen\'s window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Erro, openClose
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
                
            break;     
            
            
            case SUITE_1_DEVICE_ID || SUITE_2_DEVICE_ID:
                //Estamos na suite, colocar lógica aqui
                    
                    if (openClose==='open') {
                        //Lógica para abrir a janela da Sala
                        
                        //define o que alexa dirá
                        this.response.speak('Opening the bedroom\'s window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else if(openClose==='close'){
                        //Lógica para fechar a cortina da sala
                        
                        //define o que alexa dirá
                        this.response.speak('Closing the bedroom\'s window baby').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }else{
                        //Erro, openClose
                        speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
                        repromptOutput = 'are you there?';
                        this.response.speak(speechOutput).listen(repromptOutput);
                        this.emit(':responseReady');
                    }
            
            break;
            
            
            case CORREDOR_DEVICE_ID:
                //Estamos na suite, colocar lógica aqui
                    
                speechOutput='the hall doesn\'t have any automatic window, I\'m so sorry, I can\'t help you. Is there anything else I can do for you?';
                repromptOutput = 'Are you there?';
                this.response.speak(speechOutput).listen(repromptOutput);
                this.emit(':responseReady');            
            
            break;
            
            //////////////////continuar com os demais Echo Dots que forem instalados
            
    default:
            //Erro, witchDoor
            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
            repromptOutput = 'are you there?';
            this.response.speak(speechOutput).listen(repromptOutput);
            this.emit(':responseReady');
            }
            
        
    },         
    
    
    
    'turnOnTheLightIntent': function () {
        
        //delegate to Alexa to collect all the required slot values
        var filledSlots = delegateSlotCollection.call(this);
        
        //Obtém os slots
        var whichLight = this.event.request.intent.slots.whichLight.value;
        var onOff = this.event.request.intent.slots.onOff.value;
        
        //obtem o deviceID que requisitou o intent    
        const deviceId = this.event.context.System.device.deviceId;
        
        switch (deviceId) {
                
////////////////////////cortina do escritório/////////////////////////////////////////                
            case ESCRITORIO_DEVICE_ID:
                //Estamos no escritório, colocar a lógica do escritório aqui
                    
                if (onOff==='on') {
                    //Lógica para abrir a porta da Sala
                        
                    //define o que alexa dirá
                    this.response.speak('Turning the main light on baby').listen('Is there anything else I can do for you?');
                    this.emit(':responseReady');
                }else if(onOff==='off'){
                    //Lógica para fechar a cortina da sala
                        
                    //define o que alexa dirá
                    this.response.speak('Turning the main light off baby').listen('Is there anything else I can do for you?');
                    this.emit(':responseReady');
                }else{
                    //Lógica para erro
                        
                    //define o que alexa dirá
                    this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                    this.emit(':responseReady');
                }
                
            break;        
                
//////////////////////////////Cortinas da sala////////////////////////////////// 
            case SALA_DEVICE_ID_1 || SALA_DEVICE_ID_2 || SALA_DEVICE_ID_3:
                //Estamos na sala, colocar a lógica da sala aqui
                
                switch (whichLight){
                    //Qual luz?
                    
                    case 'main':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the office light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the office light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                                
                    break;
                            
                    case 'spots':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the spots light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the spot light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                    break;
                    
                    case 'RGB strip':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the RGB strip light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the RGB strip light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                    break;
                    
                        default:
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');  }                          
            break;        
            
////////////////////////////////Cortinas do Banheiro////////////////////////////////////////////            
            case BANHEIRO_SUITE_DEVICE_ID:
                        if (onOff==='on') {
                            //Lógica para ligar a luz do banheiro da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the bathroom light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the bathroom light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                
            break;        
                            
                    
///////////////////////////Cortina da cozinha//////////////////////////////////////                    
            case COZINHA_DEVICE_ID:
                        if (onOff==='on') {
                            //Lógica para ligar a luz da cozinha
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the kitchen light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the kitchen light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                
            break;        
            
            
            case JARDIM_1_DEVICE_ID || JARDIM_2_DEVICE_ID:
                //Estamos no jardim, colocar lógica aqui
                    
                switch (whichLight){
                    //Qual luz?
                    
                    case 'RGB':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the garden RGB light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the garden RGB light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                        
                    break;
                    
                        case 'main':
                            if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main door light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main door light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }    
                                
                    break;
                    
                    default:
                        //Lógica para erro
                        
                        //define o que alexa dirá
                        this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }
                    
            break;       
            
            case PISCINA_DEVICE_1_ID:
                //Estamos na cozinha, colocar lógica aqui
                    
                switch (whichLight){
                    //Qual luz?
                    
                    case 'RGB':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the swimming pool RGB light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the swimming pool RGB off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                        
                    break;
                    
                        case 'main':
                            if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main swimming pool area light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main swimming pool area light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }    
                                
                    break;
                    
                    default:
                        //Lógica para erro
                        
                        //define o que alexa dirá
                        this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }
                    
                
            break;     
            
            
            case SUITE_I_DEVICE_ID || SUITE_II_DEVICE_ID:
                //Estamos na cozinha, colocar lógica aqui
                    
                switch (whichLight){
                    //Qual luz?
                    
                    case 'abajour':
                        if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the abajour light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the abajour off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
                        
                    break;
                    
                        case 'main':
                            if (onOff==='on') {
                            //Lógica para abrir a porta da Sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main bedroom light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the main bedroom light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }    
                                
                    break;
                    
                    default:
                        //Lógica para erro
                        
                        //define o que alexa dirá
                        this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                        this.emit(':responseReady');
                    }
                    
                
            break;     
            
            
            case CORREDOR_DEVICE_ID:
                        if (onOff==='on') {
                            //Lógica para ligar a luz da cozinha
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the hall light on baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else if(onOff==='off'){
                            //Lógica para fechar a cortina da sala
                        
                            //define o que alexa dirá
                            this.response.speak('Turning the hall light off baby').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }else{
                            //Lógica para erro
                        
                            //define o que alexa dirá
                            this.response.speak('Sorry, I didn\'t understand what you said baby, I\'m so sorry. Could you ask me again?').listen('Is there anything else I can do for you?');
                            this.emit(':responseReady');
                        }
            
            break;
            
            //////////////////continuar com os demais Echo Dots que forem instalados
            
        default:
             //Erro, witchDoor
            speechOutput='I didn\'t understand what you said, I\'m so sorry baby. Could you ask me again?';
            repromptOutput = 'are you there?';
            this.response.speak(speechOutput).listen(repromptOutput);
            this.emit(':responseReady');
            }
            
    },
    


    'AMAZON.HelpIntent': function () {
        speechOutput=HELP_MESSAGE;
        repromptOutput=HELP_REPROMPT;
        this.response.speak(speechOutput).listen(repromptOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.RepeatIntent': function () {
        //this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    
    'AMAZON.StopIntent': function () {
        speechOutput=EXIT_MESSAGE;
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.CancelIntent': function () {
        speechOutput=EXIT_MESSAGE;
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'SessionEndedRequest': function () {
        console.log(`Session ended: ${this.event.request.reason}`);
    },
    
    'Unhandled': function () {
        speechOutput = 'Sorry, I didn\'t understand what you said, could you ask me again?';
        repromptOutput = HELP_MESSAGE;
        this.response.speak(speechOutput).listen(repromptOutput);
        this.emit(':responseReady');
    },
};


function delegateSlotCollection(){
    if (this.event.request.dialogState === "STARTED") {
      var updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      this.emit(":delegate", updatedIntent);
    } else if (this.event.request.dialogState !== "COMPLETED") {
      // return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate");
    } else {
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function isSlotValid(request, slotName){
        
        var slot = request.intent.slots[slotName];
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}[]