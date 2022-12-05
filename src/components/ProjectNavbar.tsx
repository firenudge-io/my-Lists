import { Navbar } from "flowbite-react"
import DarkModeButton from "../hooks/DarkModeButton"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProjectNavbar = () => {

    const [active, setActive] = useState("Events")

    function ButtonPress(arg: string) {
        setActive(arg)
    }

    return (
        <div className="sticky top-0 shadow-sm bg-gray-50 dark:bg-gray-800 z-50">
            <Navbar fluid={true} rounded={true} className="container bg-gray-50 dark:bg-gray-800 mx-auto">
                <Link
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                    onClick={() =>
                        ButtonPress("Events")}
                    to="/my-Lists">
                    <Navbar.Brand>
                        <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/my/Lists.svg" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">
                            my Lists
                        </span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <div className="self-center">
                        <DarkModeButton />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}