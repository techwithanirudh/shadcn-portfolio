import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MotionWrap from "@/components/MotionWrap";

function Projects() {
  return (
    <MotionWrap
      className="w-full py-12 md:py-24 lg:py-32 border-t"
      id="projects"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my featured projects.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Project Title One</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project. It is a very cool and
                    interesting project that I worked on.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center p-4 md:p-6">
                <Button className="ml-auto" variant="outline">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Project Title Two</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project. It is a very cool and
                    interesting project that I worked on.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center p-4 md:p-6">
                <Button className="ml-auto" variant="outline">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Project Title Three</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project. It is a very cool and
                    interesting project that I worked on.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center p-4 md:p-6">
                <Button className="ml-auto" variant="outline">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Project Title Four</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project. It is a very cool and
                    interesting project that I worked on.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center p-4 md:p-6">
                <Button className="ml-auto" variant="outline">
                  View
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
