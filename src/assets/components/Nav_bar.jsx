import {useState} from 'react'

function Nav_bar () {
console.log("double check")

    return (
        <>
            <div id="nav_bar">
                <div id="left_nav">
                    <img src="https://imgs.search.brave.com/6o1uHlWZtKkStyHClxQqDzeNIhL3lvmf2iKi_XF70EY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcG9wdWxhci1z/b2NpYWwtbWVkaWEt/ZmxhdC80OC9Qb3B1/bGFyX1NvY2lhbF9N/ZWRpYS0yMi0xMjgu/cG5n" id="linked_icon"/>
                    <input type="search" placeholder="Search" id="search"/>
                </div>
                <div id="blank_nav"></div>
                <div id="right_nav">
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/MCta12yzE_aACcybTW39MzVN3eHDM769aWX63p7Torg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODhhNjY3ZmQwNmY2/NzE5NjkyYTJkMTku/cG5n" className='nav_pic'/>
                        <p className="nav_words">Home</p>
                    </div>
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/zzCFbujNzDdMzXNSRCIgf9Qs6Zwyg199QnO_n2NGp3A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY0LzU5LzQx/LzM2MF9GXzE2NDU5/NDEzN19adGsxeEht/cWltQzBWdHJWS1NK/bDdpOVlJbGphOU40/WS5qcGc" className='nav_pic'/>
                        <p className="nav_words">My Network</p>
                    </div>
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/mllW-aFLzDWBSOZq2Jr30Ab8yWAGLE84ndOztUWq5gA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMDkxOTk4LTIw/MC5wbmc" className='nav_pic'/>
                        <p className="nav_words">Jobs</p>
                    </div>
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/i98cVKebwdwH2S7bnmOtNKgC5eIehX1w1b7DR3sAVyU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMDAyOTI3LTIw/MC5wbmc" className='nav_pic'/>
                        <p className="nav_words">Messaging</p>
                    </div>
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/OwBLGuk58Ua2T04QCLn63WJpVI5NLmblxfstW38NHsQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW9uaWNvbnMv/NTEyL2ljb24taW9z/Ny1iZWxsLTUxMi5w/bmc" className='nav_pic'/>
                        <p className="nav_words">Notifications</p>
                    </div>
                    <div className='nav_icon'>
                        <img src="https://imgs.search.brave.com/CqynVvfm9A8kgOwZf_vdnrOeTmPYHx1_8MGMRyVqdao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTEyOC10/aHVtYi9uaW5lLXNx/dWFyZS0yOTcyODI5/LTI0NzA4MDQucG5n" className='nav_pic'/>
                        <p className="nav_words">For Business</p>
                    </div>
                    <div className='nav_icon' id="nav_link">
                        <a href="https://giphy.com/gifs/slice-housewives-rhoa-kandi-burruss-uh7FwmNWduCtwFFxTo/fullscreen" id="nav_link_actual">Reactivate Premium: 50% Off</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav_bar;