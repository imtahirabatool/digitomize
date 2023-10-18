import React from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import '../components/css/socials.css';
import Stack from "@mui/material/Stack";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const ShareModel = ({close_model, copyToClipboard, contestLink }) => {
    //const [ showModel, setShowModel ] = useState('');

    const handleContainerClick = (e) => {
      e.stopPropagation();
    };

    useEffect(() =>{
        document.body.style.overflowY = "hidden";
        return () =>{
            document.body.style.overflowY = "scroll";
        }
    }, [])


    const handleWhatsAppClick = () =>{
        const Message = `Check out this link: ${contestLink}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(Message)}`;
        window.open(whatsappLink);
    }

    const handleTelegramClick = () => {
        const Message = `Check out this link: ${contestLink}`;
        const telegramLink = `https://telegram.me/share/url?url=${encodeURIComponent(contestLink)}`;
        try {
          window.open(telegramLink);
        } catch (e) {
          console.log(e);
        }
      };

    const handleLinkedinClick = () => {
        const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(contestLink)}`;
        try {
          window.open(linkedinLink);
        }
        catch (e) {
          console.log(e);
        }
      };

      const handleTwitterClick = () => {
        const linkedinLink = `https://twitter.com/share?url=${encodeURIComponent(contestLink)}`;
        try {
          window.open(linkedinLink);
        }
        catch (e) {
          console.log(e);
        }
      };

    const copy_text =() => {
        navigator.clipboard.writeText(contestLink);
        setInterval(()=>{
          document.querySelector('.text-copied').classList.add('hidden');
        }, 1200);
        document.querySelector('.text-copied').classList.remove('hidden');
    }  

    return ReactDOM.createPortal(
        <>
        <div className="model_container" onClick={close_model}>
            <div className="model_wrapper gradiant-model-border" onClick={handleContainerClick}>
                <div>
                    <p>Share this link via</p>
                </div>
                <div>
                    <Stack 
                        justifyContent="center"
                        alignItems="center"
                        spacing= {3}
                        direction="row"
                    />
                    <button style={{padding:"10px"}} onClick={handleWhatsAppClick}><WhatsAppIcon sx={{transform: "scale(1.5)"}}/></button>
                    <button style={{padding:"10px"}} onClick={handleTelegramClick}><TelegramIcon sx={{transform: "scale(1.5)"}}/></button>
                    <button style={{padding:"10px"}} onClick={handleLinkedinClick}><LinkedInIcon sx={{transform: "scale(1.5)"}}/></button>
                    <button style={{padding:"10px"}} onClick={handleTwitterClick}><TwitterIcon sx={{transform: "scale(1.5)"}}/></button>
                </div>
                <div>
                    or copy link
                </div>
                
            <div className="input_url">
                <span className="text-copied hidden">copied!</span>
                <input type="text" className="input_value" onClick={copy_text} value={contestLink}></input>
            </div>
                
            </div>
        </div>
        </>,
            document.getElementById('portal_div')
    );
}

export default ShareModel;