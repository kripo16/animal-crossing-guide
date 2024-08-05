document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        IDMBtn: document.getElementById('IDMBtn'),
        downloadBtn: document.getElementById('downloadBtn'),
        toolsBtn: document.getElementById('toolsBtn'),
        setupBtn: document.getElementById('setupBtn'),
        gameBtn: document.getElementById('gameBtn'),
        overlay: document.getElementById('overlay'),
        IDMPopup: document.getElementById('IDMPopup'),
        popup: document.getElementById('popup'),
        gamePopup: document.getElementById('gamePopup'),
        toolsOverlay: document.getElementById('toolsOverlay'),
        toolsPopup: document.getElementById('toolsPopup'),
        setupPopup: document.getElementById('setupPopup'),
        IDMCloseBtn: document.getElementById('IDMCloseBtn'),
        closeBtn: document.getElementById('closeBtn'),
        toolsCloseBtn: document.getElementById('toolsCloseBtn'),
        setupCloseBtn: document.getElementById('setupCloseBtn'),
        gameCloseBtn: document.getElementById('gameCloseBtn'),
        IDMtakeMeThereBtn: document.getElementById('IDMtakeMeThereBtn'),
        takeMeThereBtn: document.getElementById('takeMeThereBtn'),
        gametakeMeThereBtn: document.getElementById('gametakeMeThereBtn'),
        downloadFirmwareBtn: document.getElementById('downloadFirmwareBtn'),
        downloadProdKeysBtn: document.getElementById('downloadProdKeysBtn'),
        tutorialVideo: document.getElementById('tutorialVideo'),
        setupVideo: document.getElementById('setupVideo'),
        IDMVideo: document.getElementById('IDMVideo'),
        toolsFirmwareVideo: document.getElementById('toolsFirmwareVideo'),
        toolsProdKeysVideo: document.getElementById('toolsProdKeysVideo')
    };

    const buttons = [
        elements.downloadBtn,
        elements.toolsBtn,
        elements.setupBtn,
        elements.IDMBtn,
        elements.gameBtn
    ];

    buttons.forEach((button, index) => {
        if (index > 0) button.classList.add('hidden');
    });

    const showPopup = (popup, nextButton, video) => {
        elements.overlay.style.display = 'block';
        popup.style.display = 'block';
        if (video) video.style.display = 'block';
        if (nextButton) nextButton.classList.remove('hidden');
    };

    const hidePopup = (popup, video) => {
        elements.overlay.style.display = 'none';
        popup.style.display = 'none';
        if (video) video.style.display = 'none';
    };

    const setActiveButton = (button) => {
        button.classList.add('active');
    };

    elements.downloadBtn.addEventListener('click', () => {
        showPopup(elements.popup, elements.toolsBtn, elements.tutorialVideo);
        setActiveButton(elements.downloadBtn);
    });

    elements.toolsBtn.addEventListener('click', () => {
        elements.toolsOverlay.style.display = 'block';
        showPopup(elements.toolsPopup, elements.setupBtn);
        setActiveButton(elements.toolsBtn);
    });

    elements.setupBtn.addEventListener('click', () => {
        showPopup(elements.setupPopup, elements.IDMBtn, elements.setupVideo);
        setActiveButton(elements.setupBtn);
    });

    elements.IDMBtn.addEventListener('click', () => {
        showPopup(elements.IDMPopup, elements.gameBtn, elements.IDMVideo);
        setActiveButton(elements.IDMBtn);
    });

    elements.gameBtn.addEventListener('click', () => {
        showPopup(elements.gamePopup);
        setActiveButton(elements.gameBtn);
    });

    elements.closeBtn.addEventListener('click', () => hidePopup(elements.popup, elements.tutorialVideo));
    elements.IDMCloseBtn.addEventListener('click', () => hidePopup(elements.IDMPopup, elements.IDMVideo));
    elements.setupCloseBtn.addEventListener('click', () => hidePopup(elements.setupPopup, elements.setupVideo));
    elements.gameCloseBtn.addEventListener('click', () => hidePopup(elements.gamePopup));

    elements.toolsCloseBtn.addEventListener('click', () => {
        hidePopup(elements.toolsPopup);
        elements.toolsOverlay.style.display = 'none';
    });

    elements.overlay.addEventListener('click', () => {
        hidePopup(elements.popup, elements.tutorialVideo);
        hidePopup(elements.setupPopup, elements.setupVideo);
        hidePopup(elements.IDMPopup, elements.IDMVideo);
        hidePopup(elements.gamePopup);
        hidePopup(elements.toolsPopup);
        elements.toolsOverlay.style.display = 'none';
    });

    elements.toolsOverlay.addEventListener('click', () => {
        hidePopup(elements.toolsPopup);
        elements.toolsOverlay.style.display = 'none';
    });

    elements.IDMtakeMeThereBtn.addEventListener('click', () => window.open('https://www.internetdownloadmanager.com/', '_blank'));
    elements.takeMeThereBtn.addEventListener('click', () => window.open('https://ryujinx.org/download', '_blank'));
    elements.gametakeMeThereBtn.addEventListener('click', () => window.open('https://www.romspedia.com/roms/nintendo-switch/animal-crossing-new-horizons', '_blank'));
    elements.downloadFirmwareBtn.addEventListener('click', () => window.open('https://github.com/THZoria/NX_Firmware/releases', '_blank'));
    elements.downloadProdKeysBtn.addEventListener('click', () => window.open('https://prodkeys.net/ryujinx-prod-keys-7/', '_blank'));

    // Function to load a YouTube video into the tools popup
    const loadYouTubeVideo = (videoId) => {
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '470';
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
    
        const videoContainer = elements.toolsPopup.querySelector('#toolsVideoContainer');
        // Clear previous video content
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    
        // Show the popup
        showPopup(elements.toolsPopup, elements.setupBtn);
    };

    // Event listeners for the tools buttons
    elements.downloadFirmwareBtn.addEventListener('click', () => loadYouTubeVideo('5AIVCArt3mU'));
    elements.downloadProdKeysBtn.addEventListener('click', () => loadYouTubeVideo('PsNEoVjVZ30'));
});
