import React from 'react'

interface msgProps {
    message : string,
};

export const Header = ({ message} : msgProps) => {
    return (
        <header className="mx=auto mt-2">
            <h1 className="text-2x1 mt-8 md:text-4xl font-bold font-redhat text-rose-500 font-bold text-center mx-auto">
                {message ? message : "WE'RE LAYNCHING SOON"}
            </h1>
        </header>
    )
}