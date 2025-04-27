import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <section id='footer'>
            <p>© 2025 Markedia (Moka) Hinds |</p>
            <a
            href='https://github.com/markediahinds'
            target='_blank'
            rel='noopener noreferrer'
            id='github'
            >
            GitHub |</a>
            <a 
            href='https://www.linkedin.com/in/loveyoubeingyou/'
            target='_blank'
            rel='noopener noreferrer'
            id='linkedin'
            >
            LinkedIn
            </a>
        </section>
    )
}

export default Footer 

// rel="noopener noreferrer":
// noopener:
// This tells the browser not to allow the new page to have access to the window.opener object, which is the JavaScript context of the page that opened the new tab.
// Why it's important:
// This is a security measure to prevent malicious websites from taking control of the page that opened them (the opener). Without noopener, the new page could potentially manipulate or affect the page that opened it, leading to potential vulnerabilities (e.g., phishing attacks or redirecting users to unsafe websites).

// noreferrer:
// This ensures that no referrer information (the URL of the page that made the request) is sent to the target page.
// Why it's important:
// This can be used to protect privacy by ensuring the destination page doesn't know where the link came from. It prevents websites from seeing your previous page's URL or any other sensitive info in the request headers.