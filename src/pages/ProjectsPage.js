import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

export const ProjectsPage = () => {
    return(
        <div className="bodyDiv">
            <h1>Projects</h1>
            <Accordion allowZeroExpanded = 'true'>
                {/* React Website */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            React Website
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            This website was created as an excerise in learning a web development framework. React was chosen over competitors such as react due to its high accessible and quick results.
                            This excerise was necessary as through out my time at university my knowledge of web development languages/techniques was based around HTML, CSS, JS and PHP.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Green Line Test */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Green Line Test (Coming Soon)
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            This project was based upon a twitter trend or meme that looked a 
                            photo of a couple and tried to discern which member of the couple believed 
                            that they were settling in the relationship based upon the body language. 
                            This was created with the use of Python as a learning exercise as it was one
                            of the only mainstream languages that I did not learn through out the course 
                            of my degree.
                        </p>

                        <a href="https://github.com/JacksonSemmens/GreenLineTest/tree/main">GitHub Code</a>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Naughts and Crosses */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Naughts and Crosses (Coming Soon)
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
                            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
                            dolor ut sequi minus iste? Quas?
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                {/* Naughts and Crosses */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            JavaScript Auto List Item (Coming Soon)
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
                            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
                            dolor ut sequi minus iste? Quas?
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}