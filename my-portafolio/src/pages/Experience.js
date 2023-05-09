import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SlGraduation } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2010"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SlGraduation />}
        >
          <h3 className="vertical-timeline-element-title">
            I.E.S. Vista Alegre
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associate's Degree
          </h4>

          <p> Web Application Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SlGraduation />}
        >
          <h3 className="vertical-timeline-element-title">
            Brigham Young University - Idaho
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Software Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2013"
          iconStyle={{ background: "#eb3d97", color: "#fff" }}
          icon={<SlBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - BPR
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Madrid, Spain
          </h4>
          <p>Developed in C#.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#eb3d97", color: "#fff" }}
          icon={<SlBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Teacher Assistant - BYU-Idaho
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rexburg, Idaho
          </h4>
          <p>
            I was a teacher assistant for different classes that used HTML, CSS, Javascript, PHP, C++ and Project Management.
          </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#eb3d97", color: "#fff" }}
          icon={<SlBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Webmaster - BYU-Idaho
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rexburg, Idaho
          </h4>
          <p>
            I worked with HTML, CSS and PHP. I collaborated with other students on the new UI for the Housing and Living website for the school. I used PHP combine Adobe Acrobat PDF to generate PDF reports for the different approved housings.
          </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#eb3d97", color: "#fff" }}
          icon={<SlBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Safety Provisions Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rexburg, Idaho
          </h4>
          <p>
            I designed and programed various full stack applications using the MERN Stack. I've also Improved, updated, and maintained the company’s different Wordpress CMS. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;