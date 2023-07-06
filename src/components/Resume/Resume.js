import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './Resume.module.css'
import { AtSign,Phone, GitHub, Linkedin, Calendar, Paperclip, MapPin, Edit } from 'react-feather';

const Resume = forwardRef((props,ref) => {

  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const infor = {
    info : information[sections.info],
    edu : information[sections.edu],
    prj: information[sections.prj],
    wrkexp: information[sections.wrkexp],
    achieve: information[sections.achieve],
    skl: information[sections.skl]

  }

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const[columns,setColumns] = useState([[] , []]);

  const sectionDiv = {
    [sections.edu] : (
      <div key={"edu"} className={`${styles.section} ${
        infor.edu?.sectionTitle ? "" : styles.hidden
      }`}>
      <div className={styles.sectionTitle}>{infor.edu?.sectionTitle}</div>
      <div className={styles.content}>
        {infor.edu?.details?.map((item) => (
          <div className={styles.item}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )} 
            
            {item.collegeName ? (
              <p className={styles.subTitle}>{item.collegeName}</p>
            ) : (
              <span />
            )}

            {item.marksp ? (
              <p className={styles.marks}>{item.marksp}</p>
            ) : (
              <span />
            )}

            {item.markscg ? (
              <p className={styles.marks}>{item.markscg}</p>
            ) : (
              <span />
            )}
          
            {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
            ) : (
                <div />
            )}

          </div>
        ))}  
      </div>
    </div>
    ),

    [sections.skl] : (
      <div key={"skl"} className={`${styles.section} ${
        infor.skl?.sectionTitle ? "" : styles.hidden
      }`}>

      {/* .trim().length!==0 */}

      <div className={styles.sectionTitle}>{infor.skl?.sectionTitle}</div>
      <div className={styles.content}>
        {infor.skl?.details?.map((item) => (
          <div className={styles.item}>
            
            {item.skill ? (
                <a className={styles.link}>
                  <Edit />
                  {item.skill}
                </a>
            ) : (
                <span />
            )}

            
          </div>
        ))}  
      </div>
    </div>
    ),

    [sections.prj] : (
      <div key={"prj"} className={`${styles.section} ${
        infor.prj?.sectionTitle ? "" : styles.hidden
      }`}>

      {/* .trim().length!==0 */}

      <div className={styles.sectionTitle}>{infor.prj?.sectionTitle}</div>
      <div className={styles.content}>
        {infor.prj?.details?.map((item) => (
          <div className={styles.item}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
            
            {item.prjlink ? (
                <a className={styles.link} href={item.prjlink}>
                  <Paperclip />
                  {item.prjlink}
                </a>
            ) : (
                <span />
            )}

            {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
            ) : (
                <span />
            )}
            
          </div>
        ))}  
      </div>
    </div>
    ),

    [sections.wrkexp] : (
      <div key={"wrkexp"} className={`${styles.section} ${
        infor.wrkexp?.sectionTitle ? "" : styles.hidden
      }`}>
      <div className={styles.sectionTitle}>{infor.wrkexp?.sectionTitle}</div>
      <div className={styles.content}>
        {infor.wrkexp?.details?.map((item) => (
          <div className={styles.item}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
            
            {item.compname ? (
              <p className={styles.subTitle}>{item.compname}</p>
            ) : (
              <span />
            )}

            {item.clink ? (
                <a className={styles.link} href={item.clink}>
                  <Paperclip />
                  {item.clink}
                </a>
            ) : (
                <span />
            )}

            {item.loc ? (
                <a className={styles.date}>
                  <MapPin />
                  {item.loc}
                </a>
            ) : (
                <span />
            )}
            
            {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
            ) : (
                <div />
            )}

            {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
            ) : (
                <span />
            )}
            
          </div>
        ))}  
      </div>
    </div>
    ),

    [sections.achieve] : (
      <div key={"achieve"} className={`${styles.section} ${
        infor.achieve?.sectionTitle ? "" : styles.hidden
      }`}>
      <div className={styles.sectionTitle}>{infor.achieve?.sectionTitle}</div>
      <div className={styles.content}>
        {infor.achieve?.points?.length > 0 ? (
                <ul className={styles.numbered}>
                  {infor.achieve?.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
          ) : (
                <span />
          )}
      </div>
    </div>
    ),

  };

  
  // const prjSection = (
  //   <div key={"project"} className={`${styles.section} ${styles.prj}`}>
  //     <div className={styles.sectionTitle}>Projects</div>
  //     <div className={styles.content}>
  //       <div className={styles.item}>
  //         <p className={styles.title}>PRJ 1</p>
  //         <a className={styles.link}>
  //           <Paperclip /> https/www.prj.com
  //         </a>
  //         <ul className={styles.points}>
  //           <li>abc 1</li>
  //           <li>abc 2</li>
  //           <li>abc 3</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const wrkexpSection = (
  //   <div key={"workexp"} className={`${styles.section} ${styles.wrkexp}`}>
  //     <div className={styles.sectionTitle}>Work Experience</div>
  //     <div className={styles.content}> 
  //       <div className={styles.item}>
  //         <p className={styles.title}>Full Stack Developer</p>
  //         <p className={styles.subTitle}>Company Name</p>
  //         <a className={styles.link}> 
  //           <Paperclip /> https//krish.com/.in
  //         </a>
  //         <div className={styles.date}>
  //           <Calendar /> 12/07/22 - 16/06/23
  //         </div>
  //         <p className={styles.location}>
  //           <MapPin /> Remote
  //         </p>
  //         <ul className={styles.points}>
  //           <li className={styles.point}>point 1</li>
  //           <li className={styles.point}>point 2</li>
  //           <li className={styles.point}>point 3</li>    
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const achieveSection = (
  //   <div key={"achievement"} className={`${styles.section} ${styles.achieve}`}>
  //     <div className={styles.sectionTitle}>Achievements</div>
  //     <div className={styles.content}>
  //       <ul className={styles.numbered}>
  //         <li>Ach1</li>
  //         <li>Ach2</li>
  //         <li>Ach3</li>
  //       </ul>
  //     </div>
  //   </div>
  // );

  useEffect(()=>{
    setColumns([
      [
        sections.edu,
        sections.skl,
        sections.prj
      ],
      [
        sections.wrkexp,
        sections.achieve
      ]
    ])
  },[])

  useEffect(()=>{
    const container = containerRef.current;

    if(!props.activeColor || !container){
      return;
    }

    container.style.setProperty("--color",props.activeColor);

  },[props.activeColor])
  
  return (
    <div ref={ref}>
    <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
        
          <p className={styles.heading}>{infor.info?.detail?.name}</p>

          <p className={styles.subHeading}>{infor.info?.detail?.role}</p>

          <div className={styles.links}>
            {infor.info?.detail?.email && (
              <a className={styles.link} type="email">
                <AtSign /> {infor.info?.detail?.email}
              </a>
            )}

            {infor.info?.detail?.phone && (
              <a className={styles.link} type="number">
                <Phone /> {infor.info?.detail?.phone}
              </a>
            )}
           
            {infor.info?.detail?.github && (
              <a className={styles.link} type="text">
                <GitHub /> {infor.info?.detail?.github}
              </a>
            )}

            {infor.info?.detail?.linkedin && (
              <a className={styles.link} type="text">
                <Linkedin /> {infor.info?.detail?.linkedin}
              </a>
            )}  
          
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
          {
            columns[0].map(item=>sectionDiv[item])
          }
          </div>

          <div className={styles.col2}>
          {
            columns[1].map(item=>sectionDiv[item])
          }
          </div>
        </div>
    </div>
    </div>
  )
});

export default Resume;