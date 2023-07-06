import React, {forwardRef, useEffect, useRef, useState } from 'react'
import styles from './Body.module.css'
import { Editor } from '../Editor/Editor';
import ReactToPrint from 'react-to-print';
import  Resume  from '../Resume/Resume';
import { Download } from 'react-feather';

export const Body = () => {

  const colors = ["#40b5f8", "#f0b55d", "#ee6e6e", "#438f43", "#773e77"]; 

  const sections = {
    info: "Basic Info",
    edu: "Education",
    skl:"Skill",
    prj: "Project",
    wrkexp: "Work Experience",
    achieve: "Achievements",
    // oth: "Others"
  };

  const resumeRef = useRef();
  const[activeColor,setActiveColor] = useState(colors[0]);

  const [resumeInfo,setResumeInfo] = useState({
    [sections.info]:{
      id:sections.info,
      sectionTitle:sections.info,
      detail:{},
    },

    [sections.edu]:{
      id:sections.edu,
      sectionTitle:sections.edu,
      details:[],
    },

    [sections.skl]:{
      id:sections.skl,
      sectionTitle:sections.skl,
      details:[],
    },

    [sections.prj]:{
      id:sections.prj,
      sectionTitle:sections.prj,
      details:[],
    },

    [sections.wrkexp]:{
      id:sections.wrkexp,
      sectionTitle:sections.wrkexp,
      details:[],
    },

    [sections.achieve]:{
      id:sections.achieve,
      sectionTitle:sections.achieve,
      points:[],
    },

    // [sections.oth]:{
    //   id:sections.oth,
    //   sTitle:sections.oth,
    //   detail:"",
    // },
    
  })

  useEffect(()=>{
    console.log(resumeInfo);
  },[resumeInfo])

  return (
    <div className={styles.container}>
        <p className={styles.heading}>CRAFT YOUR RESUME</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((it)=>(
                    <span
                        key={it}
                        style={{backgroundColor: it}}
                        className={`${styles.color} ${activeColor===it?styles.active:""}`}
                        onClick={()=>setActiveColor(it)}
                    />    
                ))}
            </div>
            <ReactToPrint
              trigger={() => {
                return(<button>Download <Download/></button>);
              }}
              content={() => resumeRef.current}
            />
        </div>
        <div className={styles.main}>
        
            <Editor sections={sections} information={resumeInfo} setInformation={setResumeInfo} />
            <Resume information={resumeInfo} sections = {sections} activeColor={activeColor} ref={resumeRef}/>
        </div>
    </div>
  )
}
