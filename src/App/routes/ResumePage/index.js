import React, { useState } from 'react';
import './style.css'

const CV_EN = 'https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/business-card%2Fcv-en.pdf?alt=media&token=6176443f-4598-418e-bf26-bcaa02137404';
const CV_DE = 'https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/business-card%2Fcv-de.pdf?alt=media&token=7fb95a20-4aa5-4ec7-a1eb-0524a106c2b2';
const CV_GEN_DE = 'https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/business-card%2Fresume-de-nonitjob.pdf?alt=media&token=70912e0c-88c9-48f6-90a7-522595f19618';


const ResumePage = props => {
  const [resumeUrl, setResumeUrl] = useState(CV_EN);

  return (
    <div className='ResumePage'>
      <select className={'cvSelector'}
        onChange={e => setResumeUrl(e.target.value)}
        value={resumeUrl}>
        <option value={CV_EN}>Technical CV (English)</option>
        <option value={CV_DE}>Technical CV (German)</option>
        <option value={CV_GEN_DE}>General Resume (German)</option>
      </select>

      <iframe width={'100%'} scrolling="no" height={600} src={resumeUrl}/>
    </div>
  )
}

export default ResumePage
