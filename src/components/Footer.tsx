const Footer = () => {
    return (
        <footer className="bg-blue-300 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Guardian Angel</h2>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <a
                            href="mailto:info@example.com"
                            className="flex items-center hover:text-gray-300 transition-colors duration-300"
                        >
                            <span className="mr-2">✉️</span>
                            <span>info@example.com</span>
                        </a>
                        <a href="tel:+1234567890" className="flex items-center hover:text-gray-300 transition-colors duration-300">
                            <span className="mr-2">📞</span>
                            <span>+1 (234) 567-890</span>
                        </a>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
