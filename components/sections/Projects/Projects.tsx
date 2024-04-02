import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MotionWrap from "@/components/MotionWrap";
import ProjectCard from "./ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Tools
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my featured tools that I created.
            </p>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:max-w-2xl lg:px-12">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-xl md:max-w-3xl"
            >
              <CarouselContent>
                  <CarouselItem
                    
                    className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div className="p-1">
                      <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/1qrdRJqjGaY"}
                        title={`Power Platform Developer Copilot`}
                        description={`Power Platform Developer Copilot is a  tool to assist Power Platform developers. It helps in creating PowerFX expresssions, create FetchXML based on natural language, explain FetchXML, convert SQL to FetchXML, get queryexpresssion for FetchXML, generate Liquid code and create PCF Controls, Dynamics 365 Plugins and custom workflows using a prompt.`}
                      />  
                    </div>
                   
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/xiWEX-AvlAk"}
                        title={`Power Platform Architect Copilot`}
                        description={`Power Platform Architect Copilot is a  tool  to assist Power Platform architects. It helps in creating Sequence diagrams, Use Case diagrams, System Context Diagrams. It can also help answer any Power Platform architecture questions based on Power Platform documentation.`}
                      />
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/lz2teCAlWog"}
                        title={`Power Platform Tester Copilot`}
                        description={`Power Platform Tester Copilot is a  tool I built to assist Power Platform Testers. It helps testers to generate manual test cases for a user story, automated testing using EasyRepro and FakeXrmEasy. It also helps in generating fictitious test data based on the requirement.
                        `}
                      />
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/kR72CRaBchI"}
                        title={`Power Platform AI Assistants Toolbox`}
                        description={`Power Platform AI Assistants Toolbox consists of following 18 AI Assistant tools for Power Platform:PowerFX Formula Assistant,PowerFX Explainer,PCF Controls Assistant,Dataverse Data Model Assistant,Test Case Assistant,REST API Automation Assistant,EasyRepro Automation Assistant,FakeXrmEasy  Automation Assistant,FetchXml Assistant,FetchXml to Query Expression Assistant
                        FetchXml to Dynamics 365 OData Conversion Assistant,FetchXml Explainer,SQL to FetchXml Assistant,Power Pages Liquid Assistant,JSON to C# Assistant,PowerApps and Dynamics 365 Client Script Assistant,Dynamics 365 Plugins and Workflows Assistant and Dataverse REST Builder Assistant.`}
                      />
                      </div>
                  </CarouselItem>
                     <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/VVzhWxz58Bw"}
                        title={`PCF Controls OpenAI GPT Tool`}
                        description={`This tool created using OpenAI custom GPT generates PCF controls based on a prompt and also provides guidance on PCF Controls.
                        Check it out at: https://chat.openai.com/g/g-AxRE2kU2u-pcf-controls-copilot`}
                      />
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/HQEWH5_IJ4o"}
                        title={`PowerApps Plugins and Workflows OpenAI GPT Tool`}
                        description={`This tool created using  OpenAI custom GPT is a PowerApps and Dynamics 365 coding expert, providing plugin and workflow code.
                        Check it out at: https://chat.openai.com/g/g-F35onEIMM-powerapps-plugins-and-workflows-copilot`}
                      />
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/wQd-8x_ncz0"}
                        title={`Dataverse Data Model OpenAI GPT Tool`}
                        description={`This OpenAI GPT tool creates Data Models, ERDs, and Dataverse code to create tables, with clear explanations. Developers can also  paste the table definition generated in Power Apps Copilot to create the tables.
                        Check it out at: https://chat.openai.com/g/g-3f80TaBjF-dataverse-data-model-copilot`}
                      />
                      </div>
                  </CarouselItem>              
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/pNpba06sLhg"}
                        title={`Power Platform Help OpenAI GPT Tool`}
                        description={`This tool created using OpenAI custom GPT is a Power Platform developer assistant with a focus on Microsoft resources and forums.
                        Check it out at: https://chat.openai.com/g/g-g9QPwkvcF-power-platform-help`}
                      />
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                  <div  className="p-1">
                        <ProjectCard
                        thumbnail={"https://www.youtube.com/embed/ynpvw37yzkc"}
                        title={`Automation Toolpak RPA Tool`}
                        description={`Automation Toolpak is a basic RPA tool that supports Web UI Automation.
                        Check it out at: https://chat.openai.com/g/g-g9QPwkvcF-power-platform-help`}
                      />
                      </div>
                  </CarouselItem>   
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
