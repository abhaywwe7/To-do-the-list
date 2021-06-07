import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        top: "10vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Copyright &copy: Mytodothelist.com
                </p>
        </footer>
    )
}
