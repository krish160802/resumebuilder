import React, { useEffect, useState } from 'react'
import styles from './Editor.module.css'
import Inputctrl from '../Inputcntrl/Inputctrl';
import {X} from 'react-feather';
import { Save } from 'react-feather';

export const Editor = (props) => {

  const sections = props.sections;
  const information = props.information;

  const [active,setActive] = useState(Object.keys(sections)[0]);

  const [activeChip,setActiveChip] = useState(0);

  const [activeInfo,setActiveInfo] = useState(information[sections[Object.keys(sections)[0]]]);

  const [secTitle,setSecTitle] = useState(sections[Object.keys(sections)[0]]);

  const [val,setVal] = useState({
    name: activeInfo?.detail?.name || "",
    email: activeInfo?.detail?.email || "",
    role: activeInfo?.detail?.role || "",
    phone: activeInfo?.detail?.phone || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.detail?.github || "",
  })

  const pointUpdate = (value,idx)=>{
    const tmp = {...val};
    if(!Array.isArray(tmp.points)){
      tmp.points = [];
    }
    tmp.points[idx] = value;
    setVal(tmp);
  }

  const submissionUpdate = ()=>{

    if(sections[active]===sections.info){
      const tmpDetails = {
        name:val.name,
        role:val.role,
        email:val.email,
        phone:val.phone,
        linkedin:val.linkedin,
        github:val.github,
        
      }

      props.setInformation((prv) =>({
        ...prv,
        [sections.info] :{
          ...prv[sections.info],
          detail:tmpDetails,
        },
      }))
    }

    if(sections[active]===sections.edu){
      const tmpDetail = {
        title:val.title,
        collegeName:val.collegeName,
        marksp:val.marksp,
        markscg:val.markscg,
        startDate:val.startDate,
        endDate:val.endDate,
      }

      const tmpDetails = [...information[sections.edu]?.details];
      tmpDetails[activeChip] = tmpDetail;

      props.setInformation((prv) =>({
        ...prv,
        [sections.edu] :{
          ...prv[sections.edu],
          details:tmpDetails,
          secTitle,
        },
      }))
    }

    if(sections[active]===sections.skl){
      const tmpDetail = {
        skill : val.skill
      }

      const tmpDetails = [...information[sections.skl]?.details];
      tmpDetails[activeChip] = tmpDetail;

      props.setInformation((prv) =>({
        ...prv,
        [sections.skl] :{
          ...prv[sections.skl],
          details:tmpDetails,
          secTitle,
        },
      }))
    }

    if(sections[active]===sections.prj){
      const tmpDetail = {
        title:val.title,
        prjlink:val.prjlink,
        points:val.points,
      }

      const tmpDetails = [...information[sections.prj]?.details];
      tmpDetails[activeChip] = tmpDetail;

      props.setInformation((prv) =>({
        ...prv,
        [sections.prj] :{
          ...prv[sections.prj],
          details:tmpDetails,
          secTitle,
        },
      }))
    }
    
    if(sections[active]===sections.wrkexp){
      const tmpDetail = {
        title:val.title,
        compname:val.compname,
        clink:val.clink,
        loc:val.loc,
        startDate:val.startDate,
        endDate:val.endDate,
        points:val.points,
      }

      const tmpDetails = [...information[sections.wrkexp]?.details];
      tmpDetails[activeChip] = tmpDetail;

      props.setInformation((prv) =>({
        ...prv,
        [sections.wrkexp]: {
          ...prv[sections.wrkexp],
          details:tmpDetails,
          secTitle,
        },
      }))
    }

    if(sections[active]===sections.achieve){
      const tmpPoints = val.points;

      props.setInformation((prv) =>({
        ...prv,
        [sections.achieve] :{
          ...prv[sections.achieve],
          points:tmpPoints,
        },
      }))
    }

  }

  const handleNew = ()=>{

    const details = activeInfo?.details;

    if(!details){
      return;
    }

    const lastDetail = details.slice(-1)[0];

    if(!Object.keys(lastDetail).length){
      return;
    }
    
    details?.push({});

    props.setInformation((prv) =>({
      ...prv,
      [sections[active]]: {
        ...information[sections[active]],
        details: details,
      }
    }))

    setActiveChip(details?.length-1);

  }

  const handleDelete = (index)=>{

    const details = activeInfo?.details
      ?[...activeInfo?.details]
      :"";

    if(!details){
      return;
    }  

    details.splice(index,1);

    props.setInformation((prv) =>({
      ...prv,
      [sections[active]]: {
        ...information[sections[active]],
        details: details,
      }
    }))

    setActiveChip((prv)=>(prv===index ? 0 : prv-1));
  }

  const infoBody = (
        <div className={styles.detail}>

            <div className={styles.row}>
                <Inputctrl 
                    label="Full Name"
                    placeholder="Enter your Full Name"
                    value = {val.name}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, name: e.target.value}))
                    }
                />
                <Inputctrl 
                    label="Role"
                    placeholder="Enter your Job Role"
                    value = {val.role}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, role: e.target.value}))
                    }
                />
            </div>


            <div className={styles.row}>    
                <Inputctrl 
                    label="E-mail"
                    placeholder="Enter your E-mail"
                    value = {val.email}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, email: e.target.value}))
                    }
                />     
                <Inputctrl 
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    value = {val.phone}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, phone: e.target.value}))
                    }
                />
            </div>

            <div className={styles.row}>      
                <Inputctrl 
                    label="LinkedIn Link"
                    placeholder="Enter link here"
                    value = {val.linkedin}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, linkedin: e.target.value}))
                    }
                />
                <Inputctrl 
                    label="Github Link"
                    placeholder="Enter link here"
                    value = {val.github}
                    onChange={(e)=>
                      setVal((prv)=>({...prv, github: e.target.value}))
                    }
                />
            </div>

        </div>
  );

  const eduBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Inputctrl
          label="Title"
          value = {val.title}
          placeholder="Enter class / degree"
          onChange={(e)=>
            setVal((prv)=>({...prv, title: e.target.value}))
          }
        />
      </div>

      <Inputctrl
        label="College/School Name"
        value = {val.collegeName}
        placeholder="Enter name of your college/school"
        onChange={(e)=>
          setVal((prv)=>({...prv, collegeName: e.target.value}))
        }
      />

      <div className={styles.row}>
        <Inputctrl
          label="Marks (in percent)"
          value = {val.marksp}
          placeholder="Enter Marks"
          onChange={(e)=>
            setVal((prv)=>({...prv, marksp: e.target.value}))
          }
        />
        <Inputctrl
          label="Marks (in cgpa)"
          value = {val.markscg}
          placeholder="Enter Marks"
          onChange={(e)=>
            setVal((prv)=>({...prv, markscg: e.target.value}))
          }
        />
      </div>  
      <div className={styles.row}>
        <Inputctrl
          label="Start Date"
          type="date"
          value = {val.startDate}
          placeholder="Enter start date of this education"
          onChange={(e)=>
            setVal((prv)=>({...prv, startDate: e.target.value}))
          }
        />
        <Inputctrl
          label="End Date"
          type="date"
          value = {val.endDate}
          placeholder="Enter end date of this education"
          onChange={(e)=>
            setVal((prv)=>({...prv, endDate: e.target.value}))
          }
        />
      </div>
    </div>
  );

  const wrkexpBody = (
        <div className={styles.detail}>
          <div className={styles.row}>
            <Inputctrl
              label="Title"
              placeholder="Enter Job title"
              value = {val.title}
              onChange={(e)=>
                setVal((prv)=>({...prv, title: e.target.value}))
              }
              
            />
            <Inputctrl
              label="Company Name"
              placeholder="Enter company name"
              value = {val.compname}
              onChange={(e)=>
                setVal((prv)=>({...prv, compname: e.target.value}))
              }
              
            />
          </div>
          <div className={styles.row}>
            <Inputctrl
              label="Certificate Link"
              placeholder="Enter certificate link"
              value = {val.clink}
              onChange={(e)=>
                setVal((prv)=>({...prv, clink: e.target.value}))
              }
              
            />
            <Inputctrl
              label="Location"
              placeholder="Enter Job location "
              value = {val.loc}
              onChange={(e)=>
                setVal((prv)=>({...prv, loc: e.target.value}))
              }
             
            />
          </div>
          <div className={styles.row}>
            <Inputctrl
              label="Start Date"
              type="date"
              placeholder="Enter start date"
              value = {val.sdate}
              onChange={(e)=>
                setVal((prv)=>({...prv, sdate: e.target.value}))
              }
              
            />
            <Inputctrl
              label="End Date"
              type="date"
              placeholder="Enter end date"
              value = {val.edate}
              onChange={(e)=>
                setVal((prv)=>({...prv, edate: e.target.value}))
              }
              
            />
          </div>
    
          <div className={styles.column}>
            <label>Enter work description</label>
            <Inputctrl
              placeholder="Line 1"
              value = {val.points ? val.points[0] : ""}
              onChange={(e)=>pointUpdate(e.target.value,0)}
            />
            <Inputctrl
              placeholder="Line 2"
              value = {val.points ? val.points[1] : ""}
              onChange={(e)=>pointUpdate(e.target.value,1)}
            />
            <Inputctrl
              placeholder="Line 3"
              value = {val.points ? val.points[2] : ""}
              onChange={(e)=>pointUpdate(e.target.value,2)}
            />
          </div>
        </div>
  );
      
  const prjBody = (
        <div className={styles.detail}>
          <div className={styles.row}>
            <Inputctrl
              label="Title"
              value = {val.title}
              placeholder="Enter Project title"
              onChange={(e)=>
                setVal((prv)=>({...prv, title: e.target.value}))
              }
            />
          </div>
          <div className={styles.row}>
            <Inputctrl
              label="Project Link"
              value = {val.prjlink}
              placeholder="Enter deployed link"
              onChange={(e)=>
                setVal((prv)=>({...prv, prjlink: e.target.value}))
              }
            />
          </div>
          <div className={styles.column}>
            <label>Project description</label>
            <Inputctrl
                placeholder="Line 1"
                value = {val.points ? val.points[0] : ""}
                onChange={(e)=>pointUpdate(e.target.value,0)}
            />
            <Inputctrl
                placeholder="Line 2"
                value = {val.points ? val.points[1] : ""}
                onChange={(e)=>pointUpdate(e.target.value,1)}
            />
            <Inputctrl
                placeholder="Line 3"
                value = {val.points ? val.points[2] : ""}
                onChange={(e)=>pointUpdate(e.target.value,2)}
            />
          </div>
        </div>
  );

  const achieveBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <Inputctrl
          placeholder="Line 1"
          value={val.points ? val.points[0] : ""}
          onChange={(e) => pointUpdate(e.target.value, 0)}
        />
        <Inputctrl
          placeholder="Line 2"
          value={val.points ? val.points[1] : ""}
          onChange={(e) => pointUpdate(e.target.value, 1)}
        />
        <Inputctrl
          placeholder="Line 3"
          value={val.points ? val.points[2] : ""}
          onChange={(e) => pointUpdate(e.target.value, 2)}
        />
        <Inputctrl
          placeholder="Line 4"
          value={val.points ? val.points[3] : ""}
          onChange={(e) => pointUpdate(e.target.value, 3)}
        />
      </div>
    </div>
  );

  const sklBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        
        <Inputctrl
          label="Add Your Skill"
          value = {val.skill}
          placeholder="Add Skill"
          onChange={(e)=>
            setVal((prv)=>({...prv, skill: e.target.value}))
          }
        />
      </div>
    </div>
  );
       
  const genBody = ()=>{
    if(sections[active]===sections.info){
      return infoBody;
    }

    if(sections[active]===sections.wrkexp){
      return wrkexpBody;
    }

    if(sections[active]===sections.prj){
      return prjBody;
    }
    
    if(sections[active]===sections.edu){
      return eduBody;
    }

    if(sections[active]===sections.skl){
      return sklBody;
    }

    if(sections[active]===sections.achieve){
      return achieveBody;
    }

  }

  useEffect( ()=>{
    const ainfo = information[sections[active]];
    setActiveInfo(ainfo);
    setSecTitle(sections[active]);
    setActiveChip(0);
    setVal({
      
      name: activeInfo?.detail?.name || "",

      role: activeInfo?.detail?.role || "",
      
      email: activeInfo?.detail?.email || "",
      
      phone: activeInfo?.detail?.phone || "",
      
      linkedin: activeInfo?.detail?.linkedin || "",
      
      github: activeInfo?.detail?.github || "",

      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      
      collegeName: activeInfo?.details
        ? activeInfo.details[0]?.collegeName || ""
        : "",

      marksp: activeInfo?.details
        ? activeInfo.details[0]?.marksp || ""
        : "",

      markscg: activeInfo?.details
        ? activeInfo.details[0]?.markscg || ""
        : "",

      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      
      endDate: activeInfo?.details 
        ? activeInfo.details[0]?.endDate || ""
        : "",      

      prjlink: activeInfo?.details ? activeInfo.details[0]?.prjlink || "" : "",

      skill: activeInfo?.details ? activeInfo.details[0]?.skill || "" : "",

      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      
      clink: activeInfo?.details
        ? activeInfo.details[0]?.clink || "": "",
      
      compname: activeInfo?.details
        ? activeInfo.details[0]?.compname || ""
        : "",
      
      loc: activeInfo?.details
        ? activeInfo.details[0]?.loc || ""
        : "",
      
    });

  },[active])

  useEffect( ()=>{
    setActiveInfo(information[sections[active]]);
  },[information])

  useEffect( ()=>{
    const details = activeInfo?.details;

    if(!details){
      return;
    }

    const aInfo = information[sections[active]];

    setVal({
      title: aInfo.details[activeChip]?.title || "",

      collegeName: aInfo.details[activeChip]?.collegeName || "",

      marksp: aInfo.details[activeChip]?.marksp || "",

      markscg: aInfo.details[activeChip]?.markscg || "",

      startDate: aInfo.details[activeChip]?.startDate || "",
      
      endDate: aInfo.details[activeChip]?.endDate || "",  

      skill: aInfo.details[activeChip]?.skill || "",

      prjlink: aInfo.details[activeChip]?.prjLink || "",

      points: aInfo.details[activeChip]?.points || "",
      
      clink: aInfo.details[activeChip]?.clink || "",
      
      compname: aInfo.details[activeChip]?.compname || "",
      
      loc: aInfo.details[activeChip]?.loc || "",
    })

  },[activeChip])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map((key)=>(
                <div 
                    className={`${styles.section} ${active === key ? styles.active : "" }`}
                    key={key}
                    onClick={()=>setActive(key)}
                  >
                  {sections[key]}
                </div>
            ))}
        </div>

        <div className={styles.body}>
            <Inputctrl 
              label="Title" 
              placeholder="Enter Section Title" 
              value={secTitle}
              onChange={(e)=>setSecTitle(e.target.value)}  
            />

            <div className={styles.chips}>
            {activeInfo?.details
              ? activeInfo?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeChip === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveChip(index)}
                >
                  <p>
                    {sections[active]} {index + 1}
                  </p>
                  <X onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index)}
                      
                  }/>
                </div>
              ))
            : ""}

          {activeInfo?.details && 
            activeInfo?.details?.length>0 ? (
              <div className={styles.new} onClick={handleNew}>+New</div>
            ) : (
              ""
            )
          }  
        </div>
            {genBody()}

            <button onClick={submissionUpdate}>Save <Save/></button>
        </div>
    </div>
  )
}
