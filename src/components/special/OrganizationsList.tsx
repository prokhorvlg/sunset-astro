import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'


import { Organizations } from "@/data/organizations"

const OrganizationsList = () => {
    return (
        <div className="organizations-list">
            {Organizations.map((org) => {
                return (
                    <div className={`org-item ${org.affiliation}`}>
                        <div className="top-bar">
                            <p className="type">{org.type}</p>
                            <p className="affiliation">{org.affiliation}</p>
                        </div>
                        <h3 className={`name`}>{org.name}</h3>
                        <p className="description"><ReactMarkdown>{org.description}</ReactMarkdown></p>
                    </div>
                )
            })}
        </div>
    )
}

export default OrganizationsList