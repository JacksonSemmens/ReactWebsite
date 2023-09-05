import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

export const AboutMePage = () => {
    return (
        <div className="bodyDiv">
            <h1>About Me</h1>
            <table>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td><a href = "mailto: jacksonjsemmens@gmail.com">Send Email</a></td>
                </tr>
                <tr>
                    <td><strong>Phone:</strong></td>
                    <td>12354950135</td>
                </tr>
                <tr>
                    <td><strong>Location:</strong></td>
                    <td>Hawthorn, Victoria, Australia</td>
                </tr>
                <tr>
                    <td><strong>Citizenship:</strong></td>
                    <td>Australian</td>
                </tr>
            </table>
            <p>
                Recently graduated from Swinburne University of Technology with a Bachelor of Computer Science,
                majoring in Software Design; eager to learn. A Software Developer inclined towards web or back end
                development. Well versed in C++, C#, Java, JavaScript, PHP. Has experience creating LAMP based
                applications, and porting them to AWS servers.
            </p>
            <Accordion allowMultipleExpanded allowZeroExpanded>
                {/* Skills List */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Skills
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul>
                            <li>Project Management</li>
                            <li>Critical Thinking</li>
                            <li>Complex Problem Solving</li>
                            <li>Creative Design</li>
                            <li>Innovative</li>
                            <li>Eager to Learn</li>
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Languages List */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Languages
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>React</li>
                            <li>Ruby</li>
                            <li>SQL</li>
                            <li>MySQL</li>
                            <li>BQL (Business Query Language)</li>
                            <li>Python</li>
                        </ul>
                        <p>Have previous experience with but I am not certified in:</p>
                        <ul>
                            <li>AWS (Amazon Web Services)</li>
                            <li>CISCO Networking</li>
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Experience List */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Experience
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <h1>Acacia Consulting Services (Dec 2018 - May 2023)</h1>
                            <h2>Software Developer</h2>
                            <p>While at Acacia I completed a variety of work including but not limited to:</p>
                            <ul>
                                <li>General administrative work and data cleansing.</li>
                                <li>Created API testing tools with the use of Visual Basic.</li>
                                <li>Created bridging software to allow for data to extracted from SimPRO to WageEasy with the
                                    use of the SimPRO API, data was then formatted into a WTC file that could then be exported into WageEasy.</li>
                                <li>Created a data validation tool used to ensure that data could be imported into MYOB Advanced.</li>
                            </ul>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Education List */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Education
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <h2>University - Swinburne University of Technology (2019-2022)</h2>
                        <h3>Bachelor of Computer Science (Software Design), minoring in Engineering</h3>
                        <p>
                            During my tenure at Swinburne, majoring in Software Design and minoring in Engineering, 
                            I cultivated proficiency in languages like C++, C#, Ruby, JavaScript, Java, and PHP. I 
                            gained hands-on expertise in SQL, MySQL, AWS services, and CISCO Networking Services. I 
                            practiced my leadership skills as I successfully led various group projects.
                        </p>
                        <p>
                            My final year capstone group project, LIDA an automated composting system controlled by 
                            IOT devices, was the recipient of Swinburne's 'Design for Change' award.
                        </p>
                        <a href="https://www.swinburne.edu.au/news/2022/06/automated-composting-system-wins-swinburnes-design-for-change-competition/">Automated composting system wins Swinburne’s ‘Design for Change’ competition</a>


                        <h2>Highschool - Trinity Grammar School, Kew (2013-2018)</h2>
                    </AccordionItemPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}