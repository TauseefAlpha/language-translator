import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
    { value: '', text: "Options" },
    { value: 'ar', text: "Arabic" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'ko', text: "Korean" }
]

function WelomeComponent() {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en')

    const handlechange = (e) => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value)
    }
    return (
        <>
            <div className="conatinner">
                <div className="row justify-content-npcenter">
                    <div className="col-md-8">
                        <h1> {t('welcome.1')}</h1>
                        <h1> {t('you.1')}</h1>
                    </div>
                    <div className="col-md-4">
                        <select value={language} onChange={handlechange} >
                            {languages.map((itm) => {
                                return (
                                    <option key={itm.value} value={itm.value}>{itm.text}</option>);
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelomeComponent