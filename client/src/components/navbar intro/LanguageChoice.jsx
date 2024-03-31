import React from 'react'
import { useTranslation } from 'react-i18next';


function LanguageChoice() {
  const { i18n } = useTranslation();
  return (
    <div className=" flex items-center">
    <span className=' underline cursor-pointer'onClick={() => i18n.changeLanguage('en')}>EN</span>-
    <span className=' underline cursor-pointer'onClick={() => i18n.changeLanguage('de')}>DE</span>
    <div className="flex items-center">
    <span className='underline cursor-pointer text-[24px]'>EN</span>-<span className=' underline cursor-pointer text-[24px]'>DE</span>
  </div>  )
}

export default LanguageChoice